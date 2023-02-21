interface BMIValues {
  value1: number;
  value2: number;
}

interface BMIOutput {
  weight: number;
  height: number;
  bmi: string;
}

const parseArguments = (args: string[]): BMIValues => {
  if (args.length < 4) throw new Error("Not enougth arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

export function calculateBmi(height: number, weight: number): BMIOutput {
  const bmi: number = weight / Math.pow(height / 100, 2);
  const output = { weight, height };
  if (bmi < 18.5) return { ...output, bmi: "Unhealthy (Underweight)" };
  else if (bmi < 24.9) return { ...output, bmi: "Normal (Healthy Weight)" };
  else if (bmi < 29.9) return { ...output, bmi: "Unhealthy (Overweight)" };
  else return { ...output, bmi: "Unhealthy (Obese)" };
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (error: unknown) {
  let errorMessage = "Something bad happend...";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}

export default calculateBmi;
