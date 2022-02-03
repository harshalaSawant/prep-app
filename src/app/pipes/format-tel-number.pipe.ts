import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertTelNumber',
  pure: false
})

export class ConvertTelNumberPipe implements PipeTransform {
  /*the 1-digit country code
          a 3-digit area code and a 7-digit telephone number. 
          The 7-digit telephone number is further comprised of a 3-digit central office or exchange code 
            and a 4-digit subscriber number.
        */
  transform(value: string): string {
    let formattedNum = '+1-';
    console.log(value)
    if (value.length >= 3) {
      let sec1 = value.substring(0, 3);
      let sec2 = value.substring(3, 6);
      let sec3 = value.length <= 10 ? value.substring(6) : value.substring(6, 10);
      
      formattedNum += `${sec1 + '-' + sec2 + '-' + sec3}`;
    }
    return formattedNum;
  }
}