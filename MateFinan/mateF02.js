var escrConForMenAmay = document.getElementById("escrTasMenAmayo");


function converForMeAma()
{
    var datTasa = prompt("Escriba la tasa de interés compuesto");
    var tiem = prompt("Escriba el tiempo. Ej: 12 años, 7 meses, etc.");

    datTasa = parseFloat(datTasa);
    tiem = parseFloat(tiem);

    var conDatTas = datTasa / 100;

    

    var tasa1 = "i = (1 + " + 1 + conDatTas + ")^" + tiem + "- 1";
    var sum1masTasa = "i = (" + conDatTas + ")^" + tiem +"- 1"; 
    var resulTasa = (1 + conDatTas) ** tiem  + " * 100";
    var totTodo = ((1 + conDatTas) ** tiem) / 100 + "%";

    escrConForMenAmay.innerHTML = tasa1 + "<br/>" + sum1masTasa + "<br/>" + "i= " + resulTasa + "<br/>" + "i= " + totTodo;
    console.log(resulTasa);
}



var escrConForMayAmen = document.getElementById("escrTasMayoAmen");


function converForMaAme()
{

}