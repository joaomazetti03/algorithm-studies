/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicaDesconto(valor, desconto){
    avista = valor - (valor * (desconto/100));
    return avista;
}

function aplicaJuros(valor, juros){
    parcelado = valor + (valor * (juros/100));
    return parcelado;
}

const precoEtiqueta = 50;

//débito - 10% 
let debito = aplicaDesconto(precoEtiqueta, 10);
console.log(`Valor no débito: R$ ${debito}`);

//dinheiro ou pix - 15%
let dinPix = aplicaDesconto(precoEtiqueta, 15);
console.log(`Valor no dinheiro ou PIX: R$ ${dinPix}`);

//Em até duas vezes
console.log(`Valor em até 2 vezes: R$ ${precoEtiqueta}`);

//Acima de duas vezes
let maisDuasVezes = aplicaJuros(precoEtiqueta, 10);
console.log(`Valor acima de 2 vezes: R$ ${maisDuasVezes}`);
