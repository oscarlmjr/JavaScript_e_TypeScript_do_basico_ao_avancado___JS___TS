function recursiva(max) {
    if (max > 11000) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);
