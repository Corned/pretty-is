var hidable = [
    "header[class=\"main-header\"]",
    "nav[class=\"secondary-navigation\"]",
    "div[class=\"order-is-extra-wrapper\"]",
    "aside[class=\"lane right-position\"]",
    "aside[class=\"lane right-position\"] > div[class=\"block \"]",
    "div[class=\"share-buttons\"]",
    "div[class=\"default-buttons\"]",
    "footer[class=\"main-footer\"]",
    "section[class=\"is-list six-most-popular\"]",
    //"div[id=\"page-main-content\"] > div[class=\"block \"]",
    "div[class=\"related-links\"]",
    "div[class=\"article-navigation top\"]",
    "li[class=\"gap  item-level-one\"]",
    "li[class=\"taloussanomat has-subs item-level-one\"]",
    "li[class=\"porssi has-subs item-level-one\"]",
    "li[class=\"yrityshaku has-subs item-level-one\"]",
    "li[class=\"omaraha hide-small  item-level-one\"]",
    "div[class=\"global-search\"]",
    "div[class=\"article-nav-heading\"]",
    "div[class=\"article-navigation-container\"]",
    "div[class=\"dropdown\"]",
    "span[class=\"toggle\"]",
    "div[class=\"breaking-news-tag\"]",
    "div[class=\"breaking-news\"]",
    "table[id=\"kumppaneiden-tarjoukset\"]",
    "div[class=\"multiBoxAd\"]",
    "div[class=\"embedded\"]",
    "ul[class=\"teaser-links\"]",
    "script[id=\"adblock-detect\"]"
];

var remove_class = {
    "div[id=\"page-main-content\"]": "lane main-position",
    "div[class=\"wrapper site-wrapper\"]": "wrapper site-wrapper"
}

// Change page CSS
$("div").css("margin", "auto");
$("div").css("float", "none");
$(".article-title").css("font-size", "80px");
$(".article-title").css("text-align", "center");
$(".article-title").css("padding", "10px");
$("div[id=\"page-main-content\"] > div[class=\"block \"]").css("padding-bottom", "20px");
$("div[id=\"page-main-content\"] > div[class=\"block \"]").css("padding-top", "0px");
$("div[id=\"page-main-content\"]").css("padding", "10px");
$("body").css("background-color", "#da2128");
$("body").css("padding", "10px");
$("body").css("padding-bottom", "200px");
$("section[class=\"search-form\"]").css("padding-bottom", "10px");

$("main").prepend(`
    <center>
        <a href="http://www.is.fi/">
            <img class=\"huge-header\" src=\"http://www.is.fi/assets/images/is-logo-header.c6507cf14242b017f.svg\"></img>
        </a>
    </center>`
);
$("img[class=\"huge-header\"]").css("max-width", "950px");
$("img[class=\"huge-header\"]").css("margin", "auto");
$("img[class=\"huge-header\"]").css("float", "none");

// Remove stuff
for (let index = 0; index < hidable.length; index++) {
    var criteria = hidable[index];
    $(criteria).remove();
}

const keys = Object.keys(remove_class);
for (let index = 0; index < keys.length; index++) {
    var key = keys[index];
    var class_to_remove = remove_class[key];
    $(key).removeClass(class_to_remove);
}

$(document).ready(function() {
    $(".splash-screen").fadeOut(100);
    $(".cover").fadeOut(200);
})
