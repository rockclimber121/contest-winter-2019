import { findPlace } from "../tasks/garden";

describe("findPlace", () => {
    it("empty", () => {
        const result = findPlace([]);
        expect(result).toEqual(0);
    });

    it("one cell", () => {
        const result = findPlace([[1]]);
        expect(result).toEqual(0);
    });

    it("2x2", () => {
        const result = findPlace([
            [1, 0],
            [1, 0],
        ]);
        expect(result).toEqual(0);
    });

    it("3x3 no result", () => {
        const result = findPlace([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]);
        expect(result).toEqual(0);
    });

    it("3x3 full clean", () => {
        const result = findPlace([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]);
        expect(result).toEqual(9);
    });

    it("4x4 - 2 rects 3x3", () => {
        const result = findPlace([
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0],
        ]);
        expect(result).toEqual(9);
    });

    it("4x4 - 2 rects 3x4", () => {
        const result = findPlace([
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual(12);
    });

    it("4x4 - 3x4", () => {
        const result = findPlace([
            [1, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        expect(result).toEqual(12);
    });

    it("4x5 - 3x3", () => {
        const result = findPlace([
            [1, 0, 0, 1],
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 1],
        ]);
        expect(result).toEqual(9);
    });

    it("5x4 - 3x3", () => {
        const result = findPlace([
            [1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
        ]);
        expect(result).toEqual(9);
    });

    it("5x5 - 3x3 - center", () => {
        const result = findPlace([
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ]);
        expect(result).toEqual(9);
    });

    it("5x5 - 3x5 - center", () => {
        const result = findPlace([
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
        ]);
        expect(result).toEqual(15);
    });

    it("5x5 - 3x5 - cross", () => {
        const result = findPlace([
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1],
        ]);
        expect(result).toEqual(15);
    });

    it("5x5 - 3x5", () => {
        const result = findPlace([
            [1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0],
        ]);
        expect(result).toEqual(15);
    });

    it("5x5 - 3x4 - cross", () => {
        const result = findPlace([
            [0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1],
        ]);
        expect(result).toEqual(12);
    });

    it("toths", () => {
        const result = findPlace([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
        ]);
        expect(result).toEqual(18);
    });

    it("stairs", () => {
        const result = findPlace([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]);
        expect(result).toEqual(24);
    });

    it("broken toths", () => {
        const result = findPlace([
            [0, 0, 1, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
        ]);
        expect(result).toEqual(20);
    });

    it("rects", () => {
        const result = findPlace([
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ]);
        expect(result).toEqual(36);
    });
});