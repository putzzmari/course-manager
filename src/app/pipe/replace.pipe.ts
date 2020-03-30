import { Pipe, PipeTransform } from '@angular/core';

//criando um pipe

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}