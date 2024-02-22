import express from 'express';
import { connectDB } from './db/config.mjs';
import dotenv from 'dotenv';
import EventRoutes from './routes/event.mjs';
import ParticipantRoutes from './routes/participant.mjs'
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 4000;

const app = express();
dotenv.config();

const isConnected = await connectDB();
app.use(cors())
app.use(bodyParser.json({limit: '10mb'}))
app.get('/', async(req, res) => {
    res.send("Server is up and running");
})

app.use("/events", EventRoutes)
app.use("/user", ParticipantRoutes)

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'i0K6OB4pulf8Iw9cMen_rGoqBvhNOQ03imi5P1uURkQX__kbrnB0zBp3C-MRtayq',
  baseURL: 'https://eventmanagement-8315c.web.app',
  clientID: '9zlAPzHgOL7N8ytkyx5ew774ucnVVQWJ',
  issuerBaseURL: 'https://dev-7skt27ous46hfxoz.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Server is running on http://localhost:${PORT}`);
    }
})