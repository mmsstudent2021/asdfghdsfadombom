

function createOption(fruit){
    const option = document.createElement("option");
    option.value = fruit;
    option.innerText = fruit.name;
    return option;
}

const goodsSelect = document.querySelector("#goods");
console.dir(goodsSelect);

const goods = [
    {
        id:1,
        name : "apple",
        price : 50
    },
    {
        id:2,
        name : "orange",
        price : 40
    },
    {
        id:3,
        name : "mango",
        price : 90
    },
    {
        id:4,
        name : "banana",
        price : 20
    },
];

for(good of goods){
    goodsSelect.append(createOption(good))
}



























