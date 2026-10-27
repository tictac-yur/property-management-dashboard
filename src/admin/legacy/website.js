/* ══════════════════════════════════════════════
   WEBSITE ADMIN — listings, site content, inquiries, team
   These read/write their own Convex tables (not the portfolio records),
   because they are what the public website shows.
══════════════════════════════════════════════ */
const WEB={listings:[],content:null,inquiries:[],team:[]};

function webActive(t){const a=document.querySelector('.nav-item.active');return a&&a.dataset.t===t;}
PM.watch('listings:list',{},v=>{WEB.listings=v||[];if(webActive('listings'))renderListings();});
PM.watch('inquiries:list',{},v=>{
  WEB.inquiries=v||[];
  const n=WEB.inquiries.filter(i=>i.status==='New').length;
  const nb=document.getElementById('nb-inq');nb.textContent=n;nb.style.display=n?'inline':'none';
  if(webActive('inq'))renderInquiries();
});
if(PM.me.role==='admin'){
  PM.watch('users:list',{},v=>{WEB.team=v||[];if(webActive('team'))renderTeam();});
} else {
  document.querySelectorAll('.admin-only').forEach(el=>el.style.display='none');
}
document.getElementById('sb-user').textContent=PM.me.email+' · '+PM.me.role;

async function webCall(name,args,okMsg){
  try{const r=await PM.mutation(name,args);if(okMsg)toast(okMsg,'success');return r;}
  catch(e){toast((e.data||e.message||'Something went wrong').toString().replace(/^.*Uncaught Error: /,'').split('\n')[0],'error');throw e;}
}

/* ══ LISTINGS ══ */
const AVAIL_BADGE={'Available':'b-green','Coming Soon':'b-yellow','Rented':'b-gray'};
function renderListings(){
  const tbody=document.getElementById('listings-body');
  const list=WEB.listings;
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="9">No listings yet — add one, or draft them from your properties.</td></tr>';return;}
  tbody.innerHTML=list.map(l=>{
    const thumb=l.photoUrls[0]?`<img class="lst-thumb" src="${l.photoUrls[0]}" alt="">`:'<div class="lst-thumb lst-thumb-empty"></div>';
    return`<tr>
      <td>${thumb}</td>
      <td><strong>${escHtml(l.title)}</strong><div style="font-size:10.5px;color:var(--muted)">${escHtml(l.location||'')}</div></td>
      <td>${l.propId?`<strong style="color:var(--accent)">${escHtml(l.propId)}</strong>`:'—'}</td>
      <td>${escHtml(l.type)}</td>
      <td>${fmt(l.rent)}</td>
      <td>${l.sqm?l.sqm+' sqm':'—'}</td>
      <td><span class="badge ${AVAIL_BADGE[l.availability]||'b-gray'}">${l.availability}</span></td>
      <td><button class="pub-toggle ${l.published?'on':''}" onclick="toggleListingPublished('${l._id}',${!l.published})" title="Show / hide on the website"><span></span>${l.published?'On':'Off'}</button></td>
      <td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openListingModal('${l._id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="deleteListing('${l._id}',this)">Del</button></td>
    </tr>`;
  }).join('');
}
function toggleListingPublished(id,published){
  webCall('listings:setPublished',{id,published},published?'Listing is now live on the website':'Listing hidden from the website');
}
function deleteListing(id,btn){
  if(btn.dataset.confirm!=='pending'){
    btn.dataset.confirm='pending';btn.textContent='Sure?';
    setTimeout(()=>{btn.dataset.confirm='';btn.textContent='Del';},3000);
    return;
  }
  webCall('listings:remove',{id},'Listing deleted');
}
async function listingsFromProperties(){
  const have=new Set(WEB.listings.map(l=>l.propId).filter(Boolean));
  const props=getData('properties').filter(p=>!have.has(p.id));
  if(!props.length){toast('Every property already has a listing','success');return;}
  let order=WEB.listings.length;
  for(const p of props){
    await webCall('listings:save',{
      title:p.name,propId:p.id,type:p.type||'Condo',location:'',rent:+p.rent||0,sqm:+p.sqm||0,
      bedrooms:1,bathrooms:1,availability:p.status==='Vacant'?'Available':'Rented',
      description:'',features:[],photos:[],published:false,sortOrder:order++
    });
  }
  toast('Drafted '+props.length+' listing(s) — edit and switch them On to publish','success');
}

