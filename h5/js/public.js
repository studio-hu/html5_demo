// 滚动监听
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let left = document.querySelector('.header-left')
    let right = document.querySelector('.header-right-item')
    let change = document.querySelector('.header-inside')

    if (window.scrollY > 0) {
        header.classList.add('header-latter');
        left.classList.add('header-left-latter')
        right.classList.add('header-right-latter')
        change.classList.add('header-inside-latter')
    } else {
        header.classList.remove('header-latter');
        left.classList.remove('header-left-latter')
        right.classList.remove('header-right-latter')
        change.classList.remove('header-inside-latter')
    }

})

// window.addEventListener('scroll', function() {
//     let header = document.querySelector('.header');
//     if (window.scrollY > 0) {
//         // console.log('有阴影了');
//         header.classList.add('header-shadow')
//     } else {
//         header.classList.remove('header-shadow')
//     }
// })