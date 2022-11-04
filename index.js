const express = require ("express");
const app = express ();
const mongoose = require ("mongoose");
const ejsMate = require ("ejs-mate");
const path = require ("path");
const User = require ("./models/user");
const browserEnv = require ("browser-env");
browserEnv(['navigator']);


mongoose.connect ('mongodb://localhost:27017/understand-location', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on ("error", console.error.bind (console, "connection error:"));
db.once ("open", () => {
    console.log ("Database connected!!!");
});

app.engine ('ejs', ejsMate);

app.set ('view engine', 'ejs');
app.set ('views', path.join (__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use (express.static(__dirname + '/public'));

app.get ('/login', (req, res) => {
    res.render ("pages/login");
})

app.post ('/login', async (req, res) => {
    console.log (req.body);
    

    

})

app.listen (8001, () => {
    console.log ("Listening on Port 8001!!!");
})