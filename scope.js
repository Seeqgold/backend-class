a = 20;

{
    a = 10;
}
console.log(a);


class animal {
    #balance //private field
    
    constructor(account, totalBalance) {
        this.account = account;
        this.#balance = totalBalance;
    
    }

    //to access the private field
    getBalance(){
        return this.#balance;
    }

    deposit(amount){

    }
}