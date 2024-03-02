//ClassList
// var btn = document.querySelector('.btn');
// var h1 = document.querySelector('h1');
// console.log(h1.classList);
// btn.addEventListener('click', function() {
//     // h1.className = h1.className + ' abc';
//     // h1.classList.add('abc', 'xyz');
//     // h1.classList.remove('title-1', 'title-2');
//     // h1.classList.replace('title-1', 'abc');
//     // console.log(h1.classList.contains('title-1'));
//     h1.classList.toggle('abc');
// });

var btn = document.querySelector('.btn');
var modal = document.querySelector('.modal');
var closeBtn = modal.querySelector('.close-btn');
var overlay = modal.querySelector('.modal-overlay');

var closeModal = function() {
    modal.classList.remove('open');
}

var openModal = function() {
    modal.classList.add('open')
}

btn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        openModal();
    }
    if (e.key === 'Escape') {
        //Người dùng bấm phím ESC và nhả ra
        closeModal();
    }
})

// setTimeout(openModal, 5000);