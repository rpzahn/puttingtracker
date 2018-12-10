//set count
if (localStorage.getItem("count") == null) {
  localStorage.setItem("count",0) 
} 
// update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

// addone to count
function plusOne() {
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}

// this is to reset count

function reset() {
	if(confirm("Are you sure you want to reset?")){
		localStorage.setItem("count",0)
		update()
	}

}