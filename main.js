var guestarray = [];
function submit(){
    var addguest = document.getElementById("guest").value;
    guestarray.push(addguest);
    document.getElementById("display").innerHTML=guestarray;
}
function sort(){
    guestarray.sort();
    document.getElementById("p1").innerHTML=guestarray;
}
function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}