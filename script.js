const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function ani(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(ani)})();
document.querySelectorAll('a,button,.tier,.pillar,.team-card,.prog-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';curR.style.width='52px';curR.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';curR.style.width='36px';curR.style.height='36px'});
});

// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>60);
  document.getElementById('pb').style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
});

// Reveal on scroll
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));

// Step animation
const steps=document.querySelectorAll('.step-item');
const stepObs=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){steps.forEach(s=>s.classList.remove('active'));e.target.classList.add('active')}
}),{threshold:.5});
steps.forEach(s=>stepObs.observe(s));

// Tier select
function selectTier(el){document.querySelectorAll('.tier').forEach(t=>t.classList.remove('selected'));el.classList.add('selected')}

// Form handlers
function handleDonate(btn){btn.textContent='Donation received — thank you! ✓';btn.style.background='#085041';btn.disabled=true}
function handleContact(btn){btn.textContent='Message sent! We\'ll reply within 48 hours ✓';btn.style.background='#085041';btn.disabled=true}

// Stagger reveal delays
document.querySelectorAll('.programs-bento .prog-card').forEach((c,i)=>c.style.transitionDelay=(i*.08)+'s');
document.querySelectorAll('.team-card').forEach((c,i)=>c.style.transitionDelay=(i*.1)+'s');
document.querySelectorAll('.counter-cell').forEach((c,i)=>c.style.transition='background .2s');