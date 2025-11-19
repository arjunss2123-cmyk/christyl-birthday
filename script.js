
const scene = document.getElementById('cardScene');
const card  = document.getElementById('card');
const toggleBtn = document.getElementById('toggleBtn');
const shareBtn = document.getElementById('shareBtn');

function toggleCard(forceOpen){
  const open = forceOpen ?? !card.classList.contains('is-open');
  card.classList.toggle('is-open', open);
  scene.setAttribute('aria-pressed', String(open));
  toggleBtn.textContent = open ? 'Close card' : 'Open card';
}

scene.addEventListener('click', () => toggleCard());
scene.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleCard(); }
});

toggleBtn.addEventListener('click', () => toggleCard());

// Optional: use Web Share API if available
shareBtn.addEventListener('click', async () => {
  const shareData = { title: 'A little birthday surprise 🎂', text: 'Open this! Made with love 🤎', url: window.location.href };
  try{
    if(navigator.share){ await navigator.share(shareData); }
    else{ await navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }
  }catch(err){ console.log(err); }
});

// Gentle entrance animation
window.addEventListener('load', () => {
  card.animate([
    { transform: 'rotateY(0) translateY(12px)', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,.2))' },
    { transform: 'rotateY(0) translateY(0)', filter: 'drop-shadow(0 18px 30px rgba(0,0,0,.15))' }
  ], { duration: 900, easing: 'cubic-bezier(.2,.8,.16,1)'});
});
