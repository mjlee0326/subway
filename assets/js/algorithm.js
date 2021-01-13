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

const findSandwichIndex=()=>{
    sIndex=sandwich.findIndex(obj=>obj.name === sName);
    console.log(`sName: ${sName}, sIndex: ${sIndex}`);
    return sIndex;
}

const changeSource=(index)=>{
    switch(index){
        case 1:
            if(sandwich[sIndex].isRanch){
                sandwich[sIndex].source=['스위트 어니언', '랜치'];
            }
            else{
                sandwich[sIndex].source=['후추', '올리브 오일'];
            }
            break;
        case 2:
            sandwich[sIndex].source[0]='사우스웨스트';
            break; 
        case 3:
            sandwich[sIndex].source[1]='핫칠리';
            break;
    }
}


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
    console.log(Math.floor(Math.random() * arr.length));
    return arr[Math.floor(Math.random() * arr.length)];
};

const findRandom = (arr) => {
    console.log(arr);
    return arr[Math.floor(Math.random() * arr.length)];
};

const makeResult=()=>{
    sName = findMaxCnt();
    sIndex=findSandwichIndex();
    console.log(sName);
    console.log(sIndex);
    const result = document.getElementById("result");
    console.log(result);
    result.innerHTML = sName;
}

const makeSource=()=>{
    const result_source=document.getElementById('result_source');
    result_source.innerHTML=sandwich[sIndex].source[0]+'<br>'+sandwich[sIndex].source[1]
}

const makeImage=()=>{
    const image=document.getElementById('sandwich');
    image.innerHTML=`<img class=\'sandwich\' src= \'assets/img/sandwich/${sandwich[sIndex].num}.png\'>`;
}

const makeTopping=()=>{
    console.log(`topping: ${topping}`);
    const result_topping=document.getElementById('result_topping');
    result_topping.innerHTML=topping;
}