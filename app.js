(function(){
  if (!window.gsap) return;
  gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
})();