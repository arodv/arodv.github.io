/* B revision, 2026-10-16. The original and frozen A source are untouched. */
document.addEventListener('DOMContentLoaded',()=>{
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const art=n=>'assets/b3-'+n+'.webp';
 const photo=(sel,n,alt)=>$$(sel).forEach(e=>{e.src=art(n);e.alt=alt});
 photo('.b-business-frames [data-business-frame="3"]','maintenance','장비 운영 공간을 표현한 이미지');
 photo('.b-case:nth-child(1) img','enterprise','기업의 물품관리 공간을 표현한 이미지');
 photo('.b-case:nth-child(2) img','relocation','기관 이전 준비 공간을 표현한 이미지');
 photo('.b-contact>img','enterprise','');
 photo('#page-products .eq:nth-child(2)>img','printer','RFID 태그 발행기 · 배경 정리 이미지');
 photo('#page-products .eq:nth-child(3)>img','tags','RFID 물품관리 전자태그 · 배경 정리 이미지');
 for(const [id,n] of [['maintenance','maintenance'],['about','enterprise']]){const e=$('#page-'+id+' .a-detail-image');e.style.backgroundImage=`url('${art(n)}')`;e.setAttribute('aria-label','RFID 물품관리 운영 공간을 표현한 이미지')}
 $$('.b-scenes [data-cinema]').forEach((b,i)=>{b.setAttribute('aria-label',`메인 영상 장면 ${i+1}`);b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><i></i>'});
 // Keep the existing scene controls and animation state; remove visible English slogans only.
 $('.b-cinema-side')?.remove();
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){if(!['SCRIPT','STYLE'].includes(node.parentElement?.tagName)){node.textContent=node.textContent.replaceAll('전자태그 현장 구축','현장 구축').replaceAll('현장 물품 확인','현장확인')}}
 const about=$('#page-about .a-detail-content');
 about.insertAdjacentHTML('afterbegin',`<section class="r-company"><div><span class="r-eyebrow">RFID SPECIALIST · SINCE 2009</span><h2>현장을 이해하는 기술,<br>운영까지 이어지는 전문성.</h2></div><div><p class="r-lead">디비소프트뱅크는 <strong>2009년 10월 13일 법인 창립</strong> 이후, 공공기관과 기업의 RFID 물품관리 업무를 지원해 온 전문기업입니다.</p><p>물품대장의 정보와 현장의 실제 물품이 일치하도록 프로그램, 전자태그, 리더기와 현장 업무를 연결합니다. 기관마다 다른 관리 기준과 시스템 환경을 확인하고, 도입 단계부터 정기재물조사와 유지관리까지 필요한 범위를 함께 구성합니다.</p><p>자산관리 프로그램 개발 및 연동, 대장 분석·현행화, 태그 발행·부착, 담당자 교육을 하나의 흐름으로 진행합니다. 구축 후에도 신규물품 등재와 훼손태그·불용물품 관리를 지원해 담당자가 다음 업무를 이어갈 수 있도록 돕습니다.</p><a href="#page-business" class="r-text-link">사업분야 자세히 보기 ↗</a></div></section>`);
 const sol=$('#page-solution .solution-intro>div');
 sol.insertAdjacentHTML('beforeend',`<p>먼저 물품번호·부서·위치·상태 등 관리 항목과 등록·이동·조사·처분의 업무 흐름을 정리합니다. 기존 대장의 누락·중복과 코드 체계를 확인하고, 담당자가 필요한 정보를 일관되게 입력하고 조회할 수 있도록 구성합니다.</p><p>물품대장에서 선택한 자산의 태그 발행을 지원하고, 리더기로 수집한 조사 결과를 대장과 대조할 수 있도록 연결합니다. 기존 시스템 연동은 자료 형식과 접근 환경을 검토해 적용 범위를 협의합니다.</p>`);
 $('#page-solution .business-grid').outerHTML=`<section class="r-capabilities"><div class="r-section-title"><span class="r-eyebrow">PROGRAM & WORKFLOW</span><h2>하나의 프로그램에서 이어지는 업무</h2></div><div class="r-capability-grid">${[
 ['01','관리 기준 설계','기관의 물품 분류, 부서·위치 코드, 사용자 역할을 확인하고 관리 항목과 화면 구성을 협의합니다.'],
 ['02','물품 등록·변경·조회','기존 엑셀 대장을 활용한 등록부터 취득·이동·처분 이력 조회까지, 반복되는 물품관리 업무를 정리합니다.'],
 ['03','프로그램에서 태그 발행','등록된 물품을 선택해 RFID 전자태그를 발행합니다. 신규 등록 물품과 훼손·누락 태그의 재발행 업무를 연결합니다.'],
 ['04','재물조사 결과 대조','리더기로 확인한 물품과 기존 대장을 비교하고, 미확인·변경 등 검토가 필요한 내역을 구분합니다.'],
 ['05','기존 시스템 연동','현재 시스템의 데이터 구조와 제공 방식, 접근 권한을 확인한 뒤 연동 항목·주기·방법을 협의합니다.'],
 ['06','현장 적용·담당자 교육','장비와 프로그램을 함께 점검하고, 등록부터 태그 발행·조사 결과 확인까지 담당자의 업무 순서에 맞춰 안내합니다.']
 ].map(([n,t,d])=>`<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div><p class="r-note">세부 기능과 연동 범위는 기관의 운영 환경 및 협의한 개발 범위에 따라 구성합니다.</p></section>`;
 $('#page-program .page-head p').textContent='자산 등록·변경·조회부터 RFID 태그 발행, 재물조사 결과 관리까지 한 시스템에서 연결합니다.';
 $('#page-program .feat').insertAdjacentHTML('afterbegin','<div><h4>RFID 태그 발행</h4><p>프로그램에서 물품을 선택해 태그를 발행하고, 신규물품 및 훼손·누락 태그의 재발행 업무를 처리합니다.</p></div>');
 const sectors=[
 ['기업','ENTERPRISE','사무·연구·생산 공간의 자산관리','부서와 위치별 자산 등록, 이동 이력과 태그 발행, 정기재물조사 업무를 연결합니다.','기업 빌딩을 표현한 대표 그래픽'],
 ['공공기관','PUBLIC INSTITUTIONS','기관 운영에 맞춘 물품관리','기관의 물품대장과 관리 기준을 바탕으로 등록·조사·변경 업무의 흐름을 구성합니다.','공공시설을 표현한 대표 그래픽'],
 ['정부기관','GOVERNMENT','부처·청사 단위의 관리 체계','청사와 부서별 관리 구역을 구분하고, 물품 현황 확인과 조사 결과 정리를 지원합니다.','정부청사를 표현한 대표 그래픽'],
 ['행안부','LOCAL ADMINISTRATION','지자체 물품관리·새올 연동','시청·군청 등 지방자치단체의 물품관리 환경과 새올 시스템 연동 업무를 안내합니다.','지방행정 청사를 표현한 대표 그래픽','https://blog.naver.com/dbsoftbank/224225828521','지자체 현장 기록'],
 ['교육부','EDUCATION','교육기관 전자태그·재물조사','교육지원청과 학교의 물품대장을 정리하고 전자태그 기반 현장확인과 조사 결과 관리를 연결합니다.','교육시설을 표현한 대표 그래픽','https://blog.naver.com/dbsoftbank/224267314105','교육지원청 현장 기록'],
 ['도서관','LIBRARIES','도서관 시설·비품의 자산관리','서가·집기·전산장비 등 시설 비품을 대상으로 위치별 대장 정리와 재물조사 업무를 구성합니다.','서가와 책을 표현한 대표 그래픽']
 ];
 $('#page-cases .business-heading p').textContent='6개 적용 분야를 소개합니다. 공개된 현장 기록은 지자체·교육 분야에서 확인하실 수 있습니다.';
 $('#page-cases .sector-grid').outerHTML=`<div class="r-project-grid">${sectors.map(([t,en,sub,desc,alt,url,label],i)=>`<article class="r-project r-sector"><div class="r-sector-image"><img src="assets/sector-${i}.svg" alt="${alt}" loading="lazy"><span>${en}</span></div><div class="r-sector-copy"><div class="r-project-top"><span>${url?'관련 현장 기록':'적용 분야'}</span><b>0${i+1}</b></div><h2>${t}</h2><h3>${sub}</h3><p>${desc}</p><footer>${url?`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`:'<a href="#page-quote">적용 상담 ↗</a>'}</footer></div></article>`).join('')}</div><p class="r-note">이미지는 분야를 표현한 그래픽이며 특정 기관의 로고나 실제 구축 현장이 아닙니다. 행안부·교육부 분류의 기록은 지자체·교육기관 사례로, 해당 부처 본부의 구축 실적을 의미하지 않습니다.</p>`;
 const caseTrack=$('.b-case-track');
 caseTrack.innerHTML=sectors.map(([t,en,sub,desc,alt],i)=>`<a class="b-case" href="#page-cases"><div><img src="assets/sector-${i}.svg" alt="${alt}" loading="lazy"></div><small>${en}</small><h3>${t} ↗</h3><p class="r-sector-caption">${sub}</p></a>`).join('');
 const caseSection=caseTrack.closest('section');
 caseSection.querySelector('.b-eyebrow').textContent='RFID APPLICATIONS';
 caseSection.querySelector('h2').innerHTML='다양한 공간에 맞춘<br>RFID 물품관리.';
 caseSection.querySelector('.b-image-note')?.remove();
 caseSection.insertAdjacentHTML('beforeend','<p class="b-image-note">분야별 대표 그래픽입니다. 공개된 현장 기록은 구축사례에서 확인하실 수 있습니다.</p>');
 $$('#page-cases .b-image-note').forEach(e=>e.remove());
 const supplies=[
 ['전자태그','물품을 식별하는 기본 매체','RFID 칩과 안테나를 통해 물품을 식별합니다. 물품 재질, 부착 위치와 장비 호환성을 확인해 선정합니다.','<rect x="48" y="42" width="164" height="76" rx="8"/><path d="M66 56h128v48H66zM78 66h104v28H78z"/><rect x="121" y="70" width="18" height="18"/>'],
 ['차폐재','부착 환경에 맞춘 보조 소재','금속 등 부착면의 영향을 고려해 태그와 물품 사이에 사용하는 보조 소재입니다. 태그 종류와 적용 환경에 맞춰 확인합니다.','<path d="m45 70 85-38 85 38-85 38zM45 83l85 38 85-38M45 96l85 38 85-38"/>'],
 ['렛치','현장 부착·고정용 소모품','현장 적용에 필요한 렛치 품목을 문의하세요. 사용 중인 제품의 사진이나 규격을 보내주시면 적용 제품을 확인해 안내합니다.','<path d="M70 45h42v24H88v49H70zM148 42h42v76h-18V66h-24zM90 87h82M90 99h82"/>'],
 ['리본','태그 인쇄용 소모품','태그 발행기에서 문자와 정보를 인쇄할 때 사용합니다. 발행기 모델과 태그 재질에 맞는 폭·길이·재질을 확인합니다.','<ellipse cx="85" cy="55" rx="36" ry="16"/><path d="M49 55v55c0 22 72 22 72 0V55M121 80h62v45h-62"/><ellipse cx="85" cy="55" rx="13" ry="6"/>'],
 ['보호필름','부착된 태그의 표면 보호','부착된 태그의 표면을 보호하는 필름입니다. 태그 크기와 사용 환경을 확인해 적합한 규격을 안내합니다.','<rect x="50" y="45" width="140" height="80" rx="6"/><path d="M65 105V30h145v75H65M190 105l20-22"/><path d="m87 55 80 28m-80-12 54 19"/>'],
 ['방수캡','사용 환경을 고려한 보호 부품','수분 노출 환경에서 태그 보호를 위해 사용하는 캡입니다. 태그 형상과 설치 환경을 확인해 적용 가능한 제품을 안내합니다.','<path d="M55 105V65c0-25 150-25 150 0v40zM55 105c0 25 150 25 150 0M70 65v35h120V65"/><path d="M130 34c-20-25 20-25 0-48" transform="translate(0 38) scale(1 .65)"/>']
 ];
 $('#page-consumables .a-detail-copy p').textContent='전자태그부터 부착·보호·발행 소모품까지. 사용하는 장비와 현장 환경에 맞는 품목을 확인하세요.';
 $('#page-consumables .a-detail-image').style.backgroundImage="url('assets/b2-technology.webp')";
 $('#page-consumables .a-consumable-grid').outerHTML=`<div class="r-supplies">${supplies.map(([t,s,d,svg],i)=>`<article><div class="r-supply-art"><span>0${i+1}</span><svg viewBox="0 0 260 160" fill="none" aria-hidden="true">${svg}</svg></div><div class="r-supply-copy"><span>${s}</span><h2>${t}</h2><p>${d}</p><a href="#page-quote" data-supply="${t}">품목 문의 ↗</a></div></article>`).join('')}</div><p class="r-note">품목 구분을 위한 그래픽입니다. 실제 제품의 형상·규격·성능과 공급 가능 여부는 상담 시 확인합니다.</p>`;
 const training=`<section class="r-training" id="training-2026"><div><span class="r-eyebrow">2026 · TRAINING GUIDE</span><h2>2026년 정기재물조사<br>전체 교육 안내</h2><p>조사 준비부터 현장확인, 결과 정리까지.<br>담당자가 업무의 흐름을 이해할 수 있도록 교육 내용을 안내합니다.</p><a href="#page-quote" data-supply="2026년 정기재물조사 교육">교육 문의 ↗</a></div><div class="r-training-topics"><span>교육 안내 · 일정 및 장소 개별 문의</span>${[['01','조사 준비','물품대장과 부서·위치 정보 확인'],['02','장비 활용','리더기 사용 및 태그 발행 업무'],['03','현장확인','물품 식별과 미확인 내역 점검'],['04','결과 정리','조사 결과 대조와 후속 관리']].map(([n,t,d])=>`<div><b>${n}</b><h3>${t}</h3><p>${d}</p></div>`).join('')}<p class="r-note">교육 일정·장소와 세부 구성은 문의 시 안내합니다.</p></div></section>`;
 $('#page-press .training-grid').insertAdjacentHTML('beforebegin',training+'<h2 class="r-archive-title">지난 교육 기록</h2>');
 const news=$('.b-news-grid>a');news.removeAttribute('target');news.removeAttribute('rel');news.href='#page-press';news.querySelector('h3').textContent='2026년 정기재물조사 전체 교육 안내';
 const newsYear=news.querySelector('small');if(newsYear)newsYear.textContent='홍보실 · 2026 교육 안내';
 const noticeURL='http://www.dbsoftbank.com/program/bbs/board.php?bo_table=nnnnnootice&wr_id=28';
 $('#page-notices .resource-list').insertAdjacentHTML('beforebegin',`<section class="r-notice-feature"><span class="r-eyebrow">2026 ASSET INVENTORY</span><h2>2026년도 정기재물조사 실시 안내</h2><p>공식 공지의 조사 기간과 준비 사항을 확인하세요.</p><dl><div><dt>기준일</dt><dd>2026.06.30</dd></div><div><dt>조사 기간</dt><dd>2026.06.01 – 10.30</dd></div></dl><p>물품대장과 현장 물품을 확인하고, RFID 리더기를 활용한 조사 및 결과 보고 절차를 준비합니다. 기관별 적용 사항은 배부된 공문을 확인하세요.</p><a href="${noticeURL}" target="_blank" rel="noopener">공식 공지 및 첨부자료 확인 ↗</a></section>`);
 $('#page-support .business-wrap').insertAdjacentHTML('beforeend','<div class="r-support-updates"><a href="#page-notices"><span>NOTICE · 2026</span><h2>정기재물조사 실시 안내 ↗</h2><p>기준일과 조사 기간, 준비 사항을 확인하세요.</p></a><a href="#page-press"><span>TRAINING · 2026</span><h2>정기재물조사 전체 교육 안내 ↗</h2><p>담당자 교육의 구성과 문의 방법을 확인하세요.</p></a></div>');
 // A single route for all quotation entry points; retire the old local-only modal.
 window.openQuote=()=>{location.hash='page-quote'};
 window.dispatchEvent(new HashChangeEvent('hashchange'));
});
