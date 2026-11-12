const myProdoct = [
    {
        name: 'Sneaker Run',
        img: 'https://images.pexels.com/photos/28879459/pexels-photo-28879459.jpeg',
        prezzo: 89,
        descrizione: 'Scarpa leggera per la corsa, suola in gomma traspirante.',
        descrizioneDttagliata: 'Scarpa da corsa leggera in tonalità grigia, caratterizzata da una tomaia in mesh tecnico altamente traspirante e da un\'intersuola ammortizzata con suola in gomma resistente, ideale per garantire comfort e dinamismo durante l\'allenamento quotidiano.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
    {
        name: 'T-shirt basic',
        prezzo: 19,
        img: 'https://media.istockphoto.com/id/1591388456/it/foto/mockup-di-t-shirt-per-bambini-piegate-tela-bella-camicie-colorate-vista-frontale-vestiti-per.jpg?b=1&s=612x612&w=0&k=20&c=1AoX7kqdF96LoQ4dbBWuNeFU917qTWBAXG2UUt4YEHY=',
        descrizione: 'Cotone biologico,taglio regolare, disponibile in 6 colori.',
        descrizioneDttagliata: 'Una T-shirt essenziale in 100% cotone biologico dal taglio regolare e girocollo rinforzato. Disponibile in una versatile palette di 6 tonalità contemporanee (rosso corallo, lavanda, blu scuro, turchese, giallo senape e beige), è il capo perfetto e confortevole per ogni outfit casual.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
    {
        name: 'Borsa city',
        prezzo: 49,
        img: 'https://images.pexels.com/photos/27849638/pexels-photo-27849638.jpeg',
        descrizione: 'Tessuto resistente, tasca interna, cinghia regolabile',
        descrizioneDttagliata: 'Elegante borsa da città trapuntata con patta frontale, chiusura magnetica decorata con logo metallico e pratica tracolla a catena. Realizzata in tessuto resistente con tasca interna, unisce stile e funzionalità in tonalità pastello moderne come azzurro e verde menta.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
    {
        name: 'Occhiali Sun',
        prezzo: 35,
        img: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
        descrizione: 'Montatura leggera, lenti con protezione UV totale.',
        descrizioneDttagliata: 'Occhiali da sole dal design contemporaneo con montatura ultraleggera e resistente. Le lenti offrono una protezione UV totale per schermare efficacemente i raggi solari, unendo un look glamour a una cura ottimale per la vista.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
    {
        name: 'Orologio Minimal',
        prezzo: 120,
        img: 'https://images.pexels.com/photos/1190830/pexels-photo-1190830.jpeg',
        descrizione: 'Cassa in acciaio, cinturino in pelle, design pulito.',
        descrizioneDttagliata: 'Orologio da polso dallo stile minimalista ed elegante, caratterizzato da una sottile cassa in acciaio inossidabile, quadrante essenziale e morbido cinturino in vera pelle. Un accessorio versatile perfetto per completare sia look formali che casual.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
    {
        name: 'Portafoglio Slim',
        prezzo: 39,
        img: 'https://images.pexels.com/photos/32954513/pexels-photo-32954513.jpeg',
        descrizione: 'Pelle morbida, scomparti per carte, protezione RFID.',
        descrizioneDttagliata: 'Portafoglio ultrasottile realizzato in pregiata pelle lavorata a mano, progettato per ridurre l ingombro in tasca. Include molteplici fessure per carte di credito e un sistema di protezione RFID integrato per la sicurezza dei dati personali.',
        disponibile: true,
        numCarrello: 0,
        inOfferta: true,
    },
]


const myCarrello = [];

const numCarrello = document.querySelector('#numCarrello')
const myContainerCard = document.querySelector('#containerCard')
const mycontainerShop = document.querySelector('#containerShop')
const mostraSchermataCarrello = document.querySelector('#mostraSchermataCarrello')
const btnProd = document.querySelector('#btnProd')
const mostraSchermataCard = document.querySelector('#mostraSchermataCard')


function stampaCard(array, contenitorePadre) {
    contenitorePadre.textContent = ''
    array.forEach((item, i) => {
        const myArt = document.createElement('article');
        myArt.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const myDivCard = document.createElement('div');
        myDivCard.classList.add('border', 'rounded', 'p-3', 'shadow-sm', 'd-flex', 'row', 'g-1')
        myDivCard.style.height = '380px'
        const myDivInterno = document.createElement('div');
        myDivInterno.classList.add('bg-secondary', 'mb-2', 'rounded');
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
        btnModalCard.classList.add('btn', 'btn-primary', 'w-100', 'mt-auto');
        btnModalCard.textContent = 'Dettagli'

        myDivCard.append(myDivInterno, myTitleProd, myDescri, myPrez, btnModalCard);
        myArt.appendChild(myDivCard);
        contenitorePadre.appendChild(myArt)

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
            //HEADER MODALE
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
            //BODY MODALE
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
            myPrezModale.textContent = `€ ${item.prezzo.toFixed(2)}`;
            const mesConf = document.createElement('p');
            //FOOTER MODALE
            const myFooterModal = document.createElement('div');
            myFooterModal.classList.add('modal-footer');
            const btnChiudiModal = document.createElement('button');
            btnChiudiModal.classList.add('btn', 'btn-secondary');
            btnChiudiModal.textContent = 'Chiudi';
            btnChiudiModal.setAttribute('data-bs-dismiss', 'modal');
            const btnAggiungiCarrello = document.createElement('button');
            btnAggiungiCarrello.classList.add('btn', 'btn-success');
            btnAggiungiCarrello.textContent = 'Aggiungi al carrello'

            btnAggiungiCarrello.addEventListener('click', (e) => {
                btnAggiungiCarrello.disabled = true;

                if(myCarrello.includes(item)) {
                    item.numCarrello++
                }else {

                    item.numCarrello++
                    myCarrello.push(item);
                }
                    numCarrello.textContent = `${myCarrello.length}`
                    mesConf.textContent = '✅ Prodotto aggiunto al carrello'
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

stampaCard(myProdoct, myContainerCard);

const checkNativeSwitch = document.querySelector('#checkNativeSwitch');
checkNativeSwitch.addEventListener('change', (e) => {
    const myIcon = document.querySelector('#toogleDark')
    const myHtml = document.querySelector('html')
    if (myHtml.getAttribute('data-bs-theme') === 'dark') {
        myHtml.setAttribute('data-bs-theme', 'light');
        myIcon.classList.add('fa-moon', 'text-dark');
        myIcon.classList.remove('fa-sun')
    } else {
        myIcon.classList.add('fa-sun')
        myIcon.classList.remove('fa-moon', 'text-dark');
        myHtml.setAttribute('data-bs-theme', 'dark');
    }
});

function mostraSchermataGiusta(idSchermata) {
    //FUNZIONE PER CAMBIARE SCHERMATA IN SPA PASSARE ID DELLA SCHERMATA
    const tutteLeSchermate = document.querySelectorAll('.schermata');
    tutteLeSchermate.forEach((schermata) => {
        //assegniamo la classe per nascondere tutte le schermate
        schermata.classList.add('nascosto');
    });
    const schermataDaMostrare = document.getElementById(idSchermata);
    if (schermataDaMostrare) {
        schermataDaMostrare.classList.remove('nascosto'); //rimuoviamo la classe che la nasconde a schermo
    }
}

const BtnShop = document.querySelector('#BtnShop');
BtnShop.addEventListener('click', (e) => {
    mycontainerShop.textContent = ''
    mostraSchermataGiusta('mostraSchermataCarrello')
    creaSchermataCarrello(myCarrello)
})


function creaSchermataCarrello(array) {

    if (array.length === 0) {
        mycontainerShop.textContent = 'Il tuo carrello è vuoto!';
        return;
    }

    const myElementShop = document.createElement('ul')
    array.forEach((item, index) => {
        const myLi = document.createElement('li');
        myLi.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between', 'p-3', 'border', 'rounded', 'mb-2')
        const myDivImgShop = document.createElement('div')
        myDivImgShop.classList.add('flex-shrink-0', 'me-3')
        myDivImgShop.style.width = '70px';
        myDivImgShop.style.height = '70px';

        const myImgShop = document.createElement('img');
        myImgShop.src = `${item.img}`
        myImgShop.classList.add('w-100', 'h-100', 'object-fit-cover', 'rounded')


        const myDivDescShop = document.createElement('div')
        myDivDescShop.classList.add('flex-grow-1', 'me-3');
        const myNameShop = document.createElement('h5');
        myNameShop.textContent = `${item.name}`
        myNameShop.classList.add('fs-6', 'fw-bold', 'mb-1')
        const myDescShop = document.createElement('p');
        myDescShop.textContent = `${item.descrizione}`;
        myDescShop.classList.add('text-muted', 'small', 'mb-1');
        const myPrezShop = document.createElement('p');
        myPrezShop.textContent = `€ ${calcoloPrezzo(item).toFixed(2)}`
        myPrezShop.classList.add('fw-bold', 'text-primary');
        const myDivQty = document.createElement('div');
        myDivQty.classList.add('input-group', 'input-group-sm', 'w-auto');
        // input quantita' prodotti
        const myDivInputQty = document.createElement('div');
        myDivInputQty.classList.add('input-group', 'myDivInputQty');
        const btnMeno = document.createElement('button');
        btnMeno.classList.add('btn', 'btn-outline-secondary', 'myBtnMenoShop');
        btnMeno.textContent = '-';
        const inputQty = document.createElement('input');
        inputQty.setAttribute('type', 'text')
        inputQty.classList.add('form-control', 'text-center', 'myInputShop');
        inputQty.value = `${item.numCarrello}`
        const btnPiu = document.createElement('button');
        btnPiu.classList.add('btn', 'btn-outline-secondary', 'myBtnPiuShop');
        btnPiu.textContent = '+';
        myDivInputQty.append(btnMeno, inputQty, btnPiu)

        btnMeno.addEventListener('click', (e) => {
            item.numCarrello--
            inputQty.value = `${item.numCarrello}`
            myPrezShop.textContent = `€ ${calcoloPrezzo(item).toFixed(2)}`
        })
        btnPiu.addEventListener('click', (e) => {
            item.numCarrello++
            inputQty.value = `${item.numCarrello}`
            myPrezShop.textContent = `€ ${calcoloPrezzo(item).toFixed(2)}`
        })

        const myDivBtnShop = document.createElement('div');
        myDivBtnShop.classList.add('flex-shrink-0');
        const btnEliminaShop = document.createElement('button');
        btnEliminaShop.textContent = '❌'
        btnEliminaShop.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'myBtnEliminaShop');

        btnEliminaShop.addEventListener('click', (e) => {
            item.numCarrello = 0;
            array.splice(index, 1);

            mycontainerShop.textContent = ''
            creaSchermataCarrello(array)

            numCarrello.textContent = myCarrello.length
            console.log(myCarrello)
        })


        myDivImgShop.appendChild(myImgShop);
        myDivDescShop.append(myNameShop, myDescShop, myPrezShop, myDivInputQty);
        myDivBtnShop.append(btnEliminaShop)
        myLi.append(myDivImgShop, myDivDescShop, myDivBtnShop)
        myElementShop.append(myLi)
        mycontainerShop.append(myElementShop)
    })
};


btnProd.addEventListener('click', (e) => {
    mostraSchermataGiusta('mostraSchermataCard')
    stampaCard(myProdoct, myContainerCard);
})

function calcoloPrezzo(item) {
    const sommaPiuProdotti = Number(item.prezzo * item.numCarrello)
    return sommaPiuProdotti
}