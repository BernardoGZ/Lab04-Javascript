//Bernardo Garcia Zermeno
//A00570682
//Laboratory #4: To Do List, 1st practice of Javascript basic functions

var todoBtn = document.querySelector('.submitButton');
var todoAreaText = document.querySelector('#todoText');

var todoText;
var i = 0;

function agregTodo(text, cont){
    // alert(text + cont);
    
    //Create paragraph and input
    var ptemp =  document.createElement('p');
    var chtemp = document.createElement('input');
    
    //Set input and paragraph attributes. 
    ptemp.setAttribute("id", "toDo#" + cont);
    ptemp.innerHTML = text;
    chtemp.setAttribute("type", "checkbox");

    // alert(ptemp.getAttribute("id")+ ptemp.innerHTML + chtemp.getAttribute("type"));

    //paragraph appended to the list, checkbox appended to paragrap
    document.querySelector("#listTodos").appendChild(ptemp);
    // document.querySelector("#toDo#" + cont).appendChild(chtemp);
    
}


todoBtn.addEventListener('click', function(){
    todoText = todoAreaText.value;
    // alert(todoText);
    agregTodo(todoText, i);
})

// agregTodo(todoText, i);

    







