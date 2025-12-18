import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export const db = mysql.createPool({
    host: process.env.HOST,
    user:process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


export const testDb = async()=>{

    try {
        const connection = await db.getConnection();
        console.log('connected to mysql database');
        connection.release()

    } catch (error) {
        console.log('Database connection error:', error.message)
    }
}
