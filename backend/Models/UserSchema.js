const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['patient', 'doctor'], required: true },
  phone: String,
  gender: String,
  dob: Date,
  profilePic: String,
  // Doctor-specific
  specialization: String,
  experience: Number,
  qualification: String,
  clinicAddress: String,
  availability: [String],  // Example: ["Mon 9-5", "Tue 10-6"]
  createdAt: { type: Date, default: Date.now }
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;
