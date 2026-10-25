(function(){
  /* FAQ: una abierta cada vez */
  var faqs=document.querySelectorAll('.faq details');
  faqs.forEach(function(d){d.addEventListener('toggle',function(){if(d.open){faqs.forEach(function(o){if(o!==d)o.open=false;});}});});
  /* Sendero del mapa sin animación si se pide movimiento reducido */
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){var c=document.getElementById('caminante');if(c)c.remove();}
  /* CTA fijo: oculto sobre inicio, oferta, cierre y footer */
  var sticky=document.getElementById('sticky');
  if(sticky&&'IntersectionObserver' in window){
    var vis=new Set();
    var io=new IntersectionObserver(function(es){es.forEach(function(e){e.isIntersecting?vis.add(e.target):vis.delete(e.target);});sticky.classList.toggle('show',vis.size===0);},{threshold:.06});
    ['#inicio','#oferta','#contacto','footer'].forEach(function(s){var el=document.querySelector(s);if(el)io.observe(el);});
  }
})();
