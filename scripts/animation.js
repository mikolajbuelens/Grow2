
document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.progression');
    const circleProgress = document.querySelector('.progression-progress');
    const circleValue = document.querySelector('.progression-value');
    


    let dataValue = 50;
    const maxDataValue = 100;
    
    // circle.addEventListener('click', function() {
    // dataValue += 1;
    // console.log("click", dataValue);

    const percent = (dataValue / maxDataValue) * 100;
    
    const circumference = 440;
    const offset = circumference - (percent / 100) * circumference;
    
    circleProgress.style.strokeDashoffset = offset;
    circleValue.innerHTML = dataValue;
    });
// });
