import { CurrencyValueObject } from './currency.vo';

export enum TypeMovement {
  INCOME = 'INCOME',
  WITHDRAWAL = 'WITHDRAWAL',
  COMMISSIONS = 'COMMISSIONS',
  TRANSFER_OUT = 'TRANSFER_OUT',
  TRANSFER_IN = 'TRANSFER_IN',
}

export class Movement {
  readonly id: number;

  readonly type: TypeMovement;

  readonly currency: CurrencyValueObject;
}
