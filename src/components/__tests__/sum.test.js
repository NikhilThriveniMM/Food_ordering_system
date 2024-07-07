import { sum } from "../sum";
test("sum function gives the sum of 2 numbers" , () => {
    const res = sum(3,4);
    expect(res).toBe(7);
})