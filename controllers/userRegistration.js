
const bcrypt = require('bcrypt');
const User = require('../models/usermodels');


//internal imports




module.exports = {
    registration(req, res) {
        // getting all the data from req 
        let { name, email, password, type } = req.body;

        // password hashing using bcrypt 
        bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
                return res.status(500).json({
                    message: "Server Error Occured",
                })
            }
            if (hash) {

                // making a new user 
                const user = new User({
                    name,
                    email,
                    password: hash,
                    type
                })

                // saving the user to the database 
                user.save()
                    .then(newUser => {
                        if (newUser) {
                            return res.status(200).json({
                                message: newUser
                            })
                        }
                    })
                    .catch(err => {
                        return res.status(200).json({
                            message: 'Server Error Occured'
                        })
                    })
            }
        })

    },

    login(req, res) {
        let { email, password } = req.body;

        // finding the user in the database 
        User.findOne({ email: email })
            .then(existedUser => {
                if (existedUser) {

                    // checking the stored password of the user 
                    bcrypt.compare(password, existedUser.password, function (err, result) {
                        if (err) {
                            return res.status(500).json({
                                message: 'Server Error Occured'
                            })
                        }
                        if (!result) {
                            return res.status(403).json({
                                message: 'Password Did not Match'
                            })
                        }
                        if (result) {
                            return res.status(200).json({
                                message: 'Login Successfull'
                            })
                        }
                    });
                } else {
                    return res.status(200).json({
                        message: 'User Does not Exist'
                    })
                }
            })
            .catch(err => {
                return res.status(500).json({
                    message: 'Server Error Occured'
                })
            })

    }
}