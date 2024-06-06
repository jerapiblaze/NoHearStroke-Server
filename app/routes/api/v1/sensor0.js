import express from 'express';
import fs from 'fs'
import os from 'os'
import path from 'path'
import crypto from 'crypto'
import _ from 'lodash'
import serverConfig from '../../../config/serverConfig.js';

export default (db) => {
    const router = express.Router()
    router.post("/", POST(db))
    router.get("/", GET(db))
    router.get("/config", GET_CONF(db))
    return router
}

function GET(db) {
    return async function (req, res) {
        let deviceid = req.query.did
        // let n = req.query.n == null ? 2 : req.query.n
        let n = parseInt(req.query.n)
        if (isNaN(n)){
            n = null
        }
        if (deviceid == null) {
            res.status(404).send()
            return
        }
        let data = await db.models.sensor0.findAll({
            where: {
                deviceid: deviceid
            },
            limit: n,
            order: [['createdAt', 'DESC']]
        })
        res.status(200).send(data)
    }
}

function POST(db) {
    return async function (req, res) {
        if (req.headers.token != serverConfig.SERVER_SECRET){
            res.status(403).send()
            return
        }
        let deviceid = req.body.did
        if (deviceid == null){
            res.status(404).send()
            return
        }
        let t = req.body.t
        let h = req.body.h
        let hi = req.body.hi
        let record = {
            deviceid: String(deviceid).trim(),
            t: t,
            h: h,
            hi: hi
        }
        await db.models.sensor0.create(record)
        res.status(200).send()
    }
}

function GET_CONF(db){
    return async function (req, res) {

    }
}