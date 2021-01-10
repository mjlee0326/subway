const div_1 = document.getElementById("div_1");
const div_2 = document.getElementById("div_2");
const div_3 = document.getElementById("div_3");
var my_sandwich = 0;
const index = () => {
    document.getElementById("start_btn").onclick = () => {
        my_sandwich++;
        console.log(my_sandwich);
        div_1.style.display = "none";
        div_2.style.display = "block";
        view2();
    };
};
const view2 = () => {
    const q1_1 = document.getElementById("q1_1");
    const q1_2 = document.getElementById("q1_2");
    const q2_1 = document.getElementById("q2_1");
    const q2_2 = document.getElementById("q2_2");
    const q3_1 = document.getElementById("q3_1");
    const q3_2 = document.getElementById("q3_2");

    const qOne = document.getElementById("div_q1");
    const qTwo = document.getElementById("div_q2");
    const qThree = document.getElementById("div_q3");

    qTwo.style.opacity = "10%";
    qThree.style.opacity = "10%";

    //qTwo.style.pointerEvents = "none";
    //qThree.style.pointerEvents = "none";

    document.getElementById("q1_1").onclick = () => {
        q1_2.style.opacity = "10%";
        qOne.style.pointerEvents = "none";
        qTwo.style.opacity = "100%";
        q2_1.style.pointerEvents = "block";
        q2_2.style.pointerEvents = "block";
        console.log("click q1_1");
        question2();
    };
    document.getElementById("q1_2").onclick = () => {
        q1_1.style.opacity = "10%";
        qOne.style.pointerEvents = "none";
        qTwo.style.opacity = "100%";
        qTwo.style.pointerEvents = "block";
        console.log("click q1_2");
        question2();
    };
    const question2 = () => {
        document.getElementById("q2_1").onclick = () => {
            q2_2.style.opacity = "10%";
            qTwo.style.pointerEvents = "none";
            qThree.style.opacity = "100%";
            qThree.style.pointerEvents = "block";
            console.log("click q2_1");
            question3();
        };
        document.getElementById("q2_2").onclick = () => {
            q2_1.style.opacity = "10%";
            qTwo.style.pointerEvents = "none";
            qThree.style.opacity = "100%";
            qThree.style.pointerEvents = "block";
            console.log("click q2_2");
            question3();
        };
    };

    const question3 = () => {
        document.getElementById("q3_1").onclick = () => {
            q3_2.style.opacity = "10%";
            qThree.style.pointerEvents = "none";
            console.log("click q3_1");
        };
        document.getElementById("q3_2").onclick = () => {
            q3_1.style.opacity = "10%";
            qThree.style.pointerEvents = "none";
            console.log("click q3_2");
        };
        document.getElementById("next_btn").onclick = () => {
            div_2.style.display = "none";
            div_3.style.display = "block";
            view3();
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
    };
    q22.onclick = () => {
        q21.style.opacity = "10%";
        q21.style.pointerEvents = "none";
        q23.style.opacity = "10%";
        q23.style.pointerEvents = "none";
        console.log("click q22");
    };
    q23.onclick = () => {
        q21.style.opacity = "10%";
        q21.style.pointerEvents = "none";
        q22.style.opacity = "10%";
        q22.style.pointerEvents = "none";
        console.log("click q23");
    };
};
window.onload = index();