let _lstPhotos=[]; // [{id, url}]
function openListingModal(id){
  const l=id?WEB.listings.find(x=>x._id===id):null;
  _lstPhotos=l?l.photos.map((pid,i)=>({id:pid,url:l.photoUrls[i]})):[];
  const v=(k,d='')=>l?(l[k]??d):d;
  const propOpts='<option value="">— none —</option>'+getData('properties').map(p=>`<option value="${p.id}"${v('propId')===p.id?' selected':''}>${p.id} · ${escHtml(p.name)}</option>`).join('');
  const sel=(id,opts,cur)=>`<select id="${id}">${opts.map(o=>`<option${o===cur?' selected':''}>${o}</option>`).join('')}</select>`;
  document.getElementById('modal-title').textContent=(l?'Edit':'Add')+' Listing';
  document.getElementById('modal-body').innerHTML=`<div class="fgrid">
    <div class="fg span2"><label>Title (shown on website)</label><input id="lf_title" value="${escHtml(String(v('title')))}" placeholder="e.g. Cozy 1-bed near MRT Pak Kret"></div>
    <div class="fg"><label>Linked property</label><select id="lf_propId" onchange="listingPrefill()">${propOpts}</select></div>
    <div class="fg"><label>Type</label>${sel('lf_type',['Condo','Loft','House','Villa','Townhouse','Studio','Apartment'],v('type','Condo'))}</div>
    <div class="fg span2"><label>Location / area (public)</label><input id="lf_location" value="${escHtml(String(v('location')))}" placeholder="e.g. Chaengwatthana, Pak Kret — 5 min to MRT"></div>
    <div class="fg"><label>Monthly Rent (THB)</label><input id="lf_rent" type="number" value="${v('rent',0)}"></div>
    <div class="fg"><label>Size (sqm)</label><input id="lf_sqm" type="number" value="${v('sqm',0)}"></div>
    <div class="fg"><label>Bedrooms</label><input id="lf_bedrooms" type="number" value="${v('bedrooms',1)}"></div>
    <div class="fg"><label>Bathrooms</label><input id="lf_bathrooms" type="number" value="${v('bathrooms',1)}"></div>
    <div class="fg"><label>Availability</label>${sel('lf_availability',['Available','Coming Soon','Rented'],v('availability','Available'))}</div>
    <div class="fg"><label>Sort order (low = first)</label><input id="lf_sortOrder" type="number" value="${v('sortOrder',WEB.listings.length)}"></div>
    <div class="fg span2"><label>Description</label><textarea id="lf_description" rows="4" placeholder="What makes this unit nice to live in?">${escHtml(String(v('description')))}</textarea></div>
    <div class="fg span2"><label>Features (comma separated)</label><input id="lf_features" value="${escHtml((l?l.features:[]).join(', '))}" placeholder="Fully furnished, Washing machine, Pool, Gym, Parking"></div>
    <div class="fg span2"><label>Photos</label><div class="lst-photos" id="lf_photos"></div>
      <button type="button" class="btn btn-secondary btn-sm" style="margin-top:8px" onclick="document.getElementById('lf_upload').click()">+ Add photos</button>
      <input type="file" id="lf_upload" accept="image/*" multiple style="display:none" onchange="uploadListingPhotos(this)"></div>
    <label class="fg span2" style="flex-direction:row;align-items:center;gap:9px;cursor:pointer"><input type="checkbox" id="lf_published" ${v('published',false)?'checked':''} style="width:15px;height:15px;accent-color:var(--accent)"> Show on public website</label>
  </div>`;
  renderListingPhotos();
  const btn=document.getElementById('modal-save');
  btn.textContent='Save Listing';
  btn.onclick=()=>saveListing(id);
  document.getElementById('modal-overlay').classList.add('open');
}
function listingPrefill(){
  const p=getData('properties').find(x=>x.id===document.getElementById('lf_propId').value);
  if(!p)return;
  const set=(id,val)=>{const el=document.getElementById(id);if(el&&(!el.value||el.value==='0'))el.value=val;};
  set('lf_title',p.name);set('lf_rent',+p.rent||0);set('lf_sqm',+p.sqm||0);
  document.getElementById('lf_type').value=p.type||'Condo';
}
function renderListingPhotos(){
  const host=document.getElementById('lf_photos'); if(!host)return;
  host.innerHTML=_lstPhotos.length?_lstPhotos.map((p,i)=>`<div class="lst-photo"><img src="${p.url||''}" alt="">${i===0?'<span class="lst-cover">Cover</span>':`<button type="button" class="lst-photo-btn lst-left" onclick="moveListingPhoto(${i})" title="Make cover">★</button>`}<button type="button" class="lst-photo-btn" onclick="removeListingPhoto(${i})" title="Remove">✕</button></div>`).join(''):'<div style="font-size:11px;color:var(--muted)">No photos yet. The first photo is the cover.</div>';
}
function moveListingPhoto(i){const [p]=_lstPhotos.splice(i,1);_lstPhotos.unshift(p);renderListingPhotos();}
function removeListingPhoto(i){_lstPhotos.splice(i,1);renderListingPhotos();}
async function uploadListingPhotos(input){
  const files=[...input.files]; input.value='';
  for(const f of files){
    if(f.size>10*1024*1024){toast(f.name+' is over 10 MB','error');continue;}
    try{
      const id=await PM.uploadRaw(f);
      _lstPhotos.push({id,url:URL.createObjectURL(f)});
      renderListingPhotos();
    }catch(e){toast('Upload failed — '+f.name,'error');}
  }
}
async function saveListing(id){
  const g=k=>document.getElementById('lf_'+k);
  const title=g('title').value.trim();
  if(!title){toast('Title is required.','error');return;}
  const args={
    title,
    propId:g('propId').value||undefined,
    type:g('type').value,
    location:g('location').value.trim(),
    rent:+g('rent').value||0,
    sqm:+g('sqm').value||0,
    bedrooms:+g('bedrooms').value||0,
    bathrooms:+g('bathrooms').value||0,
    availability:g('availability').value,
    description:g('description').value.trim(),
    features:g('features').value.split(',').map(s=>s.trim()).filter(Boolean),
    photos:_lstPhotos.map(p=>p.id),
    published:g('published').checked,
    sortOrder:+g('sortOrder').value||0,
  };
  if(id)args.id=id;
  try{await webCall('listings:save',args,id?'Listing updated':'Listing added');closeModal();}catch(e){}
}

