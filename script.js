const header=document.querySelector('header'),toggle=document.querySelector('.nav-toggle');
toggle.addEventListener('click',()=>{const open=header.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.setAttribute('aria-label',open?'关闭菜单':'打开菜单')});
header.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const observer=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');observer.unobserve(item.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.booking-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget,name=new FormData(form).get('name');form.querySelector('.status').textContent=`收到啦，${name}！我们稍后会打电话确认。`;form.reset()});
