{
  class BankAccount {
    readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    myBalance() {
      return this.balance;
    }
  }

  const goribAccount = new BankAccount(123, "Tofayel", 220);

  goribAccount.addDeposit(0);
}
