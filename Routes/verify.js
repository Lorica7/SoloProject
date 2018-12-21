const express = require("express")
const app = express.Router()
var {secretKey} = require('../keys')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const db = require("../Models");
const User = require("../models/user")
app.use(cors());

let secrets = secretKey.secret;

 module.exports = function(app) {

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
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userInfo.password = hash
                  db.User.create(userInfo)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
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
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, secrets, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

 };