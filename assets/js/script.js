const myProdoct = [
    {
        name: 'Sneaker Run',
        img: 'https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg',
        prezzo: 89,
        descrizione: 'Scarpa leggera per la corsa, suola in gomma traspirante.',
        descrizioneDttagliata:'Scarpa da corsa leggera in tonalità grigia, caratterizzata da una tomaia in mesh tecnico altamente traspirante e da un\'intersuola ammortizzata con suola in gomma resistente, ideale per garantire comfort e dinamismo durante l\'allenamento quotidiano.',
        disponibile: true
    },
    {
        name: 'T-shirt basic',
        prezzo: 19,
        img: 'https://media.istockphoto.com/id/1591388456/it/foto/mockup-di-t-shirt-per-bambini-piegate-tela-bella-camicie-colorate-vista-frontale-vestiti-per.jpg?b=1&s=612x612&w=0&k=20&c=1AoX7kqdF96LoQ4dbBWuNeFU917qTWBAXG2UUt4YEHY=',
        descrizione: 'Cotone biologico,taglio regolare, disponibile in 6 colori.',
       descrizioneDttagliata: 'Una T-shirt essenziale in 100% cotone biologico dal taglio regolare e girocollo rinforzato. Disponibile in una versatile palette di 6 tonalità contemporanee (rosso corallo, lavanda, blu scuro, turchese, giallo senape e beige), è il capo perfetto e confortevole per ogni outfit casual.',
        disponibile: true
    },
    {
        name: 'Borsa city',
        prezzo: 49,
        img: 'https://images.pexels.com/photos/27849638/pexels-photo-27849638.jpeg',
        descrizione: 'Tessuto resistente, tasca interna, cinghia regolabile',
        descrizioneDttagliata:'Elegante borsa da città trapuntata con patta frontale, chiusura magnetica decorata con logo metallico e pratica tracolla a catena. Realizzata in tessuto resistente con tasca interna, unisce stile e funzionalità in tonalità pastello moderne come azzurro e verde menta.',
        disponibile: true
    },
]


const myCarrello = [];

const myContainerCard = document.querySelector('#containerCard')
function StampaCard() {

    myProdoct.forEach((item, i) => {
        let prodottoCorrente = item[i]
        const myArt = document.createElement('article');
        myArt.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const myDivCard = document.createElement('div');
        myDivCard.classList.add('border', 'rounded', 'p-3', 'bg-white', 'shadow-sm')
        myDivCard.style.height = '380px'
        const myDivInterno = document.createElement('div');
        myDivInterno.classList.add('bg-secondary', 'mb-2', 'rounded',);
        myDivInterno.style.height = '50%';
        const myImgPro = document.createElement('img');
        myImgPro.classList.add('w-100', 'h-100', 'object-fit-cover', 'rounded');
        myImgPro.src = `${item.img}`
        myDivInterno.appendChild(myImgPro)
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

        btnModalCard.addEventListener('click', (e) => {
            const myModal = document.createElement('div')
            myModal.classList.add('modal', 'fade')
            myModal.setAttribute('data-bs-backdrop', 'static');
            myModal.setAttribute('data-bs-keyboard', 'false');
            myModal.setAttribute('tabindex', '-1');
            myModal.setAttribute('aria-labelledby', 'staticBackdropLabel');
            myModal.setAttribute('aria-hidden', 'true');
            const myModalDialog = document.createElement('div');
            myModalDialog.classList.add('modal-dialog');
            const myModalContent = document.createElement('div');
            myModalContent.classList.add('modal-content');

            const myModalHead = document.createElement('div');
            myModalHead.classList.add('modal-header');
            const myTitleModal = document.createElement('h2');
            myTitleModal.classList.add('modal-title', 'fs-5');
            myTitleModal.textContent = `${item.name}`;
            const btnClose = document.createElement('button');
            btnClose.classList.add('btn-close');
            btnClose.type = 'button';
            btnClose.setAttribute('data-bs-dismiss', 'modal');
            btnClose.setAttribute('aria-label', 'Close');

            const myModalBody = document.createElement('div');
            myModalBody.classList.add('modal-body');
            const myDivImgModal = document.createElement('div');
            myDivImgModal.classList.add('rounded');
            const myImgModal = document.createElement('img')
            myImgModal.classList.add('w-100', 'h-100', 'object-fit-cover', 'rounded');
            myImgModal.src = `${item.img}`
            myDivImgModal.appendChild(myImgModal)
            const myDescModale = document.createElement('p');
            myDescModale.classList.add();
            myDescModale.textContent = `${item.descrizioneDttagliata}`;
            const myPrezModale = document.createElement('p')
            myPrezModale.classList.add()
            myPrezModale.textContent = `${item.prezzo.toFixed(2)}`;
            const mesConf = document.createElement('p');

            const myFooterModal = document.createElement('div');

            myFooterModal.classList.add('modal-footer');
            const btnChiudiModal = document.createElement('button');
            btnChiudiModal.classList.add('btn', 'btn-secondary');
            btnChiudiModal.textContent = 'Chiudi';
            btnChiudiModal.setAttribute('data-bs-dismiss', 'modal');
            const btnAggiungiCarrello = document.createElement('button');
            btnAggiungiCarrello.classList.add('btn', 'btn-success');
            btnAggiungiCarrello.textContent = 'Aggiungi al carrello'
            // btnAggiungiCarrello.setAttribute('data-bs-dismiss', 'modal');             

            btnAggiungiCarrello.addEventListener('click', (e) => {
                myCarrello.push(item);
                mesConf.textContent = 'Prodotto aggiunto al carrello'
                setTimeout(() => {
                    myModalBootstrap.hide()
                }, 2000)
                console.log(myCarrello)
            })

            myModal.appendChild(myModalDialog)
            myModalDialog.appendChild(myModalContent)
            myModalContent.append(myModalHead, myModalBody, myFooterModal)
            myModalHead.append(myTitleModal, btnClose);
            myModalBody.append(myDivImgModal, myDescModale, myPrezModale, mesConf);
            myFooterModal.append(btnChiudiModal, btnAggiungiCarrello)
            document.body.appendChild(myModal);

            //  si trova nella documentazione ufficiale alla sezione Modal -> Methods
            const myModalBootstrap = new bootstrap.Modal(myModal); //dice di prendere l elemento appena creato a volo e renderlo una modale
            myModalBootstrap.show();  //Comando per far apparire la modale con l animazione fade
        })
    });
}

StampaCard()