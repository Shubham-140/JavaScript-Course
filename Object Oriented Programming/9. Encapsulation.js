// Private fields (#) were introduced in ES2022
// They are TRULY private — cannot be accessed outside the class

class BankAccount {
    #balance;        // private field declaration
    #pin;            // private field declaration
    owner;           // public field

    constructor(owner, balance, pin){
        this.owner = owner;
        this.#balance = balance;
        this.#pin = pin;
    }

    // public method to access private field (controlled access)
    getBalance(pin){
        if(pin !== this.#pin){
            console.log("Wrong PIN!");
            return;
        }
        return this.#balance;
    }

    deposit(amount){
        if(amount <= 0){
            console.log("Invalid amount!");
            return;
        }
        this.#balance += amount;
        console.log(`Deposited ${amount}, new balance: ${this.#balance}`);
    }

    withdraw(amount, pin){
        if(pin !== this.#pin){
            console.log("Wrong PIN!");
            return;
        }
        if(amount > this.#balance){
            console.log("Insufficient balance!");
            return;
        }
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}, new balance: ${this.#balance}`);
    }
}

const acc = new BankAccount("Shubham", 10000, 1234);

console.log(acc.owner);       // "Shubham" ✅ public field
console.log(acc.#balance);    // ❌ SyntaxError — truly private!
console.log(acc.#pin);        // ❌ SyntaxError — truly private!

acc.getBalance(1234);         // 10000 ✅ correct pin
acc.getBalance(9999);         // "Wrong PIN!" ✅
acc.deposit(5000);            // "Deposited 5000, new balance: 15000" ✅
acc.withdraw(2000, 1234);     // "Withdrawn 2000, new balance: 13000" ✅
acc.withdraw(2000, 9999);     // "Wrong PIN!" ✅


// _ vs # — key difference:
// _balance → convention only, still accessible outside (acc._balance works!)
// #balance → truly private, SyntaxError if accessed outside class

// Encapsulation = bundling data (#balance, #pin) + methods (deposit, withdraw)
// and hiding internal details from outside world
// This is one of the 4 pillars of OOP ✅