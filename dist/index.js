/**
 * Site Sticker:
 * Usage: ref css & fa, and ref this file, then call init.
 * Better way would just be reffing this file in future.
 */
var StickIt = /** @class */ (function () {
    function StickIt(elementToOverlay) {
        var _this = this;
        this.stickerSizePx = 100;
        this.handleStickerClick = function () {
            //Add a draggable sticker to the canvas.
            var sticker = document.createElement("div");
            sticker.classList.add("sticker");
            //Randomise starting location.
            var top = Math.random() * (_this.stickerCanvas.offsetHeight - _this.stickerSizePx);
            var left = Math.random() * (_this.stickerCanvas.offsetWidth - _this.stickerSizePx);
            //TODO:Grab a random font awesome icon, and colour.
            sticker.classList.add("fas");
            sticker.classList.add('fa-thumbs-up');
            sticker.style.color = 'darkblue';
            sticker.style.left = left + 'px';
            sticker.style.top = top + 'px';
            //TODO: random rotation with -30 to +30
            _this.stickerCanvas.appendChild(sticker);
        };
        /* TODO: add a ref to the site sticker css, if not present. */
        /* TODO: proper scoping of everything (css, script etc..)
        
        /* Create a fixed div at the start fo the given element, if not present. */
        this.stickerCanvas = document.createElement("div");
        this.stickerCanvas.classList.add("sticker-canvas");
        /* Create the button to add a new sticker */
        this.addStickerButton = document.createElement("div");
        this.addStickerButton.classList.add("add-sticker");
        
        this.addStickerButton.classList.add("fas");
        this.addStickerButton.classList.add("fa-plus-circle");
        this.addStickerButton.addEventListener("click", this.handleStickerClick);
        this.stickerCanvas.appendChild(this.addStickerButton);
        elementToOverlay.appendChild(this.stickerCanvas);
    }
    return StickIt;
}());
export default StickIt;
