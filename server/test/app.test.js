const request = require("supertest");
const express = require("express");

const app = express();

// Re-create your actual API route for testing or import your app
app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

describe("GET /api/hello", () => {
  it("should respond with Hello World message", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello World!");
  });
});
