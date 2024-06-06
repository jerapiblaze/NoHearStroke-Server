import v1 from './api/v1/index.js'

export default function (app, db) {
    app.use("/api/v1", v1(db))
}