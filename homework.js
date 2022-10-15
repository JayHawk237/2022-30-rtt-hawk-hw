

class Hamster {    
    constructor(Hamsuke) {
        this.owner = "",
        this.name  = Hamsuke,
        this.price = 15
    }  
    
    wheelRun() { console.log("squeak squeak"); }
    eatFood()  { console.log("nibble nibble"); }
    getPrice() { return this.price; }
}

class Person {
    
    constructor(personName) {
        this.name        = personName,
        this.age         = 0,
        this.height      = 0,
        this.weight      = 0,
        this.mood        = 0,
        this.hamsters    = [],
        this.bankAccount = 0
    }
    
    getName()        { return this.name;       }
    getAge()         { return this.age;        }
    getWeight()      { return this.weight;     }
    greet()          { console.log(this.name); }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount = this.bankAccount + 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood = this.mood + 10;
        this.bankAccount = this.bankAccount - hamster.getPrice();
    }
    
    haveBirthday(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.ageUp();
        } 
    }
    goEat(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.eat();
        }
    }
    goExercise(numOfTimes) {
        for(let count = 1; count <= numOfTimes; count++) {
            this.exercise();
        }
    }
}
const ainz = new Person("Ainz");
ainz.haveBirthday(5);
ainz.goEat(5);
ainz.goExercise(5);
ainz.haveBirthday(9);
const albedo = new Hamster("Albedo");
Satoru.owner = ainz.name;
ainz.buyHamster(Satoru);
ainz.haveBirthday(15);
ainz.goEat(2);
ainz.goExercise(2);
console.log(ainz);

class Dinner {
    constructor(appetizerfood, entreefood, dessertfood) {
        this.appetizer = appetizerfood;
        this.entree    = entreefood;
        this.dessert   = dessertfood;
    }

    addToPlate() {
        const dish = [this.appetizer, this.entree, this.dessert];
        return dish;
    }

}

class Chef {
    makeDinner(appetizerOrdered, entreeOrdered, dessertOrdered) {
        const dinner = new Dinner(appetizerOrdered, entreeOrdered, dessertOrdered);
        console.log(dinner);
        return dinner;
    }
}

const sebas = new Chef();
sebas.makeDinner("chicken", "beef", "salad");
sebas.makeDinner("pancakes", "french toast", "waffles");
sebas.makeDinner("fish", "lomein", "mac and cheese");
console.log(sebas.makeDinner("chicken", "beef", "salad"));
console.log(sebas.makeDinner("pancakes", "french toast", "waffles"));
console.log(sebas.makeDinner("fish", "lomein", "mac and cheese"));