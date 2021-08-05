const age = 26
const isFemale = false
const driverStatus = "bob"
const firstName = "Sebastian"
const totalAmount = 21


// checkt leeftijd
if (age >= 18) {
    console.log("U mag binnen komen!")
} else {
    console.log("Hellaas bent u te jong u mag nog niet naar binnen!")
}
// checkt voor vrouwen
if (isFemale == true) {
    console.log("U mag binnen komen!")
} else {
    console.log("Het is vandaag lady's night u mag niet binnen komen")
}

// checkt voor vrouwen die oud genoeg zijn
if (age >= 18 && isFemale == true) {
    console.log("U mag binnen komen!")
} else if (age >= 18 && isFemale == false){
    console.log("Het is vandaag lady's night u mag niet binnen komen")
} else {
    console.log("U mag niet binnen komen u bent niet oud genoeg")
}

//checkt voor bob
if (driverStatus === "bob") {
    console.log("U mag rijden, een fijne rit terug")
} else {
    console.log("U mag hellaas niet meer rijden, zou ik een taxi voor u bellen")
}

// 50% studentenkorting
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50\% korting!")
} else if (age <= 18){
    console.log("U bent nog te jong")
} else {
    console.log("Hellaas krijg je geen korting meer!")
}

// abraham / sarah  actie
if (firstName === "Sarah" || firstName === "Bram"){
    console.log("U krijgt vandaag een gratis biertje!")
} else {
    console.log("Hellaas u krijgt geen gratis biertje")
}

// jubileum korting 

if (totalAmount > 25 && totalAmount <= 50 ) { 
    console.log("U krijgt gratis bitterballen!")
} else if (totalAmount > 50 && totalAmount <= 100 ) {
    console.log("U krijgt gratis nachos!")
} else if (totalAmount > 100) {
    console.log("U krijgt een gratis fles champagne!")
}  else {
    console.log("Geef meer uit voor veel gratis producten!")
}


