function traveling(input) {

    let index = 0;
    let command = input[index]; //country or "End";
    index++;
    let neededMoney = Number(input[index]);
    index++;
    let savings = Number(input[index]);
    index++;

    let savedMoney = 0;

    while (command !== "End") {
        savedMoney += savings;
        while (true) {

            if (savedMoney >= neededMoney) {
                console.log(`Going to ${command}!`);
                command = input[index];
                index++;
                savedMoney = 0;
                neededMoney = Number(input[index]);
                index++;
            } break;

        }

        savings = Number(input[index]);
        index++;
    }

}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);