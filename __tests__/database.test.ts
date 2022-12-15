import db from "../config/database"

describe("Test database connection", (() => {
    test("database should connect and return undefined", (() => {
        const x = db.authenticate();
        return expect(x).resolves.toBeUndefined()
    }))
}))
