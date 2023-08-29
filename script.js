const $home_page = document.getElementById("home_page");
const $setting_page = document.getElementById("setting_page");
const $disp_page = document.getElementById("disp_page");
const $morning = document.getElementById("morning");
const $toggle_btn = document.getElementById("toggle_btn");

$disp_page.classList.add("hidden");

const problems_count = 5;

for(let i=0; i<problems_count; i++){
    let p = document.createElement("p");
    p.classList.add("problems_disp");
    $disp_page.appendChild(p);
}

for(let i=0; i<problems_count; i++){
    let p = document.createElement("p");
    p.classList.add("ans_disp");
    $disp_page.appendChild(p);
}

const $problems_disp = document.getElementsByClassName("problems_disp");
const $ans_disp = document.getElementsByClassName("ans_disp");

$morning.addEventListener("click", function(){
    $home_page.classList.add("hidden");
    $disp_page.classList.remove("hidden");
}, false);

const get_random = function(min, max){
    let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  
    return random;
}

let ans = new Array(10), problems = new Array(10);

const disp_handler = function(idx, statement){
    return '(' + (idx+1) + ')' + ' ' + statement;
}

const create_problem = function(level, type, idx){
    let a = get_random(10, 999), b = get_random(10, 999), c = get_random(10, 20), d = get_random(10, 20);

    if(type === 0){
        ans[idx] = a + b;
        problems[idx] = "\\(" + a + '+' + b + "\\)";
    }

    if(type === 1){
        ans[idx] = a - b;
        problems[idx] = "\\(" + a + '-' + b + "\\)";
    }

    if(type === 2){
        ans[idx] = c * d;
        problems[idx] = "\\(" + c + '・' + d + "\\)";
    }
}

for(let i=0; i<problems_count; i++){
    create_problem(null, get_random(0, 2), i);
    $problems_disp[i].textContent = disp_handler(i, problems[i]);
    $ans_disp[i].textContent = disp_handler(i, ans[i]);
    $ans_disp[i].classList.add("hidden");
}

is_ans_disped = false;

const toggle_disp = function(){
    for(let i=0; i<problems_count; i++){
        $problems_disp[i].classList.toggle("hidden");
        $ans_disp[i].classList.toggle("hidden");
    }

    is_ans_disped = !is_ans_disped;
}

$toggle_btn.addEventListener("click", toggle_disp);
