import request from 'supertest'
import app from "../app";

describe("GET /", (() => {
    test("should return the License object", ( async () => {
        const response = await request(app).get("/licenses")
        expect(response.body.city).toBeDefined()
    }))
}))
