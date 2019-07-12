function mash(){
    return getHome(), getChildrenCount(), car(), career(), superPower()
}
function getHome(){
    var home = ["Mansion", "Apartment", "Shack", "House", "....YEET you ain't got no home"]
    var a = Math.floor(Math.random()*home.length)
    return home[a]
}
console.log (mash())

function getChildrenCount(){
    return Math.floor(Math.random()*101)
}
function car(){
    var a = ["Lambo", "convertible", "box with wheels",".....YEET you ain't got no car"]
    var car = Math.floor(Math.random()*a.length)
if(Math.random() > 0.5){
    return (a[car])
}
else{
    return (process.argv[4])
}
}
function career(){
    var a = ["slave","slave master", "bum", "Grim Reaper", "assasin", "realtor", "stripper", "doctor", "lawyer"]
    var job = Math.floor(Math.random()*a.length)
if(Math.random() >= 0.5){
    return (a[job])
}
else{
    return a[job]  
}
}
function superPower(){
    var a = ["Control Metal", "1,000 IQ", "Super Sped", "Super Speed", "Shape Shift", "Immune to Laws", "Flight"]
    var power = Math.floor(Math.random()*a.length)
if(Math.random() >= 0.5){
    return(a[power])
}
else {
    return (process.argv[5])
}
}
var a = Math.random()
if(a < 0.5){
    console.log(process.argv[2] + ", you will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids, and you will drive a "+ car() + ". You are a " + career() + ". You secretly have the power of " + superPower() + ".");
}
else{
    console.log(process.argv[2] + ", you will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids, and you will drive a "+ car() + ". You are a " + career() + ". You secretly have the power of " + superPower() + ".");
}

mash();

