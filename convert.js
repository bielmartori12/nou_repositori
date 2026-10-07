function convertirCF() {
	let CF = prompt("A què vols convertir C/F?");
	let temp = paarseFloat(prompt("Temperatura:"));
	if( CF.toUpperCase() == "c" ){
		let cent = (temp-32)/(9/5);
		console.log(`${temp}F -> ${cent}C`);
	}else if (CF.toUpperCase() == "F"){
		let fh = (9/5) * temp + 32;
		console.log(`${temp}C -> ${fh}F`);
	}else {
		console.log("Només es pot C ó F");
	}
}
