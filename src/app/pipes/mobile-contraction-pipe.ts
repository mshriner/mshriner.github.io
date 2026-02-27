import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileContraction',
})
export class MobileContractionPipe implements PipeTransform {
  transform(normalString: string, isDesktop: boolean): string {
    return isDesktop ? normalString : this.contractString(normalString);
  }

  private contractString(str: string): string {
    const words = str.split(' ');
    return words
      .map((word) => {
        switch (word.toLowerCase()) {
          case 'and':
            return '&';
          case 'with':
            return 'w/';
          case 'without':
            return 'w/o';
          case 'january':
            return 'Jan';
          case 'february':
            return 'Feb';
          case 'march':
            return 'Mar';
          case 'april':
            return 'Apr';
          case 'may':
            return 'May';
          case 'june':
            return 'Jun';
          case 'july':
            return 'Jul';
          case 'august':
            return 'Aug';
          case 'september':
            return 'Sep';
          case 'october':
            return 'Oct';
          case 'november':
            return 'Nov';
          case 'december':
            return 'Dec';
          default:
            return word;
        }
      })
      .join(' ');
  }
}
