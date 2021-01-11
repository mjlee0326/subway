const addCnt = (arr) => {
    for (i = 0; i < arr.length; i++) {
        sandwich[arr[i]].cnt++;
        //   console.log(`addCnt:\t${sandwich[arr[i]].name}`);
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

    addCnt(arrR);
};

const findMaxCnt = () => {
    let max = 0;
    let maxCnt = sandwich[max].cnt;
    let arr = [];
    console.log(`${sandwich[0].name}:${sandwich[0].cnt}`);
    for (i = 1; i < sandwich.length; i++) {
        console.log(`${sandwich[i].name}:${sandwich[i].cnt}`);
        if (parseInt(sandwich[max].cnt) < parseInt(sandwich[i].cnt)) {
            //      console.log("bigger!!!");
            maxCnt = sandwich[i].cnt;
            max = i;
            arr.push(sandwich[i].name);
        }
    }
    if (maxCnt === 0) {
        arr.push(sandwich[0].name);
    } else {
        for (i = 0; i < sandwich.length; i++) {
            if (sandwich[i].cnt === maxCnt) {
                arr.push(sandwich[i].name);
            }
        }
    }
    console.log(`final maxCnt:\t${maxCnt}`);
    console.log(arr);
    console.log(Math.floor(Math.random() + arr.length - 1));
    return arr[Math.floor(Math.random() + arr.length - 1)];
};

const findBread = (arr) => {
    console.log("find Bread call");
    console.log(arr);
    return arr[Math.floor(Math.random() + arr.length - 1)];
};
