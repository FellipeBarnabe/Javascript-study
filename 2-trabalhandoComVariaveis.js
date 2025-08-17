const atletaDietaDiaria = 130;
const cafeDaManha = 30;
const almoço = 40;
const jantar =30;
var whey =30;

function consumoCaloria (){
    if(cafeDaManha + almoço + jantar + whey < atletaDietaDiaria)
        return "consumo insuficiente";
    if(cafeDaManha + almoço + jantar + whey === atletaDietaDiaria)
        return "consumo ideal"
    if(cafeDaManha + almoço + jantar + whey > atletaDietaDiaria)
        return "consumo excessivo"
}

console.log(consumoCaloria())