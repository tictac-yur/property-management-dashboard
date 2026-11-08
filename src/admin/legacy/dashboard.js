/* ══════════════════════════════════════════════
   DATA (written to Convex the first time the database is empty)
══════════════════════════════════════════════ */
const SEED = {
  properties:[
    {id:'P001',name:'Lumpini Ville Chaengwatthana - Pakkret Station #8/53 (606)',address:'8/53 ชั้น 6 อาคาร - โครงการ ลุมพินี วิลล์ แจ้งวัฒนะ - ปากเกร็ด สเตชัน ถ. แจ้งวัฒนะ ตำบล ปากเกร็ด อำเภอ ปากเกร็ด นนทบุรี 11120',type:'Condo',sqm:0,camRate:0,rent:8000,status:'Occupied',value:0,rentDueDay:15,meterReadDay:25},
    {id:'P002',name:'Lumpini Ville Chaengwatthana - Pakkret Station #8/55 (608)',address:'8/55 (608) ชั้น 6 อาคาร - โครงการ ลุมพินี วิลล์ แจ้งวัฒนะ - ปากเกร็ด สเตชัน ถ. แจ้งวัฒนะ ตำบล ปากเกร็ด อำเภอ ปากเกร็ด นนทบุรี 11120',type:'Condo',sqm:0,camRate:0,rent:8000,status:'Occupied',value:0,rentDueDay:1,meterReadDay:25},
    {id:'P003',name:'Lumpini Ville Chaengwatthana - Pakkret Station #8/105 (A-0719)',address:'ยูนิตเลขที่ 8/105 ห้องเลขที่ A-0719 ในอาคารชุด ลุมพินี วิลล์ แจ้งวัฒนะ - ปากเกร็ด สเตชัน ถนน แจ้งวัฒนะ ตำบล/แขวง ปากเกร็ด อำเภอ/เขต ปากเกร็ด จังหวัด นนทบุรี',type:'Condo',sqm:23,camRate:0,rent:6500,status:'Occupied',value:0,rentDueDay:17,meterReadDay:25},
    {id:'P004',name:'Lumpini Place Chaengwatthana - Pakkret Station #2/79',address:'เลขที่ 2/79 ชั้น 8 คอนโด ลุมพินี เพลส แจ้งวัฒนะ-ปากเกร็ด สเตชัน',type:'Condo',sqm:24,camRate:0,rent:9000,status:'Occupied',value:0,rentDueDay:23,meterReadDay:25},
    {id:'P005',name:'Royal Tower Condominium #40/64',address:'ห้องพักเลขที่ 40/64 ชั้น 3 ในอาคารชุดรอยัล ทาวเวอร์ คอนโดมิเนียม ซอยอาคารแจ้งวัฒนะเวศน์ 3 ตำบลบางตลาด อำเภอปากเกร็ด จังหวัดนนทบุรี 11120',type:'Condo',sqm:34,camRate:0,rent:5500,status:'Occupied',value:0,rentDueDay:15,meterReadDay:25},
    {id:'P006',name:'Double Lake Condominium Phase 2 #85/85',address:'ห้องชุดเลขที่ 85/85 ชั้น 5 โครงการ Double Lake Condominium Phase 2',type:'Condo',sqm:0,camRate:0,rent:13000,status:'Occupied',value:0,rentDueDay:10,meterReadDay:25},
    {id:'P007',name:'Supalai Lite Sathorn - Charoenrat #29/209',address:'ห้องชุดเลขที่ 29/209 ชั้น 12 โครงการ Supalai Lite Sathorn - Charoenrat ถ. เจริญราษฎร์ แขวงบางโคล่ เขตบางคอแหลม กรุงเทพมหานคร 10120',type:'Condo',sqm:0,camRate:0,rent:16000,status:'Occupied',value:0,rentDueDay:1,meterReadDay:25},
  ],
  tenants:[
    {id:'T001',name:'น.ส. พรรณราย บุญกระพือ (Ms. Phannarai Boonkraphue)',nickname:'',propId:'P001',phone:'064-680-0007',email:'',leaseStart:'2024-09-15',leaseEnd:'2025-09-14',deposit:16000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T002',name:'น.ส. ปาลิตา สิทธิขันแก้ว (Ms. Palita Sitthikhankaew)',nickname:'',propId:'P002',phone:'',email:'',leaseStart:'2025-01-01',leaseEnd:'2025-12-31',deposit:16000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T003',name:'นาง พนารัตน์ มะลิงาม (Mrs. Phanarat Malingam)',nickname:'',propId:'P003',phone:'089-625-8226',email:'',leaseStart:'2024-05-12',leaseEnd:'2025-05-11',deposit:13000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T004',name:'นาย ไพบูลย์ วนพงศ์ทิพากร (Mr. Phaiboon Wanapongthipakon)',nickname:'',propId:'P004',phone:'',email:'',leaseStart:'2025-04-01',leaseEnd:'2026-03-31',deposit:18000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T005',name:'นางสาว ธัญญภร แก้วนวลจริง (Ms. Thanyaphorn Kaewnualjing)',nickname:'',propId:'P005',phone:'',email:'',leaseStart:'2026-05-12',leaseEnd:'2026-11-11',deposit:11000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T006',name:'นาย ไตรสิทธิ์ ตานพิพัฒน์ (Mr. Taanpisit Taanpipat)',nickname:'',propId:'P006',phone:'',email:'',leaseStart:'2026-02-10',leaseEnd:'2027-02-09',deposit:26000,rating:0,depositStatus:'N/A',checklist:'No'},
    {id:'T007',name:'นาย ปฏิญญา บัวระภา (Mr. Patinya Buarapha)',nickname:'',propId:'P007',phone:'',email:'',leaseStart:'2025-09-01',leaseEnd:'2026-08-31',deposit:32000,rating:0,depositStatus:'N/A',checklist:'No'},
  ],
  payments:[],
  expenses:[],
  maintenance:[],
  contractors:[],
  documents:[],
  income:{
    months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    y2026:{rental:[0,0,0,0,0,0,0,0,0,0,0,0],other:[0,0,0,0,0,0,0,0,0,0,0,0],expenses:[0,0,0,0,0,0,0,0,0,0,0,0]},
    y2025:{rental:[0,0,0,0,0,0,0,0,0,0,0,0],other:[0,0,0,0,0,0,0,0,0,0,0,0],expenses:[0,0,0,0,0,0,0,0,0,0,0,0]},
    y2024:{rental:[0,0,0,0,0,0,0,0,0,0,0,0],other:[0,0,0,0,0,0,0,0,0,0,0,0],expenses:[0,0,0,0,0,0,0,0,0,0,0,0]}
  },
  contracts:[],
  contacts:[],
  loans:[],
  keyDates:[
    {id:'LS_T001',date:'2025-09-14',type:'Lease Renewal',propId:'P001',desc:'T001 Phannarai lease ends',reminder:60},
    {id:'LS_T002',date:'2025-12-31',type:'Lease Renewal',propId:'P002',desc:'T002 Palita lease ends',reminder:60},
    {id:'LS_T003',date:'2025-05-11',type:'Lease Renewal',propId:'P003',desc:'T003 Phanarat lease ends',reminder:60},
    {id:'LS_T004',date:'2026-03-31',type:'Lease Renewal',propId:'P004',desc:'T004 Phaiboon lease ends',reminder:60},
    {id:'LS_T005',date:'2026-11-11',type:'Lease Renewal',propId:'P005',desc:'T005 Thanyaphorn lease ends',reminder:60},
    {id:'LS_T006',date:'2027-02-09',type:'Lease Renewal',propId:'P006',desc:'T006 Taanpisit lease ends',reminder:60},
    {id:'LS_T007',date:'2026-08-31',type:'Lease Renewal',propId:'P007',desc:'T007 Patinya lease ends',reminder:60},
  ]
};


/* ══ STORAGE ══
   Data lives in Convex and syncs live between devices. `PM` is the bridge
   set up by src/admin/bridge.ts: PM.get() reads the local copy, PM.set()
   updates it immediately and sends only the changed records to the server. */
function getData(k){const v=PM.get(k);return v!==undefined?v:(Array.isArray(SEED[k])?[]:SEED[k])}
function setData(k,v){PM.set(k,v)}

const canEdit=PM.me.role!=='viewer';
if(canEdit&&!PM.get('initialized')){
  Object.keys(SEED).forEach(k=>setData(k,SEED[k]));
  setData('initialized',true);
}

/* ══ TOAST ══ */
function toast(msg,type='success'){
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${type==='success'?'✓':'!'}</span><span>${escHtml(msg)}</span>`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(()=>{el.style.animation='toastOut .3s ease forwards';setTimeout(()=>el.remove(),300)},2800);
}

/* ══ HELPERS ══ */
const fmt=(n,dec=0)=>n==null||n===''?'—':'฿'+(+n).toLocaleString('en',{minimumFractionDigits:dec,maximumFractionDigits:dec});
const fmtN=(n,dec=0)=>n==null?'—':(+n).toLocaleString('en',{minimumFractionDigits:dec,maximumFractionDigits:dec});
/** Short money for tight spots: ฿8,000 · ฿65.5k · ฿1.2M */
const fmtK=n=>{n=+n||0;const a=Math.abs(n);if(a>=1e6)return'฿'+(n/1e6).toFixed(a>=1e7?0:1).replace(/\.0$/,'')+'M';if(a>=1e4)return'฿'+(n/1e3).toFixed(a>=1e5?0:1).replace(/\.0$/,'')+'k';return fmt(n);};
const MONTHS_S=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_L=['January','February','March','April','May','June','July','August','September','October','November','December'];
const fmtD=d=>{if(!d)return'—';const p=String(d).split('-');if(p.length<3)return d;return(+p[2])+' '+MONTHS_S[(+p[1])-1]+' '+p[0]};
const isoDate=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>{const d=new Date();d.setHours(0,0,0,0);return d};
const daysUntil=d=>{if(!d)return null;const t=new Date(d);if(isNaN(t))return null;t.setHours(0,0,0,0);return Math.round((t-today())/86400000)};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);
const propName=id=>(getData('properties').find(p=>p.id===id)||{name:id}).name;
const tenName=id=>(getData('tenants').find(t=>t.id===id)||{name:id}).name;
/** a as a % of b, or — when b (e.g. property value) isn't filled in yet */
const pct=(a,b)=>(+b>0)?(a/b*100).toFixed(2)+'%':'—';
const stars=n=>{n=Math.max(0,Math.min(5,+n||0));return n?'★'.repeat(n)+'☆'.repeat(5-n):'<span style="color:var(--muted)">—</span>'};

/** "Lumpini Ville Chaengwatthana - Pakkret Station #8/53 (606)" → {building:"Lumpini Ville Chaengwatthana", unit:"#8/53 (606)"} */
function splitUnit(name){
  name=String(name||'');
  const i=name.indexOf('#');
  let building=(i>0?name.slice(0,i):name).trim();
  const unit=i>0?name.slice(i).trim():'';
  building=building.replace(/\s+-\s+.*$/,'').trim()||building;
  return {building,unit};
}
/** Compact unit label for lists: "Lumpini Ville Chaengwatthana #8/53 (606)" */
function unitLabel(p){if(!p)return'—';const s=splitUnit(p.name);return s.unit?s.building+' '+s.unit:s.building;}
function unitById(id){return getData('properties').find(p=>p.id===id);}
function unitLabelById(id){if(id==='ALL')return'All units';const p=unitById(id);return p?unitLabel(p):(id||'—');}
/** Tenant display name: English part in brackets if there is one, else the full name */
function personName(n){n=String(n||'');const m=n.match(/\(([^)]+)\)/);return(m?m[1]:n).replace(/^(Mr|Mrs|Ms|Miss|Dr)\.?\s+/i,'').trim()||n;}
function personLocal(n){n=String(n||'');const m=n.match(/^(.*?)\s*\(/);return m?m[1].trim():'';}
function initials(n){const w=personName(n).split(/\s+/).filter(Boolean);return((w[0]||'?')[0]+((w[1]||'')[0]||'')).toUpperCase();}
const AV_COLORS=['#2f55e4','#13794a','#b4480f','#5b4bb7','#0d6e7d','#a3366b','#6b5a10','#3f5d7d'];
function avatarColor(s){let h=0;for(const c of String(s||''))h=(h*31+c.charCodeAt(0))>>>0;return AV_COLORS[h%AV_COLORS.length];}
function avatar(name,cls=''){return`<span class="avatar ${cls}" style="background:${avatarColor(name)}">${escHtml(initials(name))}</span>`;}
function tenantOf(propId){
  const list=getData('tenants').filter(t=>t.propId===propId);
  if(!list.length)return null;
  // the one whose lease is current (or latest)
  return list.slice().sort((a,b)=>String(b.leaseEnd||'').localeCompare(String(a.leaseEnd||'')))[0];
}
function telLink(ph){if(!ph)return'—';return`<a href="tel:${escHtml(String(ph).replace(/[^\d+]/g,''))}">${escHtml(ph)}</a>`;}
function mailLink(e){if(!e)return'—';return`<a href="mailto:${escHtml(e)}">${escHtml(e)}</a>`;}

/** Lease progress 0–100 plus a colour class */
function leaseProgress(t){
  if(!t||!t.leaseStart||!t.leaseEnd)return null;
  const s=new Date(t.leaseStart),e=new Date(t.leaseEnd),n=today();
  if(isNaN(s)||isNaN(e)||e<=s)return null;
  const p=Math.max(0,Math.min(100,(n-s)/(e-s)*100));
  const left=daysUntil(t.leaseEnd);
  return {p,cls:left<0?'over':left<=60?'warn':''};
}
function leaseBar(t,style){const lp=leaseProgress(t);return lp?`<div class="lease-bar ${lp.cls}"${style?` style="${style}"`:''}><span style="width:${lp.p.toFixed(0)}%"></span></div>`:'';}

/** This month's rent state for one unit: paid / overdue / due (with days) / none */
function rentStatus(p,yr,mo){
  const now=today();
  if(yr==null){yr=now.getFullYear();mo=now.getMonth();}
  const ym=yr+'-'+String(mo+1).padStart(2,'0');
  const recs=getData('payments').filter(x=>x.propId===p.id&&((x.due&&String(x.due).startsWith(ym))||(!x.due&&x.paid&&String(x.paid).startsWith(ym))));
  const paid=recs.find(x=>x.status==='Paid');
  const dueDay=Math.min(28,Math.max(1,+p.rentDueDay||1));
  const dueDate=new Date(yr,mo,dueDay);
  const diff=Math.round((dueDate-now)/86400000);
  if(p.status!=='Occupied'||!(+p.rent>0))return{state:'none',dueDate,diff,rec:null};
  if(paid)return{state:'paid',dueDate,diff,rec:paid,amount:+paid.amount||0};
  if(diff<0)return{state:'late',dueDate,diff,rec:recs[0]||null};
  return{state:'due',dueDate,diff,rec:recs[0]||null};
}
function rentPill(rs){
  if(rs.state==='paid')return'<span class="badge b-green">Paid</span>';
  if(rs.state==='late')return`<span class="badge b-red">${-rs.diff}d late</span>`;
  if(rs.state==='due')return rs.diff===0?'<span class="badge b-orange">Due today</span>':`<span class="badge b-gray">Due in ${rs.diff}d</span>`;
  return'<span class="badge b-gray plain">Vacant</span>';
}

const ICONS={
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.6 17.4a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-.6-.6-2z"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  pie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12A9 9 0 1 1 12 3v9z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
};

const PAGE_TITLES={dash:'Dashboard',props:'Properties',ten:'Tenants',rent:'Rent payments',cal:'Rent calendar',maint:'Maintenance',dates:'Key dates',exp:'Expenses',inc:'Income summary',loans:'Loans',docs:'Documents',contracts:'Contracts',contacts:'Contacts',contractors:'Contractors',team:'Team & access'};
const PAGE_SUBS={dash:'Everything that needs you today',props:'Every unit, its tenant and this month\'s rent',ten:'Who lives where and when their lease ends',rent:'Every rent payment, paid and unpaid',cal:'Which months each unit has paid',maint:'Repairs and issues, open and done',dates:'Renewals, tax and insurance deadlines',exp:'What each unit costs to run',inc:'Income and expenses by month and year',loans:'Mortgages and what is left to pay',docs:'Deeds, insurance and receipts',contracts:'Leases and service contracts',contacts:'Building offices, agents and helpers',contractors:'People who fix things',team:'Who can open this dashboard'};

function statusBadge(s){
  const m={'Occupied':'b-green','Vacant':'b-purple','Active':'b-green','Expired':'b-red','Terminated':'b-gray','Paid':'b-green','Unpaid':'b-red','Partial':'b-yellow','Resolved':'b-green','Open':'b-orange','Pending':'b-yellow','In Progress':'b-blue'};
  return`<span class="badge ${m[s]||'b-gray'}">${escHtml(s||'—')}</span>`;
}
function daysPill(d,label){
  if(label)return`<span class="dpill dpill-gray">${label}</span>`;
  if(d===null)return'—';
  if(d<0)return`<span class="dpill dpill-red">${Math.abs(d)}d overdue</span>`;
  if(d===0)return`<span class="dpill dpill-red">Today</span>`;
  if(d<=14)return`<span class="dpill dpill-red">${d}d</span>`;
  if(d<=30)return`<span class="dpill dpill-orange">${d}d</span>`;
  if(d<=60)return`<span class="dpill dpill-yellow">${d}d</span>`;
  return`<span class="dpill dpill-green">${d}d</span>`;
}
function actBtns(type,key,id,render){
  return`<span class="row-act"><button class="btn btn-secondary btn-xs" onclick="openModal('${type}','${escHtml(id)}')">Edit</button><button class="btn btn-danger btn-xs" onclick="delItem('${key}','${escHtml(id)}',${render})">Delete</button></span>`;
}
/** Stat strip above a list: items = [{lbl, val, sub, cls}] */
function renderStrip(elId,items){
  const el=document.getElementById(elId); if(!el)return;
  el.innerHTML=items.map(i=>`<div class="strip-item"><div class="strip-lbl">${i.lbl}</div><div class="strip-val ${i.cls||''}">${i.val}</div>${i.sub?`<div class="strip-sub">${i.sub}</div>`:''}</div>`).join('');
}

/* ══ THEME ══ */
function applyTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('pm-theme',t)}catch(e){}}
(function(){let t=null;try{t=localStorage.getItem('pm-theme')}catch(e){}
  if(!t)t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  document.documentElement.dataset.theme=t;})();
function toggleTheme(){
  applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
  renderDashboard();
}
function cssVar(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();}

/* ══ SIDEBAR TOGGLE ══ */
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('collapsed');
}

/* ══ NAVIGATION ══ */
function goTo(t){
  const item=document.querySelector('.nav-item[data-t="'+t+'"]');
  if(!item)return;
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  item.classList.add('active');
  document.getElementById('p-'+t).classList.add('active');
  document.getElementById('pageTitle').textContent=PAGE_TITLES[t]||t;
  document.getElementById('pageSub').textContent=PAGE_SUBS[t]||'';
  document.title=(PAGE_TITLES[t]||'Dashboard')+' · PropManager';
  document.getElementById('content').scrollTop=0;
  renderPanel(t);
  if(isPhone())document.getElementById('sidebar').classList.add('collapsed');
}
document.querySelectorAll('.nav-item').forEach(item=>{item.onclick=()=>goTo(item.dataset.t);});
function isPhone(){return window.matchMedia('(max-width: 768px)').matches}
if(isPhone())document.getElementById('sidebar').classList.add('collapsed');
function activePanel(){const a=document.querySelector('.nav-item.active');return a?a.dataset.t:'dash';}

function renderPanel(t){
  const map={dash:renderDashboard,props:renderProps,ten:renderTenants,rent:renderPayments,cal:renderCalendar,maint:renderMaint,dates:renderDates,exp:renderExpenses,inc:renderIncome,loans:renderLoans,docs:renderDocs,contracts:renderContracts,contacts:renderContacts,contractors:renderContractors,team:renderTeam};
  if(map[t])map[t]();
}

/* ══ DASHBOARD ══ */
let occChartInst=null,incChartInst=null;
/* ══ MANUAL FEE LOGGER (Agent / CAM) ══ */
let _feeKind=null;
function openFeeModal(kind){
  _feeKind=kind;
  const props=getData('properties');
  if(!props.length){toast('Add a property first','error');return;}
  const isAgent=kind==='agent';
  document.getElementById('fee-title').textContent=isAgent?'Charge Agent Fee':'Log CAM Fee';
  const opts=props.map(p=>'<option value="'+escHtml(p.id)+'">'+escHtml(unitLabel(p))+'</option>').join('');
  const todayStr=new Date().toISOString().slice(0,10);
  const hint=isAgent
    ? 'Amount defaults to one month of rent for the selected unit. Use this when you renew or sign a new contract.'
    : 'Enter the CAM amount for this unit (manual / one-off).';
  document.getElementById('fee-body').innerHTML=
    '<div class="fgrid col1">'
    +'<div class="fg"><label>Property</label><select id="fee-prop" onchange="feePrefill()">'+opts+'</select></div>'
    +'<div class="fgrid">'
      +'<div class="fg"><label>Amount (฿)</label><input id="fee-amount" type="number" placeholder="0"></div>'
      +'<div class="fg"><label>Date</label><input id="fee-date" type="date" value="'+todayStr+'"></div>'
    +'</div>'
    +'<div class="fg"><label>Note</label><input id="fee-note" type="text" value="'+(isAgent?'Agent fee — new/renewed contract':'CAM fee')+'"></div>'
    +'<div style="font-size:11px;color:var(--muted)">'+hint+'</div>'
    +'</div>';
  feePrefill();
  document.getElementById('fee-overlay').classList.add('open');
}
function feePrefill(){
  const p=getData('properties').find(x=>x.id===document.getElementById('fee-prop').value);
  if(!p)return;
  const amtEl=document.getElementById('fee-amount');
  if(_feeKind==='agent'){ amtEl.value=+p.rent||0; }
  else { const cam=(+p.sqm||0)*(+p.camRate||0); amtEl.value=cam>0?cam:''; }
}
function closeFeeModal(){document.getElementById('fee-overlay').classList.remove('open');}
function saveFee(){
  const propId=document.getElementById('fee-prop').value;
  const amount=+document.getElementById('fee-amount').value||0;
  const date=document.getElementById('fee-date').value||new Date().toISOString().slice(0,10);
  const note=document.getElementById('fee-note').value||'';
  if(amount<=0){toast('Enter an amount greater than 0','error');return;}
  const cat=_feeKind==='agent'?'Agent Fee':'CAM Fee';
  const exp=getData('expenses');
  exp.push({id:nextSeqId('expenses','E',3),propId,date,category:cat,desc:note||cat,amount,budget:amount,recurring:'No'});
  setData('expenses',exp);
  closeFeeModal();
  renderExpenses();
  renderDashboard();
  toast(cat+' logged','success');
}
document.addEventListener('DOMContentLoaded',()=>{
  const fo=document.getElementById('fee-overlay');
  if(fo)fo.onclick=e=>{if(e.target===fo)closeFeeModal();};
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeFeeModal();});

/* ══ RENT COLLECTION CALENDAR ══ */
let _calYear=new Date().getFullYear();
function renderCalendar(){
  const host=document.getElementById('cal-table'); if(!host)return;
  const yEl=document.getElementById('cal-year'); if(yEl)yEl.textContent=_calYear;
  const props=getData('properties').filter(p=>(+p.rent||0)>0);
  const pays=getData('payments');
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now=new Date(); now.setHours(0,0,0,0);
  if(!props.length){host.innerHTML='<table><tbody><tr class="empty"><td>No properties with rent to show.</td></tr></tbody></table>';return;}
  const head='<tr><th>Property</th><th style="text-align:center">Due day</th><th style="text-align:right">Rent</th>'+months.map(m=>'<th style="text-align:center">'+m+'</th>').join('')+'</tr>';
  const rows=props.map(p=>{
    const dueDay=+p.rentDueDay||1;
    let cells='';
    for(let m=0;m<12;m++){
      const dueDate=new Date(_calYear,m,dueDay);
      const recs=pays.filter(x=>{if(x.propId!==p.id||!x.due)return false;const d=new Date(x.due);return d.getFullYear()===_calYear&&d.getMonth()===m;});
      let cls;
      if(recs.some(x=>x.status==='Paid'))cls='cal-paid';
      else if(dueDate<=now)cls='cal-due';
      else cls='cal-future';
      const stTxt=cls==='cal-paid'?'Collected':(cls==='cal-due'?'Uncollected':'Not yet due');
      cells+='<td style="text-align:center;padding:4px"><div class="cal-cell '+cls+'" title="'+escHtml(p.name)+' — '+months[m]+' '+_calYear+' · '+stTxt+' ('+fmt(+p.rent||0)+')" onclick="calToggle(\''+p.id+'\','+m+')">'+dueDay+'</div></td>';
    }
    return '<tr><td class="cell-link" onclick="openProp(\''+p.id+'\')"><div class="cell-main">'+escHtml(unitLabel(p))+'</div><div class="cell-sub">'+escHtml(p.id)+' · '+((tenantOf(p.id)&&personName(tenantOf(p.id).name))||'no tenant')+'</div></td><td style="text-align:center">'+dueDay+'</td><td style="text-align:right">'+fmt(+p.rent||0)+'</td>'+cells+'</tr>';
  }).join('');
  host.innerHTML='<table><thead>'+head+'</thead><tbody>'+rows+'</tbody></table>';
}
function calYear(delta){_calYear+=delta;renderCalendar();}
function calToggle(propId,m){
  const p=getData('properties').find(x=>x.id===propId); if(!p)return;
  const pays=getData('payments');
  const dueStr=_calYear+'-'+String(m+1).padStart(2,'0')+'-'+String(+p.rentDueDay||1).padStart(2,'0');
  const idx=pays.findIndex(x=>{if(x.propId!==propId||!x.due)return false;const d=new Date(x.due);return d.getFullYear()===_calYear&&d.getMonth()===m;});
  const todayStr=new Date().toISOString().slice(0,10);
  if(idx>=0){
    const cur=pays[idx];
    if(cur.status==='Paid'){cur.status='Unpaid';cur.paid='';}
    else{cur.status='Paid';cur.paid=todayStr;}
  } else {
    const ten=getData('tenants').find(t=>t.propId===propId);
    pays.push({id:nextSeqId('payments','RP',3),tenantId:ten?ten.id:'',propId,due:dueStr,amount:+p.rent||0,paid:todayStr,status:'Paid'});
  }
  setData('payments',pays);
  renderCalendar(); renderDashboard();
  toast('Rent collection updated','success');
}

/* ══ INCOME GOAL TRACKER ══ */
const GOAL_DEFAULT={target:4020000,startYear:2026,years:6,label:'Tuition Fund'};
function getGoal(){return Object.assign({},GOAL_DEFAULT,PM.get('goal')||{});}
function setGoalCfg(g){setData('goal',g);}
function goalNet(g){
  const sY=+g.startYear, eY=sY+(+g.years)-1;
  const inWin=ds=>{if(!ds)return false;const y=+String(ds).slice(0,4);return y>=sY&&y<=eY;};
  const collected=getData('payments').filter(p=>p.status==='Paid').reduce((s,p)=>inWin(p.due||p.paid)?s+(+p.amount||0):s,0);
  const expenses=getData('expenses').reduce((s,e)=>inWin(e.date)?s+(+e.amount||0):s,0);
  return {collected,expenses,net:collected-expenses};
}
function renderGoal(){
  const host=document.getElementById('goal-tracker'); if(!host)return;
  const g=getGoal();
  const r=goalNet(g), target=+g.target||0, net=r.net;
  const pctv=target>0?net/target*100:0, pc=Math.max(0,Math.min(100,pctv));
  const remaining=Math.max(0,target-net);
  const sY=+g.startYear, eY=sY+(+g.years)-1, totalM=(+g.years)*12;
  const now=new Date();
  let elapsed=(now.getFullYear()-sY)*12+now.getMonth()+now.getDate()/30;
  elapsed=Math.max(0,Math.min(totalM,elapsed));
  const expected=totalM>0?target*elapsed/totalM:0;
  const expPc=target>0?Math.max(0,Math.min(100,expected/target*100)):0;
  const projected=elapsed>0?net/elapsed*totalM:0;
  const monthsLeft=Math.max(0,Math.ceil(totalM-elapsed));
  const perMonthNeeded=monthsLeft>0?remaining/monthsLeft:0;
  const pace = elapsed<=0 ? '<span class="badge b-gray">Not started</span>'
    : (net>=expected ? '<span class="badge b-green">On track</span>'
    : '<span class="badge b-orange">Behind by '+fmt(Math.round(expected-net))+'</span>');
  const amtColor = net>=0 ? 'var(--text)' : 'var(--red)';
  host.innerHTML =
   '<div class="goal-card">'
   +'<div class="goal-head"><div class="goal-title">'+escHtml(g.label)+' <span style="font-weight:400;color:var(--muted)">· '+g.years+'-year net income goal, '+sY+'–'+eY+'</span> '+pace+'</div>'
   +'<button class="btn btn-secondary btn-xs" onclick="toggleGoalEdit(true)">Edit goal</button></div>'
   +'<div class="goal-body"><div class="goal-main">'
       +'<div class="goal-amt" style="color:'+amtColor+'">'+fmt(net)+' <span>of '+fmt(target)+' · '+pctv.toFixed(1)+'%</span></div>'
       +'<div class="goal-bar" title="The line shows where you should be by now"><div class="goal-bar-fill" style="width:'+pc+'%"></div><div class="goal-bar-mark" style="left:'+expPc+'%"></div></div>'
       +'<div class="goal-stats">'
         +'<div><div class="goal-stat-lbl">Rent collected</div><div class="goal-stat-val">'+fmt(r.collected)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Expenses</div><div class="goal-stat-val">'+fmt(r.expenses)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Still to go</div><div class="goal-stat-val">'+fmt(remaining)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Needed per month</div><div class="goal-stat-val">'+fmt(Math.round(perMonthNeeded))+'</div></div>'
         +'<div><div class="goal-stat-lbl">Months left</div><div class="goal-stat-val">'+monthsLeft+'</div></div>'
         +'<div><div class="goal-stat-lbl">Deadline</div><div class="goal-stat-val">Dec '+eY+'</div></div>'
         +'<div><div class="goal-stat-lbl">On this pace</div><div class="goal-stat-val">'+fmt(Math.round(projected))+'</div></div>'
       +'</div>'
   +'</div></div>'
   +'<div class="goal-edit" id="goal-edit">'
     +'<div class="fg"><label>Goal name</label><input class="fld" id="ge-label" value="'+escHtml(g.label)+'"></div>'
     +'<div class="fg"><label>Target (฿)</label><input class="fld" id="ge-target" type="number" value="'+target+'"></div>'
     +'<div class="fg"><label>Start year</label><input class="fld" id="ge-start" type="number" value="'+sY+'"></div>'
     +'<div class="fg"><label>Years</label><input class="fld" id="ge-years" type="number" value="'+g.years+'"></div>'
     +'<button class="btn btn-primary btn-sm" onclick="saveGoalEdit()">Save</button>'
     +'<button class="btn btn-secondary btn-sm" onclick="toggleGoalEdit(false)">Cancel</button>'
   +'</div>'
   +'</div>';
}
function toggleGoalEdit(show){const e=document.getElementById('goal-edit');if(e)e.style.display=show?'flex':'none';}
function saveGoalEdit(){
  const g={
    label:(document.getElementById('ge-label').value||'Tuition Fund').trim(),
    target:+document.getElementById('ge-target').value||0,
    startYear:+document.getElementById('ge-start').value||2026,
    years:+document.getElementById('ge-years').value||6
  };
  setGoalCfg(g); renderGoal(); toast('Goal updated','success');
}

/** Everything that needs a decision, most urgent first */
function attentionItems(){
  const items=[];
  const props=getData('properties');
  props.forEach(p=>{
    const rs=rentStatus(p);
    if(rs.state==='late'){
      const t=tenantOf(p.id);
      items.push({rank:0,cls:'red',ico:ICONS.card,title:`Rent ${-rs.diff} day${rs.diff===-1?'':'s'} late · ${unitLabel(p)}`,sub:`${t?personName(t.name)+' · ':''}${fmt(p.rent)} was due ${fmtD(isoDate(rs.dueDate))}`,act:`<button class="btn btn-pay btn-xs" onclick="quickPayModal('${p.id}')">Mark paid</button>`});
    }
  });
  const unpaidOld=getData('payments').filter(x=>x.status==='Unpaid'&&x.due&&daysUntil(x.due)<0);
  const curYm=isoDate(today()).slice(0,7);
  const olderUnpaid=unpaidOld.filter(x=>!String(x.due).startsWith(curYm));
  if(olderUnpaid.length){
    items.push({rank:1,cls:'red',ico:ICONS.card,title:`${olderUnpaid.length} older unpaid rent record${olderUnpaid.length>1?'s':''}`,sub:fmt(olderUnpaid.reduce((s,x)=>s+(+x.amount||0),0))+' outstanding from earlier months',act:`<button class="btn btn-secondary btn-xs" onclick="document.getElementById('rent-filter').value='Unpaid';goTo('rent')">Review</button>`});
  }
  getData('tenants').forEach(t=>{
    const d=daysUntil(t.leaseEnd);
    if(d===null||d>60)return;
    const p=unitById(t.propId);
    if(d<0&&d<-60)return; // long gone; still shown in Tenants
    items.push({rank:d<0?1:d<=30?2:4,cls:d<0?'red':d<=30?'orange':'yellow',ico:ICONS.users,
      title:d<0?`Lease ended ${-d} days ago · ${personName(t.name)}`:`Lease ends in ${d} day${d===1?'':'s'} · ${personName(t.name)}`,
      sub:`${p?unitLabel(p):t.propId} · ends ${fmtD(t.leaseEnd)}`,act:`<button class="btn btn-secondary btn-xs" onclick="switchToTenEdit('${escHtml(t.id)}')">Renew</button>`});
  });
  getData('keyDates').filter(k=>!String(k.id||'').startsWith('LS_')).forEach(k=>{
    const d=daysUntil(k.date); if(d===null)return;
    if(d<0)items.push({rank:1,cls:'red',ico:ICONS.cal,title:`Overdue: ${k.desc||k.type}`,sub:`${k.type} · ${unitLabelById(k.propId)} · was ${fmtD(k.date)}`,act:`<button class="btn btn-secondary btn-xs" onclick="openModal('date','${escHtml(k.id)}')">Open</button>`});
    else if(d<=(+k.reminder||30))items.push({rank:3,cls:'orange',ico:ICONS.cal,title:`${k.desc||k.type} in ${d} day${d===1?'':'s'}`,sub:`${k.type} · ${unitLabelById(k.propId)} · ${fmtD(k.date)}`,act:`<button class="btn btn-secondary btn-xs" onclick="openModal('date','${escHtml(k.id)}')">Open</button>`});
  });
  getData('maintenance').filter(m=>m.status!=='Resolved').forEach(m=>{
    const days=m.reported?Math.max(0,-daysUntil(m.reported)):0;
    items.push({rank:days>14?2:3,cls:days>14?'orange':'blue',ico:ICONS.wrench,title:`${m.issue||'Repair'} · ${unitLabelById(m.propId)}`,sub:`${m.status}${m.reported?' · reported '+days+' day'+(days===1?'':'s')+' ago':''}${m.contractor?' · '+m.contractor:''}`,act:`<button class="btn btn-secondary btn-xs" onclick="openModal('maint','${escHtml(m.id)}')">Update</button>`});
  });
  getData('documents').forEach(d=>{
    const du=d.expiry?daysUntil(d.expiry):null; if(du===null||du>30)return;
    items.push({rank:du<0?1:3,cls:du<0?'red':'yellow',ico:ICONS.doc,title:du<0?`${d.type} expired · ${unitLabelById(d.propId)}`:`${d.type} expires in ${du} days · ${unitLabelById(d.propId)}`,sub:'Expiry '+fmtD(d.expiry),act:`<button class="btn btn-secondary btn-xs" onclick="openModal('doc','${escHtml(d.id)}')">Open</button>`});
  });
  props.filter(p=>p.status==='Vacant').forEach(p=>{
    items.push({rank:4,cls:'blue',ico:ICONS.home,title:`Vacant · ${unitLabel(p)}`,sub:`Asking ${fmt(p.rent)} a month`,act:`<button class="btn btn-secondary btn-xs" onclick="openProp('${p.id}')">View</button>`});
  });
  return items.sort((a,b)=>a.rank-b.rank);
}

function renderDashboard(){
  const props=getData('properties');
  const tenants=getData('tenants');
  const payments=getData('payments');
  const maint=getData('maintenance');
  const keyDates=getData('keyDates');
  const now=today(), yr=now.getFullYear(), mo=now.getMonth();

  const occ=props.filter(p=>p.status==='Occupied');
  const vacant=props.filter(p=>p.status!=='Occupied');
  const monthlyRent=occ.reduce((s,p)=>s+(+p.rent||0),0);
  const occPct=props.length?Math.round(occ.length/props.length*100):0;
  const openMaint=maint.filter(m=>m.status!=='Resolved');
  const overdueAlerts=keyDates.filter(k=>{const d=daysUntil(k.date);return d!==null&&d<0});
  const dueSoon=keyDates.filter(k=>{const d=daysUntil(k.date);return d!==null&&d>=0&&d<=(+k.reminder||0)});

  // This month
  const rows=occ.map(p=>({p,rs:rentStatus(p,yr,mo),t:tenantOf(p.id)}));
  const paidRows=rows.filter(r=>r.rs.state==='paid'), lateRows=rows.filter(r=>r.rs.state==='late'), dueRows=rows.filter(r=>r.rs.state==='due');
  const collected=paidRows.reduce((s,r)=>s+(r.rs.amount||+r.p.rent||0),0);
  const lateAmt=lateRows.reduce((s,r)=>s+(+r.p.rent||0),0);
  const unpaidRecs=payments.filter(p=>p.status==='Unpaid');
  const unpaidTotal=unpaidRecs.reduce((s,p)=>s+(+p.amount||0),0);

  // Year to date (net)
  const ytdIn=payments.filter(p=>p.status==='Paid'&&String(p.due||p.paid||'').startsWith(String(yr))).reduce((s,p)=>s+(+p.amount||0),0);
  const ytdOut=getData('expenses').filter(e=>String(e.date||'').startsWith(String(yr))).reduce((s,e)=>s+(+e.amount||0),0);
  const endingSoon=tenants.filter(t=>{const d=daysUntil(t.leaseEnd);return d!==null&&d>=0&&d<=60});

  // Header
  const h=new Date().getHours();
  const who=(PM.me.email||'').split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
  document.getElementById('dash-date').textContent=new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('dash-hello').textContent=(h<12?'Good morning':h<18?'Good afternoon':'Good evening')+(who?', '+who.split(' ')[0]:'');
  const bits=[];
  bits.push(`${paidRows.length} of ${occ.length} units have paid ${MONTHS_L[mo]}'s rent`);
  if(lateRows.length)bits.push(`${lateRows.length} ${lateRows.length===1?'is':'are'} late`);
  else if(dueRows.length)bits.push(`${dueRows.length} still to come`);
  if(openMaint.length)bits.push(`${openMaint.length} repair${openMaint.length>1?'s':''} open`);
  document.getElementById('dash-summary').textContent=bits.join(', ')+'.';

  // KPI tiles
  const card=(cls,ico,lbl,val,sub,go,hot)=>`<button type="button" class="card ${cls}" onclick="goTo('${go}')"><div class="card-top"><span class="card-ico">${ico}</span><span class="card-lbl">${lbl}</span></div><div class="card-val ${hot?'hot':''}">${val}</div><div class="card-sub">${sub}</div></button>`;
  document.getElementById('dash-cards').innerHTML=
    card('accent',ICONS.card,'Rent roll',fmt(monthlyRent),`a month from ${occ.length} lease${occ.length===1?'':'s'}`,'props')
   +card('green',ICONS.check,`Collected in ${MONTHS_S[mo]}`,fmt(collected),`${monthlyRent?Math.round(collected/monthlyRent*100):0}% of expected`,'cal')
   +card(lateRows.length||unpaidRecs.length?'red':'',ICONS.alert,'Overdue rent',fmt(lateAmt+unpaidRecs.filter(x=>!String(x.due||'').startsWith(isoDate(now).slice(0,7))).reduce((s,x)=>s+(+x.amount||0),0)),(lateRows.length||unpaidRecs.length)?`${lateRows.length+unpaidRecs.length} payment${lateRows.length+unpaidRecs.length===1?'':'s'} outstanding`:'Nobody owes rent','rent',lateRows.length>0)
   +card('',ICONS.pie,'Occupancy',occPct+'%',`${occ.length} of ${props.length} units let`,'props')
   +card('',ICONS.trend,`Net income ${yr}`,fmt(ytdIn-ytdOut),`${fmtK(ytdIn)} in · ${fmtK(ytdOut)} out`,'inc')
   +card(openMaint.length?'orange':'',ICONS.wrench,'Open repairs',String(openMaint.length),endingSoon.length?`${endingSoon.length} lease${endingSoon.length>1?'s':''} ending in 60 days`:'No leases ending soon','maint');

  // This month box
  const expected=monthlyRent||1;
  document.getElementById('month-title').textContent=`${MONTHS_L[mo]} rent`;
  const order={late:0,due:1,paid:2};
  const list=rows.slice().sort((a,b)=>(order[a.rs.state]-order[b.rs.state])||(a.rs.diff-b.rs.diff));
  document.getElementById('month-box').innerHTML=
    `<div class="month-top"><div class="month-amt">${fmt(collected)} <span>of ${fmt(monthlyRent)} collected</span></div>
      <div class="month-meta">${paidRows.length} paid · ${dueRows.length} to come · ${lateRows.length} late</div></div>
     <div class="meter"><span class="m-paid" style="width:${collected/expected*100}%"></span><span class="m-late" style="width:${lateAmt/expected*100}%"></span></div>
     <div class="meter-legend"><span><i style="background:var(--green)"></i>Paid</span><span><i style="background:var(--red)"></i>Late</span><span><i style="background:var(--surface3);border:1px solid var(--border2)"></i>Not due yet</span></div>
     <ul class="mlist">${list.length?list.map(({p,rs,t})=>`
      <li class="mrow">
        <div style="min-width:0"><div class="mrow-name" onclick="openProp('${p.id}')">${escHtml(unitLabel(p))}</div>
          <div class="mrow-sub">${t?escHtml(personName(t.name))+' · ':''}due ${fmtD(isoDate(rs.dueDate))}${rs.state==='paid'&&rs.rec&&rs.rec.paid?' · paid '+fmtD(rs.rec.paid):''}</div></div>
        <div class="mrow-amt">${fmt(rs.state==='paid'?(rs.amount||p.rent):p.rent)}</div>
        <div class="mrow-act">${rentPill(rs)}${rs.state!=='paid'?`<button class="btn btn-pay btn-xs" onclick="quickPayModal('${p.id}')">Mark paid</button>`:''}</div>
      </li>`).join(''):'<li class="mrow"><div class="mrow-sub">No occupied units yet.</div></li>'}</ul>`;

  // Attention
  const att=attentionItems();
  document.getElementById('attn-count').textContent=att.length?att.length+' item'+(att.length>1?'s':''):'';
  document.getElementById('attn-list').innerHTML=att.length?att.slice(0,8).map(a=>`<li class="aitem"><span class="aico ${a.cls}">${a.ico}</span><div class="atext"><div class="atitle">${escHtml(a.title)}</div><div class="asub">${escHtml(a.sub)}</div></div>${a.act||''}</li>`).join('')
    +(att.length>8?`<li class="aitem"><div class="asub">and ${att.length-8} more in Key dates, Tenants and Maintenance.</div></li>`:'')
    :`<li class="all-clear"><span class="all-clear-ico">${ICONS.check}</span><strong>All clear</strong>Nothing late, nothing expiring, no open repairs.</li>`;

  // Sidebar badges
  const setNb=(id,n)=>{const el=document.getElementById(id);if(!el)return;el.textContent=n;el.style.display=n?'inline-flex':'none';};
  setNb('nb-maint',openMaint.length);
  setNb('nb-dates',overdueAlerts.length+dueSoon.length);
  setNb('nb-docs',getData('documents').filter(d=>d.expiry&&daysUntil(d.expiry)!==null&&daysUntil(d.expiry)<=30).length);
  setNb('nb-rent',lateRows.length);
  setNb('nb-ten',endingSoon.length);

  // Leases expiring 60 days
  const expiring=tenants.filter(t=>{const d=daysUntil(t.leaseEnd);return d!==null&&d<=60&&d>=-60});
  const lbody=document.getElementById('dash-leases');
  if(!expiring.length){lbody.innerHTML='<tr class="empty"><td colspan="5">No leases end in the next 60 days.</td></tr>';
  } else {
    lbody.innerHTML=expiring.sort((a,b)=>new Date(a.leaseEnd)-new Date(b.leaseEnd)).map(t=>{
      const p=unitById(t.propId)||{};
      const d=daysUntil(t.leaseEnd);
      return`<tr><td class="cell-link" onclick="${p.id?`openProp('${escHtml(p.id)}')`:''}"><div class="cell-main">${escHtml(personName(t.name))}</div><div class="cell-sub">${escHtml(p.name?unitLabel(p):t.propId)}</div></td><td style="white-space:nowrap">${fmtD(t.leaseEnd)}</td><td>${daysPill(d)}</td><td>${fmt(p.rent)}</td><td><button class="btn btn-secondary btn-xs" onclick="switchToTenEdit('${escHtml(t.id)}')">Renew</button></td></tr>`;
    }).join('');
  }

  // Rent by unit
  const maxR=Math.max(1,...props.map(p=>+p.rent||0));
  document.getElementById('rent-bars').innerHTML=props.length?props.slice().sort((a,b)=>(+b.rent||0)-(+a.rent||0)).map(p=>`<div class="hbar-row"><div class="hbar-name" title="${escHtml(p.name)}">${escHtml(unitLabel(p))}</div><div class="hbar-track"><div class="hbar-fill ${p.status==='Occupied'?'':'vac'}" style="width:${(+p.rent||0)/maxR*100}%"></div></div><div class="hbar-val">${fmt(p.rent)}</div></div>`).join(''):'<div class="dempty">No units yet.</div>';

  renderOccChart(occ.length,vacant.length);
  renderIncChart();
  renderYTD();
  renderReminders();
  renderGoal();
  renderTodos();
  if(_drawerId&&document.getElementById('drawer').classList.contains('open'))openProp(_drawerId);
}

function renderOccChart(occ,vac){
  const el=document.getElementById('occChart'); if(!el)return;
  const ctx=el.getContext('2d');
  if(occChartInst)occChartInst.destroy();
  const total=occ+vac;
  document.getElementById('occ-pct').textContent=total?Math.round(occ/total*100)+'%':'—';
  document.getElementById('occ-legend').innerHTML=
    `<div class="legend-row"><i style="background:${cssVar('--chart-1')}"></i><span>Let</span><b>${occ}</b></div>`
   +`<div class="legend-row"><i style="background:${cssVar('--chart-2')}"></i><span>Vacant</span><b>${vac}</b></div>`
   +`<div class="legend-row"><i style="background:transparent"></i><span>Vacancy costs</span><b>${fmt(getData('properties').filter(p=>p.status!=='Occupied').reduce((s,p)=>s+(+p.rent||0),0))}/mo</b></div>`;
  occChartInst=new Chart(ctx,{
    type:'doughnut',
    data:{labels:['Let','Vacant'],datasets:[{data:[occ,vac],backgroundColor:[cssVar('--chart-1'),cssVar('--chart-2')],borderWidth:0,hoverOffset:3}]},
    options:{maintainAspectRatio:false,plugins:{legend:{display:false}},cutout:'78%'}
  });
}

function renderIncChart(){
  const el=document.getElementById('incChart'); if(!el)return;
  const ctx=el.getContext('2d');
  if(incChartInst)incChartInst.destroy();
  const yr=new Date().getFullYear();
  document.getElementById('inc-chart-title').textContent='Income vs expenses, '+yr;
  const income=Array(12).fill(0), expenses=Array(12).fill(0);
  getData('payments').filter(p=>p.status==='Paid').forEach(p=>{
    const ds=p.due||p.paid; if(!ds)return;
    const d=new Date(ds); if(d.getFullYear()!==yr)return;
    income[d.getMonth()]+=(+p.amount||0);
  });
  getData('expenses').forEach(e=>{
    if(!e.date)return; const d=new Date(e.date); if(d.getFullYear()!==yr)return;
    expenses[d.getMonth()]+=(+e.amount||0);
  });
  const tIn=income.reduce((a,b)=>a+b,0), tOut=expenses.reduce((a,b)=>a+b,0);
  const best=income.indexOf(Math.max(...income));
  document.getElementById('inc-chart-foot').innerHTML=
    `<div>Rent collected<strong>${fmt(tIn)}</strong></div><div>Expenses<strong>${fmt(tOut)}</strong></div><div>Net<strong style="color:${tIn-tOut>=0?'var(--green)':'var(--red)'}">${fmt(tIn-tOut)}</strong></div>`
   +(tIn?`<div>Best month<strong>${MONTHS_S[best]} · ${fmtK(income[best])}</strong></div>`:'');
  const muted=cssVar('--muted'), grid=cssVar('--chart-grid');
  const font={size:12,family:'Geist, Inter, sans-serif'};
  incChartInst=new Chart(ctx,{
    type:'bar',
    data:{labels:MONTHS_S,datasets:[
      {label:'Rent collected',data:income,backgroundColor:cssVar('--chart-1'),borderRadius:5,borderSkipped:false,maxBarThickness:20},
      {label:'Expenses',data:expenses,backgroundColor:cssVar('--chart-2'),borderRadius:5,borderSkipped:false,maxBarThickness:20}
    ]},
    options:{
      maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{
        legend:{position:'top',align:'end',labels:{font,color:muted,boxWidth:8,boxHeight:8,usePointStyle:true,pointStyle:'rectRounded'}},
        tooltip:{callbacks:{label:c=>' '+c.dataset.label+': '+fmt(c.raw)}}
      },
      scales:{
        y:{ticks:{callback:v=>fmtK(v),font,color:muted,maxTicksLimit:5},grid:{color:grid},border:{display:false}},
        x:{ticks:{font,color:muted},grid:{display:false},border:{display:false}}
      }
    }
  });
}

function switchToTenEdit(id){
  goTo('ten');
  setTimeout(()=>openModal('ten',id),60);
}

/* ══ LOG RENT: pick a unit ══ */
function openPayChooser(){
  const occ=getData('properties').filter(p=>p.status==='Occupied');
  if(!occ.length){toast('No occupied units to log rent for','error');return;}
  const rows=occ.map(p=>({p,rs:rentStatus(p),t:tenantOf(p.id)})).sort((a,b)=>({late:0,due:1,paid:2}[a.rs.state]-{late:0,due:1,paid:2}[b.rs.state])||(a.rs.diff-b.rs.diff));
  document.getElementById('modal-title').textContent=`Log rent for ${MONTHS_L[today().getMonth()]}`;
  document.getElementById('modal-body').innerHTML=`<ul class="pick-list">${rows.map(({p,rs,t})=>`
    <li class="pick-row"><div class="pr-main"><div class="pr-name">${escHtml(unitLabel(p))}</div><div class="pr-sub">${t?escHtml(personName(t.name))+' · ':''}${fmt(p.rent)} · due ${fmtD(isoDate(rs.dueDate))}</div></div>
    ${rentPill(rs)}<button class="btn ${rs.state==='paid'?'btn-secondary':'btn-pay'} btn-xs" onclick="quickPayModal('${p.id}')">${rs.state==='paid'?'Log another':'Mark paid'}</button></li>`).join('')}</ul>`;
  const save=document.getElementById('modal-save');
  save.textContent='Done'; save.onclick=closeModal;
  document.getElementById('modal-overlay').classList.add('open');
}

/* ══ UNIT DRAWER: everything about one unit ══ */
let _drawerId=null;
function openProp(id){
  const p=unitById(id); if(!p){toast('Unit not found','error');return;}
  _drawerId=id;
  const s=splitUnit(p.name);
  const t=tenantOf(id);
  const yr=today().getFullYear();
  const pays=getData('payments').filter(x=>x.propId===id).sort((a,b)=>String(b.due||b.paid||'').localeCompare(String(a.due||a.paid||'')));
  const exps=getData('expenses').filter(e=>e.propId===id).sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  const mts=getData('maintenance').filter(m=>m.propId===id);
  const docs=getData('documents').filter(d=>d.propId===id);
  const cons=getData('contracts').filter(c=>c.propId===id);
  const loans=getData('loans').filter(l=>l.propId===id);
  const contacts=getData('contacts').filter(c=>c.propId===id||c.propId==='ALL');
  const dates=getData('keyDates').filter(k=>k.propId===id&&daysUntil(k.date)!==null&&daysUntil(k.date)>=0).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const yIn=pays.filter(x=>x.status==='Paid'&&String(x.due||x.paid||'').startsWith(String(yr))).reduce((a,x)=>a+(+x.amount||0),0);
  const yOut=exps.filter(e=>String(e.date||'').startsWith(String(yr))).reduce((a,e)=>a+(+e.amount||0),0);
  const rs=rentStatus(p);
  const cam=(+p.sqm||0)*(+p.camRate||0);
  const fact=(l,v)=>`<div><dt>${l}</dt><dd>${v}</dd></div>`;
  const m12=MONTHS_S.map((m,i)=>{const r=rentStatus(p,yr,i);const cls=r.state==='paid'?'paid':(r.state==='late'?'due':'');return`<div class="m12 ${cls}" title="${MONTHS_L[i]}: ${r.state==='paid'?'paid':r.state==='late'?'not collected':'not due yet'}"><i></i>${m}</div>`;}).join('');

  document.getElementById('drawer-head').innerHTML=`
    <div class="drawer-head-top">
      <div style="flex:1;min-width:0">
        <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px"><span class="id-tag">${escHtml(p.id)}</span>${statusBadge(p.status)}${p.status==='Occupied'?rentPill(rs):''}</div>
        <div class="drawer-title">${escHtml(s.building)}${s.unit?' <span style="color:var(--muted);font-weight:500">'+escHtml(s.unit)+'</span>':''}</div>
      </div>
      <button class="icon-btn" onclick="closeDrawer()" aria-label="Close">${ICONS.x}</button>
    </div>
    ${p.address?`<div class="drawer-addr">${escHtml(p.address)}</div>`:''}
    <div class="drawer-actions">
      ${p.status==='Occupied'?`<button class="btn btn-pay btn-sm" onclick="quickPayModal('${p.id}')">${ICONS.check}Log rent</button>`:''}
      <button class="btn btn-secondary btn-sm edit-only" onclick="openModal('maint',null);setTimeout(()=>{const s=document.getElementById('mf_propId');if(s)s.value='${p.id}'},0)">Report issue</button>
      <button class="btn btn-secondary btn-sm edit-only" onclick="openModal('prop','${p.id}')">${ICONS.edit}Edit unit</button>
    </div>`;

  document.getElementById('drawer-body').innerHTML=`
    <div class="dsec"><dl class="dfacts">
      ${fact('Monthly rent',fmt(p.rent))}${fact('Rent due',(+p.rentDueDay?'Day '+p.rentDueDay:'—'))}${fact('Meter reading',(+p.meterReadDay?'Day '+p.meterReadDay:'—'))}
      ${fact('Size',+p.sqm?p.sqm+' sqm':'—')}${fact('CAM / month',cam?fmt(cam):'—')}${fact('Type',escHtml(p.type||'—'))}
      ${fact('Value',+p.value?fmt(p.value):'—')}${fact('Gross yield',pct((+p.rent||0)*12,p.value))}${fact('Net '+yr,`<span style="color:${yIn-yOut>=0?'var(--green)':'var(--red)'}">${fmt(yIn-yOut)}</span>`)}
    </dl></div>

    <div class="dsec"><div class="dsec-title">Tenant ${t?`<button class="box-link edit-only" onclick="openModal('ten','${escHtml(t.id)}')">Edit</button>`:''}</div>
      ${t?`<div style="display:flex;gap:12px;align-items:center">${avatar(t.name,'lg')}<div style="min-width:0"><div style="font-weight:600;font-size:15px">${escHtml(personName(t.name))}${t.nickname?' <span style="color:var(--muted);font-weight:400">('+escHtml(t.nickname)+')</span>':''}</div>${personLocal(t.name)?`<div class="cell-sub">${escHtml(personLocal(t.name))}</div>`:''}</div></div>
        <div class="contact-line">${t.phone?ICONS.phone.replace('<svg','<svg style="width:14px;height:14px;vertical-align:-2px;color:var(--muted)"')+' '+telLink(t.phone):''}${t.email?mailLink(t.email):''}</div>
        <dl class="dfacts" style="margin-top:12px">${fact('Lease start',fmtD(t.leaseStart))}${fact('Lease end',fmtD(t.leaseEnd)+' '+(daysUntil(t.leaseEnd)!==null&&daysUntil(t.leaseEnd)<=60?daysPill(daysUntil(t.leaseEnd)):''))}${fact('Deposit',fmt(t.deposit))}</dl>
        ${leaseBar(t,'width:100%;margin-top:10px')}`
      :`<div class="dempty">No tenant linked to this unit.</div> <button class="btn btn-secondary btn-sm edit-only" style="margin-top:10px" onclick="openModal('ten',null);setTimeout(()=>{const s=document.getElementById('mf_propId');if(s)s.value='${p.id}'},0)">Add tenant</button>`}
    </div>

    <div class="dsec"><div class="dsec-title">Rent in ${yr} <button class="box-link" onclick="closeDrawer();goTo('cal')">Calendar</button></div>
      <div class="months12">${m12}</div>
      <div class="contact-line" style="color:var(--muted)">Collected ${fmt(yIn)} this year · ${pays.filter(x=>x.status==='Unpaid').length} unpaid record${pays.filter(x=>x.status==='Unpaid').length===1?'':'s'}</div>
    </div>

    <div class="dsec"><div class="dsec-title">Recent payments</div>
      ${pays.length?`<ul class="dlist">${pays.slice(0,6).map(x=>`<li><div class="dl-main"><div>${fmtD(x.due||x.paid)}</div><div class="dl-sub">${x.paid?'Paid '+fmtD(x.paid):'Not paid yet'}${x.notes?' · '+escHtml(x.notes):''}</div></div><div style="display:flex;gap:8px;align-items:center"><strong>${fmt(x.amount)}</strong>${statusBadge(x.status)}</div></li>`).join('')}</ul>`:'<div class="dempty">No payments recorded yet.</div>'}
    </div>

    <div class="dsec"><div class="dsec-title">Repairs</div>
      ${mts.length?`<ul class="dlist">${mts.slice().sort((a,b)=>(a.status==='Resolved')-(b.status==='Resolved')).slice(0,6).map(m=>`<li><div class="dl-main"><div>${escHtml(m.issue||'—')}</div><div class="dl-sub">Reported ${fmtD(m.reported)}${m.contractor?' · '+escHtml(m.contractor):''}${m.cost?' · '+fmt(m.cost):''}</div></div>${statusBadge(m.status)}</li>`).join('')}</ul>`:'<div class="dempty">No repairs logged.</div>'}
    </div>

    <div class="dsec"><div class="dsec-title">Expenses <span class="box-sub" style="margin-left:auto">${fmt(yOut)} in ${yr}</span></div>
      ${exps.length?`<ul class="dlist">${exps.slice(0,6).map(e=>`<li><div class="dl-main"><div>${escHtml(e.desc||e.category)}</div><div class="dl-sub">${escHtml(e.category||'')} · ${fmtD(e.date)}</div></div><strong>${fmt(e.amount)}</strong></li>`).join('')}</ul>`:'<div class="dempty">No expenses logged.</div>'}
    </div>

    ${dates.length?`<div class="dsec"><div class="dsec-title">Coming up</div><ul class="dlist">${dates.slice(0,5).map(k=>`<li><div class="dl-main"><div>${escHtml(k.desc||k.type)}</div><div class="dl-sub">${escHtml(k.type)} · ${fmtD(k.date)}</div></div>${daysPill(daysUntil(k.date))}</li>`).join('')}</ul></div>`:''}

    <div class="dsec"><div class="dsec-title">Documents and contracts</div>
      ${docs.length||cons.length?`<ul class="dlist">${docs.map(d=>`<li><div class="dl-main"><div>${escHtml(d.type)}</div><div class="dl-sub">${d.expiry?'Expires '+fmtD(d.expiry):'No expiry'}</div></div>${PM.files()[d.id]?`<button class="btn btn-secondary btn-xs" onclick="viewFile('${escHtml(d.id)}')">View</button>`:'<span class="dl-sub">No file</span>'}</li>`).join('')}${cons.map(c=>`<li><div class="dl-main"><div>${escHtml(c.type)}</div><div class="dl-sub">${fmtD(c.start)} – ${fmtD(c.end)}</div></div>${PM.files()[c.id]?`<button class="btn btn-secondary btn-xs" onclick="viewFile('${escHtml(c.id)}')">View</button>`:statusBadge(c.status)}</li>`).join('')}</ul>`:'<div class="dempty">Nothing filed for this unit.</div>'}
    </div>

    ${loans.length?`<div class="dsec"><div class="dsec-title">Loan</div><ul class="dlist">${loans.map(l=>`<li><div class="dl-main"><div>${escHtml(l.bank||'Loan')} · ${l.rate||0}%</div><div class="dl-sub">${fmt(l.monthly)} a month · ends ${fmtD(l.end)}</div></div><strong>${fmt(l.balance)} left</strong></li>`).join('')}</ul></div>`:''}

    ${contacts.length?`<div class="dsec"><div class="dsec-title">Contacts</div><ul class="dlist">${contacts.map(c=>`<li><div class="dl-main"><div>${escHtml(c.name)}</div><div class="dl-sub">${escHtml(c.role||'')}${c.company?' · '+escHtml(c.company):''}</div></div>${telLink(c.phone)}</li>`).join('')}</ul></div>`:''}
  `;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer').setAttribute('aria-hidden','false');
  document.getElementById('drawer-overlay').classList.add('open');
}
function closeDrawer(){
  _drawerId=null;
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer').setAttribute('aria-hidden','true');
  document.getElementById('drawer-overlay').classList.remove('open');
}

/* ══ GLOBAL SEARCH ══ */
(function(){
  const input=document.getElementById('gsearch-input');
  const box=document.getElementById('gsearch-results');
  if(!input)return;
  let sel=0, results=[];
  function run(){
    const q=input.value.trim().toLowerCase();
    if(!q){box.classList.remove('open');return;}
    const has=(...v)=>v.some(x=>String(x||'').toLowerCase().includes(q));
    results=[];
    getData('properties').filter(p=>has(p.name,p.id,p.address)).slice(0,6).forEach(p=>results.push({g:'Units',title:unitLabel(p),sub:p.id+' · '+fmt(p.rent)+' · '+p.status,run:()=>openProp(p.id)}));
    getData('tenants').filter(t=>has(t.name,t.nickname,t.id,t.phone,t.email)).slice(0,6).forEach(t=>results.push({g:'Tenants',title:personName(t.name),sub:unitLabelById(t.propId)+(t.phone?' · '+t.phone:''),run:()=>t.propId&&unitById(t.propId)?openProp(t.propId):openModal('ten',t.id)}));
    getData('contacts').filter(c=>has(c.name,c.role,c.company,c.phone)).slice(0,4).forEach(c=>results.push({g:'Contacts',title:c.name,sub:[c.role,c.company,c.phone].filter(Boolean).join(' · '),run:()=>{document.getElementById('contacts-q').value=c.name;goTo('contacts');}}));
    getData('contractors').filter(c=>has(c.name,c.company,c.specialty)).slice(0,4).forEach(c=>results.push({g:'Contractors',title:c.name,sub:[c.specialty,c.company,c.phone].filter(Boolean).join(' · '),run:()=>goTo('contractors')}));
    sel=0;
    let last='';
    box.innerHTML=results.length?results.map((r,i)=>{const head=r.g!==last?`<div class="gs-group">${r.g}</div>`:'';last=r.g;return head+`<button type="button" class="gs-item${i===0?' sel':''}" data-i="${i}"><div class="gs-item-main"><div class="gs-item-title">${escHtml(r.title)}</div><div class="gs-item-sub">${escHtml(r.sub)}</div></div></button>`;}).join(''):`<div class="gs-empty">Nothing matches “${escHtml(input.value)}”.</div>`;
    box.classList.add('open');
  }
  function pick(i){const r=results[i];if(!r)return;box.classList.remove('open');input.value='';input.blur();r.run();}
  input.addEventListener('input',run);
  input.addEventListener('focus',()=>{if(input.value)run();});
  input.addEventListener('keydown',e=>{
    const items=box.querySelectorAll('.gs-item');
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!items.length)return;sel=(sel+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items.forEach((x,i)=>x.classList.toggle('sel',i===sel));items[sel].scrollIntoView({block:'nearest'});}
    else if(e.key==='Enter'){e.preventDefault();pick(sel);}
    else if(e.key==='Escape'){box.classList.remove('open');input.blur();}
  });
  box.addEventListener('mousedown',e=>{const b=e.target.closest('.gs-item');if(b){e.preventDefault();pick(+b.dataset.i);}});
  input.addEventListener('blur',()=>setTimeout(()=>box.classList.remove('open'),120));
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&!/^(INPUT|SELECT|TEXTAREA)$/.test((document.activeElement||{}).tagName)){e.preventDefault();input.focus();}
    if(e.key==='Escape')closeDrawer();
  });
})();

