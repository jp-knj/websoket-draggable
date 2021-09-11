import express, { Request, Response} from "express";
import { get} from "lodash"
const app = express();

app.get('/api/auth/github', (req: Request, res: Response) => {
    const code = get(req, "query.code")
    const path = get(req, "query.path", "/")
    if(!code) {
        throw new Error("No Code");
    }
})
app.listen(4000, () => {
    console.log("Server is listening");
})