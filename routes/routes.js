let express = require('express');
let router = express.Router();
let path = require("path");
let Workoutmodel = require("../models/workout-model.js")

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get('/api/workouts', function (req, res) {
   Workoutmodel.aggregate([
       {
           $addFields: {
               totalDuration: {
                   $sum: "$exercises.duration"
               }
           }
       }
   ]).then((allWorkouts) => {
       res.json(allWorkouts)
   })
})

module.exports = router;