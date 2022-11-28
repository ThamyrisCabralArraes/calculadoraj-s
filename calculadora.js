let name2 = document.getElementById('name');

let age = document.getElementById('age');

let peso = document.getElementById('peso');

let altura = document.getElementById('altura');

let bottumOn = document.getElementById('boxBtnEnviar');

let bottumOff = document.getElementById('boxBtnLimpar');

let imc = document.getElementById('imc');

let aviso = document.getElementById('aviso');

let pessoa = document.getElementsByClassName('pessoa');

bottumOn.addEventListener('click', function (event) {
  let nameR = name2.value;
  let ageR = age.value;
  let pesoR = peso.value;
  let alturaR = altura.value;
  let imcR = (pesoR / (alturaR * alturaR)).toFixed(1);

  imc.value = imcR;

  let avisoR = situacao(imcR);
  aviso.textContent = avisoR;

  function situacao() {
    let sit = '';
    if (imcR < 18) {
      sit = `Magreza`;
    } else if (imcR > 18.1 && imcR < 24) {
      sit = `Normal`;
    } else if (imcR > 24.1 && imcR < 30) {
      sit = `Sobrepeso`;
    } else {
      sit = `Obesidade`;
    }
    return sit;
  }
