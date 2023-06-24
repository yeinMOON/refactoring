import { expect } from "chai";
import Province from "../Province.js";
import sampleProvinceData from "../sampleProvinceData.js";

describe("province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
});

describe("profit", () => {
  const asia = new Province(sampleProvinceData());
  expect(asia.profit).equal(230);
});
