import request from 'supertest'
import app from "../app";

describe("Test database connection", (() => {
    test("database should connect and return undefined", ( async () => {
        const response = await request(app).post("/licenses")
        expect(response.body).toMatchObject({
            
        })
    }))
}))
