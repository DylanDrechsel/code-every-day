// COMMON ARRAY ITERATIONS

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const weeklyWeather = [70, 72, 68, 65, 74, 74, 73]

for (let i = 0; i < weeklyWeather.length; i++) {
    console.log(`The temperature on ${weekdays[i]} was: ${weeklyWeather[i]}`);
}

let smallest = weeklyWeather[0]
let highest = weeklyWeather[0]
for (let i = 0; i < weeklyWeather.length; i++) {
    let temp = weeklyWeather[i];

    if (temp < smallest) {
        smallest = temp;
    }

    if (temp > highest) {
        highest = temp;
    }
}

console.log(`the lowest temp was: ${smallest}`);
console.log(`the highest temp was: ${highest}`);