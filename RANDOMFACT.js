let facts = 0;
let count =(function() {
    let counter = "";
    if (facts = 0){
        return function () {return counter = "Banan er faktisk et arabisk ord for finger.";}
    }
    else if (facts = 1){
        return function () {return counter = "Daarlig aande kan klares ved at tygge kaffeboenner";}
        facts +1
    }
    else if (facts = 2){
        return function () {return counter = "Den største kartoffel nogensinde vejede næsten 5 kilo";}
    }
    else if (facts <= 3){
        return function () {return counter = "Der er ikke flere facts, kom tilbage en anden gang."}
    }
})()

function displaycount(){
    document.getElementById("fact").innerHTML = count();
}
console.log(facts)

// Meningen var at jeg ville komme lidt mere ind på at ligeså snart at factsne kom, ville der gå 4 sekunder og så skulle siden genstarte og man ville kunne prøve på nu.
// Men på en eller anden måde kan jeg ikke få det som du lavet til at virke i mit.

// Jeg var ikke den mest kreative så det var lige en sjov ide. :D
