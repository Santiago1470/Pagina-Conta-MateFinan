var objetoCom = document.getElementById("compObj");
var iVa = document.getElementById("IVA");
var reteFuente = document.getElementById("reteF");
var reteICA = document.getElementById("reteI");
var CxP = document.getElementById("cXp");

function recono() 
{
    sacarBase(prompt("Escriba el valor inicial"));
    function sacarBase(valorInicial) 
    {
        var base = valorInicial / 1.19;
        var iva = base * 19 / 100;
        var rete = base * 2.5 / 100;
        var retICA = base * 11.04 / 1000;

        escribirBase(base.toFixed(1));
        function escribirBase(baseHTML) 
        {
            objetoCom.innerText = baseHTML;
        }

        sacarIVA(base);
        function sacarIVA() 
        {
            
            escribirIVA(iva.toFixed(1));
            function escribirIVA(iva) 
            {
                iVa.innerText = iva;
            }
        }
        sacarRet(base);
        function sacarRet() 
        {
            
            escribirRete(rete.toFixed(1));
            function escribirRete(rete) 
            {
                reteFuente.innerText = rete;
            }
        }
        sacarRetICA(base);
        function sacarRetICA() 
        {
            
            escribirRete(retICA.toFixed(1));
            function escribirRete(retICA) 
            {
                reteICA.innerText = retICA;
            }
        }
        CXP();
        function CXP() 
        {
            var sr = base + iva - rete - retICA;
            escribirCxP(sr.toFixed(1));
            function escribirCxP(Cxp) 
            {
                CxP.innerText = Cxp;
            }
        }
    }
}

/*
var objetoCom = document.getElementById("compObj");
var iVa = document.getElementById("IVA");
var reteFuente = document.getElementById("reteF");
var reteICA = document.getElementById("reteI");
var CxP = document.getElementById("cXp");

function recono() 
{
    sacarBase(prompt("Escriba el valor inicial"));
    function sacarBase(valorInicial) 
    {
        var base = valorInicial / 1.19;
        escribirBase(base.toFixed(1));
        function escribirBase(baseHTML) 
        {
            objetoCom.innerText = baseHTML;
        }

        sacarIVA(base);
        function sacarIVA(base) 
        {
            var iva = base * 19 / 100;
            escribirIVA(iva.toFixed(1));
            function escribirIVA(iva) 
            {
                iVa.innerText = iva;
            }
        }
        sacarRet(base);
        function sacarRet(base) 
        {
            var rete = base * 2.5 / 100;
            escribirRete(rete.toFixed(1));
            function escribirRete(rete) 
            {
                reteFuente.innerText = rete;
            }
        }
        sacarRetICA(base);
        function sacarRetICA(base) 
        {
            var retICA = base * 11.04 / 1000;
            escribirRete(retICA.toFixed(1));
            function escribirRete(retICA) 
            {
                reteICA.innerText = retICA;
            }
        }
        CXP();
        function CXP() 
        {
            var sr = base - sacarIVA(base) - sacarRet(base) - sacarRetICA(base);
            escribirCxP(sr);
            function escribirCxP(Cxp) 
            {
                CxP.innerText = Cxp;
            }
        }
    }
}
*
