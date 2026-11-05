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
 const renderedFooter=document.querySelector('.rf-completo');
 renderedFooter.querySelector('.rf-logos').remove();
 const contactLine=document.createElement('div');contactLine.className='rf-contact-line';
 const address=renderedFooter.querySelector('.rf-address');
 contactLine.append(address);
 contactLine.insertAdjacentHTML('beforeend','<a class="rf-email" href="mailto:studiolegaledc@gmail.com">studiolegaledc@gmail.com</a>');
 renderedFooter.querySelector('.rf-legal').prepend(contactLine);
}

const homeStudio=document.querySelector('.home #studio-home');
if(homeStudio){
 const coverActions=document.querySelector('.home .cover-actions');
 const scrollArrow=document.querySelector('.home .activities-scroll');
 if(coverActions){
  coverActions.className='home-hero-message';
  coverActions.innerHTML=`<p>Esperienza e competenza al servizio <br>di persone e imprese</p><a href="./services-2/">Scopri le aree di attività</a>`;
 }
 if(scrollArrow)scrollArrow.remove();
 homeStudio.className='home-studio-profile';
 homeStudio.innerHTML=`<div class="shell home-studio-profile-inner"><div class="home-studio-top"><div class="home-studio-evidence"><p class="home-studio-kicker">Lo studio</p><h2>Più di 10 anni<br>di attività a Pisa</h2></div><div class="home-studio-bio"><p>Lo Studio Legale Associato Davini Ciferri opera a Pisa e affianca privati e imprese nella consulenza e nell’assistenza giudiziale e stragiudiziale.</p><p>L’attività si fonda su un rapporto diretto con il cliente, sull’esame dei fatti e dei documenti e sulla definizione chiara delle possibili iniziative.</p><a href="./copia-di-chi-siamo/">Conosci lo studio <span aria-hidden="true">↗</span></a></div></div><div class="home-network"><div><h3>Collaborazioni</h3><div class="home-network-logos home-partners"><a href="https://www.difesaconsumatore.org/" target="_blank" rel="noopener noreferrer"><img src="./assets/collaborazioni/difesa-consumatore.png" alt="Difesa Consumatore"></a><a class="home-ristrutturo" href="https://www.ristrutturopisa.it/" target="_blank" rel="noopener noreferrer"><img src="./assets/collaborazioni/ristrutturo-pisa.svg" alt="Ristrutturo Pisa"></a></div></div><div><h3>Convenzioni</h3><div class="home-network-logos home-conventions"><img src="./assets/original/a68d38_37d522332ebb46abbe23472059350c45~mv2.png.webp" alt="UILPA Polizia Penitenziaria"><img src="./assets/original/a68d38_280bd92183304e35b5cbacca175349e1~mv2.png.webp" alt="UIL Polizia"><img src="./assets/original/a68d38_78bb279f54d3438392c32e018dce7dae~mv2.png.webp" alt="UILPA Vigili del Fuoco"><img src="./assets/original/a68d38_a1736d861bef4d5ba8cba25180ed331d~mv2.jpg.webp" alt="Gulf International Congress"><img src="./assets/original/a68d38_6308ba26101e4663b2a5dca85154c3e7~mv2.png.webp" alt="Italian Industry and Commerce Office in the UAE"></div></div></div></div>`;
}

const studioApproach=document.querySelector('body.inside .studio-approach');
if(studioApproach){
 studioApproach.insertAdjacentHTML('afterend',`<section class="studio-collaborations" aria-labelledby="collaborations-title"><div class="collaborations-heading"><p class="collaborations-kicker">Rete professionale</p><h2 id="collaborations-title">Collaborazioni</h2><p>Realtà con cui lo studio collabora sul territorio, mantenendo distinti ruoli e competenze.</p></div><div class="collaborations-grid"><a class="collaboration-card collaboration-consumer" href="https://www.difesaconsumatore.org/" target="_blank" rel="noopener noreferrer"><span class="collaboration-logo"><img src="../assets/collaborazioni/difesa-consumatore.png" alt="Logo Difesa Consumatore"></span><span class="collaboration-copy"><strong>Difesa Consumatore</strong><small>Tutela e assistenza ai consumatori</small><span>Visita il sito ↗</span></span></a><a class="collaboration-card collaboration-building" href="https://www.ristrutturopisa.it/" target="_blank" rel="noopener noreferrer"><span class="collaboration-logo"><img src="../assets/collaborazioni/ristrutturo-pisa.svg" alt="Logo Ristrutturo Pisa"></span><span class="collaboration-copy"><strong>Ristrutturo Pisa</strong><small>Servizi per la ristrutturazione</small><span>Visita il sito ↗</span></span></a></div></section>`);
 const collaborations=document.querySelector('.studio-collaborations');
 collaborations.insertAdjacentHTML('afterend',`<section class="studio-conventions" aria-labelledby="conventions-title"><div class="conventions-heading"><p class="collaborations-kicker">Rapporti istituzionali</p><h2 id="conventions-title">Le nostre convenzioni</h2></div><div class="conventions-grid"><a href="https://convenzioni.cralnetwork.it/uilpoliziapenitenziaria/prodotto/studio-legale-dc/" target="_blank" rel="noopener noreferrer"><img src="../assets/original/a68d38_37d522332ebb46abbe23472059350c45~mv2.png.webp" alt="UILPA Polizia Penitenziaria"><span>Polizia Penitenziaria</span></a><a href="https://convenzioni.cralnetwork.it/uilpolizia/prodotto/studio-legale-dc/" target="_blank" rel="noopener noreferrer"><img src="../assets/original/a68d38_280bd92183304e35b5cbacca175349e1~mv2.png.webp" alt="UIL Polizia"><span>Polizia di Stato</span></a><a href="https://convenzioni.cralnetwork.it/uilpavigilidelfuoco/prodotto/studio-legale-dc/" target="_blank" rel="noopener noreferrer"><img src="../assets/original/a68d38_78bb279f54d3438392c32e018dce7dae~mv2.png.webp" alt="UILPA Vigili del Fuoco"><span>Vigili del Fuoco</span></a><div><img src="../assets/original/a68d38_a1736d861bef4d5ba8cba25180ed331d~mv2.jpg.webp" alt="Certificato dello studio"><span>Certificazione</span></div><div><img src="../assets/original/a68d38_6308ba26101e4663b2a5dca85154c3e7~mv2.png.webp" alt="Italian Industry and Commerce Office in the UAE"><span>Italian Industry &amp; Commerce Office in the UAE</span></div></div></section>`);
}

const congressConvention=document.querySelector('.conventions-grid>*:nth-child(4)');
if(congressConvention){
 congressConvention.querySelector('img').alt='Gulf International Congress';
 congressConvention.querySelector('span').textContent='Gulf International Congress';
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
