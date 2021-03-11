module.exports = function toReadable(number) {

   
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        if (number == 0) return "zero";
        else return convert_millions(number);

    function convert_millions(number) {
        if (number >= 1000000) {
            
            let result = convert_millions(Math.floor(number / 1000000)) + " million " +      convert_thousands(number % 1000000);
            // делим по модулю для получения остатка от деления (260 % 100 = 60) и передаем далее это значение в следующую функцию 
            return result.replace(/\s+/g, ' ').trim();
            // используем regexp для удаления лишних пробелов конце итоговой строки
            
        } else {
           return convert_thousands(number);
        }
    }

    function convert_thousands(number) {
      if (number >= 1000) {
    
        let result = convert_hundreds(Math.floor(number / 1000)) + " thousand " + convert_hundreds(number % 1000);
        return result.replace(/\s+/g, ' ').trim();
      } else {
        return convert_hundreds(number);
      }
    }

    function convert_hundreds(number) {
      if (number > 99) {

        let result = ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
        return result.replace(/\s+/g, ' ').trim();

      } else {
        return convert_tens(number);
      }
    }

    function convert_tens(number) {
      if (number < 10) {
          let result = ones[number];
          return result.replace(/\s+/g, ' ').trim();
      } else if (number >= 10 && number < 20) {
          let result = teens[number - 10];  
          return result.replace(/\s+/g, ' ').trim();   
      } 
      else {
          let result = tens[Math.floor(number / 10)] + " " + ones[number % 10];
        return result.replace(/\s+/g, ' ').trim();
      }
    }

}
