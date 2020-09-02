

var fechaInic = document.getElementById("fechaInicio");
var fechaFn = document.getElementById("fechaFin");
var diasTo = document.getElementById("diasTotales");

var time = document.getElementById("tiempo");
var VU = document.getElementById("vidaUtil");
var dEp = document.getElementById("DEP");

var cnta = document.getElementById("cuenta51");
var cnta2 = document.getElementById("cuenta15");

function resolver() 
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

function DePa() 
{
    DeP(prompt("Escriba el valor del objeto"), prompt("Escriba el tiempo o días"), prompt("Escriba la vida útil del objeto en días"));
    function DeP(valorObjeto, tiempo, todo)
    {
        var Dep = valorObjeto * tiempo / todo;
        Dep = Dep.toFixed();
        contado(Dep);

        function contado(et) 
        {
            dEp.innerHTML = et;
        }

        conver(tiempo, todo)


        function conver(tiempo, todo) 
        {
            tiempo = tiempo.toString();
            todo = todo.toString();

            var dma = tiempo;
            var tdo = todo;
            escr(dma);
            es(tdo);
            c(Dep);
            con(Dep);

            function escr(datos) 
            {
                time.innerHTML = datos;
            }
            function es(datos) 
            {
                VU.innerHTML = datos;
            }
            function con(op) 
            {
                cnta.innerHTML = op;
            }
            function c(op) 
            {
                cnta2.innerHTML = op;
            }
        }
    }
}
/*
20, 03, 2019, 30, 07, 2020
4000000, 490, 3600
*/






