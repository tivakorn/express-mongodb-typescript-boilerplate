
import { MongoClient, Db } from 'mongodb'

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
