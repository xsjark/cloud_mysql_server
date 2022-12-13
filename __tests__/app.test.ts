import request from 'supertest'
import app from "../app";

describe("GET /", () => {
  describe("Test the root path", () => {
    it("should respond to the GET method", async () => {
      const response = await request(app).get("/licenses");
      expect(response.statusCode).toBe(200);
    });
  });
  //creates object correctly
  it("should create and object with displayName", async () => {
    const response = await request(app).get("/licenses");
    expect(response.statusCode).toBe(200);
  })
})

