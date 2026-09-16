/* Server-backed state. Browser storage is used only for display preferences. */
(function(){
 const preferences=new Set(['careloop_theme','careloop_lang','careloop_app_language']);
 const state=new Map((window.__CARELOOP_RECORDS__||[]).map(r=>[r.key,{...r}]));
 let queue=Promise.resolve(),failed=false;
 function status(message,error=false){
  const target=window.parent||window;
  target.postMessage({type:'saveStatus',message,error},location.origin);
 }
 const store={
 getItem(key){if(preferences.has(key))return localStorage.getItem(key);return state.get(key)?.value || null;},
 setItem(key,value){
  if(preferences.has(key)){localStorage.setItem(key,value);return;}
  if(!/^careloop_[a-zA-Z0-9_-]{1,90}$/.test(key)||/token|otp|password|authenticated/.test(key))return;
  value=String(value);const previous=state.get(key)||{revision:0,value:null};state.set(key,{...previous,value});status('Saving…');
  queue=queue.then(async()=>{
   if(failed)throw new Error('Reload to reconnect before saving more changes.');
   const res=await fetch('/api/state',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({key,value,revision:state.get(key)?.revision||0})});
   const data=await res.json();if(!res.ok)throw new Error(data.error||'Unable to save');
   state.set(key,{...state.get(key),revision:data.revision});status('Saved');
  }).catch(error=>{failed=true;status(error.message,true);throw error;});queue.catch(()=>{});
 },
 removeItem(key){this.setItem(key,'');},
 flush(){return queue;}
 };
 window.CareLoopStorage=store;
 window.addEventListener('beforeunload',e=>{if(failed){e.preventDefault();e.returnValue='Changes have not been saved.';}});
})();
