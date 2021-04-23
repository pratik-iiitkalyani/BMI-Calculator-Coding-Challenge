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
