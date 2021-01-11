const div_1 = document.getElementById("div_1");
const div_2 = document.getElementById("div_2");
const div_3 = document.getElementById("div_3");
const div_4 = document.getElementById("div_4");
const div_5 = document.getElementById("div_5");

const div_logo1 = document.getElementById("div_0");
const div_logo2 = document.getElementById("div_01");

div_logo2.style.display = "none";

let q1_1 = document.getElementById("q1_1");
let q1_2 = document.getElementById("q1_2");
let q2_1 = document.getElementById("q2_1");
let q2_2 = document.getElementById("q2_2");
let q3_1 = document.getElementById("q3_1");
let q3_2 = document.getElementById("q3_2");
let next_btn = document.getElementById("next_btn");

let qOne = document.getElementById("div_q1");
let qTwo = document.getElementById("div_q2");
let qThree = document.getElementById("div_q3");

const index = () => {
    /* DEBUG AREA */

    /*
    addCntReverse([2, 3, 6, 7, 8, 11, 12, 14, 15]);

    const num = findMaxCnt();
    const sName = sandwich[num].name;
    console.log(sName);
    */

    /* DEBUG AREA */

    document.getElementById("start_btn").onclick = () => {
        div_1.style.display = "none";
        div_2.style.display = "block";
        view2();
    };
};

const findMaxCnt = () => {
    let max = 0;
    for (i = 1; i < sandwich.length; i++) {
        // console.log("max:\t" + max + "\t" + sandwich[max].cnt);
        //console.log("index:\t" + i + "\t" + sandwich[i].cnt);
        if (parseInt(sandwich[max].cnt) < parseInt(sandwich[i].cnt)) {
            //      console.log("bigger!!!");
            max = i;
        }
    }
    console.log("final max index:\t" + max);
    return max;
};

const view2 = () => {
    console.log("view2");
    qTwo.style.opacity = "10%";
    qThree.style.opacity = "10%";

    //qTwo.style.pointerEvents = "none";
    //qThree.style.pointerEvents = "none";

    q1_1.onclick = () => {
        q1_2.style.opacity = "10%";
        qOne.style.pointerEvents = "none";
        qTwo.style.opacity = "100%";
        q2_1.style.pointerEvents = "block";
        q2_2.style.pointerEvents = "block";
        console.log("click q1_1");
        addCnt([0, 1, 3, 5, 6, 9, 14, 15]);
        question2();
    };
    q1_2.onclick = () => {
        q1_1.style.opacity = "10%";
        qOne.style.pointerEvents = "none";
        qTwo.style.opacity = "100%";
        qTwo.style.pointerEvents = "block";
        console.log("click q1_2");
        addCntReverse([0, 1, 3, 5, 6, 9, 14, 15]);
        question2();
    };
    const question2 = () => {
        q2_1.onclick = () => {
            q2_2.style.opacity = "10%";
            qTwo.style.pointerEvents = "none";
            qThree.style.opacity = "100%";
            qThree.style.pointerEvents = "block";
            console.log("click q2_1");
            addCnt([2, 3, 6, 7, 8, 11, 12, 14, 15]);
            question3();
        };
        q2_2.onclick = () => {
            q2_1.style.opacity = "10%";
            qTwo.style.pointerEvents = "none";
            qThree.style.opacity = "100%";
            qThree.style.pointerEvents = "block";
            console.log("click q2_2");
            addCntReverse([2, 3, 6, 7, 8, 11, 12, 14, 15]);
            question3();
        };
    };

    const question3 = () => {
        q3_1.onclick = () => {
            q3_2.style.opacity = "10%";
            qThree.style.pointerEvents = "none";
            console.log("click q3_1");
            change_btnID();
            addCnt([2, 3, 4, 5, 7, 8, 11, 14, 15]);
            handleNextBtn();
        };
        q3_2.onclick = () => {
            q3_1.style.opacity = "10%";
            qThree.style.pointerEvents = "none";
            console.log("click q3_2");
            change_btnID();
            addCntReverse([2, 3, 4, 5, 7, 8, 11, 14, 15]);
            handleNextBtn();
        };
    };

    const change_btnID = () => {
        if (div_4.style.display === "block") {
            next_btn = document.getElementById("next_btn3");
        }
    };

    const handleNextBtn = () => {
        next_btn.onclick = () => {
            if (div_2.style.display === "block") {
                console.log("view2 -> view3");
                div_2.style.display = "none";
                div_3.style.display = "block";
                view3();
            } else {
                console.log("view4 -> view5");
                div_4.style.display = "none";
                div_logo1.style.display = "none";

                document.body.style.backgroundColor = "#009132";

                console.log(sandwich[4].name);
                const num = findMaxCnt();
                const sName = sandwich[num].name;
                console.log(sName);
                const result = document.getElementById("result");
                console.log(result);
                result.innerHTML = sName;
                div_5.style.display = "block";
                div_logo2.style.display = "block";
            }
        };
    };
};

const view3 = () => {
    const q21 = document.getElementById("q21");
    const q22 = document.getElementById("q22");
    const q23 = document.getElementById("q23");

    q21.onclick = () => {
        q22.style.opacity = "10%";
        q22.style.pointerEvents = "none";
        q23.style.opacity = "10%";
        q23.style.pointerEvents = "none";
        console.log("click q21");
        change();
    };
    q22.onclick = () => {
        q21.style.opacity = "10%";
        q21.style.pointerEvents = "none";
        q23.style.opacity = "10%";
        q23.style.pointerEvents = "none";
        console.log("click q22");
        change();
    };
    q23.onclick = () => {
        q21.style.opacity = "10%";
        q21.style.pointerEvents = "none";
        q22.style.opacity = "10%";
        q22.style.pointerEvents = "none";
        console.log("click q23");
        change();
    };
};

const change = () => {
    q1_1 = document.getElementById("q31_1");
    q1_2 = document.getElementById("q31_2");
    q2_1 = document.getElementById("q32_1");
    q2_2 = document.getElementById("q32_2");
    q3_1 = document.getElementById("q33_1");
    q3_2 = document.getElementById("q33_2");

    qOne = document.getElementById("div_q31");
    qTwo = document.getElementById("div_q32");
    qThree = document.getElementById("div_q33");

    next_btn = document.getElementById("next_btn2");

    next_btn.onclick = () => {
        div_3.style.display = "none";
        div_4.style.display = "block";
        view2();
    };
};

window.onload = index();
