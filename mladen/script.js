document.getElementById('saberi').addEventListener('click', function() {
    izracunaj('+');
});

document.getElementById('oduzmi').addEventListener('click', function() {
    izracunaj('-');
});

document.getElementById('pomnozi').addEventListener('click', function() {
    izracunaj('*');
});

document.getElementById('podijeli').addEventListener('click', function() {
    izracunaj('/');
});

function izracunaj(operator) { // do sad smo koristili let za deklarisanje promjenljive
    var broj1 = parseFloat(document.getElementById('broj1').value);
    var broj2 = parseFloat(document.getElementById('broj2').value);
    var rezultatElement = document.getElementById('rezultat');
    var rezultat;

    switch (operator) {
        case '+':
            rezultat = broj1 + broj2;
            break;
        case '-':
            rezultat = broj1 - broj2;
            break;
        case '*':
            rezultat = broj1 * broj2;
            break;
        case '/':
            rezultat = broj1/broj2;
            break;
        default:
            rezultat = "Nepoznat operator";
    }

    rezultatElement.textContent = rezultat;
}