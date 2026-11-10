const myProdoct = [
    {
        name: 'Sneaker Run',
        prezzo: '89',
        disponibile: true
    },
    {
        name: 'T-shirt basic',
        prezzo: '19',
        disponibile: true
    },
    {
        name: 'Borsa city',
        prezzo: '49',
        disponibile: true
    },
]

const myContainerCard = document.querySelector('#containerCard')

    myProdoct.forEach((item) => {

        const myArt = document.createElement('article');
        myArt.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const myDivCard = document.createElement('div');
        myDivCard.classList.add('border', 'rounded', 'p-3', 'bg-white', 'shadow-sm')
        myDivCard.style.height = '250px'
        const myDivInterno = document.createElement('div');
        myDivInterno.classList.add('bg-secondary', 'mb-2', 'rounded',);
        myDivInterno.style.height = '70%';
        const myTitleProd = document.createElement('h3');
        myTitleProd.classList.add('fs-5', 'fw-bold', 'm-0');
        myTitleProd.textContent = `${item.name}`
        const myPrez = document.createElement('p');
        myPrez.classList.add('text-muted', 'm-0');
        myPrez.textContent = `€ ${item.prezzo}`;
        
        myDivCard.append(myDivInterno, myTitleProd, myPrez);
        myArt.appendChild(myDivCard);
        myContainerCard.appendChild(myArt)
});



