import { execSync } from "child_process";

const command = "yarn deploy:stage";
const output = execSync(command, { encoding: "utf-8" });
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines(outputLines.length - 1);

console.log("You can see the preview on: ", DEPLOY_URL);

