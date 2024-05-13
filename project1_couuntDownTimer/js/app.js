const endDate="10 April 2024 1:09 AM";

document.getElementById("end-Date").innerText=endDate;
const input =document.querySelectorAll("input");

function clock() {
    const end=new Date(endDate);
    const now= new Date();
    const diff=(end-now)/1000;

    if(diff < 0) return;
    // console.log(diff);

    // convert into days
    input[0].value=Math.floor(diff/3600/24);

    // convert into hours
    input[1].value=Math.floor(diff/3600)%24;

    // convert into minutes
    input[2].value=Math.floor(diff/60) % 60;

    // convert into seconds
    input[3].value=Math.floor(diff)%60;

}
clock();
/**
 * 1 day=24 hrs
 * 1 hrs= 60 min
 * 60 min = 3600sec
 */

setInterval(
    ()=>{
     clock();
        
    },
    1000
)

