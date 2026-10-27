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

if(!PM.get('initialized')){
  Object.keys(SEED).forEach(k=>setData(k,SEED[k]));
  setData('initialized',true);
}

/* ══ TOAST ══ */
function toast(msg,type='success'){
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`<span>${type==='success'?'✓':'✕'}</span> ${msg}`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(()=>{el.style.animation='toastOut .3s ease forwards';setTimeout(()=>el.remove(),300)},2800);
}

/* ══ HELPERS ══ */
const fmt=(n,dec=0)=>n==null?'—':'฿'+(+n).toLocaleString('en',{minimumFractionDigits:dec,maximumFractionDigits:dec});
const fmtN=(n,dec=0)=>n==null?'—':(+n).toLocaleString('en',{minimumFractionDigits:dec,maximumFractionDigits:dec});
const fmtD=d=>{if(!d)return'—';const p=d.split('-');return p[2]+'/'+p[1]+'/'+p[0]};
const today=()=>{const d=new Date();d.setHours(0,0,0,0);return d};
const daysUntil=d=>{if(!d)return null;const t=new Date(d);t.setHours(0,0,0,0);return Math.round((t-today())/86400000)};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,5);
const propName=id=>(getData('properties').find(p=>p.id===id)||{name:id}).name;
const tenName=id=>(getData('tenants').find(t=>t.id===id)||{name:id}).name;
/** a as a % of b, or — when b (e.g. property value) isn't filled in yet */
const pct=(a,b)=>(+b>0)?(a/b*100).toFixed(2)+'%':'—';
const stars=n=>'★'.repeat(n)+'☆'.repeat(5-n);

const PAGE_TITLES={dash:'Dashboard',props:'Properties',ten:'Tenants',rent:'Rent Payments',cal:'Rent Calendar',maint:'Maintenance',dates:'Key Dates',exp:'Expenses',inc:'Income Summary',loans:'Loans',docs:'Documents',contracts:'Contracts',contacts:'Contacts',contractors:'Contractors',listings:'Website Listings',site:'Site Content',inq:'Inquiries',team:'Team & Access'};

function statusBadge(s){
  const m={'Occupied':'b-green','Vacant':'b-purple','Active':'b-green','Expired':'b-red','Paid':'b-green','Unpaid':'b-red','Partial':'b-yellow','Resolved':'b-green','Open':'b-orange','Pending':'b-yellow','In Progress':'b-blue'};
  return`<span class="badge ${m[s]||'b-gray'}">${s}</span>`;
}
function daysPill(d,label){
  if(label)return`<span class="dpill dpill-gray">${label}</span>`;
  if(d===null)return'—';
  if(d<0)return`<span class="dpill dpill-red">${Math.abs(d)}d overdue</span>`;
  if(d===0)return`<span class="dpill dpill-red">Today!</span>`;
  if(d<=14)return`<span class="dpill dpill-red">${d}d</span>`;
  if(d<=30)return`<span class="dpill dpill-orange">${d}d</span>`;
  if(d<=60)return`<span class="dpill dpill-yellow">${d}d</span>`;
  return`<span class="dpill dpill-green">${d}d</span>`;
}

/* ══ SIDEBAR TOGGLE ══ */
function toggleSidebar(){
  const sb=document.getElementById('sidebar');
  const btn=document.getElementById('sbToggle');
  sb.classList.toggle('collapsed');
  btn.textContent=sb.classList.contains('collapsed')?'▶':'◀';
}

/* ══ NAVIGATION ══ */
document.querySelectorAll('.nav-item').forEach(item=>{
  item.onclick=()=>{
    document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
    item.classList.add('active');
    const t=item.dataset.t;
    document.getElementById('p-'+t).classList.add('active');
    document.getElementById('pageTitle').textContent=PAGE_TITLES[t]||t;
    renderPanel(t);
    if(isPhone())document.getElementById('sidebar').classList.add('collapsed');
  };
});
function isPhone(){return window.matchMedia('(max-width: 768px)').matches}
if(isPhone())document.getElementById('sidebar').classList.add('collapsed');

