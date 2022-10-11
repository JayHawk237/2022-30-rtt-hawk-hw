// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances


//----------------------------------------------------------------------------------------------------------------------------------------
// class Cat {
//     constructor(catsName, catseyes, catsLegs, catsTail, catsColor, catsTag){
//         this.name = catsName
//         this.eyes = catseyes
//         this.legs = catsLegs
//         this.tail = catsTail || true
//         this.color = catsColor
//         this.tag = catsTag

//     }
    
//     redd1() {
//         console.log("meow")
//     }

//     redd2() {
//         console.log("I'm supposed to say meow")
//     }

//     redd3() {
//         console.log("I will never say meow again")
//     }

//     patch1() {
//         console.log("I wish I was a dog...")
//     }

//     patch2() {
//         console.log("Things like this never happens to dogs...")
//     }

//     patch3(){
//         console.log("Thank god I'm not a dog, being a cat is the best!")
//     }

// }

// let redd = new Cat("Redd", 2, 4, true, "Red", "Housecat")
// console.log(redd)
//     redd.redd1()
//     redd.eyes = 1
//     redd.color = "Dirty Red"
//     console.log(redd)
//     redd.redd2()
//     redd.tail = false
//     redd.tag = "Alley Cat"
//     console.log(redd)
//     redd.redd3()
    

//     let patch = new Cat("Patch", 1, 4, true, "Black and White", "Stray Cat")
//     console.log(patch)
//     patch.patch1()
//     patch.legs = 3
//     patch.tail = false
//     patch.tag = "Shelter Cat"
//     console.log(patch)
//     patch.patch2()
//     patch.name = "Tripod"
//     patch.tag = "House Cat"
//     console.log(patch)
//     patch.patch3()






//----------------------------------------------------------------------------------------------------------------------------------------

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

//----------------------------------------------------------------------------------------------------------------------------------------

class Crews {
    constructor(crewName, captianName, shipName, wackyName, terrian) {
        
        this.ship = shipName;
        this.crew = crewName;
        this.wacky = wackyName;
        this.captian = captianName;
        this.terrian = terrian;
        this.shmates = ["Zoro", "Nami", "Usopp", "Sanji","Robin"]
        this.olmates = ["Jim Hawking", "Melfina", "Aisha Clanclan", "Suzuka"]
        this.glmates = ["Yoko", "Viral", "Leeron", "Dayakka", "Tetukan"]



    }

    pking() {
        console.log("I'm going to be king of the pirates!")
    }
    luffy() {
        console.log("If I give up now, I'm going to regret it.")
    }

    starwind() {
        console.log("It wouldn't be any fun otherwise! Let's do it!")
    }
    gene() {
        console.log("Believe in yourself and create your own destiny. Don't fear fate.")
    }

    gurren() {
        console.log("Believe In The Kamina That Believe In You.")
    }
    simone() {
        console.log("Sorry, There Are Just Some Things A Man Has To See.")
    }

}


// let strawhats = new Crews("Straw Hats ", "Monkey D Luffy ", "1000 Sunnys ", "Tony Tony Chopper ", "Red Line" )

// console.log(strawhats)
// strawhats.pking()

// strawhats.ship = "Going Merry"
// strawhats.wacky = "God Usopp"
// strawhats.terrian = "Grandline"
// console.log(strawhats)
// strawhats.luffy()


// let outlaw = new Crews("Outlaws ", "Gene Starwind ", "XGP15A-II ", "Aisha Clanclan ", "Space " )

// console.log(outlaw)
// outlaw.starwind()

// outlaw.ship = "Grappler Ship"
// outlaw.terrian = "Planet Sentinel III"
// console.log(outlaw)
// outlaw.gene()


// let gurrenlagann = new Crews("Team Dai-Gurren ", "Simon ", "Dai-Gunzan ", "Boota ", "Earth " )

// console.log(gurrenlagann)
// gurrenlagann.gurren()

// gurrenlagann.captian = "Kamina"
// gurrenlagann.ship = "Lagann"
// gurrenlagann.terrian = "Kamina City"
// console.log(gurrenlagann) 
// gurrenlagann.simone()

let crewmates = [{
    name: ["Zoro", "Nami", "Usopp", "Sanji","Robin"]
  
  },
  {
    name: ["Jim Hawking", "Melfina", "Aisha Clanclan", "Suzuka"]
    
  },
  {
    name: ["Yoko", "Viral", "Leeron", "Dayakka", "Tetukan"]
  }
]

crewmates.forEach(myFunction);

function crewmates(name) {
  for (let ) {
    console.log()
  }
}