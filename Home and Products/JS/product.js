// PHAN WOW
var wow = document.querySelectorAll('nav div');
for(var i of wow) {
    i.classList.add('wow', 'animate__fadeInUp');
}

var wow1 = document.querySelectorAll('.GalPro > div');
for(var i of wow1) {
    i.classList.add('wow', 'animate__fadeInUp');
}

var wow2 = document.querySelector('section.Ads');
wow2.classList.add('wow', 'animate__fadeInUp');

var wow3 = document.querySelector('footer > div');
wow3.classList.add('wow', 'animate__fadeInUp');

// KET THUC WOW JS

// GO TO TOP FUNCTION
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// GO TO TOP DONE



// HIDE MENU MAC DINH
var show = document.querySelector('.menuCover');
// show.setAttribute('style', 'left: -32%;');

// SHOW MENU CLICK
function ShowMenuCover() {
    // show.setAttribute('style', 'left: 1rem');
    show.classList.add('showMenu');

    var list = document.querySelector('div.head > div.menu > i');
    var cover = document.querySelector('div.cover');
    // THEM ANIMATION CHO CAC ELEMENT TRONG MENU
    var UL = document.querySelector('ul.innerMenu');
    UL.classList.add('animate__flipInX');

    var UL2 = document.querySelector('ul.innerMenu2');
    UL2.classList.add('animate__flipInX');


    list.style.visibility= 'hidden';
    cover.style.display = 'block';
}

// HIDE MENU CLICK
function CloseMenu() {
    // show.setAttribute('style', 'left: -32%');
    show.classList.remove('showMenu');
    var list = document.querySelector('div.head > div.menu > i');
    var cover = document.querySelector('div.cover');

    var UL = document.querySelector('ul.innerMenu');
    var UL2 = document.querySelector('ul.innerMenu2');

    UL.classList.remove('animate__flipInX');
    UL2.classList.remove('animate__flipInX');

    list.style.visibility = 'visible'
    cover.style.display = 'none';


}


//  show anh va ten, gia tien cua xe duoc click
function showGal(obj) {
    var test = obj.id;
    var a = document.querySelector(`#${test} + img`);
   
    var inf = document.querySelector(`#${test} + img + .dataInfo`);
    
    var change = document.querySelector('.picShow > img');
    change.setAttribute('src', a.src);   

    var changeInf = document.querySelector('.GalShow > .dataInfo');
    changeInf.innerHTML = inf.innerHTML;


    change.classList.add('animate__animated', 'animate__backInDown');
    setTimeout(function() {
        change.classList.remove('animate__animated', 'animate__backInDown')
    }, 1000)
}


// THEM ANIMATION CHO LIVE PREVIEW
var animateClass = document.querySelectorAll('.info');
for(var i of animateClass) {
    i.classList.add('animate__animated', 'animate__bounceIn');
}

// THEM ANIMATION CHO PURCHASE NOW
var purchase = document.querySelector('.GalShow > .Buy');
setInterval(function() {
    setTimeout(function() {
        purchase.classList.remove('animate__flipInX')
    }, 1000)
    purchase.classList.add('animate__flipInX')
}, 3000);


// PHAN TIM KIEM
function init() {

    let kw = document.getElementById('keyword');
    
    kw.addEventListener("change", function() {
        let inputValue = this.value.toLowerCase();

        let collection = document.querySelectorAll('.GalPro .dataInfo > p:first-child');

        for(let s of collection) {
            let t = s.innerText.toLowerCase();
            if(t.indexOf(inputValue) >= 0 && inputValue != "") {
                var chuyen = document.querySelector('.search > a.toFind');
                chuyen.setAttribute('href', `#${s.parentElement.parentElement.id}`);
                chuyen.click();

                // THEM ANIMATION KHI TIM KIEM CO
                s.parentElement.parentElement.classList.add('animate__animated', 'animate__bounceIn');
                setTimeout(function() {
                s.parentElement.parentElement.classList.remove('animate__animated', 'animate__bounceIn');
                }, 1000)
            }
        }
    })
    // PHAN CHON LOAI XE DE XEM
    let Sedan = document.querySelector('.sedan');
    let Truck = document.querySelector('.truck');

    let Pro1 = document.querySelector('.GalPro > .Product1');
    let Pro2 = document.querySelector('.GalPro > .Product2');

    Sedan.addEventListener("click", function() {

        if(!(Pro1.style.display === 'flex')) {
            Pro1.style.display = 'flex';
            Pro2.style.display = 'none';
        }
    })

    Truck.addEventListener("click", function() {
        if(!(Pro2.style.display === 'flex')) {
            // Pro2.setAttribute('style', 'display: flex')
            Pro2.style.display = 'flex'
            Pro1.style.display = 'none';

        }
    })
}



