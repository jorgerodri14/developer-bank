import { CurrencyValueObject } from './currency.vo';
import { MovementValueObject } from './movement.vo';

export class Account {
  readonly id: number;
  readonly accountNumber: string;
  readonly movements: MovementValueObject;
  readonly currency: CurrencyValueObject;
}
