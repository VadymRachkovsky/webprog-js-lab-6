function calcAverageCalories(days) {
    let sum = 0;
    days.forEach(element => {
        sum += element.calories;
    });
    return days.length === 0 ? 0 : sum / days.length;
}

// let weeklyCalories = [
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//     ];
// console.log(calcAverageCalories(weeklyCalories));

// weeklyCalories = [
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
// ];

// console.log(calcAverageCalories([]));