function renderPanel(t){
  const map={props:renderProps,ten:renderTenants,rent:renderPayments,cal:renderCalendar,maint:renderMaint,dates:renderDates,exp:renderExpenses,inc:renderIncome,loans:renderLoans,docs:renderDocs,contracts:renderContracts,contacts:renderContacts,contractors:renderContractors,listings:renderListings,site:renderSiteContent,inq:renderInquiries,team:renderTeam};
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
  const opts=props.map(p=>'<option value="'+p.id+'">'+escHtml(p.name)+'</option>').join('');
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
    return '<tr><td><strong>'+escHtml(p.name)+'</strong><div style="font-size:10px;color:var(--muted)">'+p.id+'</div></td><td style="text-align:center">'+dueDay+'</td><td style="text-align:right">'+fmt(+p.rent||0)+'</td>'+cells+'</tr>';
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
  const pct=target>0?net/target*100:0, pc=Math.max(0,Math.min(100,pct));
  const remaining=Math.max(0,target-net);
  const sY=+g.startYear, eY=sY+(+g.years)-1, totalM=(+g.years)*12;
  const now=new Date();
  let elapsed=(now.getFullYear()-sY)*12+now.getMonth()+now.getDate()/30;
  elapsed=Math.max(0,Math.min(totalM,elapsed));
  const expected=totalM>0?target*elapsed/totalM:0;
  const projected=elapsed>0?net/elapsed*totalM:0;
  const monthsLeft=Math.max(0,Math.ceil(totalM-elapsed));
  const pace = elapsed<=0 ? '<span class="badge b-gray">Not started</span>'
    : (net>=expected ? '<span class="badge b-green">On track</span>'
    : '<span class="badge b-orange">Behind '+fmt(Math.round(expected-net))+'</span>');
  const amtColor = net>=0 ? 'var(--green)' : 'var(--red)';
  host.innerHTML =
   '<div class="goal-card">'
   +'<div class="goal-head"><div class="goal-title">'+escHtml(g.label)+' \u2014 '+g.years+'-Year Net Income Goal '+pace+'</div>'
   +'<button class="btn btn-secondary btn-xs" onclick="toggleGoalEdit(true)">Edit</button></div>'
   +'<div class="goal-body">'
     +'<div class="goal-main">'
       +'<div class="goal-amt" style="color:'+amtColor+'">'+fmt(net)+' <span>of '+fmt(target)+'</span></div>'
       +'<div class="goal-bar"><div class="goal-bar-fill" style="width:'+pc+'%"></div></div>'
       +'<div class="goal-stats">'
         +'<div><div class="goal-stat-lbl">Progress</div><div class="goal-stat-val">'+pct.toFixed(1)+'%</div></div>'
         +'<div><div class="goal-stat-lbl">Remaining</div><div class="goal-stat-val">'+fmt(remaining)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Rent collected</div><div class="goal-stat-val">'+fmt(r.collected)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Expenses</div><div class="goal-stat-val">'+fmt(r.expenses)+'</div></div>'
         +'<div><div class="goal-stat-lbl">Deadline</div><div class="goal-stat-val">Dec '+eY+'</div></div>'
         +'<div><div class="goal-stat-lbl">Months left</div><div class="goal-stat-val">'+monthsLeft+'</div></div>'
         +'<div><div class="goal-stat-lbl">Projected by '+eY+'</div><div class="goal-stat-val">'+fmt(Math.round(projected))+'</div></div>'
       +'</div>'
     +'</div>'
     +'<div class="goal-therm"><div class="goal-therm-tube"><div class="goal-therm-fill" style="height:'+pc+'%"></div></div><div class="goal-therm-bulb"></div></div>'
   +'</div>'
   +'<div class="goal-edit" id="goal-edit">'
     +'<div class="fg"><label>Goal name</label><input class="fld" id="ge-label" value="'+escHtml(g.label)+'"></div>'
     +'<div class="fg"><label>Target (\u0E3F)</label><input class="fld" id="ge-target" type="number" value="'+target+'"></div>'
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

function renderDashboard(){
  const props=getData('properties');
  const tenants=getData('tenants');
  const payments=getData('payments');
  const maint=getData('maintenance');
  const keyDates=getData('keyDates');

  const occ=props.filter(p=>p.status==='Occupied');
  const vacant=props.filter(p=>p.status==='Vacant');
  const monthlyRent=occ.reduce((s,p)=>s+(+p.rent||0),0);
  const unpaid=payments.filter(p=>p.status==='Unpaid');
  const unpaidTotal=unpaid.reduce((s,p)=>s+(+p.amount||0),0);
  const openMaint=maint.filter(m=>m.status==='Open'||m.status==='In Progress');
  const overdueAlerts=keyDates.filter(k=>{const d=daysUntil(k.date);return d!==null&&d<0});
  const dueSoon=keyDates.filter(k=>{const d=daysUntil(k.date);return d!==null&&d>=0&&d<=k.reminder});

  document.getElementById('h-props').textContent=props.length;
  document.getElementById('h-occ').textContent=Math.round(occ.length/props.length*100)+'%';
  document.getElementById('h-rent').textContent='฿'+(monthlyRent/1000).toFixed(0)+'k';
  document.getElementById('h-overdue').textContent=unpaid.length;

  document.getElementById('dash-cards').innerHTML=`
    <div class="card accent"><div class="card-accent-bar"></div><div class="card-lbl">Total Properties</div><div class="card-val">${props.length}</div><div class="card-sub">${occ.length} occupied · ${vacant.length} vacant</div></div>
    <div class="card green"><div class="card-accent-bar"></div><div class="card-lbl">Occupancy Rate</div><div class="card-val">${Math.round(occ.length/props.length*100)}%</div><div class="card-sub">${occ.length} of ${props.length} units</div></div>
    <div class="card"><div class="card-accent-bar"></div><div class="card-lbl">Monthly Rent (Occupied)</div><div class="card-val" style="font-size:20px">${fmt(monthlyRent)}</div><div class="card-sub">Across ${occ.length} active leases</div></div>
    <div class="card red"><div class="card-accent-bar"></div><div class="card-lbl">Overdue Payments</div><div class="card-val">${unpaid.length}</div><div class="card-sub">${fmt(unpaidTotal)} outstanding</div></div>
    <div class="card orange"><div class="card-accent-bar"></div><div class="card-lbl">Open Maintenance</div><div class="card-val">${openMaint.length}</div><div class="card-sub">Issues needing action</div></div>
    <div class="card"><div class="card-accent-bar"></div><div class="card-lbl">Key Date Alerts</div><div class="card-val">${overdueAlerts.length+dueSoon.length}</div><div class="card-sub">${overdueAlerts.length} overdue · ${dueSoon.length} due soon</div></div>
  `;

  let html='';
  if(overdueAlerts.length)html+=`<div class="alert red">${overdueAlerts.length} key date(s) overdue — check Key Dates immediately.</div>`;
  if(unpaid.length)html+=`<div class="alert yellow">${unpaid.length} rent payment(s) unpaid totalling ${fmt(unpaidTotal)}.</div>`;
  if(openMaint.length)html+=`<div class="alert blue">${openMaint.length} maintenance issue(s) open.</div>`;
  document.getElementById('dash-alerts').innerHTML=html;

  // Sidebar badges
  const nb_m=document.getElementById('nb-maint');
  nb_m.textContent=openMaint.length;nb_m.style.display=openMaint.length?'inline':'none';
  const urgentDates=overdueAlerts.length+dueSoon.length;
  const nb_d=document.getElementById('nb-dates');
  nb_d.textContent=urgentDates;nb_d.style.display=urgentDates?'inline':'none';
  const expiredDocs=getData('documents').filter(d=>d.expiry&&daysUntil(d.expiry)!==null&&daysUntil(d.expiry)<=30);
  const nb_doc=document.getElementById('nb-docs');
  nb_doc.textContent=expiredDocs.length;nb_doc.style.display=expiredDocs.length?'inline':'none';

  // Leases expiring 60 days
  const expiring=tenants.filter(t=>{const d=daysUntil(t.leaseEnd);return d!==null&&d<=60});
  const lbody=document.getElementById('dash-leases');
  if(!expiring.length){lbody.innerHTML='<tr class="empty"><td colspan="7">No leases expiring within 60 days.</td></tr>';
  } else {
    lbody.innerHTML=expiring.sort((a,b)=>new Date(a.leaseEnd)-new Date(b.leaseEnd)).map(t=>{
      const p=getData('properties').find(x=>x.id===t.propId)||{};
      const d=daysUntil(t.leaseEnd);
      return`<tr><td>${t.id}</td><td><strong>${t.name}</strong></td><td>${p.name||t.propId}</td><td>${fmtD(t.leaseEnd)}</td><td>${daysPill(d)}</td><td>${fmt(p.rent)}</td><td><button class="btn btn-secondary btn-xs" onclick="switchToTenEdit('${t.id}')">Renew</button></td></tr>`;
    }).join('');
  }

  renderOccChart(occ.length,vacant.length);
  renderIncChart();
  renderYTD();
  renderReminders();
  renderGoal();
  renderTodos();
}

function renderOccChart(occ,vac){
  const ctx=document.getElementById('occChart').getContext('2d');
  if(occChartInst)occChartInst.destroy();
  occChartInst=new Chart(ctx,{
    type:'doughnut',
    data:{
      labels:['Occupied','Vacant'],
      datasets:[{data:[occ,vac],backgroundColor:['#2563eb','#e5e7eb'],borderWidth:3,borderColor:'#ffffff',hoverBorderColor:'#ffffff',hoverOffset:4}]
    },
    options:{plugins:{legend:{position:'bottom',labels:{font:{size:12,family:'Inter'},color:'#6b7280',padding:18,usePointStyle:true,pointStyleWidth:8}}},cutout:'74%'}
  });
}

function renderIncChart(){
  const ctx=document.getElementById('incChart').getContext('2d');
  if(incChartInst)incChartInst.destroy();
  const yr=new Date().getFullYear();
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
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
  incChartInst=new Chart(ctx,{
    type:'bar',
    data:{
      labels:months,
      datasets:[
        {label:'Income (rent collected)',data:income,backgroundColor:'#2563eb',borderRadius:4,borderSkipped:false,hoverBackgroundColor:'#1d4ed8',maxBarThickness:22},
        {label:'Expenses (logged)',data:expenses,backgroundColor:'#cbd5e1',borderRadius:4,borderSkipped:false,hoverBackgroundColor:'#94a3b8',maxBarThickness:22}
      ]
    },
    options:{
      plugins:{legend:{position:'bottom',labels:{font:{size:12,family:'Inter'},color:'#6b7280',padding:18,usePointStyle:true,pointStyleWidth:8}}},
      scales:{
        y:{ticks:{callback:v=>'฿'+(v/1000).toFixed(0)+'k',font:{size:10,family:'Inter'},color:'#6b7280'},grid:{color:'#f0f1f4'},border:{color:'transparent'}},
        x:{ticks:{font:{size:10,family:'Inter'},color:'#6b7280'},grid:{color:'transparent'},border:{color:'transparent'}}
      }
    }
  });
}

function switchToTenEdit(id){
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  document.querySelector('[data-t="ten"]').classList.add('active');
  document.getElementById('p-ten').classList.add('active');
  document.getElementById('pageTitle').textContent='Tenants';
  renderTenants();
  setTimeout(()=>openModal('ten',id),100);
}

/* ══ PROPERTIES ══ */
function renderProps(){
  const props=getData('properties');
  const q=(document.getElementById('props-q').value||'').toLowerCase();
  const list=q?props.filter(p=>p.name.toLowerCase().includes(q)||p.id.toLowerCase().includes(q)):props;
  const docs=getData('documents');
  const tbody=document.getElementById('props-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="13">No properties found.</td></tr>';return;}
  tbody.innerHTML=list.map(p=>{
    const yld=pct(p.rent*12,p.value);
    const payBtn=p.status==='Occupied'?`<button class="btn btn-pay btn-xs" onclick="quickPayModal('${p.id}')">Pay</button>`:`<span style="color:var(--muted);font-size:11px">Vacant</span>`;
    const sqm=+p.sqm||0;
    const camRate=+p.camRate||0;
    const totalCam=sqm*camRate;
    const camCell=totalCam?`<span style="color:var(--cyan);font-weight:600">${fmt(totalCam)}</span>`:'<span style="color:var(--muted)">—</span>';
    return`<tr>
      <td><strong style="color:var(--accent)">${p.id}</strong></td>
      <td><strong>${p.name}</strong></td>
      <td style="font-size:11px;color:var(--muted)">${p.address}</td>
      <td>${p.type}</td>
      <td>${fmt(p.rent)}</td>
      <td>${statusBadge(p.status)}</td>
      <td>${fmt(p.value)}</td>
      <td>${yld}</td>
      <td style="text-align:center">${sqm?sqm+' sqm':'<span style="color:var(--muted)">—</span>'}</td>
      <td style="text-align:center">${camRate?'฿'+camRate:'<span style="color:var(--muted)">—</span>'}</td>
      <td style="text-align:right">${camCell}</td>
      <td>${payBtn}</td>
      <td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('prop','${p.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('properties','${p.id}',renderProps)">Del</button></td>
    </tr>`;
  }).join('');
  const occ=props.filter(p=>p.status==='Occupied');
  document.getElementById('props-total-rent').textContent=fmt(occ.reduce((s,p)=>s+(+p.rent),0));
  document.getElementById('props-occ').textContent=occ.length+'/'+props.length+' occupied';
  document.getElementById('props-total-val').textContent=fmt(props.reduce((s,p)=>s+(+p.value),0));
  const valued=props.filter(p=>+p.value>0);
  const avgY=valued.length?(valued.reduce((s,p)=>s+(p.rent*12/p.value*100),0)/valued.length).toFixed(2)+'%':'—';
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
  const p=getData('properties').find(x=>x.id===propId);
  if(!p){toast('Property not found','error');return;}
  const tenant=getData('tenants').find(x=>x.propId===propId);
  if(!tenant){toast('No active tenant found for '+p.name,'error');return;}

  // Check if a Paid entry already exists for this property this calendar month
  const now=new Date();
  const ym=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
  const alreadyPaid=getData('payments').find(pay=>
    pay.propId===propId && pay.status==='Paid' && pay.paid && pay.paid.startsWith(ym)
  );

  const todayStr=now.toISOString().slice(0,10);
  const monthName=now.toLocaleString('en',{month:'long',year:'numeric'});

  document.getElementById('modal-title').textContent='Log Rent Payment';
  document.getElementById('modal-body').innerHTML=`
    <div style="background:var(--green-bg);border:1px solid rgba(34,197,94,.2);border-radius:var(--r-sm);padding:14px 16px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;gap:12px">
      <div>
        <div style="font-size:13.5px;font-weight:600;color:var(--text);margin-bottom:3px">${p.name}</div>
        <div style="font-size:12px;color:var(--text-2)">Tenant: <strong>${tenant.name}</strong> · ${tenant.phone}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:22px;font-weight:700;color:var(--green);letter-spacing:-0.02em">${fmt(p.rent)}</div>
        <div style="font-size:10.5px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">Monthly Rent</div>
      </div>
    </div>
    ${alreadyPaid?`<div class="alert yellow" style="margin-bottom:16px">A paid entry already exists for ${monthName}. This will add another record — confirm only if it's a different payment.</div>`:''}
    <div class="fgrid">
      <div class="fg">
        <label>Paid Date</label>
        <input type="date" id="qp-date" value="${todayStr}">
      </div>
      <div class="fg">
        <label>Amount (THB)</label>
        <input type="number" id="qp-amount" value="${p.rent}" min="0">
      </div>
      <div class="fg span2">
        <label>Reference / Notes (optional)</label>
        <input type="text" id="qp-notes" placeholder="e.g. Bank transfer ref #4521…">
      </div>
    </div>
    <label style="display:flex;align-items:center;gap:9px;margin-top:16px;font-size:12.5px;color:var(--text-2);cursor:pointer;user-select:none">
      <input type="checkbox" id="qp-inc" checked style="width:15px;height:15px;accent-color:var(--accent)">
      Also update income summary for this month
    </label>
  `;
  document.getElementById('modal-save').textContent='✓ Confirm Payment';
  document.getElementById('modal-save').onclick=()=>executeQuickPay(propId,tenant.id);
  document.getElementById('modal-overlay').classList.add('open');
}

function executeQuickPay(propId,tenantId){
  const dateVal=document.getElementById('qp-date').value;
  const amountVal=+document.getElementById('qp-amount').value||0;
  const updateInc=document.getElementById('qp-inc').checked;
  const notes=document.getElementById('qp-notes').value.trim();

  if(!dateVal){toast('Please enter a paid date','error');return;}
  if(!amountVal){toast('Please enter a valid amount','error');return;}

  // Build a clean payment ID
  const payments=getData('payments');
  const newId='RP'+(String(Date.now()).slice(-5));
  payments.push({id:newId,tenantId,propId,due:dateVal,amount:amountVal,paid:dateVal,status:'Paid',notes:notes||''});
  setData('payments',payments);

  // Update income summary
  if(updateInc){
    const d=new Date(dateVal);
    const yr='y'+d.getFullYear();
    const mo=d.getMonth(); // 0-indexed
    const inc=getData('income');
    if(!inc[yr]){
      // Bootstrap new year with zeros if it doesn't exist yet
      inc[yr]={rental:Array(12).fill(0),other:Array(12).fill(0),expenses:Array(12).fill(0)};
    }
    inc[yr].rental[mo]=(+inc[yr].rental[mo]||0)+amountVal;
    setData('income',inc);
  }

  closeModal();
  // Reset save button back to default
  document.getElementById('modal-save').textContent='Save';
  document.getElementById('modal-save').onclick=null;

  const p=getData('properties').find(x=>x.id===propId)||{name:propId};
  toast(`Payment logged — ${p.name}  ${fmt(amountVal)}`,'success');

  // Refresh whichever panels are visible
  renderDashboard();
  renderProps();
}

/* ══ TENANTS ══ */
function renderTenants(){
  const list=getData('tenants');
  const props=getData('properties');
  const q=(document.getElementById('ten-q').value||'').toLowerCase();
  const filtered=q?list.filter(t=>t.name.toLowerCase().includes(q)||t.id.toLowerCase().includes(q)):list;
  const tbody=document.getElementById('ten-body');
  if(!filtered.length){tbody.innerHTML='<tr class="empty"><td colspan="12">No tenants found.</td></tr>';return;}
  tbody.innerHTML=filtered.map(t=>{
    const p=props.find(x=>x.id===t.propId)||{name:t.propId};
    const d=daysUntil(t.leaseEnd);
    const leaseCell=d!==null&&d<=60?`<strong>${fmtD(t.leaseEnd)}</strong> ${daysPill(d)}`:fmtD(t.leaseEnd);
    const depBadge=t.depositStatus==='Pending'?'<span class="badge b-yellow">Pending</span>':t.depositStatus==='Refunded'?'<span class="badge b-gray">Refunded</span>':'<span class="badge b-blue">Active</span>';
    return`<tr><td><strong style="color:var(--accent)">${t.id}</strong></td><td><strong>${t.name}</strong></td><td style="color:var(--muted)">${t.nickname||'—'}</td><td>${p.name}</td><td>${t.phone}</td><td style="font-size:11px;color:var(--muted)">${t.email}</td><td>${fmtD(t.leaseStart)}</td><td>${leaseCell}</td><td>${fmt(t.deposit)}</td><td><span class="stars">${stars(+t.rating)}</span></td><td>${depBadge}</td><td>${t.checklist==='Yes'?'<span class="badge b-green">Done</span>':'<span class="badge b-gray">Not yet</span>'}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('ten','${t.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('tenants','${t.id}',renderTenants)">Del</button></td></tr>`;
  }).join('');
  initTableSort('ten-body');
}

