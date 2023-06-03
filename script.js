window.onload = function() {
    var photos = [];
    var fileNames = [];
    var captions = [];
    var descriptions = [];
    var imageList = [];

    for (var i = 0; i < 10; i++) {
        fileNames.push("pet" + (i + 1));
        photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
        if (i < 5) {
            captions.push("cat " + (i + 1));
        } else {
            captions.push("dog " + (i - 4));
        }
        descriptions.push("This is a description of " + captions[i]);
        var image = "<li class='photo' onmouseover='showCaption(this)' onmouseout='hideCaption(this)' onclick='showDescription(this)'>" +
            photos[i] +
            "<div class='caption'>" + captions[i] + "</div>" +
            "<div class='description' style='display: none;'>" + descriptions[i] + "</div>" +
            "</li>";
        imageList.push(image);
    }

    document.getElementById("album").innerHTML = imageList.join("");
}

function showCaption(element) {
    var caption = element.getElementsByClassName("caption")[0];
    caption.style.display = "block";
}

function hideCaption(element) {
    var caption = element.getElementsByClassName("caption")[0];
    caption.style.display = "none";
}

function showDescription(element) {
    var description = element.getElementsByClassName("description")[0];
    description.style.display = "block";
}

function closeInfoBox() {
    var infoBox = document.getElementById("infoBox");
    infoBox.style.display = "none";
}

function closeInfoBox() {
    var infoBox = document.getElementById("infoBox");
    infoBox.style.display = "none";
}

function openLightbox(element) {
    var imageSrc = element.getAttribute("data-image");
    var caption = element.getAttribute("data-caption");
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;
    lightboxImage.alt = caption;
    lightbox.style.display = "block";
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
    

