let plastic = 0;
let animals = 0;
let bottles = 0;
let bags = 0;
let coke = 0;

document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        plastic += 104.642313546;
        animals += 0.03170979198;
        bottles += 2000;
        coke += 340;
        bags += 15854.8959919;
        

        $("#plastic").text(`${Math.round(plastic).toLocaleString()}`);
        $("#animals").text(`${Math.round(animals)}`);
        $("#bottles").text(`${Math.round(bottles).toLocaleString()}`);
        $("#coke").text(`${Math.round(coke).toLocaleString()}`);
        $("#bags").text(`${Math.round(bags).toLocaleString()}`);
    }, 100)
});