'use strict';
const fs = require('fs');
// const data = require('../../data.json')


function calculateBMI() {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {
                bmi: []
            }
            let overWeightCount = 0
            const obj = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf8'));
            for (let i=0; i< obj.length; i++) {
                const response = CalculateBmi(obj[i])
                if (response.BMI_Category === 'Overweight') {
                    overWeightCount++
                }
                res.bmi.push(response)
            }
            res['overWeightCount'] = overWeightCount
            resolve(res);

        } catch (err) {
            reject(err)
        }
    });
}

function CalculateBmi(data) {
    let res = {}
    let bmi = (data.WeightKg/(data.HeightCm/100)).toFixed(2)
    res['BMI'] = `${bmi}kg/m2`
    if (bmi <= 18.4) {
        res['BMI_Category'] = 'Underweight';
        res['Health_risk'] = 'Malnutrition risk';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        res['BMI_Category'] = 'Normal weight';
        res['Health_risk'] = 'Low risk';
    } else if (bmi >= 25 && bmi < 29.9) {
        res['BMI_Category'] = 'Overweight';
        res['Health_risk'] = 'Enhanced risk';
    } else if (bmi >= 30 && bmi < 34.9) {
        res['BMI_Category'] = 'Moderately obese';
        res['Health_risk'] = 'Medium risk';
    } else if (bmi >= 35 && bmi < 39.9) {
        res['BMI_Category'] = 'Severely obese';
        res['Health_risk'] = 'High risk';
    } else if (bmi >= 40) {
        res['BMI_Category'] = 'Very severely obese';
        res['Health_risk'] = 'Very high risk';
    }
    return res
}


module.exports = { calculateBMI }