/* ══ RENT PAYMENTS ══ */
function renderPayments(){
  let list=getData('payments');
  const flt=document.getElementById('rent-filter').value;
  const q=(document.getElementById('rent-q').value||'').toLowerCase();
  if(flt!=='all')list=list.filter(p=>p.status===flt);
  if(q)list=list.filter(p=>p.tenantId.toLowerCase().includes(q)||p.propId.toLowerCase().includes(q));
  const tenants=getData('tenants');
  const tbody=document.getElementById('rent-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No payments found.</td></tr>';return;}
  tbody.innerHTML=list.map(p=>{
    const t=tenants.find(x=>x.id===p.tenantId)||{name:p.tenantId};
    const overdue=p.status==='Unpaid'?Math.max(0,Math.round((today()-new Date(p.due))/86400000)):0;
    const fee=overdue>5?overdue*100:0;
    const rowStyle=p.status==='Unpaid'?'background:rgba(248,113,113,.03)':'';
    let ptBadge='';
    if(p.status==='Paid'&&p.paid&&p.due){const diff=Math.round((new Date(p.due)-new Date(p.paid))/86400000);ptBadge=diff>0?' <span class="pt-badge pt-early">'+diff+'d early</span>':(diff<0?' <span class="pt-badge pt-late">'+(-diff)+'d late</span>':' <span class="pt-badge pt-ontime">on time</span>');}
    return`<tr style="${rowStyle}"><td><strong style="color:var(--accent)">${p.id}</strong></td><td>${t.name}</td><td>${p.propId}</td><td>${fmtD(p.due)}</td><td>${fmt(p.amount)}</td><td>${p.paid?fmtD(p.paid)+ptBadge:'—'}</td><td>${statusBadge(p.status)}</td><td>${overdue?`<span style="color:var(--red);font-weight:600">${overdue}d</span>`:'—'}</td><td>${fee?fmt(fee):'—'}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('pay','${p.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('payments','${p.id}',renderPayments)">Del</button></td></tr>`;
  }).join('');
  const allList=getData('payments');
  document.getElementById('rent-total').textContent=fmt(allList.reduce((s,p)=>s+(+p.amount),0));
  const unpaid=allList.filter(p=>p.status==='Unpaid');
  document.getElementById('rent-unpaid-count').textContent=unpaid.length+' unpaid ('+fmt(unpaid.reduce((s,p)=>s+(+p.amount),0))+')';
  const totalFees=allList.reduce((s,p)=>{const ov=p.status==='Unpaid'?Math.max(0,Math.round((today()-new Date(p.due))/86400000)):0;return s+(ov>5?ov*100:0)},0);
  document.getElementById('rent-fees').textContent=totalFees?fmt(totalFees):'—';
  initTableSort('rent-body');renderGoal();renderCalendar();
}

