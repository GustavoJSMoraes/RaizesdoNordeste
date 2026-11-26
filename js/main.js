import * as ac from './actions.js'

document.addEventListener('click', (e) => {  
    if (e.target.tagName == 'A') {
        e.preventDefault()
        ac.initParams()
        loadView(e.target.getAttribute('href'))

    } else if (e.target.id == 'btn-login') {
        if (ac.logar()) {
            ac.showRes('<h5>Login realizado com sucesso!</h5>')
        }

    } else if (e.target.id == 'btn-fidelizar') {
        ac.fidelizar()        

    } else if (e.target.id == 'btn-selecionar') {
        ac.selecionar()        

    } else if (e.target.id == 'btn-finalizar') {
        ac.finalizar()        

    } else if (e.target.id == 'btn-pagar') {
        ac.pagar()        

    } else if (e.target.id == 'btn-preparar') {
        ac.preparar()        

    } else if (e.target.id == 'btn-preparo-pronto') {
        ac.pronto()        

    } else if (e.target.id == 'btn-entregar') {
        ac.entregar()        

    }
})

function request(url, params=null) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
	    req.open('post', url)

	    req.onreadystatechange = () => {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(req.responseText)
                } else {
                    reject('Requisição rejeitada')
                }
            }
        }
        req.send();
    });
}

async function loadView(url) {
    url = `views/${url}.html`
    console.log(url)

    await request(url).then((res) => {
        ac.param.view.innerHTML = res
    }).catch((err) => {
        console.log('Falha ao tentar carregar artefato... ' +err)
    })   
}

