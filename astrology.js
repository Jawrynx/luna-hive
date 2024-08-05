
/* Month's Data */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthStartDay = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

/* Star Sign Data */
const starSigns = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
const signStartDay = [19, 49, 80, 110, 141, 172, 204, 235, 266, 296, 326, 356];

/* Month and Day, to day in year Conversion */
function calculateBirthDayNumber(month, day) {
    const lowerMonth = month.toLowerCase().slice(0, 3);
    const monthIndex = months.findIndex(m => m.toLowerCase().startsWith(lowerMonth));

    if (monthIndex !== -1) {
        return monthStartDay[monthIndex] + (day - 1);
    } else {
        throw new Error("Invalid Month")
    }
}

function calculateStarSign (month, day) {
    /* Get Day Number Born */
    const dayNumberBorn = calculateBirthDayNumber(month, day);

    /* Special Case CAPRICORN */
    if (dayNumberBorn >= signStartDay[signStartDay.length - 1] || dayNumberBorn < signStartDay[0]) {
        return starSigns[0];
    }
    /* Return Star Sign By Day Number */
    for (let i = 0; i < signStartDay.length; i++) {
        if (dayNumberBorn >= signStartDay[i] && dayNumberBorn < signStartDay[i + 1]) {
            return starSigns[i];
        }
    }
}

window.calculateStarSign = calculateStarSign; 