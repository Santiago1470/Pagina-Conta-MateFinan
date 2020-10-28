var escribValObj = document.getElementById("valorObjeto");
var escriIva = document.getElementById("iva");
var escriTotal = document.getElementById("total");



function sacViTs()
{
    var valorDeObjeto = prompt("Escriba el valor del objeto");
    sacarViTs(valorDeObjeto);
    function sacarViTs()
    {
        valorDeObjeto = parseFloat(valorDeObjeto);

        var iva = (valorDeObjeto * 19) / 100;
        var tot = valorDeObjeto + iva;

        escribValObj.innerHTML = valorDeObjeto;
        escriIva.innerHTML = iva;
        escriTotal.innerHTML = tot;
    }
}


var escriVidUti = document.getElementById("sumaViUti");


function sacarSumVu()
{
    var vidUtil = prompt("Escriba la vida útil del objeto");
    var resultado = 0;

        for (var i = 0; i <= vidUtil; i++)
        {
            resultado += i;
        }
        escriVidUti.innerHTML = vidUtil + " (valor escrito) = " + resultado;
}

var escriProce = document.getElementById("escriPro");

function realiProc()
{
    var año = prompt("Escriba el numero del año");
    var sumDia = prompt("Escriba el dia de la suma de digitos ej: Suma = 1+2+3+4+5.\n día = 3");
    var diviDiaTot = prompt("Escriba el total de la suma de digitos");
    var ToltalSuma = prompt("Escriba la suma total de Valor del objeto e IVA");
        
    procedimiento(año, sumDia, diviDiaTot, ToltalSuma);
    function procedimiento()
    {
        var resulDivSumDiji = sumDia / diviDiaTot;
        var resulFin = resulDivSumDiji * ToltalSuma;
        
        escriPro();
        function escriPro()
        {
            escriProce.innerHTML = "<strong>Año número</strong> " + año + " <strong>=</strong> " + sumDia + " <strong>/</strong> " + diviDiaTot + " <strong>=</strong> " + resulDivSumDiji.toFixed(8) + "<br/>" + "<strong>Resultado</strong> " + ToltalSuma + " <strong>*</strong> " + resulDivSumDiji.toFixed(8) + " <strong>=</strong> " + resulFin.toFixed(3);
        }
    }
}

var escrCacl = document.getElementById("escrOperacisTot");

function ejecutarCalc()
{
    var primVal = prompt("Escriba el primer valor para hacer la suma");
    var segunVal = prompt("Escriba el segundo valor para hacer la suma");

    primVal = parseFloat(primVal);
    segunVal = parseFloat(segunVal);

    var resultado = primVal + segunVal;
    escrCacl.innerHTML = primVal + " + " + segunVal + " = " + resultado;
}



