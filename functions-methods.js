// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log("Opdracht 1")

function getEmailDomain(EmailAdress){
    const atSymbol = EmailAdress.indexOf("@");
    const emailNaam = EmailAdress.substring(atSymbol + 1);

    return emailNaam
}

const resultEmail = getEmailDomain("n.eeken@novi-education.nl");
const resultEmail1 = getEmailDomain("t.mellink@novi.nl");
const resultEmail2 = getEmailDomain("a.wiersma@outlook.com");

console.log(resultEmail);
console.log(resultEmail1);
console.log(resultEmail2);

console.log(" ");


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

console.log("Opdracht 2")

function typeOfEmail(EmailAdress){
    const atSymbol = EmailAdress.indexOf("@");
    const emailDomein = EmailAdress.substring(atSymbol + 1);

    if (emailDomein === "novi-education.nl"){
        return "Student"
    } else if (emailDomein === "novi.nl"){
        return "Medewerker"
    } else if (emailDomein === "outlook.com"){
        return "Extern"
    } else if (emailDomein === "gmail.com"){
        return "Extern"
    }
}

const resultEmailDomain = typeOfEmail("n.eeken@novi-education.nl");
const resultEmailDomain1 = typeOfEmail("t.mellink@novi.nl");
const resultEmailDomain2 = typeOfEmail("novi.nlaapjesk@outlook.com");
const resultEmailDomain3 = typeOfEmail("a.wiersma@gmail.com");


console.log(resultEmailDomain);
console.log(resultEmailDomain1);
console.log(resultEmailDomain2);
console.log(resultEmailDomain3);


console.log(" ");


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("Opdracht 3")

function checkEmailValidity(EmailAdress){
    const lastLetter = EmailAdress.length - 1;
    const dotCheck = EmailAdress.substring(lastLetter) === ".";

    if (EmailAdress.includes("@") && !EmailAdress.includes(",") && !dotCheck){
        return true
    } else {
        return false
    }
}

const emailValid = checkEmailValidity("n.eeken@novi.nl")
const emailValid1 = checkEmailValidity("tessmellink@novi.nl")
const emailValid2 = checkEmailValidity("n.eekenanovi.nl")
const emailValid3 = checkEmailValidity("n.eeken@novinl.")
const emailValid4 = checkEmailValidity("tessmellink@novi,nl")

console.log(emailValid);
console.log(emailValid1);
console.log(emailValid2);
console.log(emailValid3);
console.log(emailValid4);

console.log(" ");