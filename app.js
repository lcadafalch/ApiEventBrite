//librerías  importat

const express = require("express")
const fs = require("fs")
const cors = require("cors")
const bodyparser = require("body-parser")
const jwt = require("jsonwebtoken")
const jwtChecker = require("express-jwt")
const cookieparser = require("cookie-parser")
const bcrypt = require("bcrypt")
const logger = require("./logger")
const nodemailer = require("nodemailer")
const sendMail = require("./alerter")