/* ══ PROPERTIES ══ */
let _propView=(()=>{try{return localStorage.getItem('pm-propview')||'cards'}catch(e){return'cards'}})();
function setPropView(v){
  _propView=v;try{localStorage.setItem('pm-propview',v)}catch(e){}
  renderProps();
}
const HERO_GRADS=[['#2f55e4','#1b2f8a'],['#13794a','#0b4a2d'],['#b4480f','#6e2a07'],['#5b4bb7','#2f2575'],['#0d6e7d','#063e47'],['#a3366b','#5c1a3b'],['#3f5d7d','#1d2f43'],['#6b5a10','#3a3005']];
function heroBg(p){const s=splitUnit(p.name).building;let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))>>>0;const g=HERO_GRADS[h%HERO_GRADS.length];return`linear-gradient(135deg,${g[0]},${g[1]})`;}

function renderProps(){
  const props=getData('properties');
  const q=(document.getElementById('props-q').value||'').toLowerCase();
  const list=q?props.filter(p=>String(p.name).toLowerCase().includes(q)||String(p.id).toLowerCase().includes(q)||String(p.address||'').toLowerCase().includes(q)||(tenantOf(p.id)&&String(tenantOf(p.id).name).toLowerCase().includes(q))):props;
  document.getElementById('pv-cards').classList.toggle('on',_propView==='cards');
  document.getElementById('pv-table').classList.toggle('on',_propView==='table');
  document.getElementById('props-grid').style.display=_propView==='cards'?'':'none';
  document.getElementById('props-table').style.display=_propView==='table'?'':'none';

  // Summary strip
  const occ=props.filter(p=>p.status==='Occupied');
  const roll=occ.reduce((s,p)=>s+(+p.rent||0),0);
  const valued=props.filter(p=>+p.value>0);
  const totVal=props.reduce((s,p)=>s+(+p.value||0),0);
  const avgY=valued.length?(valued.reduce((s,p)=>s+((+p.rent||0)*12/(+p.value)*100),0)/valued.length).toFixed(2)+'%':'—';
  const paidNow=occ.filter(p=>rentStatus(p).state==='paid').length;
  renderStrip('props-strip',[
    {lbl:'Units',val:props.length,sub:`${occ.length} let · ${props.length-occ.length} vacant`},
    {lbl:'Rent roll',val:fmt(roll),sub:'per month',cls:'accent'},
    {lbl:`Paid for ${MONTHS_S[today().getMonth()]}`,val:`${paidNow} / ${occ.length}`,sub:occ.length-paidNow?`${occ.length-paidNow} still to collect`:'All collected',cls:paidNow===occ.length&&occ.length?'green':''},
    {lbl:'Portfolio value',val:totVal?fmtK(totVal):'—',sub:totVal?'from '+valued.length+' valued unit'+(valued.length===1?'':'s'):'Add values to see yield'},
    {lbl:'Average yield',val:avgY,sub:'gross, valued units'},
  ]);

  // Cards
  const grid=document.getElementById('props-grid');
  if(!list.length){grid.innerHTML='<div class="box" style="grid-column:1/-1;padding:36px;text-align:center;color:var(--muted)">No units match your search.</div>';}
  else grid.innerHTML=list.map(p=>{
    const s=splitUnit(p.name), t=tenantOf(p.id), rs=rentStatus(p);
    const cam=(+p.sqm||0)*(+p.camRate||0);
    const left=t?daysUntil(t.leaseEnd):null;
    return`<article class="pcard">
      <div class="pcard-hero" style="background:${heroBg(p)}" onclick="openProp('${p.id}')">
        <div class="pcard-hero-top"><span class="pcard-id">${escHtml(p.id)}</span><span class="pcard-status ${p.status==='Occupied'?'':'vac'}">${escHtml(p.status)}</span></div>
        <div class="pcard-unit">${escHtml(p.type||'')}${+p.sqm?' · '+p.sqm+' sqm':''}${s.unit?' · '+escHtml(s.unit):''}</div>
      </div>
      <div class="pcard-body" onclick="openProp('${p.id}')">
        <div class="pcard-name">${escHtml(s.building)}${s.unit?` <span style="color:var(--muted);font-weight:500">${escHtml(s.unit)}</span>`:''}</div>
        <div class="pcard-rent"><strong>${fmt(p.rent)}</strong><span>a month</span></div>
        ${t?`<div class="pcard-tenant">${avatar(t.name)}<div class="pcard-tenant-text"><div class="pcard-tenant-name">${escHtml(personName(t.name))}</div><div class="pcard-tenant-sub">Lease to ${fmtD(t.leaseEnd)}${left!==null&&left<=60?' · '+(left<0?'ended':left+'d left'):''}</div>${leaseBar(t,'width:100%')}</div></div>`
           :`<div class="pcard-tenant"><span class="avatar" style="background:var(--border2)">–</span><div class="pcard-tenant-text"><div class="pcard-tenant-name" style="color:var(--muted)">No tenant</div><div class="pcard-tenant-sub">Ready to let</div></div></div>`}
        <dl class="pcard-facts">
          <div><dt>Rent due</dt><dd>${+p.rentDueDay?'Day '+p.rentDueDay:'—'}</dd></div>
          <div><dt>Value</dt><dd>${+p.value?fmtK(p.value):'—'}</dd></div>
          <div><dt>Yield</dt><dd>${pct((+p.rent||0)*12,p.value)}</dd></div>
          <div><dt>CAM / month</dt><dd>${cam?fmt(cam):'—'}</dd></div>
        </dl>
        ${p.status==='Occupied'?`<div class="pcard-month"><span style="color:var(--muted)">${MONTHS_L[today().getMonth()]}</span>${rentPill(rs)}</div>`:''}
      </div>
      <div class="pcard-foot">
        <button class="btn btn-secondary btn-sm" onclick="openProp('${p.id}')">Details</button>
        ${p.status==='Occupied'&&rs.state!=='paid'?`<button class="btn btn-pay btn-sm" onclick="quickPayModal('${p.id}')">Mark paid</button>`:`<button class="btn btn-secondary btn-sm edit-only" onclick="openModal('prop','${p.id}')">Edit</button>`}
      </div>
    </article>`;
  }).join('');

  // Table
  const tbody=document.getElementById('props-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="13">No units match your search.</td></tr>';}
  else tbody.innerHTML=list.map(p=>{
    const yld=pct((+p.rent||0)*12,p.value);
    const payBtn=p.status==='Occupied'?`<button class="btn btn-pay btn-xs" onclick="quickPayModal('${p.id}')">Log rent</button>`:`<span style="color:var(--muted);font-size:12.5px">Vacant</span>`;
    const sqm=+p.sqm||0, camRate=+p.camRate||0, totalCam=sqm*camRate;
    return`<tr>
      <td><span class="id-tag">${escHtml(p.id)}</span></td>
      <td class="cell-link" onclick="openProp('${p.id}')"><div class="cell-main">${escHtml(p.name)}</div></td>
      <td class="wrap">${escHtml(p.address||'')}</td>
      <td>${escHtml(p.type||'')}</td>
      <td>${fmt(p.rent)}</td>
      <td>${statusBadge(p.status)}</td>
      <td>${+p.value?fmt(p.value):'—'}</td>
      <td>${yld}</td>
      <td>${sqm?sqm+' sqm':'—'}</td>
      <td>${camRate?'฿'+camRate:'—'}</td>
      <td>${totalCam?fmt(totalCam):'—'}</td>
      <td>${payBtn}</td>
      <td>${actBtns('prop','properties',p.id,'renderProps')}</td>
    </tr>`;
  }).join('');
  document.getElementById('props-total-rent').textContent=fmt(roll);
  document.getElementById('props-occ').textContent=occ.length+'/'+props.length+' let';
  document.getElementById('props-total-val').textContent=totVal?fmt(totVal):'—';
  document.getElementById('props-avg-yield').textContent=avgY;
  const totalCamAll=props.reduce((s,p)=>s+((+p.sqm||0)*(+p.camRate||0)),0);
  document.getElementById('props-total-cam').textContent=totalCamAll?fmt(totalCamAll):'—';
  initTableSort('props-body');
}

