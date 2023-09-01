// //your JS code here. If required.
// let output=document.getElementById("output");
//    let prom= async function call{
// 	return new promise((resolve,reject)=>{
// 		resolve("Hello, world!");
// 	},1000)
// }
// prom.then((data)=>data);
// call();
//      output.textContent=prom;
let output = document.getElementById("output");

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}

createPromise().then((data) => {
    output.textContent = data;
});