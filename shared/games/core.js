export const GAMES=[
 {id:'memory-match',name:'Memory Match',hi:'जोड़ी मिलाएँ',file:'04-game-session-memory-match.html',icon:'cards',description:'Turn over cards and find matching pairs.',hdesc:'कार्ड खोलकर एक जैसी जोड़ी ढूँढें।',levels:['2 pairs','4 pairs','6 pairs']},
 {id:'family-faces',name:'Family Faces',hi:'अपनों को पहचानें',file:'04b-game-family-faces.html',icon:'family',description:'Match a familiar face with their name.',hdesc:'अपनों की तस्वीर को उनके नाम से मिलाएँ।',levels:['2 names','3 names','4 names']},
 {id:'sequence',name:'Follow the Sequence',hi:'क्रम दोहराएँ',file:'04c-game-sequence.html',icon:'sequence',description:'Watch the numbers, then tap them in order.',hdesc:'अंकों को देखें और उसी क्रम में दबाएँ।',levels:['2 steps','3 steps','4 steps']},
 {id:'pattern-clock',name:'Clock Time',hi:'घड़ी का समय',file:'04d-game-pattern-clock.html',icon:'clock',description:'Look at the clock and choose the time.',hdesc:'घड़ी देखकर सही समय चुनें।',levels:['Whole hours','Half hours','Quarter hours']},
 {id:'color-pattern',name:'Colour & Shape',hi:'रंग और आकार',file:'04e-game-color-pattern.html',icon:'shapes',description:'Repeat a short pattern of shapes.',hdesc:'आकारों का छोटा क्रम दोहराएँ।',levels:['2 shapes','3 shapes','4 shapes']},
 {id:'story-recall',name:'A Little Story',hi:'छोटी कहानी',file:'04f-game-story-recall.html',icon:'book',description:'Read a short story and remember its details.',hdesc:'छोटी कहानी पढ़कर उसकी बातें याद करें।',levels:['2 details','3 details','4 details']},
 {id:'daily-objects',name:'Everyday Objects',hi:'रोज़ की चीज़ें',file:'04g-game-daily-objects.html',icon:'cup',description:'Look at familiar objects and find the missing one.',hdesc:'चीज़ों को देखें और गायब चीज़ पहचानें।',levels:['3 objects','4 objects','5 objects']}
];
export const levelConfig=(id,level)=>{const n=Math.max(1,Math.min(3,Number(level)||1));return {level:n,pairs:[2,4,6][n-1],steps:n+1,options:n+1,rounds:3,objects:n+2,questions:n+1,minuteStep:[60,30,15][n-1]}};
export function shuffle(items,rng=Math.random){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]]}return out}
export function makeDeck(objects,pairs,rng=Math.random){return shuffle(shuffle(objects,rng).slice(0,pairs).flatMap(o=>[{...o,cardId:o.id+'-a'},{...o,cardId:o.id+'-b'}]),rng)}
export function accuracy(correct,attempts){return attempts>0?Math.max(0,Math.min(100,Math.round(correct/attempts*100))):0}
export function clockOptions(hour,minute,count,rng=Math.random,minuteStep=15){const correct=hour*60+minute,pool=[];for(let h=1;h<=12;h++)for(let m=0;m<60;m+=minuteStep)if(h*60+m!==correct)pool.push(h*60+m);return shuffle([correct,...shuffle(pool,rng).slice(0,count-1)],rng)}
export function appendResult(history,result){if(history.some(h=>h.id===result.id))return history;return [...history,result].slice(-200)}
export function progressFor(history,id){return [1,2,3].map(level=>{const runs=history.filter(h=>h.gameType===id&&h.level===level&&h.completed!==false);return {level,sessions:runs.length,best:runs.length?Math.max(...runs.map(r=>Number(r.score)||0)):null}})}
export function validFamily(rows){return rows.filter(m=>typeof m.name==='string'&&m.name.trim()&&typeof m.photoUrl==='string'&&(/^\/api\/files\//.test(m.photoUrl)||/^https:\/\//.test(m.photoUrl))).filter((m,i,a)=>a.findIndex(x=>x.name.trim().toLowerCase()===m.name.trim().toLowerCase())===i)}
// Pause-aware delays; cancel resolves waiting work so old rounds cannot continue.
export class GameClock{
 constructor(){this.jobs=new Set();this.paused=false}
 wait(ms){return new Promise(resolve=>{const j={remaining:ms,resolve,start:0,id:null};this.jobs.add(j);if(!this.paused)this.arm(j)})}
 arm(j){j.start=Date.now();j.id=setTimeout(()=>{this.jobs.delete(j);j.resolve(true)},j.remaining)}
 pause(){if(this.paused)return;this.paused=true;for(const j of this.jobs){clearTimeout(j.id);j.remaining=Math.max(0,j.remaining-(Date.now()-j.start));j.id=null}}
 resume(){if(!this.paused)return;this.paused=false;for(const j of this.jobs)this.arm(j)}
 cancel(){for(const j of this.jobs){clearTimeout(j.id);j.resolve(false)}this.jobs.clear();this.paused=false}
}
// Adjust between sessions, never during a round. Speed is not a difficulty signal.
export function adaptiveLevel(history,id){
 const runs=history.filter(r=>r.gameType===id&&r.completed===true&&r.scoringVersion===2&&[1,2,3].includes(r.level)&&Number.isFinite(r.score));
 if(!runs.length)return 1;
 const last=runs.at(-1),level=last.level;
 if(last.score<60||Number(last.assists)>=3)return Math.max(1,level-1);
 const prev=runs.at(-2);
 const strong=r=>r&&r.level===level&&r.score>=85&&Number(r.assists||0)<=1;
 if(strong(last)&&strong(prev))return Math.min(3,level+1);
 return level;
}
