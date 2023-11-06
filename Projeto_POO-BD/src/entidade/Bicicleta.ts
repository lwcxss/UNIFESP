export default class Bike {
  public id: number | undefined;
  public nome: string | undefined;
  
  getById(id: number): void {
    throw new Error("Method not implemented.");
  }
}