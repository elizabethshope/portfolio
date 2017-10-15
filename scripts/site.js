function init () {
    $("#header").load("/portfolio/views/shared/header.html #headerView", initFoundation);
}

function initFoundation () {
    $(document).foundation();
}

$(init);
