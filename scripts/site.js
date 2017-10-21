function init () {
    $("#header").load("/views/shared/header.html #headerView", initFoundation);
}

function initFoundation () {
    $(document).foundation();
}

$(init);
