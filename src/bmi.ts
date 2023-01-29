/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

// Your task is to implement a BMI calculator server.

// You have to write an endpoint that accept weight and height with their units and response with the BMI value and its state. The endpoint should support query string, forms submission and JSON requests.

// For example:

// Input of 80Kg weight and 180cm height should output BMI: 25, state: 2

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
  // TODO: implement me
  let weight: number = input.weight;
  let height: number = input.height;

  //converting height-->M && weight-->KG

  if (input.weight === 1) {
    weight = input.weight * 1000;
  }
  if (input.weight === 2) {
    weight = input.weight * 0.453;
  }
  if (input.height === 0) {
    height = input.height * 100;
  }
  if (input.height === 2) {
    height = (input.height * 2.54) / 100;
  }
  if (input.height === 3) {
    height = (input.height * 30.48) / 100;
  }

  let bmi = weight / height ** 2;
  //no overlap between cases so no else is needed will enter only one if statment
  //or will return last value

  if (bmi < 18.5) {
    return { bmi: bmi, status: 0 };
  }
  if (bmi < 24.9) {
    return { bmi: bmi, status: 1 };
  }
  if (bmi < 29.9) {
    return { bmi: bmi, status: 2 };
  }
  //returning last optional value
  return { bmi: bmi, status: 3 };
}
