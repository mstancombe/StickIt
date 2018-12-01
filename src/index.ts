/**
 * Site Sticker:
 * Usage: ref css & fa, and ref this file, then call init.
 * Better way would just be reffing this file in future.
 */
export default class StickIt {
    private readonly stickerSizePx: number = 100;
    private addStickerButton: HTMLDivElement;
    private stickerCanvas: HTMLDivElement;

    public constructor(elementToOverlay) {
        /* TODO: add a ref to the site sticker css, if not present. */
        /* TODO: proper scoping of everything (css, script etc..)
        
        /* Create a fixed div at the start fo the given element, if not present. */
        this.stickerCanvas = document.createElement("div");
        this.stickerCanvas.classList.add("sticker-canvas");
    
        /* Create the button to add a new sticker */
        this.addStickerButton = document.createElement("div");
        this.addStickerButton.classList.add("add-sticker");
        this.addStickerButton.innerHTML = "Stick It";
        this.addStickerButton.classList.add("fas");
        this.addStickerButton.classList.add("fa-plus-circle");
        this.addStickerButton.addEventListener("click", this.handleStickerClick);
        
        this.stickerCanvas.appendChild(this.addStickerButton);
        elementToOverlay.appendChild(this.stickerCanvas);
    }
    
    private handleStickerClick = () => {
        //Add a draggable sticker to the canvas.
        let sticker = document.createElement("div");
        sticker.classList.add("sticker");
        
        //Randomise starting location.
        let top = Math.random() * (this.stickerCanvas.offsetHeight - this.stickerSizePx);
        let left = Math.random() * (this.stickerCanvas.offsetWidth - this.stickerSizePx);
    
        //TODO:Grab a random font awesome icon, and colour.
        sticker.classList.add("fas");
        sticker.classList.add('fa-thumbs-up');
        sticker.style.color = 'darkblue';
        sticker.style.left = left + 'px';
        sticker.style.top = top + 'px';
        
        //TODO: random rotation with -30 to +30
        this.stickerCanvas.appendChild(sticker);
    }
}