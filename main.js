// o'zgaruvchilar
var elInput = document.querySelector('#input');
var elButton = document.querySelector('#btn');
var elList = document.querySelector('#list');
var pupils = [];
var elBtn = document.querySelector('#button');


for (var i = 0; i < pupils.length; i++){
    var item = document.createElement('li');
    item.textContent = pupils[i];
    elList.appendChild(item);
};

//saralash
elBtn.addEventListener('click', function(){
    pupils.sort()
        elInput.value = '';
        elList.textContent = '';
        for (var i = 0; i < pupils.length; i++){
            var item = document.createElement('li');
            item.textContent = pupils[i];
            elList.appendChild(item);
        }
});

// qo`shish
elButton.addEventListener('click', function(){
    if(elInput.value.trim() === ''){
        alert('O\'quvchi ismini kiriting!');
        elInput.value = '';
    } else if(pupils.indexOf(elInput.value) !== -1){
        alert('O\'quvchi ro\'yxatda bor');
        elInput.value = '';
    } else {
        pupils.push(elInput.value);
        elInput.value = '';
        elList.textContent = '';
        for (var i = 0; i < pupils.length; i++){
            var item = document.createElement('li');
            item.textContent = pupils[i];
            elList.appendChild(item);
        }
    }
});

//o`chirish
var elIndex = document.querySelector('#index');
var elDel = document.querySelector('#del');

elDel.addEventListener('click', function(){
    var index = parseInt(elIndex.value, 10) - 1;
    elIndex.value = '';
    pupils.splice(index, 1);
    elList.textContent = '';
    for (var i = 0; i < pupils.length; i++){
        var item = document.createElement('li');
        item.textContent = pupils[i];
        elList.appendChild(item);
    }
});

// dark light
const body = document.querySelector('body')
    const toggle = document.getElementById('toggle');
    toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

//animatsiya
const buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            }, 1000)
        })
    })