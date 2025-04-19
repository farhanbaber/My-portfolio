document.querySelectorAll('.circle-progress').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const circleProgress = circle.querySelector('.progress');
    const circumference = 2 * Math.PI * 54; // Radius is 54
    circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
    circleProgress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
});
