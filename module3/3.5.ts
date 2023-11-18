{
  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    myBalance() {
      return this._balance;
    }
  }


  class StudentAccount extends BankAccount {
    test(){
        this._balance
    }
  } 

  const goribAccount = new BankAccount(123, "Tofayel", 220);

  goribAccount.addDeposit(0);
}
