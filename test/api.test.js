const request = require("supertest");
const app = require("../index");

describe("API Tests", () => {
  it("GET / endpoint works", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "healthy" });
  });
});
