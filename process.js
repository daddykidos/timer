let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hr")
let sub = document.getElementById("submit")
let truth = false;
sub.onclick = function execute() { truth =  !truth; count()  };
function count() {
	if (truth == false){sub.innerHTML = "start timer";sub.style.backgroundColor = "green";}
	else{sub.innerHTML = "stop timer";sub.style.backgroundColor = "red";};
	
	if (truth == true){
	if (sec.value == 0 && min.value > 0){ min.value--;sec.value = 60;};
		if (min.value == 0 && hr.value > 0){ hr.value--;min.value = 60;};
	if (sec.value == 0 && min.value == 0 && hr.value == 0){truth = false;} else {sec.value = sec.value-0.5;};
	setTimeout(count,500);
	};
}

function setpos(obj,px,py,scalx,scaly){

	let items = document.getElementById(obj);

	items.style.height = scaly+"px";
		items.style.width = scalx+"px";
		
	let xxx =  window.innerWidth / (100/px) ;
	let yyy = window.innerHeight / (100 / py);
	let xr =  xxx - (scalx / 2);
	let yr =  yyy - (scaly / 2);
	console.log(xr+","+yr+" position of "+"'"+obj+"'" );
	 items.style.position = "absolute";
	items.style.top = yr+"px";
	items.style.left = xr+"px";
	
};
function setsize(obj,x,y){
	let a = document.getElementById(obj);
	let xx = window.innerWidth / (100/x);
	let yy = window.innerHeight / (100/y);
	a.style.width = xx+"px";
	a.style.height = yy+"px";
};

setpos("sec",25,50,100,100);
setpos("min",50,50,100,100);
setpos("hr",75,50,100,100);
setpos("submit",50,25,300,200);


