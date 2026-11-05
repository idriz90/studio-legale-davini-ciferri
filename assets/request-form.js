(()=>{
const form=document.querySelector('#studio-request');if(!form)return;
const key=(window.STUDIO_FORM_CONFIG?.accessKey||'').trim();
const fields=form.querySelector('fieldset'),button=form.querySelector('button'),status=document.querySelector('#request-status');
const areaLabel=document.createElement('label');
areaLabel.textContent='Di cosa parliamo? ';
const areaSelect=document.createElement('select');areaSelect.name='area';areaSelect.required=true;
['Seleziona un’area','Diritto bancario','Diritto civile','Diritto immobiliare','Diritto internazionale','Diritto del lavoro','Sovraindebitamento','Privacy e protezione dei dati','Cookie e siti web','Altro'].forEach((text,index)=>{const option=document.createElement('option');option.textContent=text;option.value=index?text:'';if(!index){option.disabled=true;option.selected=true;}areaSelect.append(option);});
areaLabel.append(areaSelect);form.querySelector('.request-grid').append(areaLabel);
const messageLabel=form.elements.message.closest('label');messageLabel.firstChild.textContent='Descrivi brevemente il problema e indica le tue disponibilità ';
const setStatus=(message,type='')=>{status.textContent=message;status.className=type?`request-status-${type}`:'';};
const ready=/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(key);let busy=false;
if(ready){fields.disabled=false;setStatus('');}
document.querySelectorAll('[data-meeting]').forEach(link=>link.addEventListener('click',()=>{form.elements.modalita.value=link.dataset.meeting;if(ready)form.elements.name.focus({preventScroll:true});}));
form.addEventListener('submit',async event=>{
event.preventDefault();if(!ready||busy||!form.reportValidity())return;if(form.elements.botcheck.checked){status.textContent='Invio non disponibile. Contatta lo studio via email o telefono.';return;}
const payload={access_key:key,subject:'Richiesta dal sito — Studio Davini Ciferri',from_name:'Sito Studio Davini Ciferri',botcheck:false};
payload.privacy_ack='Presa visione dell’informativa privacy';
for(const name of ['name','email','phone','modalita','area','message'])payload[name]=form.elements[name].value.trim();
if(!payload.name||!payload.message){setStatus('Inserisci il nome e una breve descrizione.','error');return;}
busy=true;fields.disabled=true;button.textContent='Invio in corso…';setStatus('Invio della richiesta in corso.');
const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
try{const response=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),credentials:'omit',referrerPolicy:'no-referrer',signal:controller.signal});const data=await response.json();
if(!response.ok||data.success!==true)throw Error('submission');
form.reset();window.location.assign('../richiesta-inviata/');return;
}catch{setStatus('Non possiamo confermare l’invio. I dati restano nel modulo: prima di riprovare puoi contattare lo studio via email o telefono.','error');}
finally{clearTimeout(timeout);busy=false;fields.disabled=false;button.textContent='Invia richiesta';}
});})();
