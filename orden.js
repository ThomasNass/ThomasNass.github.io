// hitta innerText från nodeList måste du göra

// const ordenspråken = document.querySelectorAll('i')[0].innerText;

let ordenspråken = [].map.call(document.querySelectorAll('i'), function(el) {
    return el.innerText;
});


// ordArr = Array.from(ordenspråken);
console.log(ordenspråken);