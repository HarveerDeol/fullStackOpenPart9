const calculateBmi = (height: number, weight: number) => {
    let bmi:number;
    height /= 100;
    bmi = weight/(height * height);
        if (bmi >= 40){
             console.log('Obese (Class III)')
        } else if (bmi >= 35.0 && bmi < 40.0){
            console.log('Obese (Class II)')
        } else if (bmi >= 30.0 && bmi < 35.0){
            console.log('Obese (Class I)')
        } else if (bmi >= 25.0 && bmi < 30.0){
            console.log('Overweight (Pre-obese)')
        } else if (bmi >= 18.5 && bmi < 25){
            console.log('Normal range')
        } else if (bmi >= 17.0 && bmi < 18.5){
            console.log('Underweight (Mild thinness)')
        } else if (bmi >= 16.0 && bmi < 17.0){
            console.log('Underweight (Moderate thinness)')
        } else if (bmi < 16){
            console.log('Underweight (Severe thinness)')
        }   
}


const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
calculateBmi(height, weight);