// for(let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

// console.log(i)

for(var i = 0; i < 5; i++) {
    console.log(`Estou dentro do For e fora do setTimeout${i}.`)
    setTimeout(function() {
        console.log(`Estou dentro do For e dentro do setTimeout${i}.`);
    }, i * 1000);
}

console.log(`Estou fora do For ${i}.`)