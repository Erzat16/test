// 1

// const containsOnlyDigits = (str) => {
//     const regExp = /^\d+$/;
//     return regExp.test(str);
// }

// console.log(containsOnlyDigits("123456789")); 
// console.log(containsOnlyDigits("123456789a")); 


// 2

// let counter = 1;

// const printMessage = () => {
//     console.log(`Прошла секунда ${counter}`);
//     counter++;
// };

// setInterval(printMessage, 1000);


// 3

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
//         if (i > 10) {
//             clearInterval(interval); 
//         }
//     }, 1000); 
// };

// count();


// 4

// const box = document.querySelector('.box');

// box.addEventListener('click', () => {
//     box.classList.toggle('active'); 
// });



// 5 

const button = document.querySelector('button')

button.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    console.log(request);
    
}