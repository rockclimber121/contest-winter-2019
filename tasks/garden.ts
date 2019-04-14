/**
 * Find maximum rectanle in matrix with zero filler.
 * O(N * M * log M)
 */
export function findPlace(a) {
    if (!a || !a.length || !a[0].length) {
        return 0;
    }

    const rowsCount = a.length;
    const colsCount = a[0] .length;
    
    for (let i = rowsCount - 1; i >= 0; i--) {
        let cleanCount = 0;

        for (let j = colsCount - 1; j >= 0; j--) {
            const isClean = a[i][j] === 0;

            a[i][j] = isClean ? ++cleanCount : 0;

            if (!isClean) {
                cleanCount = 0;
            }
        }
    }

    let max = 0;
    
    for (let j = 0; j < colsCount - 2; j++) {
        let queue = [];
        let counts = []
       
        for (let i = rowsCount - 1; i >= 0; i--) {
            const cell = a[i][j];

            if (cell > 0) {
                if (queue[cell] === undefined) {
                    let currentIndex = cell;

                    while (queue[currentIndex] === undefined && currentIndex > 2) {
                        counts.push({
                            width: currentIndex,
                            height: 0,
                        });
                        queue[currentIndex--] = counts.length - 1;
                    }
                }

                for (let currentIndex = queue.length - 1; currentIndex > 2; currentIndex--) {
                    if (currentIndex <= cell) {
                        counts[queue[currentIndex]].height++;
                    } else {
                        queue[currentIndex] = undefined;
                    }
                }
            }
        }

        for (let k = 0; k < counts.length; k++) {
            if (counts[k].height > 2 && counts[k].width * counts[k].height > max) {
                max = counts[k].width * counts[k].height;
            }
        }
    }

    return max;
}

