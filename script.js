
   document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.progress-card');

            cards.forEach(card => {
                const percentValue = parseInt(card.getAttribute('data-percent'));
                const strokeElement = card.querySelector('.progress-stroke');
                const percentText = card.querySelector('.percent');

                if (isNaN(percentValue)) return;

                // Radius (r) is 60, as set in the SVG
                const radius = 60;
                // Circumference = 2 * π * r. Using a fixed value from CSS: 364.4 (for r=58) or 376.99 (for r=60)
                // Let's ensure the JS calculation matches the CSS dasharray for r=60: C = 2 * Math.PI * 60 = 376.99
                const circumference = 2 * Math.PI * radius; 
                strokeElement.style.strokeDasharray = circumference;

                // Calculate the offset (how much of the circle is NOT filled)
                const offset = circumference - (percentValue / 100) * circumference;
                
                // Set the initial offset to full, then transition to the target offset
                strokeElement.style.transition = 'none'; // Temporarily disable transition for setup
                strokeElement.style.strokeDashoffset = circumference;
                
                // Force a repaint to ensure transition starts from the 'start' position
                void strokeElement.offsetWidth; 
                
                // Re-enable transition and apply the final offset
                strokeElement.style.transition = 'stroke-dashoffset 1.5s ease-out';
                strokeElement.style.strokeDashoffset = offset;

                // Animate the percentage number (optional smooth counting)
                let currentPercent = 0;
                const step = percentValue / 150; // Smaller steps for longer animation time

                const counter = setInterval(() => {
                    currentPercent += step;
                    if (currentPercent >= percentValue) {
                        currentPercent = percentValue;
                        clearInterval(counter);
                    }
                    percentText.textContent = `${Math.floor(currentPercent)}%`;
                }, 10);
            });
        });


window.addEventListener('load', () => {
   console.log("Loader loaded");
   const loader = document.getElementById('loader');

   setTimeout(() => {
     loader.style.opacity = '0';
   }, 3000);  

   setTimeout(() => {
     loader.style.display = 'none';
   }, 4000);  
 });  



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

