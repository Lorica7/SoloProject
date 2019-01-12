const express = require("express")
const app = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const db = require("../../Models");
const expVal = require('express-validator');
var Sequelize = require("sequelize");
let passport = require('passport');
app.use(cors());

module.exports = function (app) {

    app.post('/api/register', (req, res) => {

        req.checkBody('firstName', 'firstName field cannot be empty.').notEmpty();
        req.checkBody('lastName', 'lastName field cannot be empty.').notEmpty();
        req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
        req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
        req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
        req.checkBody("password", "Password must include one lowercase character, one uppercase character, a number.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");

        const errors = req.validationErrors();
        if (errors) {
            console.log(`errors: ${JSON.stringify(errors)}`);

            res.render('register',
                {
                    title: "Registration Error",
                    errors: errors
                });

        } else {

            const userInfo = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                type: req.body.type
            }

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    if (!user) {
                        bcrypt.hash(req.body.password, 10, (error, hash) => {
                            userInfo.password = hash

                            db.User.create(userInfo).then(user => {
                                if (error) throw error;

                                db.sequelize.query("SELECT LAST_INSERT_ID()",
                                    { type: db.sequelize.QueryTypes.SELECT })
                                if (error) throw error;
                                else {
                                    const user_id = results[0];

                                    console.log(results[0]);
                                    req.login(user_id, function (err) {
                                        res.redirect('/');
                                    })
                                }
                            }).catch(err => {
                                res.send('error: ' + err)
                            })
                        })
                    } else {
                        res.json({ error: "User already exists" })
                    }
                })
        }
    })
    passport.serializeUser((user_id, done) => {
        done(null, user_id);
    });

    passport.deserializeUser((user_id, done) => {
        db.User.findOne({
            where: {
                id: user_id
            }
        })
    });
};

