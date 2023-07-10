let resultado;
let person;
let list = [];
let search;
let x;

function Clear(){
        document.querySelector('#idName').value = "";
        document.querySelector('#idAge').value = "";
        document.querySelector('#idPass').value = "";
        document.querySelector('#search').value = "";
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
    document.getElementById('resultado').innerHTML = JSON.stringify(list);
}
function Update(){
    list[x].name = document.getElementById('idName').value;
    list[x].age = document.getElementById('idAge').value;
    list[x].pass = document.getElementById('idPass').value;
    Clear();
}
function Delete(){
    list.splice(x, 1);
    Clear();
}
function buscar(){
    parseInt(search, 10);

    search = document.getElementById('search').value;

    for(let i = 0; i < list.length; i++){
        if(list[i].id == search){
            x = i;
            document.querySelector('#idName').value = list[i].name;
            document.querySelector('#idAge').value = list[i].age;
            document.querySelector('#idPass').value = list[i].pass;
        }
    }
}
function imprimir(item) {
    console.log(item);
    document.getElementById('resultado').innerHTML = JSON.stringify(person);
}