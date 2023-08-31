//your JS code here. If required.
let output=document.getElementById("output");
   let prom= async function call{
	return new promise((resolve,reject)=>{
		resolve("Hello, world!");
	},1000)
}
prom.then((data)=>data);
call();
     output.textContent=prom;