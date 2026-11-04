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

const mobileContacts=document.createElement('nav');
mobileContacts.className='mobile-contact-bar';
mobileContacts.setAttribute('aria-label','Contatti rapidi');
mobileContacts.innerHTML=`
 <a href="tel:+390500988669" aria-label="Chiama lo Studio Legale Davini Ciferri al numero 050 0988669"><span aria-hidden="true">☎</span><strong>Chiama</strong></a>
 <a href="https://www.google.com/maps/dir/?api=1&amp;destination=Via+Novecchio+10%2C+interno+11%2C+56121+Pisa+PI" target="_blank" rel="noopener noreferrer" aria-label="Apri le indicazioni per lo studio in Google Maps"><span aria-hidden="true">⌖</span><strong>Indicazioni</strong></a>
 <a href="mailto:studiolegaledc@gmail.com" aria-label="Scrivi una email allo Studio Legale Davini Ciferri"><span aria-hidden="true">✉</span><strong>Email</strong></a>`;
document.body.append(mobileContacts);
