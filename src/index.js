module.exports = function toReadable(number) {

    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

    function numberToWords(n) {
        if (n < 20) {
            return num[n];
        }
        
        if (n < 100) {
            const digit = n % 10;
            return tens[Math.floor(n / 10) - 2] + (digit ? " " + num[digit] : "");
        }
        if (n < 1000) {
            return num[Math.floor(n / 100)] + " hundred" + (n % 100 == 0 ? "" : " " + numberToWords(n % 100));
        }
        return numberToWords(Math.floor(n / 1000)) + " thousand" + (n % 1000 != 0 ? " " + numberToWords(n % 1000) : "");
    }
    return numberToWords(number);
}
