const express = require("express")
const app = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const db = require("../Models");
const expVal = require('express-validator');
var Sequelize = require("sequelize");
let passport = require('passport');
app.use(cors());



module.exports = function (app) {

    app.post('/api/register', (req, res) => {

        const userInfo = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        }
 // Validation

       

        req.checkBody('firstName', "Field cannot be empty").notEmpty();
        req.checkBody('lastName', "Field cannot be empty").notEmpty();
        req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
        req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
        req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
        req.checkBody('password', "Password must include one lowercase character, one uppercase character, a number, and a special character.")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
        const errors = req.validationErrors();
        if (errors) {
            console.log(`errors: ${JSON.stringify(errors)}`);
        } else {

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })

// Password Hashing and Salting 
            .then(user => {
                if (!user) {
                    async function run() {
                        let password = req.body.password;
                        const salt = await bcrypt.genSalt(10);
                        console.log(salt)
                        password = await bcrypt.hash(password, salt);
                        console.log(`hashed password? ${password}`)
                        return password;
                    }
                    run().then(
            
                    bcrypt.hash(password, 10, (err, hash) => {
                    password = hash
                        db.User.create(userInfo)
                            .then(user => {
                                console.log(password)
 // User created, getting user password
                                db.sequelize.query("SELECT LAST_INSERT_ID() as user_id FROM `users`", 
                                { type: db.sequelize.QueryTypes.SELECT })
                                    .then((results, error, fields) => {  //might need to pass these arg in a callback
                                        if (error) throw error;

                                        const user_id = results[0]

                                        console.log(results[0]);
                                        req.login(user_id), function (err) {
                                            res.redirect('/');
                                        }
                                    })
                                res.json({ status: user.email + ' registered' })
                                // res.render('register', { title: "Registration Sucessful"})
                            })
 // Basic Error handling
                    }))
                }
                else {
                    res.json({ error: "Invalid request" })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
})

// Serialization with Passport

    passport.serializeUser((user_id, done) => {
        done(null, user_id);
    });

    passport.deserializeUser((user_id, done) =>{
        User.findById(user_id,  (err, user_id)=> {   //this line might not be needed, causing problems?
            done(null, user_id);
        });
    });

    app.post('/api/login', (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(console.log(res))
            .then(res => {
                if (res.body.password === db.User.password) {
                    app.get("/user", (req, res));
                } else {
                    console.log("error")
                    res.status(400).json({ error: 'Invalid entry' })

                }
            })
            .catch(err => {
                res.status(400).json({ error: err })
            })
    })

};