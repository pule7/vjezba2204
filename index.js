var varOne = 0;

for(i = 0; i < 4; i++) {
    console.log("iteracija " + i + " po varijabli i");
    for(j = 0; j < 4; j++) {
        console.log("iteracija " + j + " po varijabli j");
        varOne++;
        console.log("vrijednost=" + varOne);
    }
}

console.log(varOne);
