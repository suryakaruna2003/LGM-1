let addbutton=document.getElementById('addbutton');
let todo=document.getElementById('todocontainer');
let inputfield=document.getElementById('inputfield');

addbutton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputfield.value;
    todo.appendChild(paragraph);


    inputfield.value='';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    })

    paragraph.addEventListener('dblclick',function(){
        todocontent.removeChild(paragraph);
    })
})