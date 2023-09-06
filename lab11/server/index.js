const express = require('express');
const app = express();
const { connect } = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const User = require('./models/userModel');
require('dotenv').config();

// Configure CORS
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
);


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// MongoDB Connection
connect(process.env.MONGO_URL, )
    .then(() => console.log("connected to mongodb..."))
    .catch((e) => console.log(e.message));

// Session configuration
app.use(
    session({
        secret: 'df51gf51g46fd1gf51f6dg41f6fd8g4d84gf65gfd',
        resave: false,
        saveUninitialized: false,
    })
);

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// LocalStrategy configuration
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email: email });
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        return done(null, user);
    } catch (e) {
        return done(e);
    }
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/q2');
}

app.get('/q2/login/loginhome', isAuthenticated, (req, res) => {
    return res.status(200).json({ message: 'Authentication successful' });
})

// Login route
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // If authentication is successful, a session is created
        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Session creation error' });
            }
            return res.status(200).json({ message: 'Authentication successful', user });
        });
    })(req, res, next);
});

// Logout route
app.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Session destroy error' });
        }
        res.status(200).json({ message: 'Logged Out Successfully!!!' });
    });
});

const student = require('./routes/studentRoute');
const user = require('./routes/userRoute');

app.use('/q1', student);
app.use('/q2', user);
app.listen(5000, () => {
    console.log('App is listening on port 5000');
});
