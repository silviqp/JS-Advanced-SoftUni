function timeToWalk (steps,foot,speed){

    let distance = steps*foot;
    let speedMetIn = speed/3.6;
    let time = distance/speedMetIn;
    let rest = Math.floor(distance/500);
    time += rest *60;
    let min = Math.floor(time/60);
    let sec = Math.round(time%60);

    let hours = Math.floor(min/60);
    min -= hours*60;

    let hoursPr = hours < 10 ? `0${hours}` : `${hours}`;
    let minPr = min <10 ? `0${min}` : `${min}`;
    let secPr = sec<10 ? `0${sec}` : `${sec}`;

    console.log(`${hoursPr}:${minPr}:${secPr}`);

}
timeToWalk(4000, 0.60, 5)