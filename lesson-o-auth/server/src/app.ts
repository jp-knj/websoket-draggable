import express, { Request, Response} from "express";

const app = express();

app.listen(4000, () => {
    console.log("Server is listening");
})