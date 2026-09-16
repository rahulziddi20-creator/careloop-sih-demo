/* Public browser demo only. No real authentication or cloud synchronization. */
(()=>{
 const defaults=['careloop_medications','careloop_contacts','careloop_family_members','careloop_game_history'];
 for(const key of defaults)if(localStorage.getItem("sih_demo_"+key)===null)localStorage.setItem("sih_demo_"+key,'[]');
 window.CareLoopStorage={getItem:key=>localStorage.getItem("sih_demo_"+key),setItem(key,value){if(!/^careloop_[a-zA-Z0-9_-]+$/.test(key)||/token|password|authenticated/.test(key))return;localStorage.setItem("sih_demo_"+key,String(value));window.top.dispatchEvent(new CustomEvent('careloop-local-change',{detail:key}));},removeItem(key){localStorage.removeItem("sih_demo_"+key);window.top.dispatchEvent(new CustomEvent('careloop-local-change',{detail:key}));},flush:()=>Promise.resolve()};
 const originalFetch=window.fetch.bind(window);
 window.fetch=async(input,init={})=>{const path=new URL(typeof input==='string'?input:input.url,location.href).pathname;
  if(path==='/health')return Response.json({status:'healthy',storage:'device'});
  if(path==='/api/files'&&init.method==='POST'){const data=JSON.parse(init.body);if(!['image/png','image/jpeg','image/webp'].includes(data.type)||typeof data.base64!=='string'||data.base64.length>820000)return Response.json({error:'Choose a photo under 600 KB.'},{status:400});return Response.json({url:'data:'+data.type+';base64,'+data.base64});}
  if(path.startsWith('/api/'))return Response.json({error:'Public demo: this feature requires the backend and is not connected.'},{status:503});
  return originalFetch(input,init);
 };
})();
