var mon=require("mongoose");
mon.connect(process.env.DB_URL, { useNewUrlParser: true });

var userStructure = new mon.Schema({
  userEmail: String,
  userPassword: String,
  userpicture: String,
  userName: String,
  userGender: String,
  seasons: String, 
  userMobile: String
});

var userSchema = mon.model('users', userStructure);

module.exports = userSchema;