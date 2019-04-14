/**
 * Find minimal time with max crossing.
 * Bruteforce with dichotomy.
 * worst O(2N * log2N) or O(N * logN) fom sorting objects with merge sort.
 */
export function calcCrossingTimes(times) {
    const a = new Array(2*times.length);
    
    for (let i = 1; i <= times.length; i++) {
        a[2*i - 1] = {
            value: times[i - 1].start,
            isStart: true,
        };
        a[2*i] = {
            value: times[i - 1].end,
            isStart: false,
        };
    }

    a.sort((x, y) => {
        if (x.value === y.value) {
            return x.isStart === y.isStart 
                ? 0
                : (x.isStart ? -1 : 1);
        } else {
            return x.value > y.value
                ? 1
                : -1;
        }
    });

    let crossing = 0;
    let i = 0;
    let maxCrossing = 0;

    while(i < 2*times.length) {
        if(a[i].isStart) {
            crossing++;
            maxCrossing = Math.max(maxCrossing, crossing);
        } else {
            crossing--;
        }

        i++;
    }

    if (maxCrossing === 0) {
        return null;
    }

    i = 0;
    let start;
    let end;
    
    while(i < 2*times.length) {
        if (a[i].isStart) {
            crossing++;

            if (crossing === maxCrossing && start === undefined) {
                start = a[i].value;
            }
        } else {
            if (crossing === maxCrossing && (end === undefined)) {
                end = a[i].value
            }

            crossing--;
        }

        i++;
    }

    return {
        start,
        end
    };
}

/**
 * Find minimal time with max crossing.
 * Retrospective bruteforce. Stop looking for crossing if we have better choise.
 * 1 + 2 + 3 + ... + N = (N * (N +1))/2
 * worst O( (N * (N +1))/2 ) or O(N^2)
 */
export function calcCrossingTimesRetro(times) {
    if (times.length === 0) {
        return null;
    }
    
    let maxCrossing = 1;
    let start = times[0].start;
    let end = times[0].end;

    for (let i = 1; i < times.length; i++) {
        let crossing = i + 1;
        let j = i - 1;
        let min = times[i].end;

        while (crossing > maxCrossing && j >= 0) {
            if (times[i].start > times[j].end) {
                crossing--;
            } else if (times[j].end < min) {
                min = times[j].end;
            }

            j--;
        }

        if (crossing > maxCrossing) {
            maxCrossing = crossing;
            start = times[i].start;
            end = min;
        }
    }

    return {
        start,
        end,
    };
}

