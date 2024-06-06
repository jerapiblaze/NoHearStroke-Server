import config from "../../config/dbConfig.js"

import sensor0 from "./sensor0.js"

export default async (db) => {
    let sensor0_table = db.define(sensor0.tableName, sensor0.table)
    // custom_urlid.belongsTo(url_info)
    // console.log(db.models)
    // await db.sync({ force: true })
    let force = config.OVERWRITE == "true" ? true : false
    await db.sync({force: force})
}