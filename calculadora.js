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
