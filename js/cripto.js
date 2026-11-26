const xorCripto = (texto, chave) =>
  [...texto].map((c, i) =>
    String.fromCharCode(c.charCodeAt(0) ^ chave.charCodeAt(i % chave.length))
  ).join('');

const criptografar = (texto, chave) => btoa(xorCripto(texto, chave));
const descriptografar = (hash, chave) => xorCripto(atob(hash), chave);

export function cripto(chave, info, modo=0) {
    let w
    if (modo == 0) {
        w = criptografar(info, chave);
    } else {
        w = descriptografar(w, chave)
    }

    return w
}
