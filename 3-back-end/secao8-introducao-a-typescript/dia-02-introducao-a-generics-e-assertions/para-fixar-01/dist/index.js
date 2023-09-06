"use strict";
function timeConversion(s) {
    const splitted = s.split(':');
    if (s.includes('AM')) {
        if (splitted[0] === '12') {
            splitted[0] = '00';
        }
        return splitted.join(':').slice(0, -2);
    }
    if (splitted[0] !== '12') {
        splitted[0] = (Number(splitted[0]) + 12).toString();
    }
    return splitted.join(':').slice(0, -2);
}
console.log(timeConversion('12:40:22AM'));
console.log(timeConversion('12:05:39AM'));
console.log(timeConversion('12:45:54PM'));
console.log(timeConversion('12:45:54PM'));
