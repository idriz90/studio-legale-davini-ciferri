// Original navigation for Studio Davini Ciferri. No template libraries.
const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#site-nav');
if(toggle&&navigation){
 toggle.hidden=false;
 document.documentElement.classList.add('has-menu');
 const close=()=>{toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Chiudi':'Menu';});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 navigation.addEventListener('click',event=>{if(event.target.closest('a'))close();});
 matchMedia('(min-width:901px)').addEventListener('change',close);
}
