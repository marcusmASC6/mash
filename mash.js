var home = ["Mansion", "Apartment", "Shack", "House", "....YEET you ain't got no home"]
var a = ["Lambo", "convertible", "box with wheels",".....YEET you ain't got no car"]
var b = ["slave","slave master", "bum", "Grim Reaper", "assasin", "realtor", "stripper", "doctor", "lawyer"]
var c = ["Control Metal", "1,000 IQ", "Super Sped", "Super Speed", "Shape Shift", "Immune to Laws", "Flight"]


while(process.argv = true){
    function mash(){
        return process.argv[2] + ", you will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids, and you will drive a "+ car() + ". You are a " + career() + ". You secretly have the power of " + superPower() + ".";
    }   
}

console.log (mash())

function getHome(){
    //no user input from argv
    var a = Math.floor(Math.random()*home.length)
    if (process.argv[3] = true){
        if (Math.random < 0.5){
            return home[a]
        }
        else{
            return process.argv[3]
        }
    }
else{
    return home[a]
}

function getChildrenCount(){
    //no user input from argv3 for children
    //no 50/50 chance
    while (process.argv[4] = true){
        if (Math.random < 0.5){
            return Math.floor(Math.random()*101)
        }
        else{
            return process.argv[4]
        }
    }
function car(){
    //you do not check if user input exists here
    var car = Math.floor(Math.random()*a.length)
if (process.argv[4] = true){
    if(Math.random() > 0.5){
    return (a[car])
}
    else{
        return (process.argv[4])
}
}
else{
    return a[car]
}
function career(){
    var job = Math.floor(Math.random()*b.length)
if (process.argv[5] = true){
    if(Math.random() >= 0.5){
    return (process.argv[5])
}
else{
    return b[job]  
}
}
else{
    return (process.argv[5])

}
function superPower(){
    var power = Math.floor(Math.random()*c.length)
  if (process.argv[6] = true){
    if(Math.random() >= 0.5){
        return(c[power])
    }
    else {
        return (process.argv[6])
        }
}
else{
    return c[power]
}
}
mash();