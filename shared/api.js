(function(){
 const client={
 token:null,user:null,
 async request(endpoint,options={}){const res=await fetch('/api'+endpoint,{...options,headers:{'Content-Type':'application/json',...options.headers}});const data=await res.json();if(!res.ok)throw new Error(data.error||'Request failed');return data;},
 setSession(){throw new Error('Sign-in is managed by your private workspace.');},clearSession(){},isAuthenticated(){return true;},
 async login(){throw new Error('Use your private CareLoop site sign-in.');},async sendOtp(){throw new Error('Email OTP is not configured. Use your private site sign-in.');},async verifyOtp(){throw new Error('Email OTP is not configured.');},
 async getContacts(){return JSON.parse(CareLoopStorage.getItem('careloop_contacts')||'[]');},
 async initiateCall(){throw new Error('Use the phone button to open your device dialer.');},async endCall(){return {status:'unknown',message:'Call outcome is managed by your phone app.'};},
 async initGameSession(){return null;},async recordGame(){await CareLoopStorage.flush();return {saved:true};},
 async getTranslations(code){return {code,translations:window.CARELOOP_TRANSLATIONS?.[code]||window.CARELOOP_TRANSLATIONS?.en||{}};},
 async setLanguage(code){CareLoopStorage.setItem('careloop_lang',code);return {current:code};},
 async getLanguages(){return {current:CareLoopStorage.getItem('careloop_lang')||'en',languages:[]};}
 };window.careLoopApi=client;
})();
