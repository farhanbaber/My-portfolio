

document.querySelectorAll('.circle-progress').forEach(progress => {
    const percent = progress.getAttribute('data-percent');
    const circle = progress.querySelector('.progress-ring-circle.progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
});


 window.addEventListener('load', () => {
      console.log("Loader loaded");
      const loader = document.getElementById('loader');

      setTimeout(() => {
        loader.style.opacity = '0';
      }, 1000);

      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    });

  