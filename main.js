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
elBtn.addEventListener('click', function(){
    pupils.sort()
});

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



