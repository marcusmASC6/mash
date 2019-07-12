function getHome(){
    var home = [process.argv[3], process.argv[4], process.argv[5], process.argv[6]]
    var a = Math.floor(Math.random()*home.length);
    return home[a]
}
function getChildrenCount(){
    return Math.floor(Math.random()*101)
}
function car(){
    var a = [process.argv[7], process.argv[8], process.argv[9], process.argv[10]]
    var car = Math.floor(Math.random()*a.length)
    return a[car]
}
function career(){
    var a = [process.argv[11],process.argv[12],process.argv[13],process.argv[14]]
    var job = Math.floor(Math.random()*a.length)
    return a[job]
}
function superPower(){
    var a = [process.argv[15],process.argv[16],process.argv[17],process.argv[18]]
    var power = Math.floor(Math.random()*a.length)
    return a[power]
}
    console.log(process.argv[2] + ", you will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids, and you will drive a "+ car() + ". You are a " + career() + ". You secretly have the power of " + superPower() + ".");