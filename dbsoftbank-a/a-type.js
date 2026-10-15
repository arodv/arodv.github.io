/* A-type: chip / antenna / white signal. Original 1.0v is preserved separately. */
document.addEventListener('DOMContentLoaded',()=>{
 'use strict';
 document.body.classList.add('design-a');
 const home=document.getElementById('page-index');
 const asset=name=>document.querySelector('[data-asset-name="'+name+'"]')?.getAttribute('src');
 const reader='assets/7582eb1dcec0a974f187.jpg';
 const tag=asset('real-tagged.jpg')||'assets/566effd904ebd45a7b95.png';
 const realReader=asset('real-reader.jpg')||reader;
 const education=asset('real-edu.jpg')||realReader;
 const page=(name,html,cls='')=>{const el=document.createElement('div');el.id='page-'+name;el.className='offline-page '+cls;el.dataset.page=name;el.hidden=true;el.innerHTML=html;home.after(el);return el;};
 const contact=()=>`<section class="a-contact-band"><div><div class="a-overline">LET'S CONNECT</div><h2>우리 기관의 다음 단계를 함께.</h2></div><a href="#page-quote">견적 문의 <span>↗</span></a></section>`;
 const detail=(en,title,desc,image,contents)=>`<section class="a-detail-hero"><div class="a-detail-copy"><span class="a-eyebrow">${en}</span><h1>${title}</h1><p>${desc}</p></div><div class="a-detail-image" style="background-image:url('${image}')" role="img" aria-label="${title.replace(/<br>/g,' ')} 관련 이미지"></div></section><main class="a-detail-content">${contents}</main>${contact()}`;
 const blocks=items=>`<div class="a-detail-grid">${items.map((x,i)=>`<article><span class="a-small-number">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div>`;
 const steps=items=>`<div class="a-process">${items.map((x,i)=>`<div><span>STEP 0${i+1}</span><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div>`;
 const links=items=>`<div class="a-detail-links">${items.map(x=>`<a href="${x[1]}" ${x[1].startsWith('https:')?'target="_blank" rel="noopener noreferrer"':''}>${x[0]} ↗</a>`).join('')}</div>`;
 const inventory=page('inventory',detail('INVENTORY SURVEY','재물조사','정기 재물조사를 맡기고 싶으신가요? 실제 물품을 확인하고 대장과 대조해, 후속 정리에 필요한 조사 결과를 제공합니다.',realReader,
 `<h2>재물조사를 맡기면<br>어떤 업무를 함께하나요?</h2>${blocks([['현장 물품 확인','리더기로 전자태그가 부착된 물품을 조사합니다. 태그가 없거나 훼손된 물품의 처리 범위는 사전에 협의합니다.'],['대장과 결과 대조','조사 결과를 기존 물품 대장과 비교하고, 미확인·중복·이동 등 확인이 필요한 항목을 구분합니다.'],['결과 정리 지원','담당자가 후속 업무를 진행할 수 있도록 조사 결과와 확인 목록을 정리합니다. 보고 범위와 형식은 협의합니다.']])}<h2>이렇게 진행합니다.</h2>${steps([['범위 협의','기관·사업장, 물품 수량과 조사 일정을 확인합니다.'],['자료 확인','기존 대장과 시스템, 태그 상태를 점검합니다.'],['현장 조사','협의한 범위의 실제 물품을 조사합니다.'],['결과 대조','대장과 조사 결과의 차이를 확인합니다.'],['정리·안내','결과를 정리하고 후속 확인 사항을 안내합니다.']])}${links([['재물조사 견적 문의','#page-quote'],['재물조사 직접 체험','#page-experience'],['실제 구동영상','#page-video'],['구축사례 보기','#page-cases']])}`));
 const build=page('build',detail('RFID IMPLEMENTATION','RFID 구축','물품 대장 정비부터 프로그램, 리더기, 태그 발행과 부착까지. 기관의 환경에 맞는 구축 범위를 함께 구성합니다.',tag,
 `<h2>필요한 구성을<br>한 번에 연결합니다.</h2>${blocks([['현황 파악·대장 현행화','실제 보유 물품과 기존 대장을 확인합니다. 누락·중복 등 정리가 필요한 항목을 협의합니다.'],['프로그램·장비 구성','업무 환경에 맞춘 자산관리 프로그램과 AT907 리더기, 태그 발행기 및 전자태그를 구성합니다.'],['태그 발행·현장 부착','물품 재질과 사용 환경에 맞는 태그를 선정해 발행하고, 협의한 범위의 현장 부착을 수행합니다.']])}<h2>도입부터 운영까지.</h2>${steps([['환경 확인','물품·사업장·기존 시스템을 확인합니다.'],['대장 정비','실물과 대장을 대조해 현행화합니다.'],['시스템 구성','프로그램과 장비를 구성합니다.'],['태그 부착','전자태그를 발행해 물품에 부착합니다.'],['교육·운영','담당자 교육과 운영 방법을 안내합니다.']])}${links([['RFID 구축 견적 문의','#page-quote'],['현행화 구축사례','https://blog.naver.com/dbsoftbank/224412576261'],['취급장비','#page-products'],['자산관리 프로그램','#page-program']])}<div class="a-relocated" id="a-build-details"></div>`));
 const maintenance=page('maintenance',detail('MAINTENANCE','유지관리','신규 물품과 훼손 태그 관리, 실무자 교육과 정기 재물조사. 현재 운영 상태에 맞춰 필요한 지원 범위를 협의합니다.',education,
 `<h2>운영 중 필요한 지원을<br>확인해 보세요.</h2>${blocks([['신규·변경 물품 관리','신규 등재 물품의 태그 발행과 부착, 기존 물품의 변경 사항 등 관리 범위를 협의합니다.'],['훼손·누락 태그 점검','사용 중 훼손되거나 누락된 전자태그를 확인하고, 현장 환경에 맞는 교체 작업을 지원합니다.'],['담당자 교육·조사 지원','담당자 변경 시 실무 교육과 운영 방법을 안내합니다. 정기 재물조사 지원 범위도 함께 협의합니다.']])}<h2>문의 전, 세 가지만 알려주세요.</h2>${blocks([['현재 사용하는 시스템','프로그램과 리더기 모델, 운영 중 불편한 사항을 알려주세요.'],['물품 수량·사업장','대략적인 관리 물품 수량과 사업장·건물 수를 알려주세요.'],['필요한 지원·일정','태그 관리, 교육, 재물조사 등 필요한 업무와 희망 일정을 알려주세요.']])}${links([['유지관리 문의','#page-quote'],['소모품 판매','#page-consumables'],['구축사례 보기','#page-cases']])}<div class="a-relocated" id="a-maintenance-details"></div>`));
 const about=page('about',detail('ABOUT DBSOFTBANK','2009년부터,<br>RFID 물품관리와 함께.','프로그램 개발과 장비 공급, 현장 작업과 운영 지원을 하나의 흐름으로 연결합니다.',realReader,`<div class="a-relocated" id="a-about-details"></div>${links([['주요고객','#page-clients'],['기술인증','#page-cert'],['구축사례 보기','#page-cases']])}`));
 const experience=page('experience',`<div class="a-experience-intro"><h1>재물조사 체험</h1><a href="#page-inventory">실제 재물조사 서비스 안내 ↗</a></div>`,'a-experience-page');
 const simulation=home.querySelector('#customer-experience');if(simulation)experience.append(simulation);
 [['#company','#a-about-details'],['#fields','#a-about-details'],['#process','#a-build-details'],['#flow','#a-build-details'],['#outcomes',null],['#faq','#a-maintenance-details']].forEach(([from,to])=>{const el=home.querySelector(from);if(el&&to)document.querySelector(to).append(el);});
 page('consumables',detail('RFID CONSUMABLES','소모품 판매','기관에서 사용하는 물품관리용 전자태그와 발행 소모품을 문의하세요. 장비 모델과 부착 환경에 맞는 규격을 확인해 안내합니다.','assets/566effd904ebd45a7b95.png',
 `<div class="a-consumable-grid"><article><img src="assets/566effd904ebd45a7b95.png" alt="RFID 물품관리 전자태그"><h2>RFID 전자태그</h2><p>물품의 재질·부착 위치·사용 환경을 확인해 적합한 태그 규격을 안내합니다.</p><button data-consumable="RFID 전자태그">판매 문의 ↗</button></article><article><img src="assets/566effd904ebd45a7b95.png" alt="라벨 인쇄 예시"><h2>태그·라벨 소모품</h2><p>사용 중인 태그 발행기 모델과 기존 라벨 규격, 필요 수량을 알려주세요.</p><button data-consumable="태그·라벨 소모품">판매 문의 ↗</button></article><article class="a-ribbon-product"><div class="a-ribbon-graphic" aria-hidden="true"><i></i><i></i></div><h2>발행기 리본</h2><p>발행기 모델과 태그·라벨 재질에 맞는 리본 사양 및 공급 가능 여부를 확인합니다.</p><button data-consumable="발행기 리본">판매 문의 ↗</button></article></div><p class="a-consumable-note">제품 규격과 판매 가격은 상담을 통해 안내합니다. 070-8803-4080 · db@dbsoftbank.com</p>`));
 home.innerHTML=`<section class="a-hero" aria-label="RFID 안테나를 따라 흐르는 빛"><div class="a-hero-graphic"><canvas id="a-hero-canvas" aria-hidden="true"></canvas><div class="a-chip-label" hidden></div></div><h1 class="a-accessible">RFID로 하나로 연결합니다.</h1><div class="a-scenes"><button class="a-pause" aria-label="배경 모션 일시정지" aria-pressed="false">Ⅱ</button></div><a class="a-scroll-cue" href="#a-visual-links" aria-label="콘텐츠 보기">↓</a><span class="a-motion-hint" hidden></span></section><section id="a-visual-links" class="a-visual-links" aria-label="주요 콘텐츠"><a class="a-visual-card a-case-card" href="#page-cases" aria-label="CASE STUDIES 구축사례"><div class="a-card-art a-case-art" aria-hidden="true"><div class="a-orbit-grid"></div><div class="a-data-globe"></div><i></i><i></i><i></i></div><h2>CASE STUDIES</h2><span class="a-card-arrow">↗</span></a><a class="a-visual-card a-all-card" href="#page-build" aria-label="ALL-IN-ONE 올인원 서비스"><div class="a-card-art a-all-art" aria-hidden="true"><div class="a-chip-object"><div></div></div><i></i><i></i><i></i></div><h2>ALL-IN-ONE</h2><span class="a-card-arrow">↗</span></a><a class="a-visual-card a-clients-card" href="#page-clients" aria-label="CLIENTS 주요고객"><div class="a-client-orbits" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h2>CLIENTS</h2><span class="a-card-arrow">↗</span></a></section>`;
 document.querySelector('.a-scroll-cue').addEventListener('click',e=>{e.preventDefault();document.querySelector('#a-visual-links').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})});
 const primary=[['재물조사','inventory'],['RFID 구축','build'],['유지관리','maintenance'],['소모품 판매','consumables']];
 const secondary=[['취급장비','products'],['자산관리 프로그램','program'],['재물조사 체험','experience'],['구동영상','video'],['기술인증','cert'],['주요고객','clients'],['구축사례','cases'],['회사소개','about'],['견적문의','quote']];
 document.querySelectorAll('.a-scenes [data-scene]').forEach(b=>b.remove());
 document.querySelector('.a-chip-label').hidden=true;
 
 document.getElementById('site-header').innerHTML=`<div class="a-header"><a class="a-brand" href="#page-index">DBSOFT<em>BANK</em><small>RFID SOLUTIONS</small></a><div class="a-nav-wrap"><nav class="a-desktop-nav" aria-label="주요 업무"><a href="#page-cases">CASE STUDIES</a><a href="#page-build">ALL-IN-ONE</a><a href="#page-clients">CLIENTS</a><a href="#page-quote">CONTACT ↗</a></nav><button class="a-menu-toggle" aria-label="전체 메뉴 열기" aria-controls="a-menu-drawer" aria-expanded="false"><span>메뉴</span></button></div></div><div class="a-drawer-backdrop" hidden></div><nav class="a-drawer" id="a-menu-drawer" aria-label="전체 메뉴" hidden><p class="a-drawer-label">DBSOFTBANK / EXPLORE</p>${primary.map(x=>`<a href="#page-${x[1]}">${x[0]}</a>`).join('')}<div class="a-minor-menu">${secondary.map(x=>`<a href="#page-${x[1]}">${x[0]}</a>`).join('')}</div><div class="a-drawer-contact">070-8803-4080<br>db@dbsoftbank.com</div></nav>`;
 const toggle=document.querySelector('.a-menu-toggle'),drawer=document.querySelector('.a-drawer'),backdrop=document.querySelector('.a-drawer-backdrop');
 function menu(open){toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'전체 메뉴 닫기':'전체 메뉴 열기');drawer.hidden=backdrop.hidden=!open;document.body.classList.toggle('a-menu-open',open);document.body.style.overflow=open?'hidden':'';if(!open&&drawer.contains(document.activeElement))toggle.focus({preventScroll:true});}
 toggle.addEventListener('click',()=>menu(toggle.getAttribute('aria-expanded')!=='true'));backdrop.addEventListener('click',()=>menu(false));drawer.addEventListener('click',e=>{if(e.target.closest('a'))menu(false)});document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false);if(e.key==='Tab'&&!drawer.hidden){const f=[toggle,...drawer.querySelectorAll('a')];const a=f.indexOf(document.activeElement);if(e.shiftKey&&a<=0){e.preventDefault();f.at(-1).focus()}else if(!e.shiftKey&&a===f.length-1){e.preventDefault();toggle.focus()}}});
 const aliases={'#page-index-customer-experience':'#page-experience','#page-index-company':'#page-about','#page-index-flow':'#page-build','#page-index-fields':'#page-about','#page-index-biz':'#page-build','#page-index-needs':'#page-inventory'};
 document.querySelectorAll('a[href]').forEach(a=>{if(aliases[a.getAttribute('href')])a.href=aliases[a.getAttribute('href')];if(a.textContent.includes('구축사례 전체'))a.textContent=a.textContent.replace('구축사례 전체 보기','구축사례 보기').replace('구축사례 전체보기','구축사례 보기');});
 document.querySelectorAll('[data-consumable]').forEach(b=>b.addEventListener('click',()=>{window.openQuote();const text=document.querySelector('#quoteModal textarea');if(text)text.value=b.dataset.consumable+' 판매 문의\n사용 장비 모델: \n필요 수량: ';}));

 // Real company blog entries and locally hosted thumbnails, supplied by the build.
 const cases=document.querySelector('#page-cases');
 if(cases&&window.DB_BLOG_CASES){
  cases.querySelector('.page-head p').textContent='현장에서 완성한 RFID 물품관리의 기록.';
  cases.querySelector('.blog-grid').innerHTML=window.DB_BLOG_CASES.map(p=>`<a class="post" href="${p.url}" target="_blank" rel="noopener noreferrer"><img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async"><div class="body"><span class="cat">CASE STUDY</span><h4>${p.title}</h4><span class="date">${p.date}</span><span class="a-post-arrow" aria-hidden="true">↗</span></div></a>`).join('');
 }
 document.querySelectorAll('#page-clients .client-logo[style]').forEach(el=>el.classList.add('a-original-dark-logo'));
 const oldTel=document.querySelector('.modal-submit[href="tel:0226518338"]');if(oldTel)oldTel.href='tel:07088034080';
 let paused=matchMedia('(prefers-reduced-motion:reduce)').matches;const hero=document.querySelector('.a-hero');
 const pause=document.querySelector('.a-pause');
 function pauseUI(){document.body.classList.toggle('a-static',paused);pause.setAttribute('aria-pressed',String(paused));pause.setAttribute('aria-label',paused?'배경 모션 재생':'배경 모션 일시정지');pause.textContent=paused?'▶':'Ⅱ';}
 document.querySelectorAll('.a-scenes [data-scene]').forEach(b=>b.addEventListener('click',()=>{scene=b.dataset.scene;hero.dataset.scene=scene;document.querySelectorAll('.a-scenes [data-scene]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelector('.a-chip-label').hidden=scene==='nation';}));pause.addEventListener('click',()=>{paused=!paused;pauseUI()});pauseUI();
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');reduced.addEventListener('change',e=>{paused=e.matches;pauseUI()});
 const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('a-unseen');reveal.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.a-reveal').forEach(e=>{if(!reduced.matches)e.classList.add('a-unseen');reveal.observe(e)});
 const signal=document.createElement('div');signal.className='a-signal-backdrop';signal.setAttribute('aria-hidden','true');signal.innerHTML='<svg preserveAspectRatio="none"><defs><filter id="a-glow"><feGaussianBlur stdDeviation="1.2"/></filter></defs><path class="a-wire-base"/><path class="a-wire-bloom" filter="url(#a-glow)"/><path class="a-wire-light"/><path class="a-wire-base a-wire-second"/><path class="a-wire-light a-wire-second-light"/></svg>';document.body.prepend(signal);
 let signalLength=1,signalSecondLength=1;
 function signalSize(){
 const w=document.documentElement.clientWidth,h=innerHeight,svg=signal.querySelector('svg');svg.setAttribute('viewBox',`0 0 ${w} ${h}`);signal.style.height=h+'px';
 const d=`M ${w*.14} -60 V ${h*.23} C ${w*.14} ${h*.34},${w*.20} ${h*.34},${w*.20} ${h*.45} V ${h*.68} C ${w*.20} ${h*.79},${w*.14} ${h*.79},${w*.14} ${h+60}`;
 signal.querySelectorAll('path:not(.a-wire-second):not(.a-wire-second-light)').forEach(p=>p.setAttribute('d',d));
 const d2=`M ${w*.87} -100 V ${h*.32} C ${w*.87} ${h*.44},${w*.81} ${h*.44},${w*.81} ${h*.56} V ${h*.74} C ${w*.81} ${h*.86},${w*.87} ${h*.86},${w*.87} ${h+80}`;
 signal.querySelectorAll('.a-wire-second,.a-wire-second-light').forEach(p=>p.setAttribute('d',d2));signalLength=signal.querySelector('.a-wire-base').getTotalLength();signalSecondLength=signal.querySelector('.a-wire-second').getTotalLength();
 }
 const canvas=document.getElementById('a-hero-canvas'),ctx=canvas.getContext('2d');let W=0,H=0,px=0,py=0,targetX=0,targetY=0,t=0,last=0,visible=true;
 new IntersectionObserver(es=>visible=es[0].isIntersecting,{threshold:0}).observe(hero);
 function size(){const r=canvas.getBoundingClientRect();W=r.width;H=r.height;const dpr=Math.min(devicePixelRatio||1,1.75);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);signalSize();}
 window.addEventListener('resize',size);document.fonts.ready.then(size);hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();targetX=(e.clientX-r.left)/r.width-.5;targetY=(e.clientY-r.top)/r.height-.5;});hero.addEventListener('pointerleave',()=>{targetX=targetY=0});
 // Sculptural antenna: shaded metallic ribbons, projected in real time.
 function antenna(){
  const scale=Math.min(W*.39,H*.38),cx=W*.5+px*28,cy=H*.53+py*20;
  const yaw=.48+Math.sin(t*.24)*.24,pitch=.72+Math.sin(t*.19)*.18;
  function point(u,r,v){
   const c=Math.cos(u),s=Math.sin(u),x=Math.sign(c)*Math.pow(Math.abs(c),.65)*r,y=Math.sign(s)*Math.pow(Math.abs(s),.65)*r;
   const z=v+Math.sin(u*2+t*.16)*.09;
   const xx=x*Math.cos(yaw)+z*Math.sin(yaw),zz=-x*Math.sin(yaw)+z*Math.cos(yaw);
   const yy=y*Math.cos(pitch)-zz*Math.sin(pitch),depth=y*Math.sin(pitch)+zz*Math.cos(pitch);
   const perspective=2.8/(2.8-depth*.3);
   return [cx+(xx*.91-yy*.42)*scale*perspective,cy+(xx*.35+yy*.95)*scale*perspective,depth];
  }
  const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,scale*1.35);glow.addColorStop(0,'#2a404325');glow.addColorStop(1,'#00000000');ctx.fillStyle=glow;ctx.fillRect(0,0,W,H);
  const faces=[];
  for(let band=0;band<6;band++)for(let j=0;j<360;j++){
   const u=j/360*Math.PI*2,un=(j+1)/360*Math.PI*2,r=.45+band*.115;
   const a=point(u,r,-.025),b=point(un,r,-.025),c=point(un,r+.05,.025),d=point(u,r+.05,.025);
   const light=Math.pow(Math.max(0,Math.cos(u*2+t*.14+.6)),7),base=28+Math.max(0,Math.sin(u+1.2))*48;
   faces.push({p:[a,b,c,d],z:(a[2]+c[2])/2,col:`rgb(${base+light*160},${base+light*183},${base+light*186})`,edge:light});
  }
  faces.sort((a,b)=>a.z-b.z);
  for(const f of faces){ctx.beginPath();f.p.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fillStyle=f.col;ctx.fill();ctx.strokeStyle=f.col;ctx.lineWidth=.65;ctx.stroke();}
  // A single luminous signal moves around each antenna turn.
  for(let band=0;band<6;band++){
   const r=.475+band*.115,start=t*.60-band*.12;
   for(let j=0;j<24;j++){const u=start+j*.007,a=point(u,r,.029),b=point(u+.009,r,.029);ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.strokeStyle=`rgba(211,255,239,${j/24*.9})`;ctx.lineWidth=1.8;ctx.stroke();}
  }
 }
 function flowField(){
  const cx=W*.5+px*28,cy=H*.53+py*20;
  const halo=ctx.createRadialGradient(cx,cy,15,cx,cy,W*.65);halo.addColorStop(0,'#60887812');halo.addColorStop(.6,'#133b3322');halo.addColorStop(1,'#050a0b00');ctx.fillStyle=halo;ctx.fillRect(0,0,W,H);
  // Continuous signal ribbons traverse the surrounding space and converge at the antenna.
  for(let k=0;k<12;k++){
   const side=k%2?-1:1,group=Math.floor(k/2),startY=H*(.12+group*.155),bend=H*(.18+group*.09);
   const p0=[side<0?-40:W+40,startY],p1=[cx+side*W*.40,startY-H*.22],p2=[cx+side*W*.15,cy+bend*.55],p3=[cx+side*W*.055,cy+H*.08];
   const at=u=>{const v=1-u;return [v*v*v*p0[0]+3*v*v*u*p1[0]+3*v*u*u*p2[0]+u*u*u*p3[0],v*v*v*p0[1]+3*v*v*u*p1[1]+3*v*u*u*p2[1]+u*u*u*p3[1]]};
   ctx.beginPath();ctx.moveTo(...p0);ctx.bezierCurveTo(...p1,...p2,...p3);ctx.strokeStyle=k%3===0?'#819c9840':'#4b6b6633';ctx.lineWidth=k%3===0?2:1;ctx.stroke();
   const u=(t*.10+group*.16+(side>0?.32:0))%1;
   ctx.beginPath();for(let j=0;j<14;j++){const p=at(Math.max(0,u-j*.006));j?ctx.lineTo(...p):ctx.moveTo(...p)}ctx.strokeStyle='#b5e4d66b';ctx.lineWidth=2;ctx.stroke();const p=at(u);ctx.beginPath();ctx.arc(...p,2,0,Math.PI*2);ctx.fillStyle='#d6fff0';ctx.fill();
  }
  ctx.save();ctx.translate(cx,cy);ctx.rotate(-.23+px*.07);
  for(let n=0;n<3;n++){const rx=W*(.34+n*.095),ry=H*(.21+n*.075);ctx.beginPath();ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2);ctx.strokeStyle=n===1?'#9bb7ad42':'#718e8425';ctx.lineWidth=1;ctx.stroke();const a=t*(.16+n*.035)+n*2;ctx.beginPath();ctx.ellipse(0,0,rx,ry,0,a,a+.18);ctx.strokeStyle='#c2f2df85';ctx.lineWidth=2;ctx.stroke();}
  ctx.restore();
  for(let i=0;i<(W<700?30:60);i++){const x=((i*137.41)%W+Math.sin(t*.15+i)*8),y=(i*83.71)%H;const alpha=.12+.17*(.5+.5*Math.sin(t*.7+i));ctx.fillStyle=`rgba(177,216,200,${alpha})`;ctx.fillRect(x,y,i%7===0?3:1,i%7===0?3:1);}
 }
 function frame(now){requestAnimationFrame(frame);const dt=Math.min((now-last)/1000,.05);last=now;if(document.hidden)return;if(!paused)t+=dt*1.5;if(!paused){px+=(targetX-px)*.04;py+=(targetY-py)*.04;}const light=signal.querySelector('.a-wire-light'),bloom=signal.querySelector('.a-wire-bloom'),secondary=signal.querySelector('.a-wire-second-light');const dash=`100 ${signalLength+240}`;light.style.strokeDasharray=bloom.style.strokeDasharray=dash;light.style.strokeDashoffset=bloom.style.strokeDashoffset=String(-t*64);secondary.style.strokeDasharray=`75 ${signalSecondLength+260}`;secondary.style.strokeDashoffset=String(-t*48-400);if(!visible||home.hidden||!W)return;ctx.clearRect(0,0,W,H);flowField();antenna();}
 function scroll(){document.body.classList.toggle('a-scrolled',scrollY>30)}window.addEventListener('scroll',scroll,{passive:true});scroll();
 window.addEventListener('hashchange',()=>{menu(false);requestAnimationFrame(size)});size();requestAnimationFrame(frame);requestAnimationFrame(()=>{window.dispatchEvent(new Event('hashchange'));size()});
});