/* ══ RECURRING FEE AUTO-LOGGER ══ */
function autoLogRecurringFees(){
  const now      = new Date();
  const year     = now.getFullYear();
  const month    = now.getMonth(); // 0-indexed
  const props    = getData('properties');
  let expenses   = getData('expenses');
  let changed    = false;

  // Which quarters have started this year? (Q1=Jan, Q2=Apr, Q3=Jul, Q4=Oct)
  const qStarts  = [0, 3, 6, 9]; // month index of each quarter start
  const passedQs = qStarts.map((m,i)=>({q:i+1, startMonth:m, dateStr:`${year}-${String(m+1).padStart(2,'0')}-01`}))
                          .filter(q => month >= q.startMonth);

  props.forEach(p => {
    const sqm     = +p.sqm     || 0;
    const camRate = +p.camRate || 0;
    const rent    = +p.rent    || 0;

    /* ── QUARTERLY CAM ── */
    if(sqm > 0 && camRate > 0){
      const quarterlyCAM = sqm * camRate * 3;
      passedQs.forEach(({q, dateStr}) => {
        const camId = `AUTO_CAM_${year}_Q${q}_${p.id}`;
        if(!expenses.find(e => e.id === camId)){
          expenses.push({
            id:        camId,
            propId:    p.id,
            date:      dateStr,
            category:  'CAM Fee',
            desc:       `Q${q} ${year} CAM Fee (${sqm} sqm × ฿${camRate}/sqm × 3 mo)`,
            amount:    quarterlyCAM,
            budget:    quarterlyCAM,
            recurring: 'Yes'
          });
          changed = true;
        }
      });
    }

    /* ── ANNUAL AGENT FEE (1 month rent) ── */
    if(rent > 0 && p.status === 'Occupied'){
      const agentId = `AUTO_AGNT_${year}_${p.id}`;
      if(!expenses.find(e => e.id === agentId)){
        expenses.push({
          id:        agentId,
          propId:    p.id,
          date:      `${year}-01-01`,
          category:  'Agent Fee',
          desc:       `${year} Agent Fee — 1 month rent (1 of 12 months allocated)`,
          amount:    rent,
          budget:    rent,
          recurring: 'Yes'
        });
        changed = true;
      }
    }
  });

  if(changed) setData('expenses', expenses);
}

