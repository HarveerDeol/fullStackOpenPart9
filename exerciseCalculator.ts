const calculateExercises = (week:number[], target:number) => {
    let daysOff: number = 0;
    let average: number = 0;
    let periodLength: number = week.length;
    let ratingDescription: string;
    let rating: number;
    let success: boolean;

    for (const day of week){
        if (day === 0){
            daysOff +=1;
        }
        average += day;
    }

    average /= periodLength;
    let trainingDays: number = (periodLength - daysOff);

    if ( target - average  <= 0 ){
        ratingDescription = 'goal met';
        rating = 3;
        success = true;
    } else if ( target - average <= 0.25 && average % target > 0 ){
        ratingDescription = 'not too bad but could be better';
        rating = 2;
        success = false;
    } else if ( target - average > 0.25 ){
        ratingDescription = 'needs work';
        rating = 1;
        success = false;
    }

    return (console.log({
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }))
} 

const target: number = Number(process.argv[2])
const week: Array<number> = process.argv.slice(3).map(Number);
calculateExercises(week, target);



