var fechaInic = document.getElementById("fechInic");
var fechaFn = document.getElementById("fechFin");
var diasTo = document.getElementById("dias");


function diasDep() 
{
    totalDias(prompt("Escriba el día de fin"), prompt("Escriba el mes de fin"), prompt("Escriba el año de fin"), prompt("Escriba el dia de inicio"), prompt("Escriba el mes de inicio"), prompt("Escriba el año de inicio"));

    function totalDias(diasFin, mesesFin, yearFin, diasIni, mesesIni, yearIni) 
    {
        var diasOperac = diasFin - diasIni;
        var mesesOperac = mesesFin - mesesIni;
        var yearOperac = yearFin - yearIni;
        var mesesAdias = mesesOperac * 30;
        var yearAdias = yearOperac * 360;

        var todo = diasOperac + mesesAdias + yearAdias;

        escribir(todo);
        convertir(diasIni, mesesIni, yearIni);
        convertirFin(diasFin, mesesFin, yearFin);

        function escribir(dato) 
        {
            diasTo.innerHTML = dato;
        }
    
        function convertir(diasIni, mesesIni, yearIni) 
        {
            diasIni = diasIni.toString();
            mesesIni = mesesIni.toString();
            yearIni = yearIni.toString();

            var dma = diasIni + "-" + mesesIni + "-" + yearIni;
            escri(dma);
            function escri(fech) 
            {
                fechaInic.innerHTML = fech;
            }
        }

        function convertirFin(diasFin, mesesFin, yearFin) 
        {
            diasFin = diasFin.toString();
            mesesFin = mesesFin.toString();
            yearFin = yearFin.toString();

            var dma = diasFin + "-" + mesesFin + "-" + yearFin;
            escr(dma);
            function escr(fechF) 
            {
                fechaFn.innerHTML = fechF;
            }
        }
    }
}


var escribValObj = document.getElementById("valBien");
var escriIva = document.getElementById("escIVA");
var escriTotal = document.getElementById("totalTod");

function sacIvaTot()
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


var escriDepAcumul = document.getElementById("depreciAcumulada");
var escriSaldo = document.getElementById("saldoLib");

function sacDepAcumu()
{
    var totalTot = prompt("Escrib el valor total");
    var depDias = prompt("Escriba los dias de depreciación");
    var vidUti = prompt("Escriba la vida útil (se obitiene multiplicando los años que dieron en la vida útil por 360 que son los dias en un año. Ej: 5 años x 360 días = 1.800 \n Ej: 5 x 360 = 1.800");

    var result = totalTot * depDias / vidUti;
    var saldo = totalTot - result;

    escriDepAcumul.innerHTML = totalTot + " * " + depDias + " / " + vidUti + " = " + result;

    escriSaldo.innerHTML = totalTot + " - " + result + " = " + saldo;
}