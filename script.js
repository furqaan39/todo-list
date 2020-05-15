const form = document.querySelector('form');
const input  = document.querySelector('#input');
const ul = document.getElementById('item-list');
const deleteBtns = document.getElementsByClassName('btn-danger');
form.addEventListener('submit', addItem);





showLocalStorageData();
eventDelete(deleteBtns);

function showLocalStorageData(){
  
  for (let i = 0; i < localStorage.length; i++) {
   let storedValue = localStorage.key(i);
    addItemProcess(storedValue);  
  }
}


function addItem(e){
  
  e.preventDefault();
  
  if(input.value !== ""){
    
    addItemProcess(input.value);    
    
//     local storage 
    localStorage.setItem(input.value,input.value);

  }
//   check events for delete
  eventDelete(deleteBtns);

  
  input.value="";
}

function addItemProcess(value){
  
  //     create li
    const li = document.createElement('li');
    
//     create span
    const span = document.createElement('span');
    
//     create textNode for span
    const todoText = document.createTextNode(value);
    
//     append textNode to span
    span.appendChild(todoText);
    
//     create btn
    const btn = document.createElement('button');
    
//     add class to btn
    btn.className = "btn btn-danger";
    
//     create textNode for btn
    const btnText = document.createTextNode("X");
    
//     append textNode to btn
    btn.appendChild(btnText);
    
    
//     append to li
    li.appendChild(span);
    li.appendChild(btn);
    
//     append it to ul
    ul.appendChild(li);
    

}


function removeItem(e){
  
  console.log(e.target.previousElementSibling.innerText);
  let text = e.target.previousElementSibling.innerText;
  localStorage.removeItem(text);
  e.target.parentNode.remove();
  
}



function eventDelete(btns){
  Array.from(btns).forEach(btn =>{
      btn.addEventListener('click', removeItem);
  });
}
