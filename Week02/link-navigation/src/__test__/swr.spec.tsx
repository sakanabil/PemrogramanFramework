import { fetcher } from "@/utils/swr/fetcher";

describe("SWR Fetcher", () => {
  it("should be a function", () => {
    expect(typeof fetcher).toBe("function");
  });

  it("exports fetcher utility", () => {
    expect(fetcher).toBeDefined();
  });

  it("fetcher is callable", () => {
    expect(() => {
      fetcher("");
    }).toThrow();
  });
});
