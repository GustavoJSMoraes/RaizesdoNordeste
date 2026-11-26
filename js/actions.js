import { cripto } from './cripto.js'

const params = {
    html: '',
    produto: 0,
    id_pedido: 0
}

export function initParams() {
    params.html = ''
    params.produto = 0,
    params.id_pedido = 0
}

export const param = {
    view: document.querySelector('#view'),
    paramsLogin: ['admin', '123456'],
}

export function logar() {

    let usu = document.querySelector('#username').value
    let sen = document.querySelector('#pass').value
    let res = false

    if (usu != param.paramsLogin[0]) {
        showRes('<h5>Usuário incorreto ou inexistente. Entre em contato com o Administrador do Sistema.</h5>')
    
    } else if (sen != param.paramsLogin[1]) {
        showRes('<h5>Senha incorreta. Entre em contato com o Administrador do Sistema.')

    } else {
        res = true
    }

    return res
}

export function fidelizar() {
    let res
    let cpf = document.querySelector('#cliente-cpf').value
    let email = document.querySelector('#cliente-email').value
    let celular = document.querySelector('#cliente-celular').value
    
    let dados = [cripto('chave-teste', cpf), cripto('chave-teste', email), cripto('chave-teste', celular)]

    res = `<h5>Dados criptografados</h5>
        <p>CPF: ${dados[0]}</p>
        <p>email: ${dados[1]}</p>
        <p>Celular: ${dados[2]}</p>
        <p>(Criptografia somente para teste). O projeto usará criptografia forte em back-end</p>
    `
    showRes(res)    
}

export function selecionar() {
    params.produto++
    params.html += `<hr><h5 style="padding: 10px 0">Cliente selecionou produto ${params.produto}</h5>`
    showRes(params.html)    
}

export function finalizar() {
    let pedido = document.querySelector('#pedido-id')
    let texto = ''
    pedido.value = ''

    if (params.id_pedido == 0) {
        params.id_pedido = Math.floor(Math.random() * 1001);
        texto = 'Pedido confirmado. ID = ' +params.id_pedido+ '. Status: Confirmado'
    } else {
        texto = 'Pedido Reenviado. ID encontrado = ' +params.id_pedido+ '. Status: Confirmado'
        alert('Reenvio do pedido bem sucedido. Pedido localizado: ' +params.id_pedido)
    }        
    
    pedido.value = params.id_pedido

    params.html += `<hr><h5 style="padding: 10px 0">${texto}</h5>`
    showRes(params.html)    
}

export function pagar() {
    params.html += `<hr><h5 style="padding: 10px 0">Aguardando confirmação de Pagamento. Status: Aguardando confirmação</h5>`
    showRes(params.html)
    params.html += `<hr><h5 style="padding: 10px 0">Pagamento efetuado com sucesso. Status: Pagamento efetuado</h5>`
    showRes(params.html)
}

export function preparar() {
    params.html += `<hr><h5 style="padding: 10px 0">Cozinha inicia preparação do Pedido ${params.id_pedido}. Status: em preparação</h5>`
    showRes(params.html)
}

export function pronto() {
    params.html += `<hr><h5 style="padding: 10px 0">Cozinha encerra preparação do Pedido ${params.id_pedido}. Status: Pronto para retirada</h5>`
    showRes(params.html)
}

export function entregar() {
    params.html += `<hr><h5 style="padding: 10px 0">Pedido ${params.id_pedido} entregue. Status: Entregue ou retirado</h5>`
    showRes(params.html)
}

export function showRes(mess='') {
    let panelRes = document.querySelector('#div-res')

    if (mess) {
        panelRes.innerHTML = mess
        panelRes.classList.remove('not-visible')
    } else {
        panelRes.classList.add('not-visible')
    }
}
