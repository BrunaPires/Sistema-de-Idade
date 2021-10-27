function idade() {
  let anoA;
  let ano;
  let calculo;

  anoA = document.getElementById("anoAtual").value;
  ano = document.getElementById("anoQueNasceu").value;

  calculo = anoA - ano;

  document.getElementById("resultado").innerHTML = (`Você tem ${calculo} anos de idade.`);
}