const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('enquiry-form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const name=(data.get('name')||'').trim();const service=data.get('service');const details=(data.get('details')||'').trim();const message=`Hello DVOLTTY, my name is ${name}. I am interested in: ${service}.${details?`\nProject details: ${details}`:''}\nPlease let me know the next steps and a quote.`;window.open(`https://wa.me/2349078884689?text=${encodeURIComponent(message)}`,'_blank','noopener')});
document.addEventListener('DOMContentLoaded',()=>{
 const targets=document.querySelectorAll('.section-wrap > *, .service-card, .gallery-card, .price-card, .feature-card');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});targets.forEach(el=>{el.classList.add('reveal');observer.observe(el)})}else targets.forEach(el=>el.classList.add('is-visible'));
 const counters=document.querySelectorAll('.count-up');
 if(counters.length){const run=el=>{const target=Number(el.dataset.count||0);const duration=1500;const start=performance.now();const tick=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);el.textContent=Math.round(target*eased).toLocaleString();if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};
 if('IntersectionObserver' in window){const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){run(entry.target);counterObserver.unobserve(entry.target)}}),{threshold:.5});counters.forEach(el=>counterObserver.observe(el))}else counters.forEach(run)}
});
