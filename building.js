function building(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);

    for (let floor = x; floor > 0; floor--) {
        let buff = "";
        for (let room = 0; room < y; room++) {
            if (floor === x) {
                buff += `L${floor}${room} `;
            } else if (floor % 2 !== 0) {
                buff += `A${floor}${room} `;
            } else {
                buff += `O${floor}${room} `
            }
        }
        console.log(buff);
    }
    

}

building(["6", "4"]);