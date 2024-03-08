const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndUpdate({name: "Eve"}, {name: "Catherine", email: "cahtherine12345@gmail.com", age: 20}, {new: true}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// User.insertMany([
//   {name: "Tony", email: "Tony@gmail.com", age: 50},
//   {name: "Bruce", email: "Bruce@yahoo.in", age: 45},
//   {name: "Peter", email: "peter@gmail.com", age: 30},
// ]).then((data) => {
//   console.log(data);
// });

// const user2 = new User({
//   name : "Eve",
//   email: "eve@gmailcom",
//   age : 48
// });
// user2.save().then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })