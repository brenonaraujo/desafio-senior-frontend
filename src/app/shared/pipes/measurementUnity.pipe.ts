import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transforma o codigo da unidade em valor literal legivel
 * Usage:
 *   unityCode | measurementUnityPipe
 * Example:
 *   {{ 'lt' | measurementUnityPipe }}
 *   formats to: 'Litros'
*/
@Pipe({ name: 'measurementUnityPipe' })
export class MeasurementUnityPipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'lt':
                return 'Litros';
                break;
            case 'kg':
                return 'Kilogramas';
            case 'un':
                return 'unidades';
            default:
                break;
        }
    }
}
