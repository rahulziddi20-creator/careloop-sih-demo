/* A fixed circle with a slowly folding cloud band, with no opacity or size pulses. */
(()=>{
 const canvas=document.getElementById('orb-flow');if(!canvas)return;
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return;
 const size=220,pixels=ctx.createImageData(size,size),motion=matchMedia('(prefers-reduced-motion: reduce)');
 let frame=0,last=0,time=0;
 const top=[31,119,100],bottom=[186,218,202],white=[243,250,244];
 const clamp=x=>Math.max(0,Math.min(1,x));
 function draw(t){
  const tilt=.28*Math.sin(t*.43),rise=.13*Math.sin(t*.61);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const nx=x/size,ny=y/size;
   const wave=.49+rise+tilt*(nx-.5)+.073*Math.sin(nx*6.6+t*.83)+.031*Math.sin(nx*14.4-t*.57);
   const fold=.006*Math.sin(nx*44+ny*27+t*.65)+.003*Math.sin(nx*79-ny*46-t*.8);
   const distance=ny-wave+fold;
   const haze=Math.exp(-Math.pow(distance/.13,2));
   const lower=clamp((distance+.03)*3.4);
   const depth=clamp(ny*.60+lower*.40);
   const grain=(Math.sin(x*127.1+y*311.7)*43758.5453)%1;
   const cloud=clamp(haze*.79+Math.exp(-Math.pow((distance-.10)/.22,2))*.13);
   const i=(y*size+x)*4;
   for(let c=0;c<3;c++){const base=top[c]+(bottom[c]-top[c])*depth;pixels.data[i+c]=base+(white[c]-base)*cloud+grain*1.4*cloud;}
   pixels.data[i+3]=255;
  }
  ctx.putImageData(pixels,0,0);
 }
 function tick(now){if(document.hidden||motion.matches){frame=0;return}if(now-last>=40){time+=Math.min((now-last)/1000,.06);last=now;draw(time)}frame=requestAnimationFrame(tick)}
 function resume(){cancelAnimationFrame(frame);frame=0;last=performance.now();if(!motion.matches&&!document.hidden)frame=requestAnimationFrame(tick);else draw(time)}
 draw(0);resume();motion.addEventListener('change',resume);document.addEventListener('visibilitychange',resume);addEventListener('pagehide',()=>cancelAnimationFrame(frame));
})();