/* ══ MAINTENANCE ══ */
function renderMaint(){
  let list=getData('maintenance');
  const flt=document.getElementById('maint-filter').value;
  if(flt==='open')list=list.filter(m=>m.status!=='Resolved');
  else if(flt==='Resolved')list=list.filter(m=>m.status==='Resolved');
  const all=getData('maintenance');
  const tbody=document.getElementById('maint-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="11">No issues found.</td></tr>';return;}
  tbody.innerHTML=list.map(m=>{
    const repeat=all.filter(x=>x.propId===m.propId&&x.issue===m.issue).length>1;
    const dOpen=m.status==='Resolved'&&m.resolved?Math.round((new Date(m.resolved)-new Date(m.reported))/86400000):Math.round((today()-new Date(m.reported))/86400000);
    const p=getData('properties').find(x=>x.id===m.propId)||{name:m.propId};
    return`<tr><td><strong style="color:var(--accent)">${m.id}</strong></td><td>${p.name}</td><td>${m.issue}</td><td>${fmtD(m.reported)}</td><td>${fmtD(m.resolved)}</td><td>${m.cost?fmt(m.cost):'—'}</td><td>${statusBadge(m.status)}</td><td>${dOpen}d</td><td>${repeat?'<span class="badge b-orange">Repeat</span>':'—'}</td><td>${m.contractor||'—'}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('maint','${m.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('maintenance','${m.id}',renderMaint)">Del</button></td></tr>`;
  }).join('');
  initTableSort('maint-body');
}

