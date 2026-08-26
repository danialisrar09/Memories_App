import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';

const App = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Social-CRUD-App:vsQWrdR4qyTvDLCY@social-crud-app.7kzv47s.mongodb.net/?appName=Social-CRUD-App'



//MongoDB Connection

