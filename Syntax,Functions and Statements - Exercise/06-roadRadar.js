/*
• On the interstate, the limit is 90 km/h
• In the city, the limit is 50 km/h 
• Within a residential area, the limit is 20 km/h
For speeding up to 20 km/h over the limit, the status should be speeding.
For speeding up to 40 km/h over the limit, the status should be excessive speeding.
For anything else, status should be reckless driving.
*/

function roadRadar (speed,area){
speed = Number(speed);
let limit = 0;
let overspeed = 0;
let status = '';

if (area === 'motorway'){
    limit = 130;
    if (speed>limit){
        overspeed = speed- limit}
        if (overspeed<=0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if (overspeed <=20){
            status = 'speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed<= 40){
            status = 'excessive speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed>40){
            status = 'reckless driving'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    
}else if (area === 'interstate'){
    limit = 90;
    if (speed>limit){
        overspeed = speed- limit}
        if (overspeed<=0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if (overspeed <=20){
            status = 'speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed<= 40){
            status = 'excessive speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed>40){
            status = 'reckless driving'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }

}else if (area === 'city'){
    limit = 50;
    if (speed>limit){
        overspeed = speed- limit}
        if (overspeed<=0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if (overspeed <=20){
            status = 'speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed<= 40){
            status = 'excessive speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed>40){
            status = 'reckless driving'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
}else {
    limit = 20;
    if (speed>limit){
        overspeed = speed- limit}
        if (overspeed<=0){
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }else if (overspeed <=20){
            status = 'speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed<= 40){
            status = 'excessive speeding'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }else if (overspeed>40){
            status = 'reckless driving'
            console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
}

}
roadRadar(100, 'residential area')