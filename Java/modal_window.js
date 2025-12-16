const TIME = 10000

let open_button = document.getElementById("open_button");
let modal = document.getElementById("modal");
let body = document.getElementsByTagName('body')[0];
let close_button = document.getElementById("close_modal");


open_button.onclick = open_modal;

close_button.onclick = close_modal;

function open_modal() {
    modal.classList.add('open_modal');
    body.classList.add('body_block');
    open_button.classList.add('close_modal');
}

function close_modal() {
    modal.classList.remove('open_modal');
    body.classList.remove('body_block');
    open_button.classList.remove('close_modal');
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(open_modal, TIME);
});

document.addEventListener('click', (e) => {
    if (modal.classList.contains('open_modal')) {
        if (e.target != modal && e.target !=open_button) {
            close_modal();
        }
    }
})