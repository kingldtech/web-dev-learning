// Web Dev Learning - JavaScript
console.log('Welcome to Web Dev Learning! 🚀');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded successfully!');

  // Create a welcome message banner
  const banner = document.createElement('div');
  banner.id = 'js-banner';
  banner.innerHTML = '🚀 JavaScript is working! Welcome to Web Dev Learning, <strong>kingldtech</strong>!';
  banner.style.cssText = [
    'background: #0070f3',
    'color: white',
    'padding: 1rem 2rem',
    'text-align: center',
    'font-size: 1rem',
    'animation: fadeIn 1s ease-in'
  ].join(';');

  document.body.insertBefore(banner, document.body.firstChild);

  // Add a click counter to the section
  const section = document.querySelector('section');
  if (section) {
    const counter = document.createElement('div');
    counter.style.marginTop = '1.5rem';
    counter.innerHTML = [
      '<p id="count-display" style="font-size:1.1rem;margin-bottom:0.5rem;">',
      'You have clicked <strong>0</strong> times.</p>',
      '<button id="click-btn" style="',
      'background:#0070f3;color:white;border:none;',
      'padding:0.6rem 1.5rem;border-radius:6px;',
      'font-size:1rem;cursor:pointer;">Click Me!</button>'
    ].join('');
    section.appendChild(counter);

    let count = 0;
    document.getElementById('click-btn').addEventListener('click', () => {
      count++;
      document.querySelector('#count-display strong').textContent = count;
      if (count === 10) {
        document.getElementById('click-btn').textContent = '🎉 You hit 10!';
        document.getElementById('click-btn').style.background = '#28a745';
      }
    });
  }

  // Inject fadeIn animation
  const style = document.createElement('style');
  style.textContent = '@keyframes fadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(style);
});
