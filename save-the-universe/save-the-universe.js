class battleshipGalactica{
    constructor(hull, firepower,accuracy){
        this.hull=hull,
        this.firepower=firepower
        this.accuracy=accuracy
    }

}
const theCylons= {
    name: "The Cylons",
    hull:20,
    firepower:5,
    accuracy:0.7
}

const galactica = []
for(let counter = 0; counter < 6; counter++){
    galactica.push(new battleshipGalactica (Math.round(Math.random()*(6-3)+3), Math.round(Math.random()*(4-2)+2), parseFloat(Number(Math.random()*(0.8-0.6)+0.6).toFixed(1))))
}
console.log("===========================================================================================")
console.log(theCylons);
console.log("Kill the Frakin Cylons!!");
console.log(galactica);
console.log("===========================================================================================")

let i=0
let adamaLives = galactica[i].hull>0

function fightStart (){  

        let theCylonsAlive = theCylons.hull>0;
                if (theCylonsAlive){
            
            if(Math.random() < theCylons.accuracy ){
                galactica[i].hull -= theCylons.firepower
            }else{
                console.log(`Frak!! Load new firing solution`);
            }
            
        }else{
        return console.log(`Galactica Defeated, the last of the 12 colonies is gone...`); 
        }      


        if(galactica[i].hull>0){
            
            if(Math.random() < galactica[i].accuracy ){
                theCylons.hull -= galactica[i].firepower
            }else{
                console.log(`The humans have missed.  Invade their network`);
                
            }
            adamaLives= true
            
        }else{
            adamaLives= false
            i++
        }

        console.log(galactica);
        console.log(theCylons);

        if(adamaLives===false){
            if (galactica[galactica.length-1].hull<=0){
                console.log('Cylons are defeated!! So say we all!!');
                
            }else{
                report()
            }
            
    
        }else{
                      
                console.log(`Lee, get Starbuck and do another run` );
              
            fightStart()
                
        }
     
} 


function report (){
    const fightReport = require("FightReport");
    const rl = fightReport.createInterface({input: process.stdin,
                                        output: process.stdout,
                                        });
                                    
    rl.question(`Ship destroyed. Galactica ${theCylons.hull} hull needs repair. Continue engagement?\nAnswer Y or N \n `, function (answer) {
        answer.charAt(0).toUpperCase
        
        if(answer==='Y' && galactica[galactica.length-1].hull>0){
            console.log(`Press on!! So say we all`);
            rl.close();
           
            fightStart()
        }else{
            
            rl.close();
            return console.log("Run to the 13th colony");
                    }
              
    })
}
fightStart()