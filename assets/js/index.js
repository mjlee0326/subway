const div_1 = document.getElementById("div-1");
const div_2 = document.getElementById("div-2");
var my_sandwich = 0;
const index = () => {
    document.getElementById("start_btn").onclick = () => {
        my_sandwich++;
        console.log(my_sandwich);
        div_1.style.display = "none";
        div_2.style.display = "block";
    };
};

window.onload = index();
