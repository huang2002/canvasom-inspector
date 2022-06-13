import { CanvasNode } from 'canvasom';
import { ReactiveValue } from 'super-x';
import { InspectorElement } from './InspectorElement';

export interface InspectorOptions {
    target: CanvasNode<any>;
}

export class Inspector {

    constructor(options: InspectorOptions) {
        this.$target = new ReactiveValue(options.target);
        this.$visibility = new ReactiveValue<boolean>(false);
        this.element = InspectorElement(this.$target, this.$visibility);
    }

    readonly element: HTMLElement;

    readonly $target: ReactiveValue<CanvasNode<any>>;

    readonly $visibility: ReactiveValue<boolean>;

    update(target?: CanvasNode<any>) {
        if (target) {
            this.$target.setSync(target);
        } else {
            this.$target.update();
        }
    }

    show() {
        this.$visibility.setSync(true);
    }

    hide() {
        this.$visibility.setSync(false);
    }

}
