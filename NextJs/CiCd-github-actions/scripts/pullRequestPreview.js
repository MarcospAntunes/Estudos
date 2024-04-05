

import { execSync } from "child_process";

const command = "yarn deploy:stage";
const output = execSync(command, { encoding: "utf-8" });
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines(outputLines.length - 1);
console.log("You can see the preview on: ", DEPLOY_URL);

const GH_COMMENT = `
- Deploy URL: [${vercelUrl}](${vercelUrl})
`;
const { GITHUB_PR_NUMBER, GITHUB_REPOSITORY, GITHUB_TOKEN } = process.env;

const defaultHeaders = {};

defaultHeaders["authorization"] = `token ${GITHUB_TOKEN}`;
defaultHeaders["accept"] = "application/vnd.github.v3+json; application/vnd.github.antiope-preview+json";
defaultHeaders["content-type"] = "application/json";

fetch(
    `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${GITHUB_PR_NUMBER}/comments`,
    {
        headers: defaultHeaders,
        method: "POST",
        body: JSON.stringify({
            body: GH_COMMENT,
        }),
    }
)
    .then((res) => {
        if(res.ok) return res.json();
        throw new Error(res.statusText);
    })
    .catch((err) => {
        console.log("ERROR");
        console.log(err);
    })
    .finally(() => {
        console.log("END")
    })
