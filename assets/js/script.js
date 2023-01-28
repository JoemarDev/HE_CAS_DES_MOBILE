$(document).ready(() => {
    InitCarousel();
});


const InitCarousel = () => {
    $('.owl-carousel').owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
}


let DefaultValue = 50_269_923_500.01

setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 50);
    console.log(DefaultValue)
    $('#odometer').html(DefaultValue)
}, 4000)


const OpenCasinoDialog = () => {
    CloseDialogs();
    $('.CASINO_GAME_DIALOG').show();
}

const OpenSlotDialog = () => {
    CloseDialogs();
    $('.SLOT_GAME_DIALOG').show();
}

const OpenSportDialog = () => {
    CloseDialogs();
    $('.SPORT_GAME_DIALOG').show();
}

const CloseDialogs = () => {
    $('.CASINO_GAME_DIALOG').hide();
    $('.SLOT_GAME_DIALOG').hide();
    $('.SPORT_GAME_DIALOG').hide();
}


const OpenLoginDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.LOGIN_DIALOG').show()
}



const CloseLoginDialog = () => {
    $('.LOGIN_DIALOG').hide()

    $('body').css("overflowY", "scroll");
}


$('.game-display').click(() => {
    OpenLoginDialog();
})



const OpenRegisterDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.REGISTER_DIALOG').show()
}



const CloseRegisterDialog = () => {
    $('.REGISTER_DIALOG').hide()
    $('body').css("overflowY", "scroll");
}




