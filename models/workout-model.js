const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter excercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter excercise name"
            },
            duration: {
                type: Number,
                required: "Please enter excercise duration"
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        }
    ],
})

const workoutModel = mongoose.model("workout", workoutSchema)
module.exports = workoutModel