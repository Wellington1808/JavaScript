function clicou(){
    var num=parseInt(prompt("Digite um numero: "));
    document.querySelector("p").innerHTML="O antecessor de "+num+" é "+(num-1)+" o sucessor é "+(num+1);
}