/* ══ KEY DATES ══ */
function renderDates(){
  let list=getData('keyDates').slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
  const flt=document.getElementById('dates-filter').value;
  if(flt==='urgent')list=list.filter(k=>{const d=daysUntil(k.date);return d!==null&&(d<0||(d>=0&&d<=k.reminder))});
  else if(flt!=='all')list=list.filter(k=>k.type===flt);
  const tbody=document.getElementById('dates-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="8">No dates to show.</td></tr>';return;}
  tbody.innerHTML=list.map(k=>{
    const d=daysUntil(k.date);
    const st=d===null?'—':d<0?'<span class="badge b-red">Overdue</span>':d<=k.reminder?'<span class="badge b-orange">Due Soon</span>':'<span class="badge b-green">OK</span>';
    const rowCls=d!==null&&d<0?'kd-overdue':d!==null&&d<=k.reminder?'kd-soon':'';
    return`<tr class="${rowCls}"><td>${fmtD(k.date)}</td><td><span class="badge b-blue">${k.type}</span></td><td>${k.propId==='ALL'?'All':propName(k.propId)}</td><td>${k.desc}</td><td>${k.reminder}d</td><td>${daysPill(d)}</td><td>${st}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('date','${k.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('keyDates','${k.id}',renderDates)">Del</button></td></tr>`;
  }).join('');
  initTableSort('dates-body');
}

