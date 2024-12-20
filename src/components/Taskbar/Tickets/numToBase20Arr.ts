export default function numToBase20Arr(num: number): number[] {
    if (num == 0) {
        return [0];
    }
    const res: number[] = [];
    while (num > 0) {
        const val = num % 20;
        num = Math.floor(num / 20);
        res.push(val);
    }
    return res.reverse();
}
