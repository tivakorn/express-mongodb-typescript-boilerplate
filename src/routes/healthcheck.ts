// Libs
import express, { Request, Response } from 'express'
import { Db, ObjectID } from 'mongodb'

const router: any = express.Router()

import MongoConnection from '../libs/mongoConnection'

type memberFootballType = {
    _id: ObjectID
    member_id: number
    nickname: string
    credit: number
    credit_ranking: number
    position_ranking: number
    credit_low_history: number
    credit_max_history: number
    predict_true: number
    predict_wrong: number
    update_time: Date
    created_time: Date
    year: number
}

type objType = {
    success: boolean
    data: []
}
router.get('/', async (req: Request, res: Response) => {

    const result: [] = await getMemberFootball()

    const obj: objType = {
        success : true,
        data : result
    }

    return res.json(obj)

})

const getMemberFootball = async () => MongoConnection(async (db: Db) => await db.collection('football_members').find().limit(10).toArray())

export default router