window.onload = function() {
    var photos = [];
    var fileNames = [];
    var captions = [];
    var imageList = [];
    var openList = "<li class='photo'>";
    var closeList = "</li>";

    for (var i = 0; i < 10; i++) {
        fileNames.push("pet" + (i + 1));
        photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
        if (i < 5) {
            captions.push("cat " + (i + 1));
        } else {
            captions.push("dog " + (i - 4));
        }
        var image = openList + photos[i] + "<div class='caption'>" + captions[i] + "</div>" + closeList;
        imageList.push(image);
    }

    document.getElementById("album").innerHTML = imageList.join("");
}
window.onload = function() {
    var photos = [];
    var fileNames = [];
    var captions = [];
    var imageList = [];
    var openList = "<li class='photo'>";
    var closeList = "</li>";

    for (var i = 0; i < 10; i++) {
        fileNames.push("pet" + (i + 1));
        photos.push("<img src='images/" + fileNames[i] + ".jpg'>");
        if (i < 5) {
            captions.push("cat " + (i + 1));
        } else {
            captions.push("dog " + (i - 4));
        }
        var image = openList + photos[i] + "<div class='caption' onclick='showInfoBox(\"" + captions[i] + "\")'>" + captions[i] + "</div>" + closeList;
        imageList.push(image);
    }

    document.getElementById("album").innerHTML = imageList.join("");
}

function openInfoBox(title, text) {
    var infoHeading = document.getElementById('infoHeading');
    var infoText = document.getElementById('infoText');

    infoHeading.textContent = title;
    infoText.textContent = text;
    document.getElementById('infoBox').style.display = 'block';
}

function closeInfoBox() {
    document.getElementById('infoBox').style.display = 'none';
}
function showContactInput() {
    var contactMethod = document.getElementById("contactMethod").value;
    var emailLabel = document.getElementById("emailLabel");
    var emailInput = document.getElementById("emailInput");
    var phoneLabel = document.getElementById("phoneLabel");
    var phoneInput = document.getElementById("phoneInput");

    emailLabel.classList.remove("show-label");
    emailInput.style.display = "none";
    phoneLabel.classList.remove("show-label");
    phoneInput.style.display = "none";

    if (contactMethod === "email") {
        emailLabel.classList.add("show-label");
        emailInput.style.display = "block";
    } else if (contactMethod === "phone") {
        phoneLabel.classList.add("show-label");
        phoneInput.style.display = "block";
    }
}