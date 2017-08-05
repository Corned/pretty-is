function fireContentLoadedEvent () {
    $("body").prepend(`
        <div class="cover">
        </div>
    `);
    $(".cover").css("position", "fixed");
    $(".cover").css("padding", "0");
    $(".cover").css("margin", "0");
    $(".cover").css("top", "0");
    $(".cover").css("left", "0");
    $(".cover").css("width", "100%");
    $(".cover").css("height", "100%");
    $(".cover").css("background-color", "#da2128");
    $(".cover").css("z-index", "100");

    $("body").prepend(`
        <center>
            <a href="http://www.is.fi/">
                <img class=\"splash-screen\" src=\"http://www.is.fi/assets/images/is-logo-header.c6507cf14242b017f.svg\"></img>
            </a>
        </center>`
    );
    $(".splash-screen").css("position", "fixed");
    $(".splash-screen").css("padding", "0");
    $(".splash-screen").css("margin", "0");
    $(".splash-screen").css("top", "0");
    $(".splash-screen").css("left", "0");
    $(".splash-screen").css("width", "100%");
    $(".splash-screen").css("height", "100%");
    $(".splash-screen").css("z-index", "110");

}

function tryToAppend(){
    if(!document.body){
        return setTimeout(tryToAppend, 1);
    }

    fireContentLoadedEvent();
}

tryToAppend();
