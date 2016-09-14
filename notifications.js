/**
 * Created by championswimmer on 14/09/16.
 */
var path = require('path');
var options = [
    {
        title: "Basic Notification",
        body: "Simple short message"
    },
    {
        title: "Image Notification",
        body: "For information, or just plain trolling",
        icon: path.join(__dirname, 'img', 'notification_image.png')
    }
]

function doNotify(evt) {
    if (evt.srcElement.id == "basic") {
        new Notification(options[0].title, options[0]);
    }
    else if (evt.srcElement.id == "image") {
        new Notification(options[1].title, options[1]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("basic").addEventListener("click", doNotify);
    document.getElementById("image").addEventListener("click", doNotify);
})