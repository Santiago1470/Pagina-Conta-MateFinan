var escrValObj = document.getElementById("valObje");
var escrConst = document.getElementById("const");
var escrTerre = document.getElementById("terre");
var escSumDigi = document.getElementById("sumaDig");


function sacConsYterre()
{
    var valObjeto = prompt("Escriba el valor del objeto");
    var porceTerreno = prompt("Escriba el porcentaje del terreno");


    hacerOperac(valObjeto, porceTerreno);
    function hacerOperac()
    {
        valObjeto = parseFloat(valObjeto);
        porceTerreno = parseFloat(porceTerreno);

        var sacaConst = 100 - porceTerreno;
        var porcConst = valObjeto * sacaConst / 100;
        var porcTerre = valObjeto * porceTerreno / 100;

        escrValObj.innerHTML = valObjeto;
        escrConst.innerHTML = sacaConst + "% = " + porcConst;
        escrTerre.innerHTML = porceTerreno + "% = " + porcTerre;
    }
}


var escriSumDig = document.getElementById("sumaDig");

function sacarSumDig()
{
    var vidUtil = prompt("Escriba la vida útil del objeto");
    var resultado = 0;

        for (var i = 0; i <= vidUtil; i++)
        {
            resultado += i;
        }
        escriSumDig.innerHTML = vidUtil + " (valor escrito) = " + resultado;
}


var escriProcedimiento = document.getElementById("escProce");

function realiProcedimiento()
{
    var año = prompt("Escriba el numero del año");
    var sumDia = prompt("Escriba el dia de la suma de digitos ej: Suma = 1+2+3+4+5.\n día = 3");
    var diviDiaTot = prompt("Escriba el total de la suma de digitos");
    var ToltalSuma = prompt("Escriba el valor de Construcción");
        
    procedimiento(año, sumDia, diviDiaTot, ToltalSuma);
    function procedimiento()
    {
        var resulDivSumDiji = sumDia / diviDiaTot;
        var resulFin = resulDivSumDiji * ToltalSuma;

        escriPro();
        function escriPro()
        {
            escriProcedimiento.innerHTML = "<strong>Año número</strong> " + año + " <strong>=</strong> " + sumDia + " <strong>/</strong> " + diviDiaTot + " <strong>=</strong> " + resulDivSumDiji.toFixed(8) + "<br/>" + "<strong>Resultado</strong> " + ToltalSuma + " <strong>*</strong> " + resulDivSumDiji.toFixed(8) + " <strong>=</strong> " + resulFin.toFixed(3) + "<br/>";
        }
    }
}


var escriCacl = document.getElementById("escrOperacionesTot");

function ejeCalc()
{
    var primVal = prompt("Escriba el primer valor para hacer la suma");
    var segunVal = prompt("Escriba el segundo valor para hacer la suma");

    primVal = parseFloat(primVal);
    segunVal = parseFloat(segunVal);

    var resultado = primVal + segunVal;
    escriCacl.innerHTML = primVal + " + " + segunVal + " = " + resultado;
}