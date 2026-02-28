const outputDiv = document.getElementById("output");

function createCard(question, explanation, input, output) {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <h3>${question}</h3>
        <p><strong>Input:</strong> ${input}</p>
        <p><strong>Output:</strong> ${output}</p>
    `;

    outputDiv.appendChild(div);
}

/* 1. Scope Difference */
function scopeExample() {
    var a = "var";
    let b = "let";
    const c = "const";

    return `
    var = function scoped <br>
    let = block scoped <br>
    const = block scoped & cannot be reassigned
    `;
}

createCard(
    "1. Difference between var, let, const",
    "Scope demonstration",
    "Declared variables using var, let, const",
    scopeExample()
);


/* 2. Second Fruit */
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
createCard(
    "2. Return second fruit from array",
    "Array indexing",
    fruits.join(", "),
    fruits[1]
);


/* 3. Push and Pop */
function modifyArray(arr) {
    arr.push("NewElement");
    arr.pop();
    return arr;
}
createCard(
    "3. Add element using push() and remove using pop()",
    "push() & pop()",
    "[1,2,3]",
    modifyArray([1,2,3]).join(", ")
);


/* 4. Square using map() */
const numbers1 = [1,2,3,4,5];
const squared = numbers1.map(n => n*n);
createCard(
    "4. Square numbers using map()",
    "Array.map()",
    numbers1.join(", "),
    squared.join(", ")
);


/* 5. Filter Odd Numbers */
const numbers2 = [1,2,3,4,5,6,7,8];
const odd = numbers2.filter(n => n % 2 !== 0);
createCard(
    "5. Filter out even numbers",
    "Array.filter()",
    numbers2.join(", "),
    odd.join(", ")
);


/* 6. Greeting using object */
const person = { name: "Shravani", age: 22, occupation: "Developer" };

function greet(p) {
    return `Hello, I am ${p.name}, ${p.age} years old and working as ${p.occupation}.`;
}

createCard(
    "6. Greeting using object properties",
    "Object property access",
    JSON.stringify(person),
    greet(person)
);


/* 7. Rectangle Area */
function area(rect) {
    return rect.width * rect.height;
}

createCard(
    "7. Calculate area of rectangle",
    "Object property multiplication",
    "{width: 10, height: 5}",
    area({width: 10, height: 5})
);


/* 8. Object Keys */
createCard(
    "8. Get object keys",
    "Object.keys()",
    JSON.stringify(person),
    Object.keys(person).join(", ")
);


/* 9. Merge Objects */
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const merged = Object.assign({}, obj1, obj2);

createCard(
    "9. Merge two objects",
    "Object.assign()",
    `Obj1: ${JSON.stringify(obj1)} <br> Obj2: ${JSON.stringify(obj2)}`,
    JSON.stringify(merged)
);


/* 10. Sum using reduce() */
const numbers3 = [10,20,30,40];
const sum = numbers3.reduce((total, num) => total + num, 0);

createCard(
    "10. Calculate sum using reduce()",
    "Array.reduce()",
    numbers3.join(", "),
    sum
);