const timeConversion = () => {
    let date = new Date().toLocaleTimeString();
    let pm = date.match('PM') ? true : false;
    let hour;
    let sec;

    date = date.split(':')

    const min = date[1]

    if (pm === true) {
        hour = 12 + parseInt(date[0])
        sec = date[2].replace('PM', ' ')
    } else {
        hour = date[0]
        sec = date[2].replace('AM', ' ')
    }

    console.log(hour + ':' + min + ':' + sec)
}

timeConversion()