jest.mock("../config/db", () => ({ query: jest.fn() }));
jest.mock("../config/db2", () => ({ query: jest.fn() }));

const request = require("supertest");
const app = require("../app");

describe("GET /api/health", () => {
    it("responde 200 con status ok", async () => {
        const res = await request(app).get("/api/health");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: "ok" });
    });
});