'use strict'
const Router = require('express').Router();
const BmiController = require('../../app/controllers/Bmi')

// @route    GET api/v1/bmiCalculator
// @desc     get the calculated BMI
// @access   Public

Router.get(
    '/', 
    async (req, res) => {
      try {
        const response = await BmiController.calculateBMI();
        res.json(response)
        } catch (err) {
        console.log("Error in /user post", err)
        res.status(400).json({ "message": "Problem in fetching the data." })
        }
    }
  );

module.exports = Router;