/* ══ EXPENSES ══ */
function renderExpenses(){
  const list=getData('expenses');
  const props=getData('properties');
  const sel=document.getElementById('exp-filter');
  if(sel.options.length===1){props.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.id+' · '+p.name;sel.appendChild(o)})}
  const flt=sel.value;
  const filtered=flt==='all'?list:list.filter(e=>e.propId===flt);
  const tbody=document.getElementById('exp-body');
  if(!filtered.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No expenses found.</td></tr>';return;}
  tbody.innerHTML=filtered.map(e=>{
    const ov=e.amount-e.budget;
    const ovCell=ov>0?`<span style="color:var(--red)">+${fmt(ov)}</span>`:ov<0?`<span style="color:var(--green)">${fmt(ov)}</span>`:'—';
    return`<tr><td><strong style="color:var(--accent)">${e.id}</strong></td><td>${propName(e.propId)}</td><td>${fmtD(e.date)}</td><td><span class="badge b-blue">${e.category}</span></td><td>${e.desc}</td><td>${fmt(e.amount)}</td><td>${fmt(e.budget)}</td><td>${ovCell}</td><td>${e.recurring==='Yes'?'<span class="badge b-gray">Recurring</span>':'—'}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('exp','${e.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('expenses','${e.id}',renderExpenses)">Del</button></td></tr>`;
  }).join('');
  document.getElementById('exp-total').textContent=fmt(filtered.reduce((s,e)=>s+(+e.amount),0));
  document.getElementById('exp-budget').textContent=fmt(filtered.reduce((s,e)=>s+(+e.budget),0));
  const v=filtered.reduce((s,e)=>s+(+e.amount-+e.budget),0);
  document.getElementById('exp-var').innerHTML=v>0?`<span style="color:var(--red)">+${fmt(v)}</span>`:`<span style="color:var(--green)">${fmt(v)}</span>`;
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
  const tbody=document.getElementById('loans-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No loans on record.</td></tr>';return;}
  tbody.innerHTML=list.map(l=>`<tr><td><strong style="color:var(--accent)">${l.id}</strong></td><td>${propName(l.propId)}</td><td>${l.bank}</td><td>${fmt(l.amount)}</td><td>${l.rate}%</td><td>${fmt(l.monthly)}</td><td>${fmtD(l.start)}</td><td>${fmtD(l.end)}</td><td>${fmt(l.balance)}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('loan','${l.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('loans','${l.id}',renderLoans)">Del</button></td></tr>`).join('');
  document.getElementById('loans-total-amt').textContent=fmt(list.reduce((s,l)=>s+(+l.amount),0));
  document.getElementById('loans-total-mo').textContent=fmt(list.reduce((s,l)=>s+(+l.monthly),0));
  document.getElementById('loans-total-bal').textContent=fmt(list.reduce((s,l)=>s+(+l.balance),0));
  initTableSort('loans-body');
}

