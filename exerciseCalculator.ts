interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

/*
interface InputValues {
  hours: number[];
  objetive: number;
}

const parseArguments = (args: string[]): InputValues => {
  if (args.length < 4) throw new Error("Not enougth arguments");
  if (args.length > 4) throw new Error("Too many arguments");
  let array: number[];

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    array = JSON.parse(args[2]);
  } catch (error: unknown) {
    console.log("ERROR PARSING THE ARRAY", error);
  }

  if (!isNaN(Number(args[3]))) {
    return {
      hours: array,
      objetive: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not okay!");
  }
};
*/

function calculateExercises(array: number[], target: number): Results {
  const average = array.reduce((a, b) => a + b) / array.length;
  const trainingDays = array.reduce(
    (total, x) => (x > 0 ? total + 1 : total),
    0
  );
  const rating: number = average > target ? 3 : average / target > 0.5 ? 2 : 1;
  const DESCRIPTIONS = [
    "JUST DO IT",
    "You know you can do it better!",
    "YOU ARE GREAT!",
  ];
  return {
    periodLength: array.length,
    trainingDays,
    success: average > target ? true : false,
    rating,
    ratingDescription: DESCRIPTIONS[rating - 1],
    target,
    average,
  };
}
/*
try {
  const { hours, objetive } = parseArguments(process.argv);
  console.log(calculateExercises(hours, objetive));
} catch (error: unknown) {
  let errorMessage = "Something bad happend.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))

*/
export default calculateExercises;