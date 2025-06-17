//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const progressLine = document.getElementById('progress-line');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentActive = 1;

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const totalSteps = circles.length - 1;
  const progressPercent = (currentActive - 1) / totalSteps * 100;
  progressLine.style.width = `${progressPercent}%`;

  // Button state
  prevBtn.disabled = currentActive === 1;
  nextBtn.disabled = currentActive === circles.length;
}

nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    updateProgress();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    updateProgress();
  }
});

updateProgress();
