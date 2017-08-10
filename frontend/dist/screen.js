"use strict";
var Display = (function () {
    function Display(color) {
        this.color = color;
    }
    Display.prototype.show = function (className, message) {
        if (document.querySelector(className) !== null) {
            var elem = document.querySelector(className);
            if (elem) {
                elem.textContent = message;
            }
        }
    };
    return Display;
}());
document.addEventListener("DOMContentLoaded", function () {
    var display = new Display("");
    display.show(".go", "Go slow!!");
});
