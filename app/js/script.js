const mobileNav=document.getElementById('mobile-nav')
const hamburger=document.getElementById('hamburger')
const body=document.getElementsByTagName('body')
mobileNavEnable=()=>{
    if(mobileNav.classList.contains('show')){
        mobileNav.classList.remove('show')
        hamburger.src="images/icon-hamburger.svg"
        body[0].style.overflow='auto'
    } else{
        mobileNav.classList.add('show')
        hamburger.src="images/icon-close.svg"
        body[0].style.overflow='hidden'
        document.documentElement.scrollTop=0
        document.body.scrollTop=0
    }
}