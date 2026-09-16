// Only these activities use the extended progression. Photo matching and clocks stay unchanged.
export const VARIED_GAMES=['sequence','color-pattern','story-recall','daily-objects'];
export function activityLevel(history,id){
 const runs=history.filter(r=>r.gameType===id&&r.completed===true&&[2,3].includes(r.scoringVersion)&&Number.isFinite(r.score));
 if(!runs.length)return 1;
 const max=id==='story-recall'?3:id==='daily-objects'?4:5;
 const last=runs.at(-1),level=Math.max(1,Math.min(max,Number(last.level)||1));
 if(last.score<60||last.assists>=3)return Math.max(1,level-1);
 return last.score>=85&&(last.assists||0)<=1?Math.min(max,level+1):level;
}
export function activityConfig(level){const n=Math.max(1,Math.min(5,Number(level)||1));return {steps:n+1,objects:Math.min(6,n+2),options:Math.min(4,n+1),questions:Math.min(4,n+1)}}
export function freshVariant(make,key,used){for(let i=0;i<100;i++){const value=make(),id=key(value);if(!used.has(id)){used.add(id);return value;}}// Finite pools may be exhausted; reset instead of looping indefinitely.
 used.clear();const value=make();used.add(key(value));return value;}
export function makePattern(steps,rng=Math.random){const out=[];for(let i=0;i<steps;i++){const choices=[0,1,2,3].filter(n=>n!==out.at(-1));out.push(choices[Math.floor(rng()*choices.length)]);}return out;}

export const STORY_VARIANTS=[];
for(const [person,personHi] of [['Asha','आशा'],['Ravi','रवि'],['Meera','मीरा'],['Mohan','मोहन']])for(const [place,placeHi] of [['garden','बगीचे'],['park','पार्क'],['market','बाज़ार']])for(const [item,itemHi] of [['apples','सेब'],['flowers','फूल'],['books','किताबें']]){
 STORY_VARIANTS.push({en:`${person} went to the ${place} in the morning. ${person} carried ${item} in a bag. After coming home, ${person} drank water.`,hi:`${personHi} सुबह ${placeHi} गए। उनके बैग में ${itemHi} थे। घर लौटकर उन्होंने पानी पिया।`,q:[
 [`Who went out?`,'बाहर कौन गए?',person,personHi,['Sita','सीता','Anil','अनिल']],
 [`Where did ${person} go?`,`${personHi} कहाँ गए?`,place,placeHi,['beach','समुद्र किनारे','station','स्टेशन']],
 ['What was in the bag?','बैग में क्या था?',item,itemHi,['clothes','कपड़े','biscuits','बिस्कुट']],
 ['What did they drink at home?','घर पर उन्होंने क्या पिया?','Water','पानी',['Tea','चाय','Juice','जूस']]
 ]});
}
