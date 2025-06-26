import express from 'express';
import qs  from 'qs'; 
import { calculateBmi } from './bmiCalculator';
// import { calculateExercises} from './exerciseCalculator';
const app = express();


app.set('query parser', (str: string) => qs.parse(str));

// app.get('/exercise', (req, res) => {
//   const {daily_exercises , target} = req.query;
  

//   res.send(calculateExercises(daily_exercises, target));
  
// });

app.get('/bmi', (req, res) => {
  const {height , weight} = req.query;
  
  const heightNum = Number(height);
  const weightNum = Number(weight);

  res.send(calculateBmi(heightNum, weightNum));
  
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});