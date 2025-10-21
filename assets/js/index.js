/* section1 */
function ShowHambergerMenu() {
    if (document.getElementById("hambergerbox").classList.contains("menu-header-hamberger"))

    {
        document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.add("fa-bars");
        document.getElementById("baricon").classList.remove("fa-times");
    } else {
        document.getElementById("hambergerbox").classList.add("menu-header-hamberger");
        document.getElementById("hambergerbox").classList.remove("menu-header-hambergerCLS");
        document.getElementById("baricon").classList.remove("fa-bars");
        document.getElementById("baricon").classList.add("fa-times");
    }
}

$(document).ready(function () {
  $(document).on("click", function (e) {
    if (e.target.id == "mymenu" || $(e.target).parents('#mymenu').length) {

    } else if (!$(e.target).parents('#mymenu').length) {
      document.getElementById("hambergerbox").classList.remove("menu-header-hamberger");
      document.getElementById("hambergerbox").classList.add("menu-header-hambergerCLS");
      document.getElementById("baricon").classList.add("fa-bars");
      document.getElementById("baricon").classList.remove("fa-times");
    }
  });
});

/* section1 */


function changebox(obj, obj1) {
    var usercon = document.getElementById(obj);
    var copy = usercon;
    usercon.remove();
    var con = document.getElementById("conboxs");
    var first = con.firstChild.nextSibling.nextSibling;
    first.after(copy);

    document.getElementsByClassName("circlecasinoselected")[0].classList.remove("circlecasinoselected");
    obj1.classList.add("circlecasinoselected");
}

// section11
function openticket(obj, obj1, obj3) {
    if (document.getElementById(obj).classList.contains('boxitemshow'))

    {
        document.getElementById(obj).classList.remove("boxitemshow");
        document.getElementById(obj).classList.add("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/add.png";
    } else {
        document.getElementById(obj).classList.add("boxitemshow");
        document.getElementById(obj).classList.remove("boxitemshowclose");
        document.getElementById(obj1).src = "./assets/img/minus-square.png";
    }

    if (obj3.getElementsByClassName("boxitem")[0].classList.contains("borderbotm")) {
        obj3.getElementsByClassName("boxitem")[0].classList.remove("borderbotm");
        obj3.getElementsByClassName("boxitem")[0].classList.add("borderselected");
    } else {
        obj3.getElementsByClassName("boxitem")[0].classList.add("borderbotm");
        obj3.getElementsByClassName("boxitem")[0].classList.remove("borderselected");
    }
}
// section11