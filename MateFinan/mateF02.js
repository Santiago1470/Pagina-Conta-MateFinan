var escrConForMenAmay = document.getElementById("escrTasMenAmayo");


function converForMeAma()
{
    var datTasa = prompt("Escriba la tasa de interés compuesto");
    var tiem = prompt("Escriba el tiempo. Ej: 12 años, 7 meses, etc.");

    datTasa = parseFloat(datTasa);
    tiem = parseFloat(tiem);

    var conDatTas = datTasa / 100;

    var resul = ((1 + conDatTas) ** tiem) - 1;
    var todo = resul * 100;
    var seg = 1 + conDatTas;
    var ter = (1 + conDatTas) ** tiem;
    var cua = ter - 1;

    var prim = "i = ((1 + " + conDatTas + ")^" + tiem + ") - 1";
    var segu = "i = ((" + seg + ")^" + tiem + ") - 1";
    var terc = "i = " + ter + " - 1";
    var cuar = "i = " + cua + " * 100";
    var ult = "i = " + todo + "%";

    escrConForMenAmay.innerHTML = prim + "<br/>" + segu + "<br/>" + terc + "<br/>" + cuar + "<br/>" + ult;
    
}



var escrConForMayAmen = document.getElementById("escrTasMayoAmen");


function converForMaAme()
{
    var datTasa = prompt("Escriba la tasa de interés compuesto");
    var tiem = prompt("Escriba el tiempo. Ej: 12 años, 7 meses, etc.");

    datTasa = parseFloat(datTasa);
    tiem = parseFloat(tiem);

    var conDatTas = datTasa / 100;
    var diviTas = 1 / tiem;

    var resul = ((1 + conDatTas) ** (1 / tiem)) - 1;
    var todo = resul * 100;
    var seg = 1 + conDatTas;
    var ter = (1 + conDatTas) ** (1 / tiem);
    var cua = ter - 1;

    var prim = "i = ((1 + " + conDatTas + ")^1/" + tiem + ") - 1";
    var segu = "i = ((" + seg + ")^" + diviTas + ") - 1";
    var terc = "i = " + ter + " - 1";
    var cuar = "i = " + cua + " * 100";
    var ult = "i = " + todo + "%";

    escrConForMayAmen.innerHTML = prim + "<br/>" + segu + "<br/>" + terc + "<br/>" + cuar + "<br/>" + ult;
}