/* ══ SITE CONTENT ══ */
const SITE_FIELDS=[
  {sec:'Brand'},
  {id:'brandName',label:'Brand name'},
  {id:'tagline',label:'Tagline (under the brand name)'},
  {sec:'Hero (top of the page)'},
  {id:'heroTitle',label:'Headline',span:2},
  {id:'heroSubtitle',label:'Sub-headline',area:3,span:2},
  {sec:'About'},
  {id:'aboutTitle',label:'Section title',span:2},
  {id:'aboutBody',label:'Text',area:5,span:2},
  {sec:'Contact (public)'},
  {id:'contactPhone',label:'Phone',ph:'08X-XXX-XXXX'},
  {id:'contactLine',label:'LINE ID',ph:'@yourline'},
  {id:'contactEmail',label:'Email',ph:'you@example.com'},
  {id:'contactAddress',label:'Area / address'},
  {sec:'Footer'},
  {id:'footerNote',label:'Footer text',span:2},
];
async function renderSiteContent(){
  const host=document.getElementById('site-form');
  if(!WEB.content){
    host.innerHTML='<div style="color:var(--muted)">Loading…</div>';
    try{WEB.content=await PM.query('site:getContent',{});}catch(e){host.innerHTML='<div class="alert red">Could not load site content.</div>';return;}
  }
  const c=WEB.content;
  host.innerHTML='<div class="fgrid">'+SITE_FIELDS.map(f=>{
    if(f.sec)return`<div class="fdiv">${f.sec}</div>`;
    const val=escHtml(String(c[f.id]??''));
    const cls='fg'+(f.span===2?' span2':'');
    const input=f.area?`<textarea id="sc_${f.id}" rows="${f.area}">${val}</textarea>`:`<input id="sc_${f.id}" value="${val}" placeholder="${f.ph||''}">`;
    return`<div class="${cls}"><label>${f.label}</label>${input}</div>`;
  }).join('')+'</div>';
}
async function saveSiteContent(){
  const c={};
  SITE_FIELDS.filter(f=>f.id).forEach(f=>{const el=document.getElementById('sc_'+f.id);c[f.id]=el?el.value.trim():(WEB.content||{})[f.id]||'';});
  try{await webCall('site:saveContent',c,'Website updated — changes are live');WEB.content=c;}catch(e){}
}

