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

const existingFooter=document.querySelector('footer');
if(existingFooter){
 existingFooter.outerHTML=`<footer class="rf rf-completo" id="fondo"><div class="shell"><div class="rf-logos"><div class="credentials" aria-label="Immagini istituzionali dello studio"><a href="https://convenzioni.cralnetwork.it/uilpoliziapenitenziaria/prodotto/studio-legale-dc/" target="_blank" rel="noreferrer"><img src="/assets/original/a68d38_37d522332ebb46abbe23472059350c45~mv2.png.webp" alt="UILPA Polizia Penitenziaria" loading="lazy"></a><a href="https://convenzioni.cralnetwork.it/uilpolizia/prodotto/studio-legale-dc/" target="_blank" rel="noreferrer"><img src="/assets/original/a68d38_280bd92183304e35b5cbacca175349e1~mv2.png.webp" alt="UIL Polizia" loading="lazy"></a><a href="https://convenzioni.cralnetwork.it/uilpavigilidelfuoco/prodotto/studio-legale-dc/" target="_blank" rel="noreferrer"><img src="/assets/original/a68d38_78bb279f54d3438392c32e018dce7dae~mv2.png.webp" alt="UILPA Vigili del Fuoco" loading="lazy"></a><img src="/assets/original/a68d38_a1736d861bef4d5ba8cba25180ed331d~mv2.jpg.webp" alt="Certificato dello studio" loading="lazy"><img src="/assets/original/a68d38_6308ba26101e4663b2a5dca85154c3e7~mv2.png.webp" alt="Italian Industry and Commerce Office in the UAE" loading="lazy"></div><a class="rf-email" href="mailto:studiolegaledc@gmail.com">studiolegaledc@gmail.com</a></div><div class="rf-legal"><p class="rf-address">Via Novecchio 10, interno 11 · c/o Office Centre Galileo Galilei · Pisa · Zona Ospedaletto</p><nav aria-label="Informative"><a href="/privacy/">Privacy</a><a href="/cookie-policy/">Cookie</a><a href="/note-legali/">Note legali</a><span class="rf-copyright">© 2016–2026 <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="by IS — LinkedIn, si apre in una nuova scheda">by IS</a></span></nav></div></div></footer>`;
}

const mobileContacts=document.createElement('nav');
mobileContacts.className='mobile-contact-fabs';
mobileContacts.setAttribute('aria-label','Contatti rapidi');
mobileContacts.innerHTML=`
 <a class="mobile-fab mobile-fab-call" href="tel:+390500988669" aria-label="Chiama lo Studio Legale Davini Ciferri al numero 050 0988669">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
 </a>
 <a class="mobile-fab mobile-fab-map" href="https://www.google.com/maps/dir/?api=1&amp;destination=Via+Novecchio+10%2C+interno+11%2C+56121+Pisa+PI" target="_blank" rel="noopener noreferrer" aria-label="Apri le indicazioni per lo studio in Google Maps">
  <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
 </a>
 <a class="mobile-fab mobile-fab-email" href="mailto:studiolegaledc@gmail.com" aria-label="Scrivi una email allo Studio Legale Davini Ciferri">
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
 </a>`;
document.body.append(mobileContacts);
