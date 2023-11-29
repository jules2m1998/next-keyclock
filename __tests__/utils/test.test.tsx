import {HttpClient} from "@/utils/HttpClient";

const FAKE_URL = "https://jsonplaceholder.typicode.com/todos/1";

describe("Tester de test", () => {
    let httpclient: HttpClient;
    let headers: any;

    beforeEach(() => {
        headers = { "Content-Type": "application/json" };
        httpclient = new HttpClient(FAKE_URL, headers);
        global.fetch = jest.fn();
    });
    test("should", () => {
        expect(true).toBe(true);
    })
})