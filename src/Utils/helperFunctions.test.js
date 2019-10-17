import {
    score,
    average
} from './helperFunctions'

test('finds the average of an array', () => {
    expect(average(["2","2","4","4"])).toBe(3)
});

test('displays a score of 10 if the answer is the same as the average', () => {
    expect(score(300, 300)).toBe(10)
});

test('displays a score of 5 if the answer is within 25% of the average', () => {
    expect(score(270, 300)).toBe(5)
});

test('displays a score of 0 if the answer is not within 50% of the average', () => {
    expect(score(10000, 300)).toBe(0)
});


