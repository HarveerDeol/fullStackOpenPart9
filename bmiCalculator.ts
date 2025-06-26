export const calculateBmi = (height: number, weight: number):string => {
    let bmi:number;
    height /= 100;
    bmi = weight/(height * height);
    try{
        if (bmi >= 40){
             return'Obese (Class III)'
        } else if (bmi >= 35.0 && bmi < 40.0){
            return'Obese (Class II)'
        } else if (bmi >= 30.0 && bmi < 35.0){
            return'Obese (Class I)'
        } else if (bmi >= 25.0 && bmi < 30.0){
            return'Overweight (Pre-obese)'
        } else if (bmi >= 18.5 && bmi < 25){
            return'Normal range'
        } else if (bmi >= 17.0 && bmi < 18.5){
            return'Underweight (Mild thinness)'
        } else if (bmi >= 16.0 && bmi < 17.0){
            return'Underweight (Moderate thinness)'
        } else {
            return'Underweight (Severe thinness)'
        }   
    } catch (error:unknown){
        let errorMessage = 'Something went wrong: '
        // here we can not use error.message
        if (error instanceof Error) {
          // the type is narrowed and we can refer to error.message
          errorMessage += error.message;
        }
        // here we can not use error.message
      
        console.log(errorMessage);
        return 'Error calculating BMI';
    }
       
}


const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
calculateBmi(height, weight);


export default { calculateBmi };