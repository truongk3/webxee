
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


var ulist = document.getElementById("getClose");
ulist.setAttribute('style', 'display: none !important;');

var meme = document.getElementById('meme');
var meme1 = document.getElementById('meme1');


function ShowPages() {
    
    if(ulist.style.display === 'none') {
        ulist.setAttribute('style', 'display: block !important;');
        meme.setAttribute('style', 'display: none');
        meme1.setAttribute('style', 'display: inline');
    } else {
        ulist.setAttribute('style', 'display: none !important');
        meme1.setAttribute('style', 'display: none');
        meme.setAttribute('style', 'display: inline');
    }
}

function HideMenu() {
    //hide menu
    var hide = document.querySelector('ul.component'); 
    //hide div cua background lam mo
    var cover = document.querySelector('div.coverBackgr');
    //show menu-list
    var showList = document.querySelector('.menu-list');

    hide.setAttribute('style', 'right: -15rem');

    //hide pages
    ulist.setAttribute('style', 'display: none !important;');
    cover.setAttribute('style', 'display: none !important');
    showList.setAttribute('style', 'right: 1rem');
    meme1.setAttribute('style', 'display: none');
    meme.setAttribute('style', 'display: inline');
}

function ShowMenu() {
    //show menu
    var show = document.querySelector('ul.component');
    //show div cua background lam mo
    var cover = document.querySelector('div.coverBackgr');
    //hide menu-list
    var hideList = document.querySelector('.menu-list');

    show.setAttribute('style', 'right: 2rem');
    cover.setAttribute('style', 'display: block');
    hideList.setAttribute('style', 'right: -3rem');
}





var a = document.getElementsByClassName('picSlide');

function slideL() {
    var pos = a.length - 1;
    var count = 0;
    for(var k = 0; k < a.length; k++) {
     if(!(a[k].style.display === 'none')) {
         count++;
         pos = k;
     }
    }
    if(count > 1) pos = 0; 
    if(pos === a.length - 1) {
         for(var temp = 1; temp < a.length; temp++) {
             a[temp].setAttribute('style', 'display: none');
         }
         a[0].setAttribute('style', 'display: block');
    } else {
         for(var temp = 0; temp < a.length; temp++) {
             if(temp === pos + 1) continue;
             a[temp].setAttribute('style', 'display: none');
         }
         a[pos + 1].setAttribute('style', 'display: block');
    }
 }

 function slideR() {
    //lay ra vi tri dang hien thi
    //tren slider(vi tri phan tu nho nhat co display la block)
    var posmin = a.length - 1;
    for(var k = a.length -1; k >= 0 ; k--) {
        if(!(a[k].style.display === 'none' ) && k < posmin) {
            posmin = k;
        }
    }
    if(posmin === 0) {
        for(var temp = 0; temp < a.length - 1; temp++) {
            a[temp].setAttribute('style', 'display: none');
        }
        a[a.length - 1].setAttribute('style', 'display: block');
    } else {
        for(var temp = 0; temp < a.length; temp++) {
            if(temp === (posmin - 1)) continue;
            a[temp].setAttribute('style', 'display: none');
        }
        a[posmin - 1].setAttribute('style', 'display: block');
    }  
}

setInterval(function() {
    var temp = document.querySelector('.autoPlay');
    temp.click();
}, 2500)

function Lock() {
    var play = document.querySelector('.right');
    var lock = document.querySelector('.lock');
    var icon = document.querySelectorAll('.lock > i');

    if(!(play.classList.contains('autoPlay'))) {
        icon[1].setAttribute('style', 'display: block');
        icon[0].setAttribute('style', 'display: none');
        play.classList.add('autoPlay');
        lock.style.backgroundColor = 'transparent';
    } else {
        icon[0].setAttribute('style', 'display: block; color: white');
        icon[1].setAttribute('style', 'display: none');
        play.classList.remove('autoPlay');
        lock.style.backgroundColor = 'black';
    }

}