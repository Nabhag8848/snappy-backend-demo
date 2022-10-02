// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config({ path: './.env' })
// const Replicate = require('replicate-js');


// const fetch = require('node-fetch');

// const BaseURL:string = 'https://api.replicate.com/v1/predictions';

// const app = express();
// app.use(cors());
// app.use(bodyParser.json())
// const PORT = process.env.PORT || 5003;

// // const verifier = base64URLEncodeI(crypto.randomBytes(32));
// // const challenge = base64URLEncodeI(sha256(verifier));

// // console.log("verifier: ", verifier);
// // console.log("challenge: ", challenge);

// app.post('/webhook', (req, res ) => {
//     try {
//         console.log('req:', req);
//         res.send(req)
//     }catch(err){
//         console.error(err);
//     }
// })

// app.get('/webhook', ( req, res ) => {
//     try {
//         console.log('webhook pinged')
//         res.status(200).send('Health Check');
//     }catch (err: unknown){
//         console.error(err);
//     }
// })

// app.post('/create', async (req, res) => {
//     try {
//         // console.log('here');
//         // const inputs = req.body;

//         // const options: any = {
//         //     method: "POST",
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Authorization': `Token ${process.env.AuthToken}`
//         //     },
//         //     body: JSON.stringify({
//         //         "version": `${process.env.ModelVersion}`,
//         //         "input": inputs,
//         //         "webhook_completed": "https://65ea-150-129-148-194.in.ngrok.io/webhook"
//         //     }),

//         // }

//         // const response = await fetch(BaseURL, options);
//         // res.send('200Ok')
//         // console.log('replicate response - ', response.body);
//         // make a request to the get url
//         // const imgUrl = await fetch(response.urls.get,{
//         //     method: "GET",
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Authorization': `Token ${process.env.AuthToken}`
//         //     }
//         // })
//         // console.log(imgUrl);
//         // iska bad ye image url frontend ma send krna or port apna ngrok sa online krde ma request krke check kr lunga
        
        
//         // const image = await bufferImage(Buffer.from(response.body._readableState.buffer));
//         // res.set('Content-Type', 'image/png');
//         // res.status(201).send(image.toString('base64url'));\


//         const replicate = new Replicate({token: process.env.AuthToken});


//         const stableDiffusion = await replicate.models.get('stability-ai/stable-diffusion');
//         const stableDiffusionPrediction = await stableDiffusion.predict({ prompt: "Figma logo"});

//         console.log(stableDiffusionPrediction);
//         res.status(200).send(stableDiffusionPrediction);

//     }
//     catch(err:unknown){
//         res.status(400).send(err);
//     }
   
// })

// app.get('/get-prediction', async ( req, res) => {
//     try {
//         const options: any = {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Token ${process.env.AuthToken}`
//             }
//         }

//         const response = await fetch(BaseURL, options);
//         // const decompress = unzip(response.body);
//         // console.log(util.inspect(decompress, false, null, true));

//         res.status(200).send(response);

//     }catch (err:unknown) {
//         res.status(400).send(err);
//     }
   
// })

// // app.get('/authorize', (req, res) => {
    
// //     res.redirect(`${process.env.URL}/authorize?response_type=code&code_challenge=${challenge}&code_challenge_method=S256&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:5000/callback&scope=SCOPE&state=xyzABC13`)
 
// //     // verifier:  QIkoX7n1RiVtsLjv1ZS64qxypeFpLpHgxm2cg2eMlNA
// //     // challenge:  I9nUfQeu8yDpigggk7VdjZbl7FlU9N1MeiGmfxi7Vqk
// //     // http://localhost:5000/login?code=uBZJrq1ZnASJ7dPU1PAJxWCRSZxyijnkrkN3PgpkMGSJM&state=xyzABC123

// // })

// // app.get('/callback',  async function ( req, res ) {

// //     // if(req.query.code != undefined){
// //     //     console.log(`http://localhost:5000/login?code=${req.query.code}&state=${req.query.state}`)
// //     //     res.redirect(`http://localhost:5000/login?code=${req.query.code}&state=${req.query.state}`);
// //     // }else{

// //     //     console.log('callback');
// //     // }

// //     try{
// //         const code = req.query.code;
// //         console.log(code, 'code')
// //         const url = 'https://snappy-snappy.us.auth0.com/oauth/token'

// //         const options = {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/x-www-form-urlencoded',
// //                 'Authorization': `Token ${code}`
// //             },
// //             body: JSON.stringify({
// //               grant_type: 'authorization_code',
// //               client_id: `${process.env.CLIENT_ID}`,
// //               code_verifier: `${verifier}`,
// //               code: `${code}`,
// //               redirect_uri: 'http://localhost:5000/callback'
// //             })
// //         };
        
// //         const response  = await fetch(url, options);
// //         console.log(response);
        
// //         }catch (err: unknown) {
// //             res.status(400).send(err);
// //         }
// // })

// // app.get('/login', async ( req, res ) => {
// //     try{
// //         const code = req.query.code;
// //         console.log(code, 'code')
// //         const url = 'https://snappy-snappy.us.auth0.com/oauth/token'

// //         const options = {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/x-www-form-urlencoded',
// //                 'Authorization': `Token ${code}`
// //             },
// //             body: JSON.stringify({
// //               grant_type: 'authorization_code',
// //               client_id: `${process.env.CLIENT_ID}`,
// //               code_verifier: `${verifier}`,
// //               code: `${code}`,
// //               redirect_uri: 'http://localhost:5000/callback'
// //             })
// //         };
        
// //         const response  = await fetch(url, options);
// //         console.log(response);
        
// //         }catch (err: unknown) {
// //             res.status(400).send(err);
// //         }
// // })
    
// app.listen(PORT, () => {
//     console.log(`Server is up and running on PORT: ${PORT}`);
// })

// // export {app}

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Replicate from 'replicate-js';
import * as dotenv from 'dotenv';
dotenv.config()

import { imagetobase64 } from './image.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.post('/create', async (req, res) => {
    try {
    
        const inputs = req.body;
        const replicate = new Replicate({token: process.env.AuthToken});
        const stableDiffusion = await replicate.models.get('stability-ai/stable-diffusion');
        const stableDiffusionPrediction = await stableDiffusion.predict(inputs);
        const Base64 = await imagetobase64(stableDiffusionPrediction[0]);

        res.status(200).send(Base64);

    }
    catch(err){
        res.status(400).send(err);
    }
   
})
    
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
})