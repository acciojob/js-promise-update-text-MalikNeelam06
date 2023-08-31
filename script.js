//your JS code here. If required.
let output=document.getElementById("output");
async function call{
	return new promise((resolve,reject)=>{
		resolve("Hello, world!");
	},1000).then((data)=>{
		return data;
	})
}
     output.textContent=call();