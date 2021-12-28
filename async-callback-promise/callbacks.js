// Arrow function --> ES6

//ES5
// function getUser() {
//     var a =10;
//     return a;
// };


//ES6 

// const getUser = () => {
//     const b = 15;
//     return b;
// }

// const add = (a,b) => {
//     const c = a;
//     const d = b;
//     c + d;
// }

// class Employee {
//     constructor(name) {
//         this.name = name;
//     }

//     consoleNameFunction() {
//         setTimeout(() => {
//             console.log('Function:' + this.name);
//         }, 100)
    
//     }

//     consoleNameArrow = () => {
//         setTimeout(() => {
//         console.log('Arrow:' + this.name);
//     }, 100)
//     }
// };

// let employee = new Employee('John');
// employee.consoleNameArrow();
// employee.consoleNameFunction();


//setTimeout
//template literal

const characters = [
    {name: "Jon snow", role: "King in the north"},
    {name: "Harry potter", role: "The chosen one"}
];

const getCharacters = () => {
    setTimeout(() => {
        let output = '';
        characters.forEach((character, index) => {
            output += `<li>${character.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

getCharacters();

const createCharacter = async(newCharacter, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const error = true;

            if(!error) {
                resolve();
            } else {
                reject("Something went wrong");
            }
        }, 2000)
    });
};

createCharacter({name: "asdasdsa", role: "adssadsan"})
    .then(getCharacters)
    .catch(error => console.log(`Error: ${error}`));


    //Promise.all

    const promise1 = Promise.resolve('Hello world');
    const promise2 = 50;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Goodbye');
    });

    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

    Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
        console.log(value);
    });

// Async Await

async function init() {
    await createCharacter({name: 'Tony stark', role: 'The Iron man'});
  
    getCharacters();
 }
  
 init();
 
const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('res', res)
    const data = await res.json();
    console.log(data);
}

fetchUsers();





//callback ---> Promise, then ---> Async await