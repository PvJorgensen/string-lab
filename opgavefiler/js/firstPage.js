/* Opgave 1*/

// din kode her
const navn = "Patrik Jørgensen";
const antalÅr = 5;

const besked = `
  <h2>Hej ${navn}</h2>
du har nu arbejdet i vores virksomhed i ${antalÅr} år.
`;

const element = document.getElementById("message");

element.innerHTML = besked;

/* Opgave 1*/

// din kode her Definer et array med produktobjekter
const produkter = [
    {
        navn: "Gaffel sæt",
        beskrivelse: "Dette er gafler af kvalitet",
        pris: 250
    }, {
        navn: "Knive sæt",
        beskrivelse: "Dette er knive af kvalitet",
        pris: 200
    }, {
        navn: "Glas",
        beskrivelse: "Dette er glas a kvalitet",
        pris: 400
    }
];

// Find det element, hvor produktlisten skal vises
const produktListeElement = document.getElementById("produktListe");

// Gennemløb produktarrayet og opret produktlinjer ved hjælp af template strings
produkter.forEach(produkt => {
    const produktLinje = `
        <div class="produkt">
            <h2>${produkt.navn}</h2>
            <p>${produkt.beskrivelse}</p>
            <p>Pris: ${produkt.pris} DKK</p>
        </div>
    `;
    // Indsæt produktlinjen i produktListeElementet
    produktListeElement.innerHTML += produktLinje;
});


/* Opgave 3 - skriv videre på koden her: */

        // array med person data
// Deklarer arrayet til personer uden initialisering
const myPersons = [];

// Hent DOM-elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

// Tilføj en eventlistener til knappen
submitButton.addEventListener('click', handleFormSubmission);

// Funktion til håndtering af formularindsendelse
function handleFormSubmission(event) {
    event.preventDefault();

    // Hent inputfelter fra formularen
    const myFormFelter = myForm.querySelectorAll('input');

    // Opret en ny person og tilføj til myPersons-arrayet
    const nyPerson = {
        navn: myFormFelter[0].value,
        alder: myFormFelter[1].value
    };
    myPersons.push(nyPerson);

    // Sorter personerne efter alder og vis listen
    const sorteretMyPersons = sorterEfterAlder(myPersons);
    visPersonListe(sorteretMyPersons);
}

// Funktion til at vise listen af personer
function visPersonListe(sorteretMyPersons) {
    const htmlListe = sorteretMyPersons
        .map((person) => {
            return `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        })
        .join(''); // Konverter arrayet til en streng

    personList.innerHTML = htmlListe;
}

// Funktion til at sortere personer efter alder
function sorterEfterAlder(personer) {
    return personer
        .slice()
        .sort((a, b) => a.alder - b.alder);
}
