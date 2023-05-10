export function applyFee(value: number, fee: number): number {
    const discount = (value * fee) / 100;
    const result = value - discount;
    return result;
  }