// document.querySelectorAll('.circle-progress').forEach(circle => {
//     const percent = circle.getAttribute('data-percent');
//     const circleProgress = circle.querySelector('.progress');
//     const circumference = 2 * Math.PI * 54; // Radius is 54
//     circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
//     circleProgress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
// });


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
