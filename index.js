function calculateBMI() {
	let weight = Number(document.getElementById('inputWeight').value);
	let height = Number(document.getElementById('inputHeight').value);
	let bmi = weight / Math.pow(height, 2);
	let bmiround = Math.round(bmi)


	 if (bmiround < 18.5 ){

	 	window.alert("You are underweight!");
		}

	 else if (bmiround >= 18.5 && bmiround <= 24.9 ){
	 	window.alert("You have normal weight");
        }

     else if (bmiround >=25 && bmiround <= 29.9 ){
	 	window.alert("You are overweight!");
        }

	else{window.alert("You are obese.");
		}
}
