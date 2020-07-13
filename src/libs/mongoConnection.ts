
import { MongoClient, Db } from 'mongodb'

const url: string = 'mongodb.devpantip.com'
const port: number = 27017
const username: string = 'dev'
const password: string = '4XX7rfa>j}'
const dbname: string = 'pantip_month10'

const mongoConnection = async (callback: any, errorCallback?: any) => {

    let connect = null
    errorCallback = null

    try {

        connect = await MongoClient.connect(`mongodb://${username}:${password}@${url}:${port}/${dbname}`, { useNewUrlParser: true, useUnifiedTopology: true })

        return await callback(connect.db(dbname))

    } catch (error) {

        console.log(`Database connection error: ${error}`)

        if (errorCallback !== null) return errorCallback(error)
    } finally {

        if (connect !== null) connect.close()
    }

}

export default mongoConnection
