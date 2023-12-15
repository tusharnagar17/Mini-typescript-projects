let height: number = Number(process.argv[2]);
let weight: number = Number(process.argv[3]);

function calculateBmi(height: number, weight: number): any {
  let result: number;
  if (height > 0) {
    result = weight / (height * height);
  } else {
    console.log("have input height more than 0");
  }
  if (result < 18.5) {
    console.log("Underweight!");
  } else if (18.5 < result && result < 24.9) {
    console.log("Healthy range!");
  } else if (25 < result && result < 29.9) {
    console.log("Overweight!");
  } else if (30 < result && result < 39.9) {
    console.log("Obesity!");
  } else if (result > 40) {
    console.log("Obesity!!!!!");
  }
}

console.log(calculateBmi(height, weight));
