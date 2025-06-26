export type ExerciseResult = {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  };
  
export  const  calculateExercises = (week: number[], target: number): ExerciseResult => {
    const periodLength = week.length;
    const trainingDays = week.filter(d => d > 0).length;
    const average = week.reduce((sum, d) => sum + d, 0) / periodLength;
  
    let rating: number;
    let ratingDescription: string;
    const success = average >= target;
  
    if (average >= target) {
      rating = 3;
      ratingDescription = 'goal met';
    } else if (target - average <= 0.25) {
      rating = 2;
      ratingDescription = 'not too bad but could be better';
    } else {
      rating = 1;
      ratingDescription = 'needs work';
    }
  
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average
    };
  };

  
const target: number = Number(process.argv[2])
const week: Array<number> = process.argv.slice(3).map(Number);
calculateExercises(week, target);



export default { calculateExercises };


