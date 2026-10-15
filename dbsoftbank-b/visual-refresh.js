document.addEventListener('DOMContentLoaded',()=>{
 const asset=n=>'assets/b-'+n+'.webp';
 const photos=['collaboration','operations','education'];
 const captions={collaboration:'물품관리 시스템 협업을 표현한 이미지',operations:'RFID 현장 운영을 표현한 이미지',education:'물품관리 실무 교육을 표현한 이미지'};
 document.querySelectorAll('img').forEach(img=>{const src=img.getAttribute('src')||'';if(/sector-|training-/.test(src)){const type=src.includes('training-')?'education':src.includes('224345049163')?'collaboration':'operations';img.src=asset(type);img.alt=captions[type];}});
 document.querySelectorAll('.b-service img').forEach((img,i)=>{const type=['collaboration','operations','operations','education'][i];img.src=asset(type);img.alt=captions[type];});
 document.querySelectorAll('.b-case img,#page-cases .sector-card:not(.sector-logo) img').forEach((img,i)=>{const type=photos[i%3];img.src=asset(type);img.alt=captions[type];});
 document.querySelectorAll('.b-news-grid img,#page-press .sector-card img').forEach((img,i)=>{const type=['education','collaboration','operations','education'][i%4];img.src=asset(type);img.alt=captions[type];});
 document.querySelectorAll('#page-about .a-detail-image').forEach(e=>{e.style.backgroundImage=`url('${asset('collaboration')}')`;e.setAttribute('aria-label',captions.collaboration)});
 document.querySelectorAll('.b-projects,.b-news,#page-cases .business-wrap,#page-press .business-wrap').forEach(e=>{const p=document.createElement('p');p.className='b-image-note';p.textContent='관련 분야를 표현한 이미지입니다. 실제 현장 기록은 각 게시글에서 확인하실 수 있습니다.';e.append(p)});
 const hero=document.querySelector('.b-hero'),old=hero.querySelector('video');old.pause();old.remove();
 hero.insertAdjacentHTML('afterbegin',`<div class="b-motion-stage"><img src="${asset('hero')}" alt="금속 안테나와 빛의 흐름으로 표현한 RFID 연결" fetchpriority="high"><canvas aria-hidden="true"></canvas><div class="b-motion-light"></div></div>`);
 hero.classList.add('b-new-hero');const stage=hero.querySelector('.b-motion-stage'),canvas=stage.querySelector('canvas'),ctx=canvas.getContext('2d'),reduce=matchMedia('(prefers-reduced-motion: reduce)'),pause=hero.querySelector('#b-pause');let stopped=reduce.matches,scene=0,w=0,h=0,time=0,last=0,visible=true;
 const resize=()=>{w=hero.clientWidth;h=hero.clientHeight;const d=Math.min(devicePixelRatio,2);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0)};new ResizeObserver(resize).observe(hero);resize();
 const setPaused=()=>{hero.classList.toggle('b-motion-paused',stopped);pause.textContent=stopped?'▶':'Ⅱ';pause.setAttribute('aria-label',stopped?'모션 재생':'모션 일시정지')};pause.onclick=()=>{stopped=!stopped;setPaused()};
 hero.querySelectorAll('[data-scene]').forEach((b,i)=>{b.textContent=i?'02 EXPAND':'01 CONNECT';b.onclick=()=>{scene=i;hero.classList.toggle('b-motion-expand',!!i);hero.querySelectorAll('[data-scene]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))}});
 hero.addEventListener('pointermove',e=>{if(stopped)return;stage.style.setProperty('--px',((e.clientX/w-.5)*16)+'px');stage.style.setProperty('--py',((e.clientY/h-.5)*12)+'px')});hero.addEventListener('pointerleave',()=>{stage.style.setProperty('--px','0px');stage.style.setProperty('--py','0px')});
 new IntersectionObserver(es=>visible=es[0].isIntersecting).observe(hero);
 const curve=(u,k)=>{const x=w*(.2+u*1.05),y=h*(.9-u*.8)+Math.sin(u*5.8+k*.11+scene)*h*(.10+k*.002);return[x,y+k*5]};
 function draw(now){requestAnimationFrame(draw);const dt=Math.min((now-last)/1000,.04);last=now;if(stopped||!visible||document.hidden||hero.closest('.offline-page').hidden)return;time+=dt;ctx.clearRect(0,0,w,h);ctx.globalCompositeOperation='screen';for(let k=0;k<16;k++){ctx.beginPath();for(let n=0;n<=85;n++){const [x,y]=curve(n/85,k);n?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.strokeStyle=`rgba(94,231,216,${k%3===0?.12:.035})`;ctx.lineWidth=.7;ctx.stroke();for(let j=0;j<2;j++){let u=(time*(.075+scene*.035)+k*.063+j*.48)%1;const [x,y]=curve(u,k);const g=ctx.createRadialGradient(x,y,0,x,y,9);g.addColorStop(0,'rgba(210,255,249,.9)');g.addColorStop(.2,'rgba(91,239,214,.45)');g.addColorStop(1,'rgba(91,239,214,0)');ctx.fillStyle=g;ctx.fillRect(x-9,y-9,18,18)}}ctx.globalCompositeOperation='source-over'}
 setPaused();requestAnimationFrame(draw);reduce.addEventListener('change',e=>{stopped=e.matches;setPaused()});
});