/* ══ GENERATE 2026 PAYMENTS ══ */
function openGenerateModal(){
  const props   = getData('properties').filter(p=>p.status==='Occupied');
  const tenants = getData('tenants');
  const payments= getData('payments');

  // Build preview rows from LIVE data
  const months = [
    {label:'January',  year:2026, mo:1},
    {label:'February', year:2026, mo:2},
    {label:'March',    year:2026, mo:3},
    {label:'April',    year:2026, mo:4},
    {label:'May',      year:2026, mo:5},
  ];

  // For each occupied property, find its tenant
  const rows = props.map(p=>{
    const t = tenants.find(x=>x.propId===p.id);
    return {prop:p, tenant:t};
  }).filter(r=>r.tenant);

  // Count already-existing 2026 records
  const existing2026 = payments.filter(py=>py.due&&py.due.startsWith('2026')).length;

  const previewHtml = `
    <div style="background:var(--surface3);border-radius:var(--r-sm);overflow:hidden;margin-bottom:16px">
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead>
          <tr style="background:var(--surface2)">
            <th style="padding:8px 12px;text-align:left;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;border-bottom:1px solid var(--border)">Property</th>
            <th style="padding:8px 12px;text-align:left;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;border-bottom:1px solid var(--border)">Tenant</th>
            <th style="padding:8px 12px;text-align:right;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;border-bottom:1px solid var(--border)">Monthly Rent</th>
            <th style="padding:8px 12px;text-align:center;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;border-bottom:1px solid var(--border)">Months × 5</th>
            <th style="padding:8px 12px;text-align:right;font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;border-bottom:1px solid var(--border)">Total</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r=>`
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid var(--border);color:var(--text)">${r.prop.name}</td>
              <td style="padding:8px 12px;border-bottom:1px solid var(--border);color:var(--text-2)">${r.tenant.name}</td>
              <td style="padding:8px 12px;border-bottom:1px solid var(--border);text-align:right;color:var(--text)">${fmt(r.prop.rent)}</td>
              <td style="padding:8px 12px;border-bottom:1px solid var(--border);text-align:center;color:var(--green);font-weight:600">Jan–May ✓</td>
              <td style="padding:8px 12px;border-bottom:1px solid var(--border);text-align:right;font-weight:600;color:var(--green)">${fmt(r.prop.rent*5)}</td>
            </tr>`).join('')}
          <tr style="background:var(--accent-bg)">
            <td colspan="4" style="padding:9px 12px;font-weight:600;color:var(--accent);font-size:12px">Grand Total (${rows.length} properties × 5 months)</td>
            <td style="padding:9px 12px;text-align:right;font-weight:700;color:var(--accent);font-size:13px">${fmt(rows.reduce((s,r)=>s+r.prop.rent*5,0))}</td>
          </tr>
        </tbody>
      </table>
    </div>
    ${existing2026>0?`<div class="alert yellow" style="margin-bottom:14px">${existing2026} payment record(s) for 2026 already exist. These will be removed and replaced with fresh records.</div>`:''}
    <p style="font-size:12px;color:var(--text-2);margin-bottom:14px">Each property gets one <span style="color:var(--green);font-weight:600">Paid</span> record per month, due on the 1st (or 15th for Ploy Suwan / Asoke), using your <strong>live rent amounts</strong>.</p>
    <label style="display:flex;align-items:center;gap:9px;font-size:12.5px;color:var(--text-2);cursor:pointer">
      <input type="checkbox" id="gen-inc" checked style="width:15px;height:15px;accent-color:var(--accent)">
      Also update 2026 income summary with these totals
    </label>
  `;

  document.getElementById('modal-title').textContent='Generate Jan–May 2026 Payments';
  document.getElementById('modal-body').innerHTML=previewHtml;
  document.getElementById('modal-save').textContent='✓ Generate All Payments';
  document.getElementById('modal-save').onclick=()=>executeGenerate(rows, months);
  document.getElementById('modal-overlay').classList.add('open');
}

