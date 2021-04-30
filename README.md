Nodejs BMI Calculator Coding Challenge

#

Problem Statement:

#

Given the following JSON data:<br />

```
[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}]
```

as the input with weight and height parameters of a person,
we have to perform the following:

#

1. Calculate the BMI (Body Mass Index) using Formula 1, BMI Category and Health
   risk from Table 1 of the person and add them as 3 new columns <br/>

2. Count the total number of overweight people using ranges in the column BMI
   Category of Table 1, check this is consistent programmatically and add any other
   observations in the documentation <br/>

3. Create build, tests to make sure the code is working as expected and this can be
   added to an automation build / test / deployment pipeline <br/>

#Formula

```
BMI(kg/m ) = mass(kg) / height(m)
```

#Table 1 - BMI Category and the Health Risk. <br/>
BMI Category

```
Underweight Normal weight Overweight Moderately obese Severely obese Very
severely obese
```

BMI Range (kg/m2)

```
18.4 and below 18.5 - 24.9
25 - 29.9
30 - 34.9

35 - 39.9
40 and above
```

Health risk

```
Malnutrition risk Low risk Enhanced risk Medium risk High risk
Very high risk
```

#

#

Project Setup

```
# after cloning the project
> cd code-20210424-PratikKumar

```

Build Setup

```
npm install
npm start

# for test
npm test
```

#

After npm start hit http://localhost:6000/api/v1/bmiCalculator vai postman and get the response

#

response structure

```
{
    bmi: [
        {
            "BMI": "56.14kg/m2",
            "BMI_Category": "Very severely obese",
            "Health_risk": "Very high risk"
        },
        {
            "BMI": "52.80kg/m2",
            "BMI_Category": "Very severely obese",
            "Health_risk": "Very high risk"
        }
    ],
    "overWeightCount": 4
}
```
