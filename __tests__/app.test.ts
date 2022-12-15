import request from 'supertest'
import app from "../app";

describe("GET /", () => {
  it("should respond to the GET method", async () => {
    const response = await request(app).get("/licenses");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /", () => {
  it("response has createLicense object", async () => {
    const response = await request(app).post("/licenses").send({
      owner: {
        email: "user01@example.com",
        displayName: "user01"
      },
      city: "TENA",
    })
    return expect(response.body).toMatchObject({
      owner: {
        email: "user01@example.com",
        displayName: "user01"
      },
      city: "TENA",
    })
  });
});

