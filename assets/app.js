
(function(){const b=document.querySelector('[data-menu-button]');const s=document.querySelector('[data-sidebar]');if(b&&s){b.addEventListener('click',()=>{s.classList.toggle('open');b.setAttribute('aria-expanded',s.classList.contains('open')?'true':'false')});s.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>s.classList.remove('open')))}})();
