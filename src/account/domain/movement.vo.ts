export class MovementValueObject {
  readonly type:
    | 'income'
    | 'withdrawal'
    | 'commissions'
    | 'transfer_out'
    | 'transfer_input';

  readonly quantity: number;
}
