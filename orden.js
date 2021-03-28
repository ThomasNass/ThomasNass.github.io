// hitta innerText från nodeList måste du göra

// const ordenspråken = document.querySelectorAll('i')[0].innerText;

let ordenspråken = [].map.call(document.querySelectorAll('i'), function(el) {
    return el.innerText;
});

console.log(ordenspråken)

// ordArr = Array.from(ordenspråken);
// let string = JSON.stringify(ordenspråken);
// console.log(JSON.stringify(ordenspråken));
// console.log(JSON.parse(string))