function executeGenerate(rows, months){
  const updateInc = document.getElementById('gen-inc').checked;
  const payments  = getData('payments');

  // Remove any existing 2026 records to avoid duplicates
  const kept = payments.filter(py=>!(py.due&&py.due.startsWith('2026')));

  // Build 30 new Paid records from live data
  const newRecords = [];
  months.forEach(({year, mo})=>{
    rows.forEach(({prop, tenant}, idx)=>{
      const mm   = String(mo).padStart(2,'0');
      const due  = `${year}-${mm}-01`;
      const paid = `${year}-${mm}-0${Math.min(1+idx%3,5)}`; // slight variation for realism
      const id   = `RP_${year}${mm}_${prop.id}`;
      newRecords.push({id, tenantId:tenant.id, propId:prop.id, due, amount:prop.rent, paid, status:'Paid'});
    });
  });

  setData('payments', [...kept, ...newRecords]);

  // Update income y2026 from live rent amounts
  if(updateInc){
    const inc = getData('income');
    if(!inc.y2026){
      inc.y2026 = {rental:Array(12).fill(0), other:Array(12).fill(0), expenses:Array(12).fill(0)};
    }
    const monthlyTotal = rows.reduce((s,r)=>s+r.prop.rent, 0);
    months.forEach(({mo})=>{ inc.y2026.rental[mo-1] = monthlyTotal; });
    setData('income', inc);
  }

  closeModal();
  document.getElementById('modal-save').textContent='Save';
  document.getElementById('modal-save').onclick=null;

  toast(`Generated ${newRecords.length} paid records for Jan–May 2026`,'success');
  renderDashboard();
  renderPayments();
}

/* ══ QUICK PAY ══ */
function quickPayModal(propId){
  const p=unitById(propId);
  if(!p){toast('Unit not found','error');return;}
  const tenant=tenantOf(propId);
  if(!tenant){toast('No tenant linked to '+unitLabel(p)+' yet','error');return;}

  // Default to the earliest month this year that isn't paid yet (up to this month)
  const now=today();
  let target=new Date(now.getFullYear(),now.getMonth(),1);
  for(let m=0;m<=now.getMonth();m++){const r=rentStatus(p,now.getFullYear(),m);if(r.state==='late'){target=new Date(now.getFullYear(),m,1);break;}}
  if(rentStatus(p,target.getFullYear(),target.getMonth()).state==='paid'){target=new Date(now.getFullYear(),now.getMonth()+1,1);}
  const ymVal=target.getFullYear()+'-'+String(target.getMonth()+1).padStart(2,'0');

  document.getElementById('modal-title').textContent='Log rent received';
  document.getElementById('modal-body').innerHTML=`
    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;gap:12px">
      <div style="display:flex;gap:12px;align-items:center;min-width:0">${avatar(tenant.name)}
        <div style="min-width:0"><div style="font-size:14px;font-weight:600">${escHtml(unitLabel(p))}</div>
        <div style="font-size:13px;color:var(--text-2)">${escHtml(personName(tenant.name))}${tenant.phone?' · '+escHtml(tenant.phone):''}</div></div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:22px;font-weight:600;letter-spacing:-0.02em">${fmt(p.rent)}</div>
        <div style="font-size:12px;color:var(--muted)">a month · due day ${+p.rentDueDay||1}</div>
      </div>
    </div>
    <div id="qp-warn"></div>
    <div class="fgrid">
      <div class="fg"><label for="qp-month">Rent for</label><input type="month" id="qp-month" value="${ymVal}" oninput="qpCheck('${p.id}')"></div>
      <div class="fg"><label for="qp-date">Received on</label><input type="date" id="qp-date" value="${isoDate(now)}"></div>
      <div class="fg"><label for="qp-amount">Amount (฿)</label><input type="number" id="qp-amount" value="${+p.rent||0}" min="0"></div>
      <div class="fg"><label for="qp-notes">Reference (optional)</label><input type="text" id="qp-notes" placeholder="e.g. transfer ref 4521"></div>
    </div>
    <label style="display:flex;align-items:center;gap:9px;margin-top:16px;font-size:13px;color:var(--text-2);cursor:pointer;user-select:none">
      <input type="checkbox" id="qp-inc" checked style="width:16px;height:16px;accent-color:var(--accent)">
      Also add it to the income summary
    </label>
  `;
  qpCheck(p.id);
  const save=document.getElementById('modal-save');
  save.textContent='Confirm payment';
  save.onclick=()=>executeQuickPay(propId,tenant.id);
  document.getElementById('modal-overlay').classList.add('open');
}
function qpCheck(propId){
  const p=unitById(propId), v=(document.getElementById('qp-month')||{}).value;
  const w=document.getElementById('qp-warn'); if(!p||!w||!v)return;
  const [y,m]=v.split('-').map(Number);
  const r=rentStatus(p,y,m-1);
  w.innerHTML=r.state==='paid'?`<div class="alert yellow" style="margin-bottom:14px">${MONTHS_L[m-1]} ${y} is already marked paid. Saving adds a second payment.</div>`
    :(r.rec&&r.rec.status==='Unpaid'?`<div class="alert blue" style="margin-bottom:14px">This will mark the unpaid record ${escHtml(r.rec.id)} as paid.</div>`:'');
}

function executeQuickPay(propId,tenantId){
  const p=unitById(propId)||{name:propId};
  const monthVal=document.getElementById('qp-month').value;
  const dateVal=document.getElementById('qp-date').value;
  const amountVal=+document.getElementById('qp-amount').value||0;
  const updateInc=document.getElementById('qp-inc').checked;
  const notes=document.getElementById('qp-notes').value.trim();

  if(!monthVal){toast('Pick which month the rent is for','error');return;}
  if(!dateVal){toast('Enter the date you received it','error');return;}
  if(!amountVal){toast('Enter the amount received','error');return;}

  const [y,m]=monthVal.split('-').map(Number);
  const due=monthVal+'-'+String(Math.min(28,Math.max(1,+p.rentDueDay||1))).padStart(2,'0');
  const payments=getData('payments');
  const r=rentStatus(p,y,m-1);
  const open=r.state!=='paid'&&r.rec&&r.rec.status!=='Paid'?payments.find(x=>x.id===r.rec.id):null;
  if(open){
    Object.assign(open,{status:'Paid',paid:dateVal,amount:amountVal,notes:notes||open.notes||''});
  } else {
    payments.push({id:nextSeqId('payments','RP',3),tenantId,propId,due,amount:amountVal,paid:dateVal,status:'Paid',notes});
  }
  setData('payments',payments);

  if(updateInc){
    const yr='y'+y, mo=m-1;
    const inc=getData('income');
    if(!inc[yr])inc[yr]={rental:Array(12).fill(0),other:Array(12).fill(0),expenses:Array(12).fill(0)};
    inc[yr].rental[mo]=(+inc[yr].rental[mo]||0)+amountVal;
    setData('income',inc);
  }

  closeModal();
  document.getElementById('modal-save').textContent='Save';
  document.getElementById('modal-save').onclick=null;
  toast(`${MONTHS_L[m-1]} rent logged · ${unitLabel(p)} · ${fmt(amountVal)}`,'success');

  renderDashboard();
  const t=activePanel(); if(t!=='dash')renderPanel(t);
}

/* ══ TENANTS ══ */
function renderTenants(){
  const list=getData('tenants');
  const q=(document.getElementById('ten-q').value||'').toLowerCase();
  const filtered=q?list.filter(t=>[t.name,t.id,t.nickname,t.phone,t.email,unitLabelById(t.propId)].some(v=>String(v||'').toLowerCase().includes(q))):list;
  const active=list.filter(t=>{const d=daysUntil(t.leaseEnd);return d===null||d>=0;});
  const ending=list.filter(t=>{const d=daysUntil(t.leaseEnd);return d!==null&&d>=0&&d<=60;});
  const ended=list.filter(t=>{const d=daysUntil(t.leaseEnd);return d!==null&&d<0;});
  const deposits=active.reduce((s,t)=>s+(+t.deposit||0),0);
  renderStrip('ten-strip',[
    {lbl:'Tenants',val:list.length,sub:`${active.length} on a current lease`},
    {lbl:'Ending in 60 days',val:ending.length,sub:ending.length?ending.map(t=>personName(t.name).split(' ')[0]).join(', '):'None',cls:ending.length?'orange':''},
    {lbl:'Lease ended',val:ended.length,sub:ended.length?'Renew or mark as moved out':'None',cls:ended.length?'red':''},
    {lbl:'Deposits held',val:fmt(deposits),sub:'current leases'},
  ]);
  const tbody=document.getElementById('ten-body');
  if(!filtered.length){tbody.innerHTML='<tr class="empty"><td colspan="9">No tenants found.</td></tr>';return;}
  tbody.innerHTML=filtered.slice().sort((a,b)=>String(a.leaseEnd||'9').localeCompare(String(b.leaseEnd||'9'))).map(t=>{
    const p=unitById(t.propId);
    const d=daysUntil(t.leaseEnd);
    const depBadge=t.depositStatus==='Pending'?'<span class="badge b-yellow">Pending</span>':t.depositStatus==='Refunded'?'<span class="badge b-gray">Refunded</span>':'<span class="badge b-blue">Held</span>';
    const local=personLocal(t.name);
    return`<tr>
      <td class="cell-link" onclick="${p?`openProp('${p.id}')`:`openModal('ten','${escHtml(t.id)}')`}"><div style="display:flex;gap:10px;align-items:center">${avatar(t.name)}<div style="min-width:0"><div class="cell-main">${escHtml(personName(t.name))}${t.nickname?' <span class="cell-sub">('+escHtml(t.nickname)+')</span>':''}</div><div class="cell-sub">${local?escHtml(local)+' · ':''}${escHtml(t.id)}</div></div></div></td>
      <td class="wrap" style="min-width:160px">${p?escHtml(unitLabel(p)):escHtml(t.propId||'—')}</td>
      <td>${telLink(t.phone)}${t.email?`<div class="cell-sub">${mailLink(t.email)}</div>`:''}</td>
      <td><div style="display:flex;gap:8px;align-items:center">${fmtD(t.leaseStart)} – ${fmtD(t.leaseEnd)} ${d===null?'':d<0?`<span class="dpill dpill-red">ended</span>`:d<=60?daysPill(d):''}</div>${leaseBar(t,'width:100%')}</td>
      <td>${fmt(t.deposit)}</td>
      <td>${depBadge}</td>
      <td><span class="stars">${stars(+t.rating)}</span></td>
      <td>${t.checklist==='Yes'?'<span class="badge b-green">Done</span>':'<span class="badge b-gray">Not yet</span>'}</td>
      <td>${actBtns('ten','tenants',t.id,'renderTenants')}</td></tr>`;
  }).join('');
  initTableSort('ten-body');
}

