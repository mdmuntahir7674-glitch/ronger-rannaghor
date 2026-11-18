
(function(){
var SEL='.card,.vc,#app h2,.cta .ctai,.fg>div,.fb',reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'}):null;
function scan(root){if(reduce)return;(root.querySelectorAll?root.querySelectorAll(SEL):[]).forEach(function(el){if(el.dataset.rv)return;el.dataset.rv=1;var sib=el.parentNode?Array.prototype.indexOf.call(el.parentNode.children,el):0;el.style.setProperty('--d',Math.min(sib,6)*.07+'s');el.classList.add('rv');if(io)io.observe(el);else el.classList.add('in')})}
var t;new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){scan(document)},30)}).observe(document.body,{childList:true,subtree:true});
scan(document);
})();
