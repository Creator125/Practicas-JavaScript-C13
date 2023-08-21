console.log("break");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i)
}

console.log("continue");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i)
}