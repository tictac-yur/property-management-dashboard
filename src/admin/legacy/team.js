/* ══════════════════════════════════════════════
   TEAM & ACCESS — who can open this dashboard, and what they can do.
   viewer = look only · manager = add / change records · admin = also manages this list
══════════════════════════════════════════════ */
let TEAM=[];

document.getElementById('sb-user-email').textContent=PM.me.email;
document.getElementById('sb-user-role').textContent=PM.me.role;
document.getElementById('sb-avatar').textContent=(PM.me.email||'?').slice(0,1);
document.getElementById('sb-avatar').style.background=avatarColor(PM.me.email);
if(PM.me.role==='viewer')document.body.classList.add('read-only');
if(PM.me.role==='admin'){
  PM.watch('users:list',{},v=>{
    TEAM=v||[];
    const n=TEAM.filter(u=>!u.role).length;
    const nb=document.getElementById('nb-team');nb.textContent=n;nb.style.display=n?'inline-flex':'none';
    if(activePanel()==='team')renderTeam();
  });
} else {
  document.querySelectorAll('.admin-only').forEach(el=>el.style.display='none');
}

async function setRole(userId,role){
  try{await PM.mutation('users:setRole',{userId,role:role||null});toast('Access updated','success');}
  catch(e){toast(String(e.data||e.message||e).replace(/^.*Uncaught Error: /,'').split('\n')[0],'error');renderTeam();}
}

function renderTeam(){
  const tbody=document.getElementById('team-body');
  if(!TEAM.length){tbody.innerHTML='<tr class="empty"><td colspan="3">No accounts yet.</td></tr>';return;}
  const sorted=TEAM.slice().sort((a,b)=>(!!a.role)-(!!b.role)||a.email.localeCompare(b.email));
  tbody.innerHTML=sorted.map(u=>{
    const joined=fmtD(new Date(u.joined).toISOString().slice(0,10));
    const me=u.email===PM.me.email;
    const who=`<div style="display:flex;gap:10px;align-items:center">${avatar(u.email)}<div><div class="cell-main">${escHtml(u.email)}${me?' <span class="badge b-blue plain">You</span>':''}${!u.role?' <span class="badge b-orange">Waiting</span>':''}</div></div></div>`;
    if(u.locked)return`<tr><td>${who}</td><td>${joined}</td><td><span class="badge b-green">Admin</span> <span class="cell-sub">set by ADMIN_EMAILS</span></td></tr>`;
    const opts=[['','No access'],['viewer','Viewer · look only'],['manager','Manager · can edit'],['admin','Admin']].map(([v,l])=>`<option value="${v}"${(u.role||'')===v?' selected':''}>${l}</option>`).join('');
    return`<tr><td>${who}</td><td>${joined}</td><td><select class="fld" ${me?'disabled':''} onchange="setRole('${u._id}',this.value)" aria-label="Access for ${escHtml(u.email)}">${opts}</select></td></tr>`;
  }).join('');
}
