const mongoose = import("mongoose");
const Schema = mongoose.Schema;



const LocationSchema = new Schema({
    inPerson: Boolean,
    address: String,
    meetingId: String
    
})

module.exports = Location = mongoose.model("Location", LocationSchema)