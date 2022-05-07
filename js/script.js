const nav = document.querySelector('nav');
const body = document.querySelector('body');
const message = document.querySelector('.message');
const messageModal = document.querySelector('.order .message_modal');

let navHeight = nav.clientHeight
body.style.paddingTop = navHeight + 'px'
nav.style.transition = '0.4s'
message.style.transition = '0.4s'

var scrollOld = 0
var scrollNew = 0
document.addEventListener('scroll', (e) => {
    if (scrollY > navHeight) {
        scrollNew = scrollY
        if (!(scrollNew < scrollOld) && scrollNew >= 50) {
            nav.style.transform = 'translateY(-100%)'
        } else {
            nav.style.transform = 'translateY(0)'
        }
        scrollOld = scrollNew
    }
})

message.addEventListener('click', (e) => {
    if (messageModal.classList.contains('active')) {
        message.style.transform = 'rotate(0deg)'
        message.childNodes[1].style.display = 'block'
        message.childNodes[3].style.display = 'none'
        messageModal.classList.remove('active')
    } else {
        message.style.transform = 'rotate(360deg)'
        message.childNodes[1].style.display = 'none'
        message.childNodes[3].style.display = 'block'
        messageModal.classList.add('active')
    }
})