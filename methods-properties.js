
class Governor {
    
    static job = "lawyer"
    static personality = "charismatic"

    static overspend() { return "The poor is stealing your money!"}
    static fire() { return "It was the pandemic"}
}
console.log("GOVERNOR")
console.log(Governor.job)
console.log(Governor.personality)
console.log(Governor.overspend())
console.log(Governor.fire())
//--------------------------------------------------------------------------------------------------------------------

class Person {
        constructor(personName, personSex, personAge) {
        this.name = personName
        this.sex  = personSex
        this.age = personAge
    }

    
    run() { console.log(`Hi, I'm ${this.name}. Watch how fast I can run`)}
    book()   { console.log(`I am now at the ${this.sex}'s book club!`)}
    fun()  { console.log(`I'm ${this.age} and I going to have some fun!`)}
}
class PostalWorker extends Person {
    youGotMail() { console.log(`Here I am with your mail.`)}
    sendYourMail()  { console.log(`Here let me take that mail for you`)}
}
class Chef extends Person {
    ironchef() { console.log(`I beat Bobby Flay!`)}
    youMuppet() { console.log(`No, chef Ramsey.. I am not a muppet!`)}
}

const postalWorkerRick = new PostalWorker("Rick", "male", 70)
const postalWorkerMorty = new PostalWorker("Morty", "male", 14)
const chefBob = new Chef("Bob", "male", 46)
const chefLouise = new Chef("Louise", "female", 9)

console.log(postalWorkerRick)
console.log(postalWorkerMorty)
console.log(chefBob)
console.log(chefLouise)


postalWorkerRick.run()
postalWorkerRick.book()
postalWorkerRick.fun()
postalWorkerRick.youGotMail()
postalWorkerRick.sendYourMail()

postalWorkerMorty.run();
postalWorkerMorty.book();
postalWorkerMorty.fun();
postalWorkerMorty.youGotMail();
postalWorkerMorty.sendYourMail();

chefBob.run()
chefBob.fun()
chefBob.book()
chefBob.ironchef()
chefBob.youMuppet()

chefLouise.fun()
chefLouise.run()
chefLouise.book()
chefLouise.ironchef()
chefLouise.youMuppet()
