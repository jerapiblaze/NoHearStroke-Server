import sensor0 from './sensor0.js'

import express from 'express'

export default function (db) {
    let router = express.Router()
    router.get("/index", (req, res) => {
        res.status(200).send("Hello world!")
    })
    router.use("/sensor0", sensor0(db))
    return router
}