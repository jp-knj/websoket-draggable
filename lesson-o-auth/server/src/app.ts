import express, { Request, Response} from "express";
import querystring from "querystring"
import axios from "axios"
import { get} from "lodash"
const app = express();

const GITHUB_CLIENT_ID = "f3f6b47cb120839f2e9c";
const GITHUB_CLIENT_SECRET = "300ca8013b5eadb65db6bb0da5d2af5d4499ea88";

async function getGithubUser({code}: {code: string}){
    const githubToken = await axios
        .post(
            `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
        )
        .then((res) => res.data)

        .catch((error) => {
            throw error;
        });

    const decoded = querystring.parse(githubToken)
    const accessToken = decoded.access_token;

    return axios
        .get("https://api.github.com/user", {
            headers: {Authorization: `${accessToken}`}
        })
        .then((res) => res.data)
        .catch((error) => {
            console.log(`Error getting user from Github`);
            throw error
        })
}

app.get('/api/auth/github', async (req: Request, res: Response) => {
    const code = get(req, "query.code")
    const path = get(req, "query.path", "/")
    if(!code) {
        throw new Error("No Code");
    }
    const githubUser = await getGithubUser({code})
    console.log(githubUser)

    res.redirect(path)
})
app.listen(4000, () => {
    console.log("Server is listening");
})