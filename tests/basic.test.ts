import { describe, expect, it } from "vitest";
import AwaitHelper from "../src";

describe("AwaitHelper.execute", () => {
   it("should return a promise", () => {
      const result = AwaitHelper.execute<number>(Promise.resolve(1));
      expect(result).toBeInstanceOf(Promise);
      expect(result).resolves.toBe(1);
   });

   it("should throw an error", () => {
      const error = new Error("Test Error");
      const result = AwaitHelper.execute<number>(Promise.reject(error));
      expect(result).toBeInstanceOf(Promise);
      expect(result).rejects.toThrowError(error);
   });
});

describe("AwaitHelper.executeWithRetry", () => {
   it("should return a promise", () => {
      const result = AwaitHelper.executeWithRetry<number>(Promise.resolve(1));
      expect(result).toBeInstanceOf(Promise);
      expect(result).resolves.toBe(1);
   });

   it("should throw an error", () => {
      const error = new Error("Test Error");
      const result = AwaitHelper.executeWithRetry<number>(Promise.reject(error));
      expect(result).toBeInstanceOf(Promise);
      expect(result).rejects.toThrowError(error);
   });
});
