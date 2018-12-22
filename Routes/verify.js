const express = require("express")
const app = express.Router()
var  JWtoken = require('../keys')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const db = require("../Models");

app.use(cors());


let secrets = JWtoken.secret;

module.exports = function (app) {

    app.post('/api/register', (req, res) => {

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
                    async function run() {
                        let password =req.body.password;
                        const salt = await bcrypt.genSalt(10);
                        console.log(salt)
                        password = await bcrypt.hash(password, salt);
                        console.log(`hashed password? ${password}`)
                        return password;
                    }
                   run();
                        bcrypt.hash(password, 10, (err, hash) => {
                        password = hash
                        db.User.create(userInfo)
                            .then(user => {
                                console.log(password)
                                res.json({ status: user.email + ' registered' })
                            })
                            .catch(err => {
                                res.send('error: ' + err)
                            })
                    })
                } else {
                    res.json({ error: "Invalid request" })
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    })

    app.post('/api/login', (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }) .then(console.log(res))
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