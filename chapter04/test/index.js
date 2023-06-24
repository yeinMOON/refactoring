import { expect } from "chai";
import Province from "../Province.js";
import sampleProvinceData from "../sampleProvinceData.js";

describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).equal(5);
  });

  it("profit", () => {
    expect(asia.profit).equal(230);
  });
});
