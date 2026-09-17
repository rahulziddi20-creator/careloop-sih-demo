/* Public sample family, explicitly supplied for publication. Seed once without replacing visitor edits. */
(()=>{
 const marker='sih_demo_family_seed_v1';if(localStorage.getItem(marker))return;
 const base=new URL('./demo-family/',document.currentScript.src);
 const rows=[['yatharth','Yatharth','Brother'],['dhruv','Dhruv','Son'],['rohit','Rohit','Brother'],['rahul','Rahul','Son'],['keshav','Keshav','Brother'],['family','Family','Family']];
 const family=rows.map(([slug,name,relationship])=>({id:'sih-family-'+slug,name,relationship,photoUrl:new URL(slug+'.png',base).href,isDemo:true}));
 const contacts=family.map((m,i)=>({...m,id:'sih-contact-'+rows[i][0],role:m.relationship,phone:'00000 0000'+(i+1),initials:m.name[0],isEmergency:false,isDemo:true}));
 for(const [key,defaults] of [['careloop_family_members',family],['careloop_contacts',contacts]]){
  const storageKey='sih_demo_'+key;let current;try{current=JSON.parse(localStorage.getItem(storageKey)||'[]');}catch{continue;}
  if(!Array.isArray(current))continue;
  const missing=defaults.filter(d=>!current.some(c=>c.id===d.id));localStorage.setItem(storageKey,JSON.stringify([...current,...missing]));
 }
 localStorage.setItem(marker,'yes');
})();
