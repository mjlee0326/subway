const addCnt = (arr) => {
    console.log("addCnt call");
    for (i = 0; i < arr.length; i++) {
        sandwich[arr[i]].cnt++;
        console.log(`addCnt:\t${sandwich[arr[i]].name}`);
    }
};

const addCntReverse = (arr) => {
    let arrR = [];
    let j = 0;
    for (i = 0; i < 16; i++) {
        // arrR[i] = i;
        while (parseInt(arr[j]) > i) {
            arrR.push(i);
            i++;
        }
        j++;
    }

    //console.log(arrR);
    addCnt(arrR);
};
