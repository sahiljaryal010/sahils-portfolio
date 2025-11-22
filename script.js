// Simple theme toggle + small UI niceties
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

let dark = false;
themeToggle.addEventListener('click', () => {
  dark = !dark;
  if (dark) {
    root.style.setProperty('--bg', '#111218');
    root.style.setProperty('--card', '#1b1d21');
    root.style.setProperty('--text', '#e9e9ea');
    root.style.setProperty('--muted', '#c6c6c9');
    root.style.setProperty('--accent', '#ffffff');
    themeToggle.querySelector('.knob').style.transform = 'translateX(22px)';
    themeToggle.querySelector('.knob').style.background = '#fff';
  } else {
    root.style.setProperty('--bg', '#f3f5f7');
    root.style.setProperty('--card', '#e6e6e9');
    root.style.setProperty('--text', '#333');
    root.style.setProperty('--muted', '#6f6f6f');
    root.style.setProperty('--accent', '#2b2b2b');
    themeToggle.querySelector('.knob').style.transform = 'translateX(0)';
    themeToggle.querySelector('.knob').style.background = '#111';
  }
});

// Smooth reveal on scroll (small)
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('reveal');
  });
},{threshold:0.12});

document.querySelectorAll('.section, .project-card, .skill-box, .about-photo').forEach(el=>{
  el.classList.add('pre-reveal');
  obs.observe(el);
});