/* ══ INQUIRIES ══ */
function renderInquiries(){
  const flt=document.getElementById('inq-filter').value;
  let list=WEB.inquiries;
  if(flt==='open')list=list.filter(i=>i.status!=='Closed');
  else if(flt==='Closed')list=list.filter(i=>i.status==='Closed');
  const tbody=document.getElementById('inq-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="7">No inquiries here. Messages sent from the website contact form show up here.</td></tr>';return;}
  tbody.innerHTML=list.map(i=>{
    const d=new Date(i._creationTime);
    const opts=['New','Contacted','Closed'].map(s=>`<option${s===i.status?' selected':''}>${s}</option>`).join('');
    return`<tr${i.status==='New'?' style="background:var(--accent-bg)"':''}>
      <td style="white-space:nowrap">${fmtD(d.toISOString().slice(0,10))}<div style="font-size:10.5px;color:var(--muted)">${d.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</div></td>
      <td><strong>${escHtml(i.name)}</strong></td>
      <td>${escHtml(i.contact)}</td>
      <td style="font-size:11px">${i.listingTitle?escHtml(i.listingTitle):'—'}</td>
      <td style="font-size:12px;max-width:340px;white-space:pre-wrap">${escHtml(i.message||'')}</td>
      <td><select class="fld" style="padding:4px 8px" onchange="webCall('inquiries:setStatus',{id:'${i._id}',status:this.value},'Status updated')">${opts}</select></td>
      <td><button class="btn btn-danger btn-xs" onclick="webCall('inquiries:remove',{id:'${i._id}'},'Inquiry deleted')">Del</button></td>
    </tr>`;
  }).join('');
}

/* ══ TEAM ══ */
function renderTeam(){
  const tbody=document.getElementById('team-body');
  if(!WEB.team.length){tbody.innerHTML='<tr class="empty"><td colspan="3">No users yet.</td></tr>';return;}
  tbody.innerHTML=WEB.team.map(u=>{
    const joined=fmtD(new Date(u.joined).toISOString().slice(0,10));
    const me=u.email===PM.me.email;
    if(u.locked)return`<tr><td><strong>${escHtml(u.email)}</strong></td><td>${joined}</td><td><span class="badge b-green">Admin</span> <span style="font-size:10.5px;color:var(--muted)">via ADMIN_EMAILS</span></td></tr>`;
    const opts=[['','No access'],['manager','Manager'],['admin','Admin']].map(([v,l])=>`<option value="${v}"${(u.role||'')===v?' selected':''}>${l}</option>`).join('');
    return`<tr><td><strong>${escHtml(u.email)}</strong>${me?' <span class="badge b-blue">You</span>':''}</td><td>${joined}</td><td><select class="fld" style="padding:4px 8px" ${me?'disabled':''} onchange="webCall('users:setRole',{userId:'${u._id}',role:this.value||null},'Access updated')">${opts}</select></td></tr>`;
  }).join('');
}
