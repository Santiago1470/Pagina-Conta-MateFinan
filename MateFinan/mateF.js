



var vf = document.getElementById("valorFuturo");
var vp = document.getElementById("valorPresente");
var iComp = document.getElementById("interesCompuesto");
var time = document.getElementById("tiempo");

var hacer = document.getElementById("qh");
var haPro = document.getElementById("proce");
var hacProInt = document.getElementById("proceInte");
var hacProTiem = document.getElementById("proceTiempo");


function valorFut() 
{
    VP(prompt("Escriba el valor presente"), prompt("Escriba el interes compuesto"), prompt("Escriba el tiempo"));
    function VP(vp, int, tim) 
    {
        var ValorPresente = vp;
        var Interes = int;
        var Tiempo = tim;

        ValorPresente = parseFloat(ValorPresente);
        Interes = parseFloat(Interes);
        Tiempo = parseFloat(Tiempo);

        var VFResultado = ValorPresente * (1 + Interes) ** Tiempo;

        escribirVF(VFResultado.toFixed(1));
        function escribirVF(valfut) 
        {
            vf.innerText = valfut;
        }

        hacerProce();
        function hacerProce() 
        {
            var escriValPre = "P= " + ValorPresente;
            var escriInteres = "i= " + Interes;
            var escriTiempo = "n= " + Tiempo;
            hacer.innerText = "S= P(1+i)^n\n" + escriValPre + "\n" + escriInteres + "%\n" + escriTiempo;
        }
    }
}

function valorPre() 
{
    VF(prompt("Escriba el valor futuro"), prompt("Escriba el interes compuesto"), prompt("Escriba el tiempo"));
    function VF(ValorFuturo, interes, tiempo) 
    {
        ValorFuturo = parseFloat(ValorFuturo);
        interes = parseFloat(interes);
        tiempo = parseFloat(tiempo);

        var VPrese = ValorFuturo / (1 + interes) ** tiempo;
        
        escribirVF(VPrese.toFixed(1));
        function escribirVF(valpre) 
        {
            vp.innerText = valpre;
        }

        hacerProce();
        function hacerProce() 
        {
            var ValorFut = "S= " + ValorFuturo;
            var intereses = "i= " + interes;
            var Tiempo = "n= " + tiempo;
            haPro.innerText = "P= S/(1+i)^n\n" + ValorFut + "\n" + intereses + "%\n" + Tiempo;
        }
    }
}


function interesCom() 
{
    VF(prompt("Escriba el valor futuro"), prompt("Escriba el valor presente"), prompt("Escriba el tiempo"));
    function VF(ValorFuturo, ValorPresente, tiempo) 
    {
        ValorFuturo = parseFloat(ValorFuturo);
        ValorPresente = parseFloat(ValorPresente);
        tiempo = parseFloat(tiempo);

        var interesC = Math.pow((ValorFuturo / ValorPresente), 1 / tiempo);
        var intCom = interesC - 1;
        var inteCo = intCom * 100;
        
        escribirVF(inteCo.toFixed(9));
        function escribirVF(interesc) 
        {
            iComp.innerText = interesc;
        }

        hacerProce();
        function hacerProce() 
        {
            var escriValPre = "P= " + ValorPresente;
            var escriFut = "S= " + ValorFuturo;
            var escriTiempo = "n= " + tiempo;
            hacProInt.innerText = "i= (n^√(S/P)) -1\n" + escriFut + "\n" + escriValPre + "\n" + escriTiempo;
        }
    }
}


function tiempo() 
{
    ti(prompt("Escriba el valor futuro"), prompt("Escriba el valor presente"), prompt("Escriba el interes compuesto"));
    function ti(ValorFuturo, ValorPresente, interes) 
    {
        ValorFuturo = parseFloat(ValorFuturo);
        ValorPresente = parseFloat(ValorPresente);
        interes = parseFloat(interes);

        var t = Math.log(ValorFuturo / ValorPresente);
        var i = Math.log(1 + interes);
        var tiempoR = t / i;
        
        escribirVF(tiempoR.toFixed(9));
        function escribirVF(times) 
        {
            time.innerText = times;
        }

        hacerProce();
        function hacerProce() 
        {
            var escriValPre = "P= " + ValorPresente;
            var escriFut = "S= " + ValorFuturo;
            var escriInter = "i= " + interes;
            hacProTiem.innerText = "n= (log (S/P)) / (log(1+i))\n" + escriFut + "\n" + escriValPre + "\n" + escriInter;
        }
    }
}



var valorFutuS = document.getElementById("valFuturoSim");
var valorPreseS = document.getElementById("valPresenSim");
var interesSim = document.getElementById("interesSimple");
var tiempoS = document.getElementById("tiempoSim");

function valorFutSim() 
{
    VPS(prompt("Escriba el valor presente"), prompt("Escriba el interes simple"), prompt("Escriba el tiempo"));
    function VPS(vps, ints, tims) 
    {
        var ValorPresenteS = vps;
        var InteresS = ints;
        var TiempoS = tims;

        ValorPresenteS = parseFloat(ValorPresenteS);
        InteresS = parseFloat(InteresS);
        TiempoS = parseFloat(TiempoS);

        var VFSResultado = ValorPresenteS * (1 + InteresS * TiempoS);

        escribirVF(VFSResultado.toFixed(1));
        function escribirVF(valfuts) 
        {
            valorFutuS.innerText = valfuts;
        }
    }
}


function valorPreS() 
{
    VFS(prompt("Escriba el valor futuro"), prompt("Escriba el interes compuesto"), prompt("Escriba el tiempo"));
    function VFS(ValorFuturoS, interesS, tiempoSi) 
    {
        ValorFuturoS = parseFloat(ValorFuturoS);
        interesS = parseFloat(interesS);
        tiempoSi = parseFloat(tiempoSi);

        var VPrese = ValorFuturoS / (1 + interesS * tiempoSi);
        
        escribirVF(VPrese.toFixed(1));
        function escribirVF(valpre) 
        {
            valorPreseS.innerText = valpre;
        }
    }
}


function interesSimp() 
{
    NS(prompt("Escriba el valor futuro"), prompt("Escriba el valor presente"), prompt("Escriba el tiempo"));
    function NS(valorFuturoS, ValorPresenteSim, tiempoSimp) 
    {
        valorFuturoS = parseFloat(valorFuturoS);
        ValorPresenteSim = parseFloat(ValorPresenteSim);
        tiempoSimp = parseFloat(tiempoSimp);

        var interesC = (valorFuturoS / ValorPresenteSim - 1) / tiempoSimp;
        var inteCo = interesC * 100;
        
        escribirVF(inteCo.toFixed(9));
        function escribirVF(interesc) 
        {
            interesSim.innerText = interesc;
        }
    }
}


function tiempoSimple() 
{
    intS(prompt("Escriba el valor futuro"), prompt("Escriba el valor presente"), prompt("Escriba el interes simple"));
    function intS(valorFuturoSim, ValorPresenteSimple, intereSimple) 
    {
        valorFuturoSim = parseFloat(valorFuturoSim);
        ValorPresenteSimple = parseFloat(ValorPresenteSimple);
        intereSimple = parseFloat(intereSimple);

        var tiempS = (valorFuturoSim / ValorPresenteSimple - 1) / intereSimple;
        
        escribirVF(tiempS.toFixed(9));
        function escribirVF(times) 
        {
            tiempoS.innerText = times;
        }
    }
}
