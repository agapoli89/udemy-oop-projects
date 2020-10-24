import { canvas } from './Canvas.esm.js';
import { SCALE_PROPERTY } from './MainMenu.esm.js';

class MouseController {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.state = 0;

        canvas.element.addEventListener('mousedown', event => this.mouseDown(event));
    }

    mouseDown(event) {
        event.preventDefault();

        const offset = canvas.element.getBoundingClientRect();
        const scale = Number(document.documentElement.style.getPropertyValue(SCALE_PROPERTY));

        this.X = (event.clientX - offset.left) / scale;
        this.y = (event.clientY - offset.top) / scale;
    }
}

export const mouseController = new MouseController();