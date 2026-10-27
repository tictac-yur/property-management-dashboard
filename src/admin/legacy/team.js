/* ══════════════════════════════════════════════
   TEAM & ACCESS — who can open this dashboard, and what they can do.
   viewer = look only · manager = add / change records · admin = also manages this list
══════════════════════════════════════════════ */
let TEAM=[];

document.getElementById('sb-user').textContent=PM.me.email+' · '+PM.me.role;
if(PM.me.role==='viewer')document.body.classList.add('read-only');
if(PM.me.role==='admin'){
  PM.watch('users:list',{},v=>{
    TEAM=v||[];
    const n=TEAM.filter(u=>!u.role).length;
    const nb=document.getElementById('nb-team');nb.textContent=n;nb.style.display=n?'inline':'none';
    const a=document.querySelector('.nav-item.active');if(a&&a.dataset.t==='team')renderTeam();
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
  if(!TEAM.length){tbody.innerHTML='<tr class="empty"><td colspan="3">No users yet.</td></tr>';return;}
  tbody.innerHTML=TEAM.map(u=>{
    const joined=fmtD(new Date(u.joined).toISOString().slice(0,10));
    const me=u.email===PM.me.email;
    if(u.locked)return`<tr><td><strong>${escHtml(u.email)}</strong>${me?' <span class="badge b-blue">You</span>':''}</td><td>${joined}</td><td><span class="badge b-green">Admin</span> <span style="font-size:12px;color:var(--muted)">set by ADMIN_EMAILS</span></td></tr>`;
    const opts=[['','No access'],['viewer','Viewer — look only'],['manager','Manager — can edit'],['admin','Admin']].map(([v,l])=>`<option value="${v}"${(u.role||'')===v?' selected':''}>${l}</option>`).join('');
    const waiting=!u.role?' <span class="badge b-orange">Waiting</span>':'';
    return`<tr><td><strong>${escHtml(u.email)}</strong>${me?' <span class="badge b-blue">You</span>':''}${waiting}</td><td>${joined}</td><td><select class="fld" ${me?'disabled':''} onchange="setRole('${u._id}',this.value)">${opts}</select></td></tr>`;
  }).join('');
}