/* ══ DOCUMENTS ══ */
function renderDocs(){
  let list=getData('documents');
  const flt=document.getElementById('docs-filter').value;
  if(flt==='expiring')list=list.filter(d=>d.expiry&&daysUntil(d.expiry)!==null&&daysUntil(d.expiry)<=90);
  const tbody=document.getElementById('docs-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="7">No documents found.</td></tr>';return;}
  tbody.innerHTML=list.map(d=>{
    const du=d.expiry?daysUntil(d.expiry):null;
    const expCell=d.expiry?(du<0?`<span style="color:var(--red);font-weight:700">${fmtD(d.expiry)} EXPIRED</span>`:du<=30?`<span style="color:var(--orange);font-weight:600">${fmtD(d.expiry)}</span>`:fmtD(d.expiry)):'N/A';
    return`<tr><td><strong style="color:var(--accent)">${d.id}</strong></td><td>${propName(d.propId)}</td><td><span class="badge b-blue">${d.type}</span></td><td>${fmtD(d.issued)}</td><td>${expCell}</td><td>${d.expiry?daysPill(du):'—'}</td><td>${fileCell(d.id)}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('doc','${d.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('documents','${d.id}',renderDocs)">Del</button></td></tr>`;
  }).join('');
  initTableSort('docs-body');
}

/* ══ CONTRACTS ══ */
function renderContracts(){
  const list=getData('contracts');
  const tbody=document.getElementById('contracts-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="10">No contracts found.</td></tr>';return;}
  tbody.innerHTML=list.map(c=>`<tr><td><strong style="color:var(--accent)">${c.id}</strong></td><td>${propName(c.propId)}</td><td>${c.tenantId?tenName(c.tenantId):'—'}</td><td>${c.type}</td><td>${fmtD(c.start)}</td><td>${fmtD(c.end)}</td><td>${fmt(c.value)}</td><td>${statusBadge(c.status)}</td><td>${fileCell(c.id)}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('contract','${c.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('contracts','${c.id}',renderContracts)">Del</button></td></tr>`).join('');
  initTableSort('contracts-body');
}

/* ══ CONTACTS ══ */
function renderContacts(){
  const list=getData('contacts');
  const q=(document.getElementById('contacts-q').value||'').toLowerCase();
  const filtered=q?list.filter(c=>c.name.toLowerCase().includes(q)||c.role.toLowerCase().includes(q)):list;
  const tbody=document.getElementById('contacts-body');
  if(!filtered.length){tbody.innerHTML='<tr class="empty"><td colspan="9">No contacts found.</td></tr>';return;}
  tbody.innerHTML=filtered.map(c=>`<tr><td><strong style="color:var(--accent)">${c.id}</strong></td><td><strong>${c.name}</strong></td><td>${c.role}</td><td>${c.company}</td><td>${c.phone}</td><td style="font-size:11px;color:var(--muted)">${c.email}</td><td>${c.propId==='ALL'?'All':propName(c.propId)}</td><td style="font-size:11px;color:var(--muted)">${c.notes||'—'}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('contact','${c.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('contacts','${c.id}',renderContacts)">Del</button></td></tr>`).join('');
  initTableSort('contacts-body');
}

