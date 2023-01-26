let num = 5;
let rows = "";
let position = num - 1;


for (let index = 0; index < num; index += 1) {
    // console.log(rows);

    for (let index2 = 0; index2 < num; index2 += 1) {
        if (index2 < position) {
            rows += " ";
        }
        else {
            rows += "*";
        }

    }
    console.log(rows);
    rows = "";
    position -= 1;

}

