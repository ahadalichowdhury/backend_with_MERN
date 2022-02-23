const express = require("express");
const router = require("./src/routes/api");
const app = new express();



//security middleware input
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean")
const hpp = require("hpp");
const cors = require("cors");



//security middleware implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter);





app.use("/api/v1",router );




//undefined route

app.use('*', (req, res)=>{
    res.status(404).json({status: "fail", data: "not pound"})
})

module.exports=app;