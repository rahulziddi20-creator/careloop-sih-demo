export function doseTimes(m){
 const text=Array.isArray(m.times)&&m.times.length?m.times.join(', '):String(m.schedule||m.time||'');
 const matches=[...text.matchAll(/\b(\d{1,2}):(\d{2})\s*(AM|PM)?/gi)];
 const times=matches.flatMap(v=>{let h=Number(v[1]),min=Number(v[2]);if(v[3]){if(h<1||h>12)return [];h=h%12+(v[3].toUpperCase()==='PM'?12:0)}return h<24&&min<60?[String(h).padStart(2,'0')+':'+v[2]]:[]});
 if(!times.length&&/^([01]\d|2[0-3]):[0-5]\d$/.test(m.rawTime||''))times.push(m.rawTime);
 return [...new Set(times)].sort();
}
export function dayKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export function isTaken(m,date,time){return Boolean(m.doseTaken?.[date+'|'+time]||m.takenDate===date)}

function dateOnly(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return null;const [y,m,d]=value.split('-').map(Number),date=new Date(y,m-1,d);return dayKey(date)===value?date:null;}
export function scheduleRule(m){
 const text=String(m.frequency||m.schedule||'').toLowerCase();
 if(/as needed|prn/.test(text))return {kind:'prn'};
 if(/weekdays/.test(text))return {kind:'weekdays'};
 if(/weekends/.test(text))return {kind:'weekends'};
 if(/weekly|alternate|every\s+[2-9]/.test(text)){const start=dateOnly(m.startDate);if(!start)return {kind:'unsupported',reason:'Start date needed'};const interval=/weekly/.test(text)?7:/alternate/.test(text)?2:Number(text.match(/every\s+(\d+)\s+days?/)?.[1]);if(!Number.isInteger(interval)||interval<2||interval>30)return {kind:'unsupported',reason:'Review frequency'};return {kind:'interval',start,interval};}
 if(/monthly/.test(text))return {kind:'unsupported',reason:'Monthly schedule needs review'};
 return {kind:'daily'};
}
export function isDueOn(m,date){
 if((m.regimenStatus||m.status)==='Paused')return false;
 const start=dateOnly(m.startDate),end=dateOnly(m.endDate),day=dateOnly(dayKey(date));if(start&&day<start||end&&day>end)return false;
 const rule=scheduleRule(m);if(rule.kind==='prn'||rule.kind==='unsupported')return false;
 if(rule.kind==='weekdays')return day.getDay()>0&&day.getDay()<6;
 if(rule.kind==='weekends')return day.getDay()===0||day.getDay()===6;
 if(rule.kind==='interval'){const serial=d=>Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000;const difference=serial(day)-serial(rule.start);return difference>=0&&difference%rule.interval===0;}
 return true;
}
