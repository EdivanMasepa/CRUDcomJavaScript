let resultado;
let person;
let list = [];


function GetValues(){
        resultado = document.getElementById('resultado');

}
function Clear(){
        nome.innerHTML('');
        age.innerHTML('');
        pass.innerHTML('');

}
function Create(){
    list.push(person)
}
function Read(){
    person = {  
        nameC: document.getElementById('idName').value,
        ageC: document.getElementById('idAge').value, 
        passC: document.getElementById('idPass').value
    }
    console.log(list)
}
function Update(){

}
function Delete(){

}
