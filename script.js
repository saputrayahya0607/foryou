window.onload = function() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.animationDelay = Math.random() * 6 + 's';
    });
}
    const fireworks = document.getElementById('fireworks');
  
    function launchFireworks() {
      for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = Math.random() * 300 + 'px';
        firework.style.left = Math.random() * 300 + 'px';
        firework.style.animationDelay = Math.random() * 2 + 's';
        fireworks.appendChild(firework);
      }
    }
  
    setTimeout(launchFireworks, 2000);
  
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = 'Ramadhani Naila Riski';