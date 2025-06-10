import { getTopicParams } from "./getTopicParams";

describe("getTopicParams", () => {
  it("should return an empty string when topics array is empty", () => {
    expect(getTopicParams([])).toBe("");
  });

  it("should return correct query string for a single topic", () => {
    expect(getTopicParams(["typescript"])).toBe("topics=typescript");
  });

  it("should return correct query string for multiple topics", () => {
    expect(getTopicParams(["typescript", "javascript", "node"])).toBe(
      "topics=typescript&topics=javascript&topics=node"
    );
  });

  it("should encode special characters in topics", () => {
    expect(getTopicParams(["c++", "react.js"])).toBe(
      "topics=c%2B%2B&topics=react.js"
    );
  });

  it("should handle topics with spaces", () => {
    expect(getTopicParams(["machine learning", "data science"])).toBe(
      "topics=machine+learning&topics=data+science"
    );
  });
});
