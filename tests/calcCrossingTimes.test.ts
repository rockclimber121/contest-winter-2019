import { calcCrossingTimes } from "../tasks/crossingTimes";

describe("crossing times", () => {
    it("empty", () => {
        calcCrossingTimes([]);
        // Result doesn't matter. It must be without errors.
    });

    it("single", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}]);
        expect(result).toEqual({start: 0, end: 1});
    });

    it("two not crossing", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 2, end: 3}]);
        expect(result).toEqual({start: 0, end: 1});
    });

    it("two crossing with zero time", () => {
        const result = calcCrossingTimes([{start: 0, end: 0}, {start: 0, end: 1}]);
        expect(result).toEqual({start: 0, end: 0});
    });

    it("two crossing with same time", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 0, end: 1}]);
        expect(result).toEqual({start: 0, end: 1});
    });

    it("two crossing with equal start and end", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 1, end: 2}]);
        expect(result).toEqual({start: 1, end: 1});
    });

    it("two crossing", () => {
        const result = calcCrossingTimes([{start: 0, end: 3}, {start: 2, end: 4}]);
        expect(result).toEqual({start: 2, end: 3});
    });

    it("three not crossing", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 2, end: 3}, {start: 4, end: 5}]);
        expect(result).toEqual({start: 0, end: 1});
    });

    it("three crossing", () => {
        const result = calcCrossingTimes([{start: 0, end: 5}, {start: 2, end: 4}, {start: 4, end: 6}]);
        expect(result).toEqual({start: 4, end: 4});
    });

    it("2 of 3 crossing (2 couples)", () => {
        const result = calcCrossingTimes([{start: 0, end: 5}, {start: 2, end: 3}, {start: 4, end: 6}]);
        expect(result).toEqual({start: 2, end: 3});
    });

    it("2 of 3 crossing (1 couple and single)", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 2, end: 5}, {start: 3, end: 6}]);
        expect(result).toEqual({start: 3, end: 5});
    });

    it("2 of 4 crossing (2 couples)", () => {
        const result = calcCrossingTimes([{start: 0, end: 3}, {start: 1, end: 4}, {start: 5, end: 6}, {start: 5, end: 6}]);
        expect(result).toEqual({start: 1, end: 3});
    });

    it("2 of 4 crossing (chain)", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 1, end: 2}, {start: 2, end: 3}, {start: 3, end: 4}]);
        expect(result).toEqual({start: 1, end: 1});
    });

    it("3 of 4 crossing", () => {
        const result = calcCrossingTimes([{start: 0, end: 7}, {start: 1, end: 6}, {start: 2, end: 8}, {start: 8, end: 9}]);
        expect(result).toEqual({start: 2, end: 6});
    });

    it("deep nested", () => {
        const result = calcCrossingTimes([{start: 0, end: 10}, {start: 1, end: 9}, {start: 2, end: 8}, {start: 3, end: 7}, {start: 4, end: 6}]);
        expect(result).toEqual({start: 4, end: 6});
    });

    it("two chains. Second better", () => {
        const result = calcCrossingTimes([{start: 0, end: 1}, {start: 1, end: 2}, {start: 30, end: 40}, {start: 35, end: 45}, {start: 40, end: 60}]);
        expect(result).toEqual({start: 40, end: 40});
    });

    it("nested chain versus simple chain (nested better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 10}, {start: 1, end: 2}, {start: 2, end: 3}, {start: 10, end: 12}]);
        expect(result).toEqual({start: 2, end: 2});
    });

    it("nested chain versus simple chain (simple better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 10}, {start: 1, end: 2}, {start: 9, end: 12}, {start: 10, end: 12}]);
        expect(result).toEqual({start: 10, end: 10});
    });

    it("two separated groups (first better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 3}, {start: 1, end: 2}, {start: 9, end: 12}, {start: 10, end: 12}]);
        expect(result).toEqual({start: 1, end: 2});
    });

    it("two separated groups (second better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 3}, {start: 1, end: 2}, {start: 3, end: 4}, {start: 9, end: 12}, {start: 10, end: 12}, {start: 11, end: 120}]);
        expect(result).toEqual({start: 11, end: 12});
    });

    it("chain half nested (first half better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 10}, {start: 1, end: 8}, {start: 8, end: 120}, {start: 11, end: 17}, {start: 11, end: 120}]);
        expect(result).toEqual({start: 8, end: 8});
    });

    it("chain half nested (second half better)", () => {
        const result = calcCrossingTimes([{start: 0, end: 10}, {start: 1, end: 8}, {start: 8, end: 120}, {start: 11, end: 17}, {start: 11, end: 120}, {start: 11, end: 13}]);
        expect(result).toEqual({start: 11, end: 13});
    });

    it("ends not sorted", () => {
        const result = calcCrossingTimes([{start: 0, end: 120}, {start: 0, end: 6}, {start: 0, end: 3}, {start: 6, end: 12}, {start: 10, end: 120}, {start: 10, end: 13}]);
        expect(result).toEqual({start: 10, end: 12});
    });
});