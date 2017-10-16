function init () {
    $("#header").load("/portfolio/views/shared/header.html #headerView", initFoundation);
}

function load_hw5 () {
    $("#hw5").load("/portfolio/anly503/homework/rmdhw5.html");
}

function initFoundation () {
    $(document).foundation();
}

$(init);
$(load_hw5);
