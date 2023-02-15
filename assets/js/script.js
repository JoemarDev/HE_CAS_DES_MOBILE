let isLogin = false;


const Init = () => {
    if (isLogin) {
        $('.guess-container').hide()
        $('.member-container').show()
    } else {
        $('.guess-container').show()
        $('.member-container').hide()
    }
}


$(document).ready(() => {
    InitCarousel();
    Init()
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


const CloseAllDialog = () => {
    $('.GAME_DIALOG').hide();
    $('.LOGIN_WRAPPER').hide();
    $('.REGISTER_WRAPPER').hide();
    $('.NOTE_DIALOG').hide();
    $('.INQUIRY_DIALOG').hide();
    $('.NOTICE_DIALOG').hide();
    $('.EVENT_DIALOG').hide();
    $('.CHANGE_PASSWORD_DIALOG').hide();
    $('.HISTORY_DIALOG').hide();
    $('.COUPON_DIALOG').hide();
    $('.FRIEND_DIALOG').hide();
    $('.BONUS_DIALOG').hide();
    $('.MONEY_MOVE_DIALOG').hide();
    $('.WITHDRAWAL_DIGALOG').hide();
    $('.DEPOSIT_DIGALOG').hide();
    $('.LOGIN_DIALOG').hide()
    $('body').css("overflowY", "scroll");
}



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





const OpenChangePasswordDialog = () => {
    $('.CHANGE_PASSWORD_DIALOG').show();
}

const OpenHistoryDialog = () => {
    $('.HISTORY_DIALOG').show();
}

const OpenCouponDialog = () => {
    $('.COUPON_DIALOG').show();
}

const OpenFriendDialog = () => {
    $('.FRIEND_DIALOG').show();
}

const OpenBonusDialog = () => {
    $('.BONUS_DIALOG').show();
}

const OpenAccountDialog = () => {
    $('.ACCOUNT_DIALOG').show();
}

const OpenDepositDialog = () => {
    $('.DEPOSIT_DIGALOG').show();
}

const OpenWithdrawalDialog = () => {
    $('.WITHDRAWAL_DIGALOG').show();
}

const OpenMoneyMoveDialog = () => {
    $('.MONEY_MOVE_DIALOG').show();
}

const CloseAccountDialog = () => {
    CloseAllDialog();
    $('.ACCOUNT_DIALOG').hide();
}

const OpenNoticeDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.NOTICE_DIALOG').show();
}

const OpenNoticeContent = () => {
    $('.notice_content').toggle();
}

const OpenEventDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.EVENT_DIALOG').show();
}

const OpenEventContent = () => {
    $('.event_content').toggle();
}

const OpenInquiryDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.INQUIRY_DIALOG').show()
}

const WriteInquiry = () => {
    $('.write_inquiry').show();
    $('.inquiry_lists').hide();
}

const OpenNoteDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.NOTE_DIALOG').show()
}


const MemberLogin = () => {
    isLogin = true;
    Init();
    CloseAllDialog()
}

const MemberLogout = () => {
    isLogin = false;
    Init();
    CloseAllDialog()
    CloseAccountDialog()
}

