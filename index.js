let name = document.getElementById("textname");
let email = document.getElementById("email");
let web = document.getElementById("website")
let img = document.getElementById("img");
let gender = document.getElementById("sex");
let skill = document.getElementById("skills");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let clr_inp = document.getElementsByClassName("clear_inp");
let output = document.getElementById("output");
let img_src;
let inputs = document.querySelectorAll("input");

img.addEventListener("change", function () {
    let img_reader = new FileReader();
    img_reader.addEventListener("load", function () {
        img_src = img_reader.result;
    })
    img_reader.readAsDataURL(this.files[0]);
})

submit.onclick = function () {
    let flag = 1;
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            flag = 0
            break;
        }
    }
    if (flag == 0)
        alert("All fields must be filled");
    else {
        let data = document.createElement("div");
        let image = document.createElement("div");
        let info = document.createElement("div");
        data.className = "data";
        image.className = "image";
        info.className = "info";
        
        let gender_selected;
        for (i = 0; i < sex.length; i++) {
            if (sex[i].checked == true) {
                gender_selected = sex[i].value;
            }
        }

        let skillbox = "";
        for (j = 0; j < skills.length; j++) {
            if (skills[j].checked == true) {
                skillbox += skills[j].value + ',';
            }
        }
        image.innerHTML = '<img src="' + img_src + '">';
        x='<a href="'+web.value+'" target="_blank">'+web.value+'</a>';
        info.innerHTML = "<p>Name : " + textname.value + "</p><p>Email : " + email.value+
        "</p><p>Website: : " + x + "</p><p>Gender : " + gender_selected + "</p><p>Skills : " + skillbox + "</p>";
        output.appendChild(data);
        data.appendChild(info);
        data.appendChild(image);
    }
}

clear.onclick = function () {
    for (i = 0; i < clear_inp.length; i++) {
        clear_inp[i].value = "";
    }
    for (i = 0; i < sex.length; i++) {
        sex[i].value = "";
    }
    for (i = 0; i < skills.length; i++) {
        skills[i].value = "";
    }
}
