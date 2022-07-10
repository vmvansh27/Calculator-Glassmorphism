// For working of the calculator
let string = "";
let keys = document.querySelectorAll('.num');

Array.from(keys).forEach((key) => {
    key.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

// For changing background
function change() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    document.body.style.backgroundImage = "url('images/" + randomNumber1 + ".jpg')";
}