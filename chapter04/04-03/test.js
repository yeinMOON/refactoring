import { assert, expect } from "chai";
import Province from "../04-02/Province.js";
import sampleProvinceData from "../04-02/sampleProvinceData.js";

describe("province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
});
