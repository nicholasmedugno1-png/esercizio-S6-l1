const myProdoct = [
    {
        name: 'Sneaker Run',
        prezzo: 89,
        descrizione: 'Scarpa leggera per la corsa, suola in gomma traspirante.',
        disponibile: true
    },
    {
        name: 'T-shirt basic',
        prezzo: 19,
        descrizione: 'Cotone biologico,taglio regolare, disponibile in 5 colori.',
        disponibile: true
    },
    {
        name: 'Borsa city',
        prezzo: 49,
        descrizione: 'Tessuto resistente, tasca interna, cinghia regolabile',
        disponibile: true
    },
]

const myContainerCard = document.querySelector('#containerCard')
function StampaCard() {

    myProdoct.forEach((item) => {

        const myArt = document.createElement('article');
        myArt.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const myDivCard = document.createElement('div');
        myDivCard.classList.add('border', 'rounded', 'p-3', 'bg-white', 'shadow-sm')
        myDivCard.style.height = '380px'
        const myDivInterno = document.createElement('div');
        myDivInterno.classList.add('bg-secondary', 'mb-2', 'rounded',);
        myDivInterno.style.height = '50%';
        const myTitleProd = document.createElement('h3');
        myTitleProd.classList.add('fs-5', 'fw-bold', 'm-0');
        myTitleProd.textContent = `${item.name}`
        const myDescri = document.createElement('p');
        myDescri.classList.add('text-muted', 'm-0', 'mb-2');
        myDescri.textContent = `${item.descrizione}`

        const myPrez = document.createElement('p');
        myPrez.classList.add('fw-bold', 'm-0', 'mb-2');
        myPrez.textContent = `€ ${item.prezzo.toFixed(2)}`;
        const btnModalCard = document.createElement('button');
        btnModalCard.classList.add('btn', 'btn-primary', 'w-100');
        btnModalCard.textContent = 'Dettagli'

        myDivCard.append(myDivInterno, myTitleProd, myDescri, myPrez, btnModalCard);
        myArt.appendChild(myDivCard);
        myContainerCard.appendChild(myArt)
    });
}


StampaCard()
