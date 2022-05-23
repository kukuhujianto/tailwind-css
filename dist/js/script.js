// Navbar Fixed
window.onscroll = function() { //ketika di scroll jalankan fungsi
    const header = document.querySelector('header'); //panggil elemen header
    const fixedNav = header.offsetTop; //sebelum di scroll jarak header dengan top(web paling atas) = 0, ketika di scroll jaraknya(isi fixedNav) nambah
    
    if (window.scrollY > fixedNav) { //jika di scroll
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove("navbar-fixed");
    }
}

// Hamburger Line
const hamburger = document.querySelector('#hamburger'); //panggil id hamburger di elemen button
const navMenu = document.querySelector('#nav-menu'); //panggil id hamburger di elemen nav

hamburger.addEventListener('click' , function() { //ketika di klik jalan fungsi dibawah
  hamburger.classList.toggle("hamburger-active"); //tambah/hapus(men-toggle) class hamburger-active
  navMenu.classList.toggle("hidden"); //tambah/hapus(men-toggle) class hidden
})