import { CurrencyValueObject } from './currency.vo';
import { Movement } from './movement';

export class Account {
  readonly id: number;

  readonly accountNumber: string;

  readonly movements: Movement;

  readonly currency: CurrencyValueObject;
}
