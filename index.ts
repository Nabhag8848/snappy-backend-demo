import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/', ( req, res ) => {

    try {
        res.status(200).send('Health Check');
    }catch (err: unknown){
        console.error(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
})
