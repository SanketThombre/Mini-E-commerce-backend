const mongoose = require("mongoose");


const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
    {

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
        cart: [
            {
                name: { type: String, required: true },
                price: { type: String, required: true },
                images: [{ type: String }],
                category: { type: String, required: true },
                type: { type: String, required: true }
            }
    ]
},
    {
        versionKey: false,
        timestamps: true,
    }

);



userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

userSchema.methods.checkpassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
 
const User = mongoose.model("user", userSchema);

module.exports = User;