/* ══ RENT PAYMENTS ══ */
const lateFeeOf=p=>{const ov=p.status==='Unpaid'&&p.due?Math.max(0,Math.round((today()-new Date(p.due))/86400000)):0;return{ov,fee:ov>5?ov*100:0};};
function renderPayments(){
  let list=getData('payments');
  const allList=list;
  const flt=document.getElementById('rent-filter').value;
  const q=(document.getElementById('rent-q').value||'').toLowerCase();
  if(flt!=='all')list=list.filter(p=>p.status===flt);
  if(q)list=list.filter(p=>[p.tenantId,p.propId,tenName(p.tenantId),unitLabelById(p.propId),p.notes].some(v=>String(v||'').toLowerCase().includes(q)));
  const tenants=getData('tenants');
  const now=today(), ym=isoDate(now).slice(0,7), yr=String(now.getFullYear());
  const occ=getData('properties').filter(p=>p.status==='Occupied');
  const paidThisMonth=occ.filter(p=>rentStatus(p).state==='paid');
  const collectedM=paidThisMonth.reduce((s,p)=>s+(rentStatus(p).amount||+p.rent||0),0);
  const unpaid=allList.filter(p=>p.status==='Unpaid');
  const ytd=allList.filter(p=>p.status==='Paid'&&String(p.due||p.paid||'').startsWith(yr)).reduce((s,p)=>s+(+p.amount||0),0);
  const totalFees=allList.reduce((s,p)=>s+lateFeeOf(p).fee,0);
  const onTime=allList.filter(p=>p.status==='Paid'&&p.paid&&p.due&&p.paid<=p.due).length, paidWithDates=allList.filter(p=>p.status==='Paid'&&p.paid&&p.due).length;
  renderStrip('rent-strip',[
    {lbl:`Collected in ${MONTHS_S[now.getMonth()]}`,val:fmt(collectedM),sub:`${paidThisMonth.length} of ${occ.length} units paid`,cls:'green'},
    {lbl:'Unpaid records',val:unpaid.length,sub:unpaid.length?fmt(unpaid.reduce((s,p)=>s+(+p.amount||0),0))+' outstanding':'Nothing owed',cls:unpaid.length?'red':''},
    {lbl:'Late fees',val:totalFees?fmt(totalFees):'—',sub:'฿100 a day after 5 days'},
    {lbl:`Collected in ${yr}`,val:fmt(ytd),sub:'paid records this year',cls:'accent'},
    {lbl:'Paid on time',val:paidWithDates?Math.round(onTime/paidWithDates*100)+'%':'—',sub:paidWithDates?`${onTime} of ${paidWithDates} payments`:'No history yet'},
  ]);
  const tbody=document.getElementById('rent-body');
  document.getElementById('rent-total').textContent=fmt(allList.reduce((s,p)=>s+(+p.amount||0),0));
  document.getElementById('rent-unpaid-count').textContent=unpaid.length+' unpaid ('+fmt(unpaid.reduce((s,p)=>s+(+p.amount||0),0))+')';
  document.getElementById('rent-fees').textContent=totalFees?fmt(totalFees):'—';
  if(!list.length){tbody.innerHTML=`<tr class="empty"><td colspan="10">${allList.length?'No payments match.':'No payments yet. Use “Log rent received” when a tenant pays.'}</td></tr>`;renderGoal();renderCalendar();return;}
  tbody.innerHTML=list.slice().sort((a,b)=>String(b.due||b.paid||'').localeCompare(String(a.due||a.paid||''))).map(p=>{
    const t=tenants.find(x=>x.id===p.tenantId);
    const {ov,fee}=lateFeeOf(p);
    let ptBadge='';
    if(p.status==='Paid'&&p.paid&&p.due){const diff=Math.round((new Date(p.due)-new Date(p.paid))/86400000);ptBadge=diff>0?' <span class="pt-badge pt-early">'+diff+'d early</span>':(diff<0?' <span class="pt-badge pt-late">'+(-diff)+'d late</span>':' <span class="pt-badge pt-ontime">on time</span>');}
    return`<tr><td><span class="id-tag">${escHtml(p.id)}</span></td><td>${t?escHtml(personName(t.name)):escHtml(p.tenantId||'—')}</td><td>${escHtml(unitLabelById(p.propId))}</td><td>${fmtD(p.due)}</td><td class="num"><strong>${fmt(p.amount)}</strong></td><td>${p.paid?fmtD(p.paid)+ptBadge:'—'}</td><td>${statusBadge(p.status)}</td><td>${ov?`<span style="color:var(--red);font-weight:600">${ov}d</span>`:'—'}</td><td class="num">${fee?fmt(fee):'—'}</td><td>${actBtns('pay','payments',p.id,'renderPayments')}</td></tr>`;
  }).join('');
  initTableSort('rent-body');renderGoal();renderCalendar();
}

/* ══ MAINTENANCE ══ */
function renderMaint(){
  let list=getData('maintenance');
  const flt=document.getElementById('maint-filter').value;
  if(flt==='open')list=list.filter(m=>m.status!=='Resolved');
  else if(flt==='Resolved')list=list.filter(m=>m.status==='Resolved');
  const all=getData('maintenance');
  const yr=String(today().getFullYear());
  const open=all.filter(m=>m.status==='Open'), prog=all.filter(m=>m.status==='In Progress'), done=all.filter(m=>m.status==='Resolved');
  const costY=all.filter(m=>String(m.reported||'').startsWith(yr)).reduce((s,m)=>s+(+m.cost||0),0);
  const fixDays=done.filter(m=>m.resolved&&m.reported).map(m=>Math.round((new Date(m.resolved)-new Date(m.reported))/86400000));
  renderStrip('maint-strip',[
    {lbl:'Open',val:open.length,sub:'not started',cls:open.length?'orange':''},
    {lbl:'In progress',val:prog.length,sub:'being fixed'},
    {lbl:'Resolved',val:done.length,sub:'all time',cls:'green'},
    {lbl:`Repair cost ${yr}`,val:fmt(costY),sub:'reported this year'},
    {lbl:'Average fix time',val:fixDays.length?Math.round(fixDays.reduce((a,b)=>a+b,0)/fixDays.length)+' days':'—',sub:'resolved issues'},
  ]);
  const tbody=document.getElementById('maint-body');
  if(!list.length){tbody.innerHTML=`<tr class="empty"><td colspan="11">${flt==='open'?'No open issues. Nice.':'No issues found.'}</td></tr>`;return;}
  tbody.innerHTML=list.map(m=>{
    const repeat=all.filter(x=>x.propId===m.propId&&x.issue===m.issue).length>1;
    const dOpen=m.status==='Resolved'&&m.resolved?Math.round((new Date(m.resolved)-new Date(m.reported))/86400000):Math.round((today()-new Date(m.reported))/86400000);
    return`<tr><td><span class="id-tag">${escHtml(m.id)}</span></td><td class="cell-link" onclick="openProp('${escHtml(m.propId)}')"><span class="cell-main" style="font-weight:450">${escHtml(unitLabelById(m.propId))}</span></td><td class="wrap"><strong>${escHtml(m.issue||'—')}</strong></td><td>${fmtD(m.reported)}</td><td>${fmtD(m.resolved)}</td><td class="num">${m.cost?fmt(m.cost):'—'}</td><td>${statusBadge(m.status)}</td><td>${isNaN(dOpen)?'—':dOpen+'d'}</td><td>${repeat?'<span class="badge b-orange">Repeat</span>':'—'}</td><td>${escHtml(m.contractor||'—')}</td><td>${actBtns('maint','maintenance',m.id,'renderMaint')}</td></tr>`;
  }).join('');
  initTableSort('maint-body');
}

/* ══ KEY DATES ══ */
function renderDates(){
  const all=getData('keyDates');
  let list=all.slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
  const flt=document.getElementById('dates-filter').value;
  if(flt==='urgent')list=list.filter(k=>{const d=daysUntil(k.date);return d!==null&&(d<0||(d>=0&&d<=k.reminder))});
  else if(flt!=='all')list=list.filter(k=>k.type===flt);
  const over=all.filter(k=>{const d=daysUntil(k.date);return d!==null&&d<0;});
  const soon=all.filter(k=>{const d=daysUntil(k.date);return d!==null&&d>=0&&d<=(+k.reminder||0);});
  const next=all.filter(k=>{const d=daysUntil(k.date);return d!==null&&d>=0;}).sort((a,b)=>new Date(a.date)-new Date(b.date))[0];
  renderStrip('dates-strip',[
    {lbl:'Overdue',val:over.length,sub:'date has passed',cls:over.length?'red':''},
    {lbl:'Due soon',val:soon.length,sub:'inside the reminder window',cls:soon.length?'orange':''},
    {lbl:'Next up',val:next?fmtD(next.date):'—',sub:next?escHtml(next.desc||next.type):'Nothing scheduled'},
    {lbl:'All dates',val:all.length,sub:'lease ends are added for you'},
  ]);
  const tbody=document.getElementById('dates-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="8">No dates to show.</td></tr>';return;}
  tbody.innerHTML=list.map(k=>{
    const d=daysUntil(k.date);
    const st=d===null?'—':d<0?'<span class="badge b-red">Overdue</span>':d<=k.reminder?'<span class="badge b-orange">Due soon</span>':'<span class="badge b-green">OK</span>';
    return`<tr><td><strong>${fmtD(k.date)}</strong></td><td><span class="badge b-blue plain">${escHtml(k.type)}</span></td><td>${escHtml(unitLabelById(k.propId))}</td><td class="wrap">${escHtml(k.desc||'')}</td><td>${k.reminder}d before</td><td>${daysPill(d)}</td><td>${st}</td><td>${actBtns('date','keyDates',k.id,'renderDates')}</td></tr>`;
  }).join('');
  initTableSort('dates-body');
}

/* ══ EXPENSES ══ */
function renderExpenses(){
  const list=getData('expenses');
  const props=getData('properties');
  const sel=document.getElementById('exp-filter');
  if(sel.options.length!==props.length+1){const cur=sel.value;sel.innerHTML='<option value="all">All units</option>'+props.map(p=>`<option value="${escHtml(p.id)}">${escHtml(unitLabel(p))}</option>`).join('');sel.value=[...sel.options].some(o=>o.value===cur)?cur:'all';}
  const flt=sel.value;
  const filtered=flt==='all'?list:list.filter(e=>e.propId===flt);
  const now=today(), yr=String(now.getFullYear()), ym=isoDate(now).slice(0,7);
  const ytd=filtered.filter(e=>String(e.date||'').startsWith(yr));
  const byCat={};ytd.forEach(e=>{byCat[e.category||'Other']=(byCat[e.category||'Other']||0)+(+e.amount||0);});
  const topCat=Object.entries(byCat).sort((a,b)=>b[1]-a[1])[0];
  const over=filtered.filter(e=>(+e.amount||0)>(+e.budget||0)&&+e.budget>0);
  renderStrip('exp-strip',[
    {lbl:`Spent in ${yr}`,val:fmt(ytd.reduce((s,e)=>s+(+e.amount||0),0)),sub:`${ytd.length} expense${ytd.length===1?'':'s'}`,cls:'accent'},
    {lbl:`This month`,val:fmt(filtered.filter(e=>String(e.date||'').startsWith(ym)).reduce((s,e)=>s+(+e.amount||0),0)),sub:MONTHS_L[now.getMonth()]},
    {lbl:'Biggest category',val:topCat?escHtml(topCat[0]):'—',sub:topCat?fmt(topCat[1])+' this year':'No expenses yet'},
    {lbl:'Over budget',val:over.length,sub:over.length?'+'+fmt(over.reduce((s,e)=>s+(+e.amount-+e.budget),0)):'All within budget',cls:over.length?'red':''},
  ]);
  const tbody=document.getElementById('exp-body');
  document.getElementById('exp-total').textContent=fmt(filtered.reduce((s,e)=>s+(+e.amount||0),0));
  document.getElementById('exp-budget').textContent=fmt(filtered.reduce((s,e)=>s+(+e.budget||0),0));
  const v=filtered.reduce((s,e)=>s+(+e.amount-+e.budget||0),0);
  document.getElementById('exp-var').innerHTML=v>0?`<span style="color:var(--red)">+${fmt(v)}</span>`:`<span style="color:var(--green)">${fmt(v)}</span>`;
  if(!filtered.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No expenses yet.</td></tr>';renderGoal();return;}
  tbody.innerHTML=filtered.slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))).map(e=>{
    const ov=(+e.amount||0)-(+e.budget||0);
    const ovCell=ov>0?`<span style="color:var(--red)">+${fmt(ov)}</span>`:ov<0?`<span style="color:var(--green)">${fmt(ov)}</span>`:'—';
    return`<tr><td><span class="id-tag">${escHtml(e.id)}</span></td><td>${escHtml(unitLabelById(e.propId))}</td><td>${fmtD(e.date)}</td><td><span class="badge b-gray plain">${escHtml(e.category||'—')}</span></td><td class="wrap">${escHtml(e.desc||'')}</td><td class="num"><strong>${fmt(e.amount)}</strong></td><td class="num">${fmt(e.budget)}</td><td class="num">${ovCell}</td><td>${e.recurring==='Yes'?'<span class="badge b-gray plain">Recurring</span>':'—'}</td><td>${actBtns('exp','expenses',e.id,'renderExpenses')}</td></tr>`;
  }).join('');
  initTableSort('exp-body');renderGoal();
}

/* ══ INCOME SUMMARY ══ */
function renderIncome(){
  const inc=getData('income');
  const M=inc.months;
  function buildTable(tblId,yr){
    const data=inc[yr];
    const tInc=data.rental.map((r,i)=>r+data.other[i]);
    const tNet=tInc.map((r,i)=>r-data.expenses[i]);
    const s=arr=>arr.reduce((a,b)=>a+b,0);
    const avg=arr=>(s(arr)/arr.length).toFixed(0);
    const fR=v=>v>=0?`<td class="num">${fmt(v)}</td>`:`<td class="num" style="color:var(--red)">(${fmt(Math.abs(v))})</td>`;
    const editCell=(field,i)=>`onclick="editIncCell(this,'${yr}','${field}',${i})" title="Click to edit"`;
    document.getElementById(tblId).outerHTML=`<table id="${tblId}">
      <thead><tr><th>Line Item</th>${M.map(m=>'<th class="num">'+m+'</th>').join('')}<th class="num">Total</th><th class="num">Avg/mo</th></tr></thead>
      <tbody>
        <tr><td>Rental Income</td>${data.rental.map((v,i)=>`<td class="num inc-cell" ${editCell('rental',i)}>${fmt(v)}</td>`).join('')}<td class="num">${fmt(s(data.rental))}</td><td class="num">${fmt(+avg(data.rental))}</td></tr>
        <tr><td>Other Income</td>${data.other.map((v,i)=>`<td class="num inc-cell" ${editCell('other',i)}>${fmt(v)}</td>`).join('')}<td class="num">${fmt(s(data.other))}</td><td class="num">${fmt(+avg(data.other))}</td></tr>
        <tr class="inc-total"><td>Total Income</td>${tInc.map(v=>`<td class="num">${fmt(v)}</td>`).join('')}<td class="num">${fmt(s(tInc))}</td><td class="num">${fmt(+avg(tInc))}</td></tr>
        <tr><td>Total Expenses</td>${data.expenses.map((v,i)=>`<td class="num inc-cell" ${editCell('expenses',i)}>${fmt(v)}</td>`).join('')}<td class="num">${fmt(s(data.expenses))}</td><td class="num">${fmt(+avg(data.expenses))}</td></tr>
        <tr class="inc-net"><td>Net Income</td>${tNet.map(v=>fR(v)).join('')}<td class="num">${fmt(s(tNet))}</td><td class="num">${fmt(s(tNet)/12)}</td></tr>
      </tbody>
    </table>`;
  }
  buildTable('inc-tbl-2026','y2026');
  buildTable('inc-tbl-2025','y2025');
  buildTable('inc-tbl-2024','y2024');
  const props=getData('properties');
  const expenses=getData('expenses');
  document.getElementById('roi-body').innerHTML=props.map(p=>{
    const annRent=p.rent*12;
    const annExp=expenses.filter(e=>e.propId===p.id).reduce((s,e)=>s+(+e.amount),0);
    const net=annRent-annExp;
    const roi=pct(net,p.value);
    const gross=pct(annRent,p.value);
    return`<tr><td><strong style="color:var(--accent)">${p.id}</strong></td><td>${p.name}</td><td>${fmt(annRent)}</td><td>${fmt(annExp)}</td><td>${net>=0?fmt(net):`<span style="color:var(--red)">${fmt(net)}</span>`}</td><td>${fmt(p.value)}</td><td>${roi}</td><td>${gross}</td></tr>`;
  }).join('');
}

/* ══ LOANS ══ */
function renderLoans(){
  const list=getData('loans');
  const tot=list.reduce((s,l)=>s+(+l.amount||0),0), bal=list.reduce((s,l)=>s+(+l.balance||0),0), mo=list.reduce((s,l)=>s+(+l.monthly||0),0);
  const roll=getData('properties').filter(p=>p.status==='Occupied').reduce((s,p)=>s+(+p.rent||0),0);
  renderStrip('loans-strip',list.length?[
    {lbl:'Borrowed',val:fmt(tot),sub:`${list.length} loan${list.length===1?'':'s'}`},
    {lbl:'Still owed',val:fmt(bal),sub:tot?Math.round((1-bal/tot)*100)+'% paid off':'',cls:'accent'},
    {lbl:'Monthly repayments',val:fmt(mo),sub:roll?Math.round(mo/roll*100)+'% of rent roll':''},
    {lbl:'Cash left after loans',val:fmt(roll-mo),sub:'rent roll minus repayments',cls:roll-mo>=0?'green':'red'},
  ]:[]);
  const tbody=document.getElementById('loans-body');
  document.getElementById('loans-total-amt').textContent=fmt(tot);
  document.getElementById('loans-total-mo').textContent=fmt(mo);
  document.getElementById('loans-total-bal').textContent=fmt(bal);
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="11">No loans recorded.</td></tr>';return;}
  tbody.innerHTML=list.map(l=>{
    const paid=+l.amount>0?Math.max(0,Math.min(100,(1-(+l.balance||0)/(+l.amount))*100)):0;
    return`<tr><td><span class="id-tag">${escHtml(l.id)}</span></td><td>${escHtml(unitLabelById(l.propId))}</td><td>${escHtml(l.bank||'—')}</td><td class="num">${fmt(l.amount)}</td><td class="num">${l.rate||0}%</td><td class="num">${fmt(l.monthly)}</td><td>${fmtD(l.start)}</td><td>${fmtD(l.end)}</td><td class="num"><strong>${fmt(l.balance)}</strong></td><td><div class="lease-bar" style="width:90px"><span style="width:${paid.toFixed(0)}%;background:var(--green)"></span></div><div class="cell-sub">${paid.toFixed(0)}%</div></td><td>${actBtns('loan','loans',l.id,'renderLoans')}</td></tr>`;
  }).join('');
  initTableSort('loans-body');
}

/* ══ DOCUMENTS ══ */
function renderDocs(){
  const all=getData('documents');
  let list=all;
  const flt=document.getElementById('docs-filter').value;
  if(flt==='expiring')list=list.filter(d=>d.expiry&&daysUntil(d.expiry)!==null&&daysUntil(d.expiry)<=90);
  const files=PM.files();
  const expired=all.filter(d=>d.expiry&&daysUntil(d.expiry)<0), soon=all.filter(d=>d.expiry&&daysUntil(d.expiry)>=0&&daysUntil(d.expiry)<=90);
  renderStrip('docs-strip',all.length?[
    {lbl:'Documents',val:all.length,sub:`${all.filter(d=>files[d.id]).length} with a file attached`},
    {lbl:'Expiring in 90 days',val:soon.length,sub:soon.length?'renew in time':'None',cls:soon.length?'orange':''},
    {lbl:'Expired',val:expired.length,sub:expired.length?'needs renewing':'None',cls:expired.length?'red':''},
  ]:[]);
  const tbody=document.getElementById('docs-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="8">No documents yet. Add title deeds, insurance and tax receipts here.</td></tr>';return;}
  tbody.innerHTML=list.map(d=>{
    const du=d.expiry?daysUntil(d.expiry):null;
    const expCell=d.expiry?(du<0?`<span style="color:var(--red);font-weight:600">${fmtD(d.expiry)} · expired</span>`:du<=30?`<span style="color:var(--orange);font-weight:600">${fmtD(d.expiry)}</span>`:fmtD(d.expiry)):'No expiry';
    return`<tr><td><span class="id-tag">${escHtml(d.id)}</span></td><td>${escHtml(unitLabelById(d.propId))}</td><td><span class="badge b-blue plain">${escHtml(d.type||'—')}</span></td><td>${fmtD(d.issued)}</td><td>${expCell}</td><td>${d.expiry?daysPill(du):'—'}</td><td>${fileCell(d.id)}</td><td>${actBtns('doc','documents',d.id,'renderDocs')}</td></tr>`;
  }).join('');
  initTableSort('docs-body');
}

/* ══ CONTRACTS ══ */
function renderContracts(){
  const list=getData('contracts');
  const tbody=document.getElementById('contracts-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No contracts yet.</td></tr>';return;}
  tbody.innerHTML=list.map(c=>`<tr><td><span class="id-tag">${escHtml(c.id)}</span></td><td>${escHtml(unitLabelById(c.propId))}</td><td>${c.tenantId?escHtml(personName(tenName(c.tenantId))):'—'}</td><td>${escHtml(c.type||'—')}</td><td>${fmtD(c.start)}</td><td>${fmtD(c.end)} ${c.end&&c.status==='Active'&&daysUntil(c.end)<=60?daysPill(daysUntil(c.end)):''}</td><td class="num">${fmt(c.value)}</td><td>${statusBadge(c.status)}</td><td>${fileCell(c.id)}</td><td>${actBtns('contract','contracts',c.id,'renderContracts')}</td></tr>`).join('');
  initTableSort('contracts-body');
}

/* ══ CONTACTS ══ */
function renderContacts(){
  const list=getData('contacts');
  const q=(document.getElementById('contacts-q').value||'').toLowerCase();
  const filtered=q?list.filter(c=>[c.name,c.role,c.company,c.phone,c.email,c.notes].some(v=>String(v||'').toLowerCase().includes(q))):list;
  const tbody=document.getElementById('contacts-body');
  if(!filtered.length){tbody.innerHTML=`<tr class="empty"><td colspan="8">${list.length?'No contacts match.':'No contacts yet. Add the juristic office, agents and anyone you call often.'}</td></tr>`;return;}
  tbody.innerHTML=filtered.map(c=>`<tr><td><div style="display:flex;gap:10px;align-items:center">${avatar(c.name)}<div><div class="cell-main">${escHtml(c.name||'—')}</div><div class="cell-sub">${escHtml(c.id)}</div></div></div></td><td>${escHtml(c.role||'—')}</td><td>${escHtml(c.company||'—')}</td><td>${telLink(c.phone)}</td><td>${mailLink(c.email)}</td><td>${escHtml(unitLabelById(c.propId))}</td><td class="cell-sub wrap">${escHtml(c.notes||'—')}</td><td>${actBtns('contact','contacts',c.id,'renderContacts')}</td></tr>`).join('');
  initTableSort('contacts-body');
}

/* ══ CONTRACTORS ══ */
function renderContractors(){
  const list=getData('contractors');
  const tbody=document.getElementById('contractors-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="8">No contractors yet. Add plumbers, electricians and cleaners you trust.</td></tr>';return;}
  tbody.innerHTML=list.map(c=>{
    const jobs=getData('maintenance').filter(m=>m.contractor&&(m.contractor===c.name||m.contractor===c.company)).length;
    return`<tr><td><div style="display:flex;gap:10px;align-items:center">${avatar(c.name)}<div><div class="cell-main">${escHtml(c.name||'—')}</div>${jobs?`<div class="cell-sub">${jobs} job${jobs===1?'':'s'} logged</div>`:''}</div></div></td><td>${escHtml(c.company||'—')}</td><td>${escHtml(c.specialty||'—')}</td><td>${telLink(c.phone)}</td><td>${mailLink(c.email)}</td><td><span class="stars">${stars(+c.rating)}</span></td><td>${fmtD(c.lastUsed)}</td><td>${actBtns('contractor','contractors',c.id,'renderContractors')}</td></tr>`;
  }).join('');
  initTableSort('contractors-body');
}

/* ══ DELETE (tap Delete, then "Sure?" to confirm) ══ */
function delItem(key,id,cb){
  const btn=window.event&&window.event.target&&window.event.target.closest('button');
  if(btn&&btn.dataset.confirm!=='pending'){
    btn.dataset.confirm='pending';btn.textContent='Sure?';
    setTimeout(()=>{if(btn.isConnected){btn.dataset.confirm='';btn.textContent='Delete';}},3000);
    return;
  }
  const list=getData(key);
  setData(key,list.filter(x=>x.id!==id));
  if(key==='tenants')syncLeaseDates();
  if((key==='documents'||key==='contracts')&&PM.files()[id])PM.removeFile(id);
  cb();
  if(['properties','tenants','payments','maintenance','expenses','keyDates','documents'].includes(key))renderDashboard();
  toast(`Deleted ${id}`,'success');
}

/* ══ MODAL SYSTEM ══ */
let _modalType=null,_modalId=null;

const MODAL_CONFIGS={
  prop:{key:'properties',title:'Property',fields:[
    {id:'id',label:'Property ID',ph:'P009',req:true},{id:'name',label:'Property Name',ph:'Name',req:true,span:2},
    {id:'address',label:'Address',ph:'Address',span:2},{id:'type',label:'Type',type:'select',opts:['Condo','Loft','House','Villa','Townhouse','Studio','Apartment']},
    {id:'sqm',label:'Size (sqm)',ph:'65',type:'number'},
    {id:'camRate',label:'CAM Rate (฿/sqm/mo)',ph:'60',type:'number'},{id:'rent',label:'Monthly Rent (THB)',ph:'25000',type:'number'},
    {id:'status',label:'Status',type:'select',opts:['Occupied','Vacant']},{id:'value',label:'Property Value (THB)',ph:'5000000',type:'number'},
    {id:'rentDueDay',label:'Rent Due Day (1–28)',ph:'1 = 1st of month',type:'number'},{id:'meterReadDay',label:'Meter Reading Day (1–28)',ph:'25 = 25th of month',type:'number'},
  ]},
  ten:{key:'tenants',title:'Tenant',fields:[
    {id:'id',label:'Tenant ID',ph:'T009',req:true},{id:'name',label:'Full Name',ph:'Name',req:true},
    {id:'nickname',label:'Nickname',ph:'e.g. Jay'},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'phone',label:'Phone',ph:'08X-XXX-XXXX'},
    {id:'email',label:'Email',ph:'email@example.com',span:2},{id:'leaseStart',label:'Lease Start',type:'date'},{id:'leaseEnd',label:'Lease End',type:'date'},
    {id:'deposit',label:'Deposit (THB)',type:'number'},{id:'rating',label:'Rating (1-5)',type:'number'},
    {id:'depositStatus',label:'Deposit Status',type:'select',opts:['N/A','Pending','Refunded']},
    {id:'checklist',label:'Move-in Checklist',type:'select',opts:['Yes','No']},
  ]},
  pay:{key:'payments',title:'Rent Payment',fields:[
    {id:'id',label:'Payment ID',ph:'RP019',req:true},{id:'tenantId',label:'Tenant ID',ph:'T001'},
    {id:'propId',label:'Property ID',ph:'P001'},{id:'due',label:'Due Date',type:'date'},
    {id:'amount',label:'Amount (THB)',type:'number'},{id:'paid',label:'Paid Date',type:'date'},
    {id:'status',label:'Status',type:'select',opts:['Paid','Unpaid','Partial']},
  ]},
  maint:{key:'maintenance',title:'Maintenance Issue',fields:[
    {id:'id',label:'Issue ID',ph:'M011',req:true},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'issue',label:'Issue Description',ph:'Description',span:2},{id:'reported',label:'Reported Date',type:'date'},
    {id:'resolved',label:'Resolved Date',type:'date'},{id:'cost',label:'Cost (THB)',type:'number'},
    {id:'status',label:'Status',type:'select',opts:['Open','In Progress','Resolved']},{id:'contractor',label:'Contractor',ph:'Company name'},
  ]},
  date:{key:'keyDates',title:'Key Date',fields:[
    {id:'id',label:'ID',ph:'KD17',req:true},{id:'date',label:'Date',type:'date'},
    {id:'type',label:'Event Type',type:'select',opts:['Lease Renewal','Insurance Renewal','Tax Filing','Tax Receipt','Other']},
    {id:'propId',label:'Property ID',ph:'P001 or ALL'},{id:'desc',label:'Description',ph:'Description',span:2},
    {id:'reminder',label:'Reminder (days before)',type:'number',ph:'30'},
  ]},
  exp:{key:'expenses',title:'Expense',fields:[
    {id:'id',label:'Expense ID',ph:'E015',req:true},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'date',label:'Date',type:'date'},{id:'category',label:'Category',type:'select',opts:['Maintenance','Utilities','Repairs','Cleaning','Pool Service','Insurance','Marketing','Garden','CAM Fee','Agent Fee','Other']},
    {id:'desc',label:'Description',ph:'Description',span:2},{id:'amount',label:'Amount (THB)',type:'number'},
    {id:'budget',label:'Budget (THB)',type:'number'},{id:'recurring',label:'Recurring',type:'select',opts:['Yes','No']},
  ]},
  loan:{key:'loans',title:'Loan',fields:[
    {id:'id',label:'Loan ID',ph:'L007',req:true},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'bank',label:'Bank',ph:'Bank name'},{id:'amount',label:'Loan Amount (THB)',type:'number'},
    {id:'rate',label:'Interest Rate %',type:'number',ph:'4.25'},{id:'monthly',label:'Monthly Payment (THB)',type:'number'},
    {id:'start',label:'Start Date',type:'date'},{id:'end',label:'End Date',type:'date'},
    {id:'balance',label:'Outstanding Balance (THB)',type:'number'},
  ]},
  doc:{key:'documents',title:'Document',fields:[
    {id:'id',label:'Doc ID',ph:'D016',req:true},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'type',label:'Doc Type',type:'select',opts:['Insurance','Title Deed','Tax Receipt','Pool Cert','Lease','Other']},
    {id:'issued',label:'Issue Date',type:'date'},{id:'expiry',label:'Expiry Date',type:'date'},
  ]},
  contract:{key:'contracts',title:'Contract',fields:[
    {id:'id',label:'Contract ID',ph:'C011',req:true},{id:'propId',label:'Property ID',ph:'P001'},
    {id:'tenantId',label:'Tenant ID',ph:'T001 (or blank)'},{id:'type',label:'Contract Type',type:'select',opts:['Residential Lease','Short-term Lease','Commercial Lease','Property Management','Pool Service Contract','Other']},
    {id:'start',label:'Start Date',type:'date'},{id:'end',label:'End Date',type:'date'},
    {id:'value',label:'Contract Value (THB)',type:'number'},{id:'status',label:'Status',type:'select',opts:['Active','Expired','Terminated']},
    {id:'file',label:'File Path',ph:'/contracts/...',span:2},
  ]},
  contact:{key:'contacts',title:'Contact',fields:[
    {id:'id',label:'Contact ID',ph:'CT011',req:true},{id:'name',label:'Full Name',ph:'Name'},
    {id:'role',label:'Role',ph:'Role'},{id:'company',label:'Company',ph:'Company'},
    {id:'phone',label:'Phone',ph:'08X-XXX-XXXX'},{id:'email',label:'Email',ph:'email@example.com'},
    {id:'propId',label:'Property ID',ph:'P001 or ALL'},{id:'notes',label:'Notes',ph:'Notes',span:2},
  ]},
  contractor:{key:'contractors',title:'Contractor',fields:[
    {id:'id',label:'ID',ph:'C_9',req:true},{id:'name',label:'Name',ph:'Name'},
    {id:'company',label:'Company',ph:'Company',span:2},{id:'specialty',label:'Specialty',ph:'e.g. Plumbing'},
    {id:'phone',label:'Phone',ph:'08X-XXX-XXXX'},{id:'email',label:'Email',ph:'email@example.com'},
    {id:'rating',label:'Rating (1-5)',type:'number'},{id:'lastUsed',label:'Last Used',type:'date'},
  ]},
};

function nextSeqId(key,prefix,pad){
  const list=getData(key);
  let max=0;
  const re=new RegExp('^'+prefix+'(\\d+)$');
  list.forEach(x=>{const m=(x.id||'').match(re);if(m){const n=+m[1];if(n>max)max=n;}});
  return prefix+String(max+1).padStart(pad,'0');
}

const AUTO_ID={prop:['properties','P',3],ten:['tenants','T',3],pay:['payments','RP',3],maint:['maintenance','M',3],date:['keyDates','KD',2],exp:['expenses','E',3],loan:['loans','L',3],doc:['documents','D',3],contract:['contracts','C',3],contact:['contacts','CT',3]};

function openModal(type,id){
  _modalType=type;_modalId=id;
  const cfg=MODAL_CONFIGS[type];
  const rec=id?getData(cfg.key).find(x=>x.id===id):null;
  const autoId=(!id&&AUTO_ID[type])?nextSeqId(...AUTO_ID[type]):'';
  document.getElementById('modal-title').textContent=(id?'Edit ':'Add ')+cfg.title;
  const body=document.getElementById('modal-body');
  body.innerHTML=`<div class="fgrid">${cfg.fields.map(f=>{
    const val=rec?(rec[f.id]??''):(f.id==='id'?autoId:'');
    const cls='fg'+(f.span===2?' span2':'');
    if(f.id==='propId'||f.id==='tenantId'){
      const items=f.id==='propId'?getData('properties'):getData('tenants');
      let opts='<option value="">— none —</option>';
      if((f.ph||'').includes('ALL'))opts+=`<option value="ALL"${val==='ALL'?' selected':''}>All properties</option>`;
      if(val&&val!=='ALL'&&!items.some(x=>x.id===val))opts+=`<option value="${escHtml(String(val))}" selected>${escHtml(String(val))}</option>`;
      opts+=items.map(x=>`<option value="${x.id}"${val===x.id?' selected':''}>${escHtml(f.id==='propId'?unitLabel(x):personName(x.name))} · ${escHtml(x.id)}</option>`).join('');
      return`<div class="${cls}"><label>${f.label.replace(' ID','')}</label><select id="mf_${f.id}">${opts}</select></div>`;
    }
    if(f.type==='select'){
      const opts=f.opts.map(o=>`<option value="${o}"${val===o?' selected':''}>${o}</option>`).join('');
      return`<div class="${cls}"><label>${f.label}</label><select id="mf_${f.id}">${opts}</select></div>`;
    }
    return`<div class="${cls}"><label>${f.label}</label><input id="mf_${f.id}" type="${f.type||'text'}" value="${val}" placeholder="${f.ph||''}" ${f.req?'required':''}></div>`;
  }).join('')}</div>`;
  const saveBtn=document.getElementById('modal-save');
  saveBtn.textContent='Save';
  saveBtn.onclick=saveModal;
  document.getElementById('modal-overlay').classList.add('open');
}

function saveModal(){
  const cfg=MODAL_CONFIGS[_modalType];
  const obj={};
  for(const f of cfg.fields){
    const el=document.getElementById('mf_'+f.id);
    if(!el)continue;
    obj[f.id]=f.type==='number'?(el.value===''?0:+el.value):el.value;
    if(f.req&&!obj[f.id]){toast(f.label+' is required.','error');return;}
  }
  const list=getData(cfg.key);
  obj.id=String(obj.id).trim();
  if(obj.id!==_modalId&&list.some(x=>x.id===obj.id)){toast('ID '+obj.id+' is already used — pick another','error');return;}
  if(_modalId){const i=list.findIndex(x=>x.id===_modalId);if(i>=0)list[i]=obj;}
  else{list.push(obj);}
  setData(cfg.key,list);
  if(_modalType==='ten')syncLeaseDates();
  closeModal();
  renderPanel(document.querySelector('.nav-item.active').dataset.t);
  renderDashboard();
  toast(_modalId?'Record updated':'Record added','success');
}

function closeModal(){document.getElementById('modal-overlay').classList.remove('open');}
document.getElementById('modal-overlay').onclick=e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ══ COLUMN SORTING ══ */
function initTableSort(tbodyId){
  const tbody=document.getElementById(tbodyId);
  if(!tbody)return;
  const table=tbody.closest('table');
  if(!table)return;
  table.querySelectorAll('thead th').forEach((th,colIdx)=>{
    const txt=th.textContent.trim();
    if(txt==='Actions'||txt==='File')return;
    th.classList.add('sortable');
    th.onclick=()=>{
      const dir=th.dataset.sortDir==='1'?-1:1;
      table.querySelectorAll('thead th').forEach(x=>{
        x.dataset.sortDir='';
        const a=x.querySelector('.sort-arrow');if(a)a.remove();
      });
      th.dataset.sortDir=String(dir);
      const arrow=document.createElement('span');
      arrow.className='sort-arrow';
      arrow.textContent=dir===1?' ↑':' ↓';
      th.appendChild(arrow);
      const rows=Array.from(tbody.querySelectorAll('tr:not(.empty)'));
      rows.sort((a,b)=>{
        const av=(a.cells[colIdx]?.textContent||'').trim().replace(/[฿,★☆]/g,'').replace(/\s+/g,' ').trim();
        const bv=(b.cells[colIdx]?.textContent||'').trim().replace(/[฿,★☆]/g,'').replace(/\s+/g,' ').trim();
        const an=parseFloat(av),bn=parseFloat(bv);
        if(!isNaN(an)&&!isNaN(bn))return(an-bn)*dir;
        return av.localeCompare(bv,undefined,{numeric:true,sensitivity:'base'})*dir;
      });
      rows.forEach(row=>tbody.appendChild(row));
    };
  });
}

