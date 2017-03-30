export class Keg {
  constructor(
    public brewName: string,
    public brewBrand: string,
    public price: number,
    public alcoholContent: number,
    public pintsRemaining = 124
  ) { }
}
