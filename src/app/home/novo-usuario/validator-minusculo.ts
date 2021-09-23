import { AbstractControl } from '@angular/forms';

export const ValidatorMinusculo = (control: AbstractControl) => {
  const valor = String(control.value);

  if (valor !== valor.toLowerCase()) {
    return { minusculo: true };
  }
  return null;
};
