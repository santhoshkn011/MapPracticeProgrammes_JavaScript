let personCount = 1;
var birthMonthMap = new Map();

function generateBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

while (personCount != 51) {
    let month = generateBirthMonth();
    console.log("Person : " + personCount + "\tBirth Month is : " + month);
    let personArray = new Array();

    if (birthMonthMap.has(month))
        personArray = birthMonthMap.get(month);

    personArray.push(personCount);
    birthMonthMap.set(month, personArray);
    personCount++;
}

console.log("\nPeople with same birthday month");
for (let [key, value] of birthMonthMap.entries()) {
    console.log("Month : " + key + "\tPeople : [" + value + "]");
}