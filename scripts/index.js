
let container = document.querySelector('#cityCards');
var toggle = document.querySelector('#moreCityCards').style.display = 'none';

document.querySelector('#vmore').addEventListener("click", () => {
    var toggle = document.querySelector('#moreCityCards');
    if (toggle.style.display == 'none') {
        toggle.style.display = "flex";
    } else {
        toggle.style.display = 'none';
    }
});
