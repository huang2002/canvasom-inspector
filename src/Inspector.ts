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

    update() {
        this.$target.update();
    }

}