/* ══ FILE ATTACHMENTS (Convex file storage) ══ */
function attachFile(id){
  const input=document.createElement('input');
  input.type='file';
  input.accept='.pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx';
  input.onchange=async()=>{
    const file=input.files[0];
    if(!file)return;
    if(file.size>20*1024*1024){toast('File too large — max 20 MB','error');return;}
    toast('Uploading '+file.name+'…','success');
    try{
      await PM.uploadFile(id,file);
      toast('Attached: '+file.name,'success');
    }catch(e){toast('Upload failed — '+(e.message||e),'error');}
  };
  input.click();
}
function viewFile(id){
  const f=PM.files()[id];
  if(!f||!f.url){toast('No file attached','error');return;}
  window.open(f.url,'_blank','noopener');
}
async function removeFile(id){
  try{await PM.removeFile(id);toast('File removed','success');}
  catch(e){toast('Could not remove file — '+(e.message||e),'error');}
}
function fileCell(id){
  const f=PM.files()[id];
  if(f){
    return`<span style="color:var(--green);font-size:11px;white-space:nowrap">${escHtml(f.name)}</span><br><button class="btn btn-xs btn-secondary" onclick="viewFile('${id}')">View</button> <button class="btn btn-xs btn-danger" onclick="removeFile('${id}')">✕</button>`;
  }
  return`<button class="btn btn-xs btn-secondary" onclick="attachFile('${id}')">Attach</button>`;
}

/* ══ CLEAR SECTION ══ */
const INCOME_BLANK={
  months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  y2026:{rental:Array(12).fill(0),other:Array(12).fill(0),expenses:Array(12).fill(0)},
  y2025:{rental:Array(12).fill(0),other:Array(12).fill(0),expenses:Array(12).fill(0)},
  y2024:{rental:Array(12).fill(0),other:Array(12).fill(0),expenses:Array(12).fill(0)}
};
function clearSection(key, renderFn, btnEl){
  if(btnEl.dataset.confirm==='pending'){
    // Second click — execute clear
    if(key==='income'){setData('income', JSON.parse(JSON.stringify(INCOME_BLANK)));}
    else{setData(key,[]);}
    renderFn();
    if(['properties','tenants','payments','maintenance','keyDates','expenses'].includes(key))renderDashboard();
    toast('All records cleared','success');
    btnEl.dataset.confirm='';
    btnEl.textContent=key==='income'?'Reset Income Data':'Clear All';
    btnEl.classList.remove('btn-danger');btnEl.classList.add('btn-secondary');
    clearTimeout(btnEl._clearTimer);
  } else {
    // First click — arm the button
    btnEl.dataset.confirm='pending';
    btnEl.textContent='Confirm? Click again';
    btnEl.classList.add('btn-danger');btnEl.classList.remove('btn-secondary');
    btnEl._clearTimer=setTimeout(()=>{
      if(btnEl.dataset.confirm==='pending'){
        btnEl.dataset.confirm='';
        btnEl.textContent=key==='income'?'Reset Income Data':'Clear All';
        btnEl.classList.remove('btn-danger');btnEl.classList.add('btn-secondary');
      }
    },4000);
  }
}

/* ══ INCOME INLINE EDIT ══ */
function editIncCell(td, yr, field, idx){
  const inc=getData('income');
  const curVal=inc[yr][field][idx]||0;
  td.innerHTML='';
  const input=document.createElement('input');
  input.type='number';input.value=curVal;
  td.appendChild(input);
  input.focus();input.select();
  const commit=()=>{
    const fresh=getData('income');
    fresh[yr][field][idx]=+input.value||0;
    setData('income',fresh);
    renderIncome();
    toast('Income data saved','success');
  };
  input.onblur=commit;
  input.onkeydown=e=>{
    if(e.key==='Enter'){e.preventDefault();commit();}
    if(e.key==='Escape'){e.preventDefault();renderIncome();}
  };
}

/* ══ COMING UP (next 14 days) ══ */
function renderReminders(){
  const props = getData('properties');
  const now = today();
  const WINDOW = 14;
  const items = [];
  const nextDay=(day)=>{let d=new Date(now.getFullYear(),now.getMonth(),day);if(d<now)d=new Date(now.getFullYear(),now.getMonth()+1,day);return d;};

  props.forEach(p => {
    if(p.status!=='Occupied')return;
    const rentDay=+p.rentDueDay||0;
    if(rentDay>0){
      const d=nextDay(rentDay), diff=Math.round((d-now)/86400000);
      // Skip if this month's rent for that due date is already paid
      const paid=rentStatus(p,d.getFullYear(),d.getMonth()).state==='paid';
      if(diff<=WINDOW&&!paid)items.push({unit:unitLabel(p),propId:p.id,what:'Rent due · '+fmt(p.rent),date:d,diff});
    }
    const readDay=+p.meterReadDay||0;
    if(readDay>0){
      const d=nextDay(readDay), diff=Math.round((d-now)/86400000);
      if(diff<=WINDOW)items.push({unit:unitLabel(p),propId:p.id,what:'Meter reading',date:d,diff});
    }
  });
  getData('keyDates').forEach(k=>{
    const diff=daysUntil(k.date);
    if(diff===null||diff<0||diff>WINDOW)return;
    let what=k.desc||k.type;
    if(String(k.id||'').startsWith('LS_')){const t=getData('tenants').find(x=>'LS_'+x.id===k.id);what='Lease ends · '+(t?personName(t.name):what);}
    items.push({unit:unitLabelById(k.propId),propId:k.propId,what,date:new Date(k.date),diff});
  });

  items.sort((a,b)=>a.diff-b.diff);
  const tbody=document.getElementById('reminders-body');
  if(!tbody)return;
  if(!items.length){tbody.innerHTML='<tr class="empty"><td colspan="3">Nothing due in the next 14 days.</td></tr>';return;}
  tbody.innerHTML=items.map(item=>{
    const cls=item.diff===0?'b-red':item.diff<=3?'b-orange':item.diff<=7?'b-yellow':'b-gray';
    const lbl=item.diff===0?'Today':item.diff===1?'Tomorrow':`In ${item.diff} days`;
    return`<tr>
      <td class="cell-link" onclick="${unitById(item.propId)?`openProp('${escHtml(item.propId)}')`:''}"><div class="cell-main">${escHtml(item.what)}</div><div class="cell-sub">${escHtml(item.unit)}</div></td>
      <td style="white-space:nowrap">${fmtD(isoDate(item.date))}</td>
      <td><span class="badge ${cls}">${lbl}</span></td>
    </tr>`;
  }).join('');
}

/* ══ YTD PAYMENTS ══ */
function renderYTD(){
  const ytdBody  = document.getElementById('ytd-body');
  const ytdKpis  = document.getElementById('ytd-kpis');
  if(!ytdBody || !ytdKpis) return;

  const curYear  = new Date().getFullYear();
  const MONTHS   = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const payments = getData('payments');
  const props    = getData('properties');

  // Filter: paid payments in current year
  const yearPaid = payments.filter(p =>
    p.status === 'Paid' && p.paid && p.paid.startsWith(String(curYear))
  );

  // Build month buckets
  const buckets = MONTHS.map((name, i) => {
    const mo    = String(i + 1).padStart(2, '0');
    const items = yearPaid.filter(p => p.paid.startsWith(`${curYear}-${mo}`));
    const total = items.reduce((s, p) => s + (+p.amount || 0), 0);
    const propIds = [...new Set(items.map(p => p.propId))];
    return { name, mo, items, total, propIds };
  });

  const ytdTotal    = buckets.reduce((s, b) => s + b.total, 0);
  const paidMonths  = buckets.filter(b => b.total > 0).length;
  const avgPerMonth = paidMonths ? ytdTotal / paidMonths : 0;
  const maxBucket   = Math.max(...buckets.map(b => b.total), 1);

  // Update title year
  const titleEl = document.getElementById('ytd-title');
  if(titleEl) titleEl.textContent = `Rent collected in ${curYear}`;

  // KPI strip
  ytdKpis.innerHTML = `
    <div class="ytd-kpi green">
      <div class="ytd-kpi-lbl">Total Collected YTD</div>
      <div class="ytd-kpi-val">${fmt(ytdTotal)}</div>
      <div class="ytd-kpi-sub">${yearPaid.length} payment records</div>
    </div>
    <div class="ytd-kpi">
      <div class="ytd-kpi-lbl">Months with Payments</div>
      <div class="ytd-kpi-val">${paidMonths} <span style="font-size:14px;font-weight:500;color:var(--muted)">/ 12</span></div>
      <div class="ytd-kpi-sub">${MONTHS[new Date().getMonth()]} is current</div>
    </div>
    <div class="ytd-kpi accent">
      <div class="ytd-kpi-lbl">Avg per Paid Month</div>
      <div class="ytd-kpi-val">${fmt(Math.round(avgPerMonth))}</div>
      <div class="ytd-kpi-sub">across ${paidMonths} month${paidMonths!==1?'s':''}</div>
    </div>
    <div class="ytd-kpi">
      <div class="ytd-kpi-lbl">Monthly Trend</div>
      <div class="ytd-kpi-val" style="font-size:14px;padding-top:2px">
        <div class="ytd-month-bar">
          ${buckets.map(b => {
            const h = b.total ? Math.max(4, Math.round(b.total / maxBucket * 20)) : 3;
            return `<span class="${b.total?'':'empty'}" style="height:${h}px" title="${b.name}: ${fmt(b.total)}"></span>`;
          }).join('')}
        </div>
      </div>
      <div class="ytd-kpi-sub">Jan → Dec</div>
    </div>
  `;

  // Month rows
  if(!yearPaid.length){
    ytdBody.innerHTML = `<tr class="empty"><td colspan="5">No paid payments recorded for ${curYear} yet.</td></tr>`;
    return;
  }

  let running = 0;
  ytdBody.innerHTML = buckets.map(b => {
    if(b.total === 0) return ''; // skip empty months
    running += b.total;
    const propTags = b.propIds.map(id => {
      const p = props.find(x => x.id === id);
      return `<span class="ytd-prop-tag">${escHtml(p ? unitLabel(p) : id)}</span>`;
    }).join('');
    return `
      <tr>
        <td><strong>${b.name}</strong> <span style="color:var(--muted);font-size:11px">${curYear}</span></td>
        <td style="text-align:right;color:var(--text-2)">${b.items.length}</td>
        <td style="text-align:right;font-weight:600;color:var(--green)">${fmt(b.total)}</td>
        <td style="text-align:right;font-weight:600;color:var(--accent)">${fmt(running)}</td>
        <td><div class="ytd-prop-tags">${propTags}</div></td>
      </tr>`;
  }).join('') + `
    <tr class="tbl-footer">
      <td><strong>TOTAL ${curYear}</strong></td>
      <td style="text-align:right">${yearPaid.length}</td>
      <td style="text-align:right;color:var(--green)">${fmt(ytdTotal)}</td>
      <td style="text-align:right;color:var(--accent)">${fmt(ytdTotal)}</td>
      <td></td>
    </tr>`;
}

/* ══ TO-DO LIST ══ */
function getTodos(){ return getData('todos')||[]; }
function saveTodos(list){ setData('todos', list); }

function addTodo(){
  const input = document.getElementById('todo-input');
  const text  = (input.value||'').trim();
  if(!text) return;
  const pri = document.getElementById('todo-pri').value;
  const todos = getTodos();
  todos.unshift({ id: Date.now().toString(36), text, pri, done: false, created: new Date().toISOString() });
  saveTodos(todos);
  input.value = '';
  input.focus();
  renderTodos();
}

function toggleTodo(id){
  const todos = getTodos();
  const t = todos.find(x=>x.id===id);
  if(t) t.done = !t.done;
  saveTodos(todos);
  renderTodos();
}

function deleteTodo(id){
  saveTodos(getTodos().filter(x=>x.id!==id));
  renderTodos();
}

function clearDoneTodos(){
  saveTodos(getTodos().filter(x=>!x.done));
  renderTodos();
}

function renderTodos(){
  const todos  = getTodos();
  const list   = document.getElementById('todo-list');
  const empty  = document.getElementById('todo-empty');
  if(!list) return;

  if(!todos.length){
    list.innerHTML = '';
    empty.style.display = 'block';
    const footer = document.getElementById('todo-footer');
    if(footer) footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';

  const priOrder = { high:0, normal:1, low:2 };
  const sorted = [...todos].sort((a,b)=>{
    if(a.done !== b.done) return a.done ? 1 : -1;
    return ((priOrder[a.pri]??1) - (priOrder[b.pri]??1)) || String(b.created).localeCompare(String(a.created));
  });

  list.innerHTML = sorted.map(t=>{
    const dotCls  = `todo-pri-dot ${t.pri}`;
    const itemCls = `todo-item${t.done?' done':''}`;
    const dateStr = new Date(t.created).toLocaleDateString('en-GB',{day:'2-digit',month:'short'});
    return `
      <div class="${itemCls}" id="todo-${t.id}">
        <div class="todo-check" onclick="toggleTodo('${t.id}')">
          <span class="todo-check-icon">✓</span>
        </div>
        <div class="${dotCls}"></div>
        <div class="todo-text">${escHtml(t.text)}</div>
        <div class="todo-meta">${dateStr}</div>
        <button class="todo-del" onclick="deleteTodo('${t.id}')" title="Delete">×</button>
      </div>`;
  }).join('');

  // Footer
  const done  = todos.filter(x=>x.done).length;
  const total = todos.length;
  let footer = document.getElementById('todo-footer');
  if(!footer){
    footer = document.createElement('div');
    footer.id = 'todo-footer';
    footer.className = 'todo-footer';
    document.querySelector('.todo-wrap').appendChild(footer);
  }
  footer.style.display = 'flex';
  footer.innerHTML = `
    <span>${done} of ${total} done</span>
    <div style="flex:1;height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin:0 8px">
      <div style="height:100%;width:${total?Math.round(done/total*100):0}%;background:var(--green);border-radius:2px;transition:width .3s ease"></div>
    </div>
    <span>${total?Math.round(done/total*100):0}%</span>
    ${done>0?`<button class="todo-footer-clear" onclick="clearDoneTodos()">Clear done</button>`:''}
  `;
}

function escHtml(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

function syncLeaseDates(){
  const tenants=getData('tenants');
  let kd=getData('keyDates').filter(k=>!(k.id&&String(k.id).slice(0,3)==='LS_'));
  tenants.forEach(t=>{
    if(!t.leaseEnd)return;
    const m=(t.name||'').match(/\(([^)]+)\)/);
    const nm=(m?m[1]:(t.name||t.id)).trim();
    kd.push({id:'LS_'+t.id,date:t.leaseEnd,type:'Lease Renewal',propId:t.propId||'',desc:t.id+' '+nm+' lease ends',reminder:60});
  });
  setData('keyDates',kd);
}

/* ══ DATA BACKUP / RESTORE ══
   Uses the same "pm2_<key>" format as the old offline version, so a backup
   exported from the old single-file dashboard can be imported here. */
const BACKUP_KEYS=[...Object.keys(SEED),'todos','goal'];
function exportData(){
  const dump={};
  BACKUP_KEYS.forEach(k=>{const v=k==='goal'?PM.get('goal'):getData(k);if(v!==undefined)dump['pm2_'+k]=JSON.stringify(v);});
  const files=PM.files();
  Object.keys(files).forEach(id=>{dump['pm2_fname_'+id]=files[id].name;});
  const payload=JSON.stringify({_type:'property-dashboard-backup',_date:new Date().toISOString(),data:dump},null,2);
  const ta=document.getElementById('backup-text'); if(ta){ta.style.display='block';ta.value=payload;ta.focus();ta.select();}
  try{const blob=new Blob([payload],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='property-dashboard-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();}catch(e){}
  try{if(navigator.clipboard)navigator.clipboard.writeText(payload);}catch(e){}
  toast('Backup ready — downloaded, copied, and shown below','success');
}
function importData(input){
  const file=input.files&&input.files[0]; if(!file){return;}
  const r=new FileReader();
  r.onload=async()=>{
    try{
      const parsed=JSON.parse(r.result);
      const data=(parsed&&parsed.data)?parsed.data:parsed;
      if(!data||typeof data!=='object')throw new Error('bad');
      let n=0;
      BACKUP_KEYS.forEach(k=>{if(data['pm2_'+k]!=null){setData(k,JSON.parse(data['pm2_'+k]));n++;}});
      // Attachments from the old version were stored inline as data: URLs
      const fileIds=Object.keys(data).filter(k=>k.indexOf('pm2_file_')===0).map(k=>k.slice(9));
      for(const id of fileIds){
        const blob=await (await fetch(data['pm2_file_'+id])).blob();
        await PM.uploadFile(id,new File([blob],data['pm2_fname_'+id]||id,{type:blob.type}));
        n++;
      }
      syncLeaseDates();
      toast('Restored '+n+' data keys','success');
      renderDashboard(); renderPanel(document.querySelector('.nav-item.active').dataset.t);
    }catch(e){toast('Invalid backup file','error');}
    input.value='';
  };
  r.readAsText(file);
}

/* ══ PHONE TABLE LABELS ══ each cell gets its column name so phones can show rows as cards */
function labelTables(){
  document.querySelectorAll('.content .tbl-wrap table').forEach(t=>{
    const heads=[...t.querySelectorAll('thead th')].map(th=>th.firstChild?th.firstChild.textContent.trim():'');
    t.querySelectorAll('tbody tr').forEach(tr=>{
      [...tr.cells].forEach((td,i)=>{if(td.dataset.label===undefined&&td.colSpan===1)td.dataset.label=heads[i]||'';});
    });
  });
}
let _labelQueued=false;
new MutationObserver(()=>{if(_labelQueued)return;_labelQueued=true;requestAnimationFrame(()=>{_labelQueued=false;labelTables();});})
  .observe(document.querySelector('.content'),{childList:true,subtree:true});

/* ══ LIVE SYNC ══ re-render when another device changes something */
PM.onChange=()=>{
  const a=document.activeElement;
  if(a&&a.closest&&(a.closest('.content')||a.closest('.modal'))&&/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName))return; // don't wipe what you're typing
  renderDashboard();
  const t=activePanel(); if(t!=='dash')renderPanel(t);
};

/* ══ INIT ══ */
if(canEdit)syncLeaseDates();
renderDashboard();
renderTodos();
