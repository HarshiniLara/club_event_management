import express from 'express';
import { connectDB } from './db/config.mjs';
import dotenv from 'dotenv';
import EventRoutes from './routes/event.mjs';
import ParticipantRoutes from './routes/participant.mjs'
import cors from 'cors';
import bodyParser from 'body-parser';
import {auth} from 'express-openid-connect';

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


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'tHCMm6QzTAm2JoWiUH_0HWey8O41ko73_Z84I3WbYC8ZqV9sdWD9h2CgseukXZXx',
  baseURL: 'http://localhost:4000',
  clientID: 'jxc1qeZd4Cc5n3a4KLzyqPiclnkB1aoX',
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