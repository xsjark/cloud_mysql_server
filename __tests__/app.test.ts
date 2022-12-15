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
      // country: "ECUADOR",
      // region: "NAPO",
      city: "TENA",
      // product: {
      //   productId: "licenseproductid1234"
      // },
      // features: [
      //   {
      //     productId: "productid01"
      //   },
      //   {
      //     productId: "productid02"
      //   },
      //   {
      //     productId: "productid03",
      //     quantity: 30
      //   }
      // ],
      // payment_method: "cash",

      // total_amount: {
      //   currency: "USD"
      // }
    })
    return expect(response.body).toMatchObject({
      owner: {
        email: "user01@example.com",
        displayName: "user01"
      },
      // country: "ECUADOR",
      // region: "NAPO",
      city: "TENA",
      // product: {
      //   productId: "licenseproductid1234"
      // },
      // features: [
      //   {
      //     productId: "productid01"
      //   },
      //   {
      //     productId: "productid02"
      //   },
      //   {
      //     productId: "productid03",
      //     quantity: 30
      //   }
      // ],
      // payment_method: "cash",

      // total_amount: {
      //   currency: "USD"
      // }
    })
  });
});

