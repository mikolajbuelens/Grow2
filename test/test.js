
document.addEventListener('DOMContentLoaded', function() {
const circle = document.querySelector('.circle');
const circleProgress = document.querySelector('.circle-progress');
const circleValue = document.querySelector('.circle-value');

const dataValue = 50;
const maxDataValue = 100;

const percent = (dataValue / maxDataValue) * 100;

const circumference = 440;
const offset = circumference - (percent / 100) * circumference;

circleProgress.style.strokeDashoffset = offset;
circleValue.innerHTML = dataValue;
});