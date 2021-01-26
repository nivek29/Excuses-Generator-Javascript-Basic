window.onload = function () {
  
    generarExc();
};

function generarExc() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    document.getElementById("excuse").innerHTML = who[Math.floor(Math.random() * (4 - 0)) + 0]+ " "+action[Math.floor(Math.random() * (4 - 0)) + 0]+ " "+what[Math.floor(Math.random() * (3 - 0)) + 0]+ " "+when[Math.floor(Math.random() * (5 - 0)) + 0] ;
}