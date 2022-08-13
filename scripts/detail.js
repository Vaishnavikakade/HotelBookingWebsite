// Per Person Cost
const perPersonCost = 1000;
let subTotal;

document.querySelector('#ttl').value = perPersonCost;

document.querySelector('#num').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#num').value;
    var datePicker1 = document.querySelector('#fdate').value;
    var datePicker2 = document.querySelector('#tdate').value;
    if (datePicker1 === '' || datePicker2 === '') {
        document.querySelector('#ttl').value = `${totalAdults * perPersonCost}`;
    } else {
        totalDays = calculateDays();
        document.querySelector('#ttl').value = `${totalAdults * perPersonCost * totalDays}`;
    }
});

// From Date datepicker code
const fromDate = document.querySelector('#fdate');
const currentTime = new Date();
var fMonth = currentTime.getMonth() + 1;
if (fMonth < 10) { fMonth = '0' + fMonth }
var fYear = currentTime.getFullYear();
var fDate = currentTime.getDate();
if (fDate < 10) { fDate = '0' + fDate }
var currentD = `${fYear}-${fMonth}-${fDate}`;
fromDate.setAttribute('min', currentD);

// To Date datepicker code
const toDate = document.querySelector('#tdate');
toDate.setAttribute('min', currentD);
var totalDays;
var fromDateValue;
var toDateValue;

// To Display amount based on datepicker's
document.querySelector('#fdate').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#num').value;
    totalDays = calculateDays();
    document.querySelector('#ttl').value = `${totalAdults * perPersonCost * totalDays}`;
});
document.querySelector('#tdate').addEventListener("change", (e) => {
    e.preventDefault();
    const totalAdults = document.querySelector('#num').value;
    totalDays = calculateDays();
    document.querySelector('#ttl').value = `${totalAdults * perPersonCost * totalDays}`;
});

// Function to calculate total days
const calculateDays = () => {
    var d1 = document.querySelector('#fdate').value;
    var d2 = document.querySelector('#tdate').value;
    const dateOne = new Date(d1);
    const dataTwo = new Date(d2);
    const time = Math.abs(dataTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
}