const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookingSchema = new Schema({
    startTime: Date,
    endTime: Date,
    status: String,
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location"
    }

})


module.exports = Bookings = mongoose.model("Bookings", BookingSchema);