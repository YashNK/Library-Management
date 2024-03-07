let lendname = document.getElementById()

function showInput(option) {
    var inputs = document.querySelectorAll('.input-group');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'none';
        console.log(inputs[i]);
    }
    document.getElementById(option + 'Inputs').style.display = 'block';
}