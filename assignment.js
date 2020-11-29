
// Assignment1
function feetToMile(feet) {
    const mile = feet / 5280;
    return mile;
}
const result = feetToMile(5280);
console.log(result);



// Assignment2
function woodCalculator(chair, table, bed){
    if(chair > 0 && table > 0 && bed > 0){
        var totalChair = chair * 1;
        var totalTable = table * 3;
        var totalBed = bed * 5;
        var totalWood = totalChair + totalTable + totalBed;
    
    }
    else{
        
    }
}
woodCalculator(1, 5, 10);


// Assignment3

function brickCalculator( floor){
    if(floor <= 10){
        brick = (floor * 15)*1000
    }
    else if(floor <= 15 ||10 >floor){
         brick = (floor * 12)*1000
    }
    else{
         brick = (floor * 10)*1000
    }
    return brick
   } 

var totalBrick = brickCalculator(16)
// console.log(totalBrick)

// Assignment4

  function tinyFriend(friend){
    var shortName = friend[0];
    for(var i = 1; i < friend.length; i++){
        if(friend[i].length < shortName.length){
            shortName = friend[i];
        }
    }
    return shortName;
