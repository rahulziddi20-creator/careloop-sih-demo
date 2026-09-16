(()=>{
 const plans=[
  {id:'individual',name:'Individual',icon:'user-round',monthly:199,yearly:1999,features:['1 patient · 2 linked caregivers','Cloud backup and progress reports','Limited Gemini Talk']},
  {id:'family',name:'Family',icon:'users-round',monthly:399,yearly:3999,features:['Up to 3 patients · 5 linked caregivers','Individual plan features for your family','Shared care and progress reports']},
  {id:'hospital',name:'Hospital Pilot',icon:'building-2',monthly:2999,yearly:29999,features:['Up to 20 patients','Staff accounts and patient assignments','Patient overview and reports']},
  {id:'ngo',name:'NGO / Care Home',icon:'heart-handshake',monthly:999,yearly:9999,features:['Up to 10 patients','Staff access and group management','Patient overview and reports']}
 ];
 const el=id=>document.getElementById(id),money=n=>'₹'+n.toLocaleString('en-IN');let period='monthly',selected=null,saved=null;
 try{saved=JSON.parse(window.CareLoopStorage?.getItem('careloop_plan_preference')||'null');if(saved&&['monthly','yearly'].includes(saved.period)&&(plans.some(p=>p.id===saved.plan)||saved.plan==='custom')){period=saved.period;selected=saved.plan;}else saved=null;}catch{}
 function selection(){el('selection').hidden=!selected;if(!selected)return;const p=plans.find(p=>p.id===selected);el('selection-detail').textContent=p?`${p.name} · ${money(p[period])} per ${period==='yearly'?'year':'month'} · proposed price`:`Custom organisation plan · ${period} billing preference · price to be agreed`;el('save-message').textContent=saved?.plan===selected&&saved?.period===period?'Preference saved. No subscription activated.':'';}
 function render(){
  document.querySelectorAll('[data-period]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.period===period)));
  el('plans').replaceChildren();for(const p of plans){const card=document.createElement('article');card.className='plan'+(selected===p.id?' selected':'');card.innerHTML=`<span class="icon"><i data-lucide="${p.icon}" aria-hidden="true"></i></span><h2>${p.name}</h2><p class="price">${money(p[period])}<small> / ${period==='yearly'?'year':'month'}</small></p><p class="saving">${period==='yearly'?`Save ${money(p.monthly*12-p.yearly)} compared with 12 monthly payments`:'Billed monthly when paid plans launch'}</p><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul><button type="button" class="choose" aria-pressed="${selected===p.id}">${selected===p.id?'Selected preference':'Review '+p.name}</button>`;card.querySelector('button').onclick=()=>{selected=p.id;render();el('selection').scrollIntoView({behavior:'smooth',block:'nearest'});};el('plans').append(card);}
  selection();document.dispatchEvent(new Event('careloop-icons'));
 }
 document.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{period=b.dataset.period;render();});
 el('custom').onclick=()=>{selected='custom';render();el('selection').scrollIntoView({behavior:'smooth',block:'nearest'});};
 el('save').onclick=async()=>{if(!selected)return;const button=el('save');button.disabled=true;try{if(!window.CareLoopStorage)throw Error('Open this page from the caregiver dashboard.');const value={plan:selected,period,status:'preference-only',updatedAt:new Date().toISOString()};CareLoopStorage.setItem('careloop_plan_preference',JSON.stringify(value));await CareLoopStorage.flush();saved=value;selection();}catch{el('save-message').textContent='Could not save your preference. Please try again.';}finally{button.disabled=false;}};
 function theme(value){document.body.classList.toggle('dark',value==='dark');}theme(window.CareLoopStorage?.getItem('careloop_theme'));addEventListener('message',e=>{if(e.origin===location.origin&&e.data?.type==='themeChange')theme(e.data.theme);});render();
})();
