let showstatus = false;
let toggleactive = true;
function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  let change = document.querySelector(".change");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
  if (toggleactive == false) {
    change.innerHTML = '<i class="fas fa-bars"></i>';
    toggleactive = true;
  } else if (toggleactive == true) {
    change.innerHTML = '<p style="font-size: 65px">×</p>';
    toggleactive = false;
  }
}

let show1 = () => {
  if (showstatus == false) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide1")[i].style.display =
        "block");
      document.querySelector(".rotate1").style.transform = "rotate(450deg)";
    }
    showstatus = true;
  } else if (showstatus == true) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide1")[i].style.display =
        "none");
      document.querySelector(".rotate1").style.transform = "rotate(0deg)";
    }
    showstatus = false;
  }
};
let show2 = () => {
  if (showstatus == false) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide2")[i].style.display =
        "block");
      document.querySelector(".rotate2").style.transform = "rotate(450deg)";
    }
    showstatus = true;
  } else if (showstatus == true) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide2")[i].style.display =
        "none");
      document.querySelector(".rotate2").style.transform = "rotate(0deg)";
    }
    showstatus = false;
  }
};
let show3 = () => {
  if (showstatus == false) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide3")[i].style.display =
        "block");
      document.querySelector(".rotate3").style.transform = "rotate(450deg)";
    }
    showstatus = true;
  } else if (showstatus == true) {
    for (var i = 0; i < 3; i++) {
      let getSubMenu = (document.querySelectorAll(".hide3")[i].style.display =
        "none");
      document.querySelector(".rotate3").style.transform = "rotate(0deg)";
    }
    showstatus = false;
  }
};

let show4 = () => {
  if (showstatus == false) {
    for (var i = 0; i < 6; i++) {
      let getSubMenu = (document.querySelectorAll(".hide4")[i].style.display =
        "block");
      document.querySelector(".rotate4").style.transform = "rotate(450deg)";
    }
    showstatus = true;
  } else if (showstatus == true) {
    for (var i = 0; i < 6; i++) {
      let getSubMenu = (document.querySelectorAll(".hide4")[i].style.display =
        "none");
      document.querySelector(".rotate4").style.transform = "rotate(0deg)";
    }
    showstatus = false;
  }
};
