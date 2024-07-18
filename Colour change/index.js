let colors =['red', 'blue', 'green' , 'orange', 'cyan' ,'purple' ,'yellow'];

let button = document.getElementById('btnn');


button.addEventListener('click' , function(){

    let index = Math.floor(Math.random() * colors.length);

    let bgcolor = document.getElementById('areaa')

    bgcolor.style.background = colors[index]
})