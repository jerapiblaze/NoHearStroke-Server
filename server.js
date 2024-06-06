import express from 'express';
import Sequelize from 'sequelize';
import qs from 'qs'
import cors from 'cors'
import path from 'path'

import dbConfig from './app/config/dbConfig.js';
import serverConfig from './app/config/serverConfig.js';
import routes from './app/routes/index.js';
import dbInit from './app/data/models/index.js'

const app = express();

async function Main() {
    const db = new Sequelize({
        logging: dbConfig.LOGGING == "false" ? false : true,
        dialect: dbConfig.DIALECT,
        storage: dbConfig.PATH
    })
    db.authenticate()
    await dbInit(db)
    app.listen(serverConfig.PORT, () => {
        console.log('We are live on ' + serverConfig.PORT);
    });
    app.use(cors())
    app.use(express.json({
        limit: '5mb',
        type: ['application/json', 'text/plain']
    }))

    app.set('query parser',
        (str) => qs.parse(str, { /* custom options */ }))

    app.get("/", (req, res) => {
        res.status(200).sendFile("index.html", { root: path.resolve("./www")})
    })

    routes(app, db);
}

Main()