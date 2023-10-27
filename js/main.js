const ticketKm = 0.21;

const kmToDo = prompt("Inserisci i KM da percorrere");
const eta = prompt("Inserisci la tua età (0-99 anni)");


const price = ticketKm * kmToDo;
const youngDiscount = (price/100) * 20;
const youngPrice = price - youngDiscount;
const adultDiscount = (price/100) * 40;
const adultPrice = price - adultDiscount;

if ( eta <= 17 && eta >= 0 ) {
    document.getElementById("result").innerHTML = `Il costo del biglietto è di ${price.toFixed(2)}€ ma viene scontato del 20% di ${youngDiscount.toFixed(2)}€. Il prezzo definitivo è ${youngPrice.toFixed(2)}€`;
} else if ( eta > 17 && eta < 65){
    document.getElementById("result").innerHTML = `Il costo del biglietto è di ${price.toFixed(2)}€`;
} else if ( eta >= 17 && eta <= 99 ) {
    document.getElementById("result").innerHTML = `Il costo del biglietto è di ${price.toFixed(2)}€ ma viene scontato del 40%! di ${adultDiscount.toFixed(2)}€. Il prezzo definitivo è ${adultPrice.toFixed(2)}€`;
} else {
    document.getElementById("result").innerHTML = `Inserire un età compresa tra i 0 e 99 anni`;
}