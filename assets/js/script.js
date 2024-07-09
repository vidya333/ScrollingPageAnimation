// Progress circle for actual progress
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}

setProgress(0);

// Progress circle for track
let trackCircle = document.querySelector(".track");
let radius1 = trackCircle.r.baseVal.value;
let circumference1 = radius1 * 2 * Math.PI;
trackCircle.style.strokeDasharray = circumference1;

function setTrackProgress(percent) {
    const offset = circumference1 - (percent / 100) * circumference1;
    trackCircle.style.strokeDashoffset = offset;
}

setTrackProgress(75);

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= 0 && scrollPosition < 150) {
        sliderOne();
    }
    else if (scrollPosition >= 150 && scrollPosition < 300) {
        sliderTwo();
    } 
    else if (scrollPosition >= 300 && scrollPosition < 450) {
        sliderThree();
    } 
    else if (scrollPosition >= 450 && scrollPosition < 600) {
        sliderFour();
    }
    else if (scrollPosition >= 600 && scrollPosition < 750) {
        sliderFive();
    }
    else if (scrollPosition >= 750 && scrollPosition < 900) {
        sliderSix();
    }
    else if (scrollPosition >= 900 && scrollPosition < 1100) {
        sliderSeven();
    }
});

function sliderOne() {
    setProgress(0);
    $(".dot-1").css("fill", "#7252da");
    $(".dot-2, .dot-3, .dot-4, .dot-5, .dot-6, .dot-7").css("fill", "white");

    $(".layer-1, .layer-2").css("background-color", "#4E27CE");
    $(".bg-darkblue").css("background-color", "#1d0363");

    $(".heading").html("25M+ Downloads").css("translate", "-60px");
    $(".subheading").html("on appstore and google playstore").css("translate", "-60px");
    $(".optional").css("visibility", "hidden");
    $(".heading1").html("ABC 123");

    $(".slide1-img2").css("margin-top", "400px");
    $(".slide1-img1").css("margin-top", "0px");

    $(".slide2-img1").css("margin-top", "-900px");
    $(".slide2-img2").css("margin-top", "2000px");

    $(".slide3-img1, .slide3-img2, .slide3-img4").css("margin-top", "-900px");
    $(".slide3-img3, .slide3-img5").css("margin-top", "2000px");

    $(".slide4-img1").css("margin-top", "2000px");
    $(".slide4-img2").css("margin-top", "-900px");

    $(".slide5-img1, .slide5-img2, .slide5-img3").css("margin-top", "-900px");
    $(".slide5-img4, .slide5-img5").css("margin-top", "2000px");

    $(".slide6-img1").css("margin-top", "2000px");

    $(".slide7-img1").css("margin-top", "2000px");
    $(".slide7-img2").css("margin-top", "-900px");
}
function sliderTwo() {
    setProgress(13);
    $(".dot-1, .dot-2").css("fill", "#7252da");
    $(".dot-3, .dot-4, .dot-5, .dot-6, .dot-7").css("fill", "white");

    $(".heading").html("Blockchain").css("translate", "200px");
    $(".subheading").html("Revolution").css("translate", "200px");
    $(".optional").css("visibility", "visible").html("The Next Big");
    $(".heading1").html("ABC 234");

    $(".bg-darkblue").css("background-color", "lightgray");
    $(".layer-1, .layer-2").css("background-color", "#4E27CE");

    $(".slide1-img1").css("margin-top", "-900px");
    $(".slide1-img2").css("margin-top", "2000px");
    $(".slide2-img1, .slide2-img2").css("margin-top", "70px");
    $(".slide3-img1, .slide3-img2, .slide3-img4").css("margin-top", "-900px");
    $(".slide3-img3, .slide3-img5").css("margin-top", "2000px");
    $(".slide4-img1").css("margin-top", "2000px");
    $(".slide4-img2").css("margin-top", "-900px");
    $(".slide5-img1, .slide5-img2, .slide5-img3").css("margin-top", "-900px");
    $(".slide5-img4, .slide5-img5").css("margin-top", "2000px");
    $(".slide6-img1").css("margin-top", "2000px");
    $(".slide7-img1").css("margin-top", "2000px");
    $(".slide7-img2").css("margin-top", "-900px");
}
function sliderThree() {
    setProgress(26);
    $(".dot-1, .dot-2, .dot-3").css("fill", "#7252da");
    $(".dot-4, .dot-5, .dot-6, .dot-7").css("fill", "white");

    $(".optional").css("visibility", "visible").html("Redefining");
    $(".heading").html("UX Strategy").css("translate", "150px");
    $(".subheading").html("and UI Design").css("translate", "200px");
    $(".heading1").html("ABC 345");

    $(".bg-darkblue").css("background-color", "#0f113b");
    $(".layer-1, .layer-2").css("background-color", "#17263c");

    $(".slide1-img1").css("margin-top", "-900px");
    $(".slide1-img2").css("margin-top", "2000px");
    $(".slide2-img1").css("margin-top", "-900px");
    $(".slide2-img2").css("margin-top", "2000px");
    $(".slide3-img1").css("margin-top", "0px");
    $(".slide3-img2").css("margin-top", "150px");
    $(".slide3-img3").css("margin-top", "500px");
    $(".slide3-img4").css("margin-top", "-130px");
    $(".slide3-img5").css("margin-top", "450px");
    $(".slide4-img1").css("margin-top", "2000px");
    $(".slide4-img2").css("margin-top", "-900px");
    $(".slide5-img1, .slide5-img2, .slide5-img3").css("margin-top", "-900px");
    $(".slide5-img4, .slide5-img5").css("margin-top", "2000px");
    $(".slide6-img1").css("margin-top", "2000px");
    $(".slide7-img1").css("margin-top", "2000px");
    $(".slide7-img2").css("margin-top", "-900px");
}
function sliderFour() {
    setProgress(39);
    $(".dot-1, .dot-2, .dot-3, .dot-4").css("fill", "#7252da");
    $(".dot-5, .dot-6, .dot-7").css("fill", "white");

    $(".optional").css("visibility", "visible").html("Powered By Advance").css("translate", "-100px");
    $(".heading").html("NASA").css("translate", "200px");
    $(".subheading").html("Algorithms");
    $(".heading1").html("ABC 456");

    $(".bg-darkblue").css("background-color", "#362072");
    $(".layer-1, .layer-2").css("background-color", "#0f113b");

    $(".slide1-img1").css("margin-top", "-900px");
    $(".slide1-img2").css("margin-top", "2000px");
    $(".slide2-img1").css("margin-top", "-900px");
    $(".slide2-img2").css("margin-top", "2000px");
    $(".slide3-img1, .slide3-img2, .slide3-img4").css("margin-top", "-900px");
    $(".slide3-img3, .slide3-img5").css("margin-top", "2000px");
    $(".slide4-img1").css("margin-top", "200px");
    $(".slide4-img2").css("margin-top", "0px");
    $(".slide5-img1, .slide5-img2, .slide5-img3").css("margin-top", "-900px");
    $(".slide5-img4, .slide5-img5").css("margin-top", "2000px");
    $(".slide6-img1").css("margin-top", "2000px");
    $(".slide7-img1").css("margin-top", "2000px");
    $(".slide7-img2").css("margin-top", "-900px");
}
function sliderFive() {
    setProgress(52);
    $(".dot-1, .dot-2, .dot-3, .dot-4, .dot-5").css("fill", "#7252da");
    $(".dot-6, .dot-7").css("fill", "white");

    $(".optional").css("visibility", "visible").html("Text Headline").css("translate", "-100px");
    $(".heading").html("Text Headline").css("translate", "100px");
    $(".subheading").html("Footer Headline").css("translate", "200px");
    $(".heading1").html("ABC 567");

    $(".bg-darkblue").css("background-color", "aquamarine");
    $(".layer-1, .layer-2").css("background-color", "#134ca2");

    $(".slide1-img1").css("margin-top", "-900px");
    $(".slide1-img2").css("margin-top", "2000px");
    $(".slide2-img1").css("margin-top", "-900px");
    $(".slide2-img2").css("margin-top", "2000px");
    $(".slide3-img1, .slide3-img2, .slide3-img4").css("margin-top", "-900px");
    $(".slide3-img3, .slide3-img5").css("margin-top", "2000px");
    $(".slide4-img1").css("margin-top", "2000px");
    $(".slide4-img2").css("margin-top", "-900px");
    $(".slide5-img1").css("margin-top", "-90px");
    $(".slide5-img2").css("margin-top", "-30px");
    $(".slide5-img3").css("margin-top", "160px");
    $(".slide5-img4").css("margin-top", "430px");
    $(".slide5-img5").css("margin-top", "330px");
    $(".slide6-img1, .slide7-img1, .slide7-img2").css("margin-top", "2000px");
}
function sliderSix() {
    setProgress(64);
    $(".dot-1, .dot-2, .dot-3, .dot-4, .dot-5, .dot-6").css("fill", "#7252da");
    $(".dot-7").css("fill", "white");

    $(".optional").css("visibility", "visible").html("Developing ERP Solutions for").css("translate", "-100px");
    $(".heading").html("Text Headline").css("translate", "100px");
    $(".subheading").html("In Future Industry").css("translate", "200px");
    $(".heading1").html("ABC 678");

    $(".bg-darkblue").css("background-color", "lightgray");
    $(".layer-1, .layer-2").css("background-color", "#134ca2");

    $(".slide1-img1").css("margin-top", "-900px");
    $(".slide1-img2").css("margin-top", "2000px");
    $(".slide2-img1, .slide2-img2").css("margin-top", "-900px");
    $(".slide3-img1, .slide3-img2, .slide3-img4").css("margin-top", "-900px");
    $(".slide3-img3, .slide3-img5").css("margin-top", "2000px");
    $(".slide4-img1").css("margin-top", "2000px");
    $(".slide4-img2").css("margin-top", "-900px");
    $(".slide5-img1, .slide5-img2, .slide5-img3").css("margin-top", "-900px");
    $(".slide5-img4, .slide5-img5").css("margin-top", "2000px");
    $(".slide6-img1").css("margin-top", "0px");
    $(".slide7-img1").css("margin-top", "2000px");
    $(".slide7-img2").css("margin-top", "-900px");
}
function sliderSeven(){
    setProgress(75);
    document.querySelector(".dot-1").style.fill="#7252da";
    document.querySelector(".dot-2").style.fill="#7252da";
    document.querySelector(".dot-3").style.fill="#7252da";
    document.querySelector(".dot-4").style.fill="#7252da";
    document.querySelector(".dot-5").style.fill="#7252da";
    document.querySelector(".dot-6").style.fill="#7252da";
    document.querySelector(".dot-7").style.fill="#7252da";

    document.querySelector(".optional").style.visibility="visible";
    document.querySelector(".optional").innerHTML="Biggest Classifieds";
    document.querySelector(".optional").style.translate="-100px";
    document.querySelector(".heading").innerHTML="East Asia";
    document.querySelector(".heading").style.translate="100px";
    document.querySelector(".subheading").innerHTML="Countries";
    document.querySelector(".subheading").style.translate="100px";
    document.querySelector(".heading1").innerHTML="ABC 23478";

    document.querySelector(".bg-darkblue").style.backgroundColor="#4ac450";
    document.querySelector(".layer-1").style.backgroundColor="#01824d";
    document.querySelector(".layer-2").style.backgroundColor="#01824d";

    document.querySelector(".slide1-img1").style.marginTop="-900px";
    document.querySelector(".slide1-img2").style.marginTop="2000px";
    document.querySelector(".slide2-img1").style.marginTop="-900px";
    document.querySelector(".slide2-img2").style.marginTop="2000px";
    document.querySelector(".slide3-img1").style.marginTop="-900px";
    document.querySelector(".slide3-img2").style.marginTop="-900px";
    document.querySelector(".slide3-img3").style.marginTop="2000px";
    document.querySelector(".slide3-img4").style.marginTop="-900px";
    document.querySelector(".slide3-img5").style.marginTop="2000px";
    document.querySelector(".slide4-img1").style.marginTop="2000px";
    document.querySelector(".slide4-img2").style.marginTop="-900px";
    document.querySelector(".slide5-img1").style.marginTop="-900px";
    document.querySelector(".slide5-img2").style.marginTop="-900px";
    document.querySelector(".slide5-img3").style.marginTop="-900px";
    document.querySelector(".slide5-img4").style.marginTop="2000px";
    document.querySelector(".slide5-img5").style.marginTop="2000px";
    document.querySelector(".slide6-img1").style.marginTop="2000px";
    document.querySelector(".slide7-img1").style.marginTop="300px";
    document.querySelector(".slide7-img2").style.marginTop="70px";
}