let resultado;
let person;
let list = [];

function Clear(){
        document.querySelector('#idName').value = "";
        document.querySelector('#idAge').value = "";
        document.querySelector('#idPass').value = "";
    
}
function Create(){
    for (let i = -1; i < list.length; i++){    
        person = {  
            id : i+2,
            name: document.getElementById('idName').value,
            age: document.getElementById('idAge').value, 
            pass: document.getElementById('idPass').value
        }
    }

    list.unshift(person);
    Clear();
}
function Read(){ 
    document.getElementById('resultado').innerHTML = JSON.stringify(list)
   //document.getElementById('resultado').innerHTML = `<p>ID: ${person.id} NOME: ${person.id}} IDADE: ${person.age} SENHA: ${person.pass}</p>`;
}
function Update(){

}
function Delete(){

}
function buscar(){
    let search = document.getElementById('search').value;
    if(list[0].includes(person.id) == search){
        document.querySelector('#idName').value = person.name;
        document.querySelector('#idAge').value = person.age;
        document.querySelector('#idPass').value = person.pass;
        console.log('deu certo');
    }else{
        return console.log("Id não encontrado.");
    }
}
