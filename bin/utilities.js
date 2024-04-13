let readline = require('readline');

let confirmAction = (msg, callback) => {
    let confirm = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    confirm.question(msg, function (input) {
        confirm.close();
        input = input.trim();
        callback(/^y|yes|ok|true$/i.test(input));
    })
}

let getDefaultDependencies = (framework) => {
    switch (framework) {
        case "express":
            return ["dotenv", "cookie-parser", "morgan", "express", "cors", "helmet", "winston", "joi"];
            break;
        case "react": 
            return ["@testing-library/jest-dom", "@testing-library/react", "@testing-library/user-event", "react", "react-dom", "react-scripts", "react-router-dom"];
    }
}

let SUPPORTED_DBS = ["mongo", "postgres", "mysql", "mssql", "sqlite", "maria"];
let SUPPORTED_MAIL_CLIENTS = ["nodemailer"];
let SUPPORT_AUTH_PROVIDERS = ["jsonwebtoken"];
let BACKEND_APPS = ["express", "hapi", "next"];

module.exports = {
    confirmAction: confirmAction,
    SUPPORTED_DBS: SUPPORTED_DBS,
    SUPPORTED_MAIL_CLIENTS: SUPPORTED_MAIL_CLIENTS,
    SUPPORT_AUTH_PROVIDERS: SUPPORT_AUTH_PROVIDERS,
    getDefaultDependencies: getDefaultDependencies,
    BACKEND_APPS: BACKEND_APPS
}