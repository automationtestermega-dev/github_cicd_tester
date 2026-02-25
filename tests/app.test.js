const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 200 status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  it("should contain Git button", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("Git");
  });

  it("should contain GitHub button", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("GitHub");
  });

  it("should contain GitHub Actions button", async () => {
    const res = await request(app).get("/");
    expect(res.text).toContain("GitHub Actions");
  });
});