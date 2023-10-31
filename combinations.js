function combinations(input) {

    let n = Number(input[0]);
    let combinations = 0;

    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            for (let c = 0; c <= n; c++) {
                let result = a + b + c;
                if (result === n) {
                    combinations++;
                }
            }
        }
    }

    console.log(combinations);

}

combinations(["25"]);