import mongoose from "mongoose";


const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  journal: String,
  year: String,
  details: String
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive'],
    default: 'Active'
  },
  role: String,
  email: {
    type: String,
    required: true,
   
  },
  teams: [String],
  dateOfBirth: Date,
  gender: String,
  nationality: String,
  contactNo: String,
  personalEmail: String,
  workEmail: {
    type: String,
    required: true,
    
  },
  publications: [publicationSchema]
}, {
  timestamps: true
});

const UserData = mongoose.model('UserData', userSchema);

export default UserData;