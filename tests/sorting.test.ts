import { sort } from "../tasks/sorting";

describe("sorting", () => {
    it("empty", () => {
        const result = sort([], []);
        expect(result.length).toEqual(0);
    });

    it("empty first", () => {
        const result = sort([], [1, 2 ,3]);
        expect(result).toEqual([3, 2, 1]);
    });

    it("empty second", () => {
        const result = sort([1, 2, 3], []);
        expect(result).toEqual([3, 2, 1]);
    });

    it("same arrays", () => {
        const result = sort([1, 2, 3], [1, 2, 3]);
        expect(result).toEqual([3, 3, 2, 2, 1, 1]);
    });

    it("same numbers", () => {
        const result = sort([7, 7, 7], [7, 7, 7]);
        expect(result).toEqual([7, 7, 7, 7, 7, 7]);
    });

    it("negative numbers", () => {
        const result = sort([-7, -6, -5], [-6, -5, -4]);
        expect(result).toEqual([-4, -5, -5, -6, -6, -7]);
    });

    it("with zero", () => {
        const result = sort([-1, 0, 1], [-2, -1, 0]);
        expect(result).toEqual([1, 0, 0, -1, -1, -2]);
    });

    it("with skipped numbers", () => {
        const result = sort([-127, 12, 290], [38, 1000, 9999]);
        expect(result).toEqual([9999, 1000, 290, 38, 12, -127]);
    });

    it("same single arrays", () => {
        const result = sort([1], [1]);
        expect(result).toEqual([1, 1]);
    });

    it("different single arrays", () => {
        const result = sort([1], [2]);
        expect(result).toEqual([2, 1]);
    });

    it("same number in one array", () => {
        const result = sort([1, 2, 6], [2, 2, 2, 2]);
        expect(result).toEqual([6, 2, 2, 2, 2, 2, 1]);
    });

    it("same number in one position", () => {
        const result = sort([-1, 2, 2, 6], [-2, 2, 2, 2]);
        expect(result).toEqual([6, 2, 2, 2, 2, 2, -1, -2]);
    });

    it("arrays with cross intervals", () => {
        const result = sort([-1, 1, 3, 5], [0, 2, 4, 6]);
        expect(result).toEqual([6, 5, 4, 3, 2, 1, 0, -1]);
    });
});