/* ══ CONTRACTORS ══ */
function renderContractors(){
  const list=getData('contractors');
  const tbody=document.getElementById('contractors-body');
  if(!list.length){tbody.innerHTML='<tr class="empty"><td colspan="8">No contractors found.</td></tr>';return;}
  tbody.innerHTML=list.map(c=>`<tr><td><strong>${c.name}</strong></td><td>${c.company}</td><td>${c.specialty}</td><td>${c.phone}</td><td style="font-size:11px;color:var(--muted)">${c.email}</td><td><span class="stars">${stars(+c.rating)}</span></td><td>${fmtD(c.lastUsed)}</td><td style="white-space:nowrap"><button class="btn btn-secondary btn-xs" onclick="openModal('contractor','${c.id}')">Edit</button> <button class="btn btn-danger btn-xs" onclick="delItem('contractors','${c.id}',renderContractors)">Del</button></td></tr>`).join('');
  initTableSort('contractors-body');
}

/* ══ DELETE (tap Del, then "Sure?" to confirm) ══ */
function delItem(key,id,cb){
  const btn=window.event&&window.event.target&&window.event.target.closest('button');
  if(btn&&btn.dataset.confirm!=='pending'){
    btn.dataset.confirm='pending';btn.textContent='Sure?';
    setTimeout(()=>{if(btn.isConnected){btn.dataset.confirm='';btn.textContent='Del';}},3000);
    return;
  }
  const list=getData(key);
  const item=list.find(x=>x.id===id);
  setData(key,list.filter(x=>x.id!==id));
  if(key==='tenants')syncLeaseDates();
  cb();
  if(['properties','tenants','payments','maintenance','expenses'].includes(key))renderDashboard();
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
      opts+=items.map(x=>`<option value="${x.id}"${val===x.id?' selected':''}>${x.id} · ${escHtml(String(x.name||''))}</option>`).join('');
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

/* ══ UPCOMING REMINDERS ══ */
function renderReminders(){
  const props = getData('properties');
  const today = new Date(); today.setHours(0,0,0,0);
  const WINDOW = 14;
  const items = [];

  props.forEach(p => {
    // Rent collection — only for occupied properties with a due day set
    const rentDay = +p.rentDueDay || 0;
    if(rentDay > 0 && p.status === 'Occupied'){
      let d = new Date(today.getFullYear(), today.getMonth(), rentDay);
      if(d < today) d = new Date(today.getFullYear(), today.getMonth()+1, rentDay);
      const diff = Math.round((d - today) / 86400000);
      if(diff <= WINDOW) items.push({prop:p, type:'Rent Collection', icon:'', date:d, diff});
    }
    // Meter reading — for all occupied properties with a read day set
    const readDay = +p.meterReadDay || 0;
    if(readDay > 0 && p.status === 'Occupied'){
      let d = new Date(today.getFullYear(), today.getMonth(), readDay);
      if(d < today) d = new Date(today.getFullYear(), today.getMonth()+1, readDay);
      const diff = Math.round((d - today) / 86400000);
      if(diff <= WINDOW) items.push({prop:p, type:'Meter Reading', icon:'', date:d, diff});
    }
  });

  items.sort((a,b) => a.diff - b.diff);

  const tbody = document.getElementById('reminders-body');
  if(!tbody) return;
  if(!items.length){
    tbody.innerHTML='<tr class="empty"><td colspan="4">No rent or meter reading reminders in the next 14 days.</td></tr>';
    return;
  }
  tbody.innerHTML = items.map(item => {
    const cls = item.diff < 0 ? 'b-red' : item.diff === 0 ? 'b-red' : item.diff <= 3 ? 'b-orange' : item.diff <= 7 ? 'b-yellow' : 'b-green';
    const lbl = item.diff < 0 ? `${Math.abs(item.diff)}d overdue` : item.diff === 0 ? 'Today!' : `In ${item.diff}d`;
    const dateStr = item.date.toISOString().split('T')[0];
    return `<tr>
      <td><strong>${escHtml(item.prop.name)}</strong></td>
      <td>${item.icon} ${item.type === 'Meter Reading' ? 'Meter Reading' : item.type}</td>
      <td>${fmtD(dateStr)}</td>
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
  if(titleEl) titleEl.textContent = `${curYear} — Payments Collected Year to Date`;

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
      return `<span class="ytd-prop-tag">${p ? p.name.split(' ').slice(0,2).join(' ') : id}</span>`;
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

function escHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

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
  if(a&&a.closest&&a.closest('.content')&&/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName))return; // don't wipe what you're typing
  renderDashboard();
  renderPanel(document.querySelector('.nav-item.active').dataset.t);
};

/* ══ INIT ══ */
syncLeaseDates();
renderDashboard();
renderTodos();
