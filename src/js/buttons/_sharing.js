const sharingBtns = document.querySelectorAll('.sharing-btn')
const actions = document.querySelector('#sharing')

sharingBtns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        actions.classList.toggle('closed')
        this.classList.toggle('active')
    })
})