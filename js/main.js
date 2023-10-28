let btn = document.querySelector("#btnForm");


const ticketKm = 0.21;

    function ticketFnct() {
        nome = document.ticketForm.fname.value;
        document.getElementById("firstName").innerHTML = nome;
        kmToDo = document.ticketForm.km.value;
        eta = document.ticketForm.clientEta.value;

        const price = ticketKm * kmToDo;
        const youngDiscount = (price/100) * 20;
        const adultDiscount = (price/100) * 40;
        const youngPrice = price - youngDiscount;
        const adultPrice = price - adultDiscount;

        // VERIFICA CAMPI
        if (kmToDo < 0 || kmToDo == "") {
            alert("ERRORE! Verificare i KM da percorrere");
        } else if (nome == "" || nome == null) {
            alert("ERRORE! Verificare il campo Nome e Cognome")
        } else if (eta == "" || eta <= 0 || eta > 100) {
            alert("ERRORE! La tua età non è corretta, inserire un valore compreso tra i 0 e 100 anni")
        }
        // STAMPA BIGLIETTO
        else if ( eta <= 17 && eta >= 0 ) {
            document.getElementById("ticket").style.display = "inline-block"
            document.getElementById("fullPrice").innerHTML = `${price.toFixed(2)}€`;
            document.getElementById("ticketType").innerHTML = `20% (${youngDiscount.toFixed(2)}€)`;
            document.getElementById("ticketPrice").innerHTML = `${youngPrice.toFixed(2)}€`;
        } else if ( eta > 17 && eta < 65){
            document.getElementById("ticket").style.display = "inline-block"
            document.getElementById("fullPrice").innerHTML = `${price.toFixed(2)}€`;
            document.getElementById("ticketType").innerHTML = `0%`;
            document.getElementById("ticketPrice").innerHTML = `${price.toFixed(2)}€`;
        } else if ( eta >= 17 && eta <= 100 ) {
            document.getElementById("ticket").style.display = "inline-block"
            document.getElementById("fullPrice").innerHTML = `${price.toFixed(2)}€`;
            document.getElementById("ticketType").innerHTML = `40% (${adultDiscount.toFixed(2)}€)`;
            document.getElementById("ticketPrice").innerHTML = `${adultPrice.toFixed(2)}€`;
        } else {
            alert("Come ci sei arrivato qui? Hai rotto il programma!")
        }
    }




