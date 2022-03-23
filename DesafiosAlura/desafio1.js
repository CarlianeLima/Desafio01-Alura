var numeroUm = 1
var stringUm = '1'
var numeroTrinta = 30
var stringTrinta = '30'
var numeroDez = 10
var stringDez = '10'


if (numeroUm === stringUm) {
    document.write("<p>Se 1 === '1' então: As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes</p>");
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
  } else {
    document.write("<p>Se 1 não for === '1' então: As variáveis numeroUm e stringUm não tem o mesmo valor</p>" );
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
  }

if (numeroTrinta === stringTrinta) {
    document.write("<p>Se 30 === '30' então: As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo</p>");
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
    document.write("<p>Se 30 não for === '30' então: As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo</p>");
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

if (numeroDez === stringDez) {
    document.write("<p>Se 10 === '10' então: As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes</p>");
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
    document.write("<p>Se 10 não for === '10' então: As variáveis numeroDez e stringDez não tem o mesmo valor</p>");
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}