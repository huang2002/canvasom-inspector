// @ts-check
/// <reference types="canvasom" />
/// <reference types=".." />

const canvasRoot = new COM.CanvasRoot({
    id: 'canvas-root',
    renderer: new COM.Renderer({
        width: 400,
        height: 300,
    }),
});

canvasRoot.renderer.canvas.style.border = 'solid 1px #F00';

canvasRoot.appendChild(
    COM.create(COM.RectNode, {
        classNames: ['shape', 'rect'],
        offsetX: 50,
        offsetY: 50,
        width: 150,
        height: 100,
        style: {
            fillStyle: '#FF0',
        },
    },
        Array.from(
            { length: 10 },
            (_, i) => (
                COM.create(COM.RectNode, {
                    classNames: ['shape', 'rect', 'dot'],
                    offsetX: 5 * (2 * i + 1),
                    offsetY: 5,
                    width: 5,
                    height: 5,
                    style: {
                        fillStyle: '#09F',
                    },
                })
            )
        )
    )
);

canvasRoot.appendChild(
    COM.create(COM.ArcNode, {
        classNames: ['shape', 'circle'],
        offsetX: 150,
        offsetY: 50,
        radius: 50,
        style: {
            fillStyle: '#0F0',
        },
    })
);

canvasRoot.appendChild(
    COM.create(COM.RectNode, {
        classNames: ['shape', 'rect'],
        offsetX: 100,
        offsetY: 100,
        width: 150,
        height: 100,
        style: {
            fillStyle: '#F00',
        },
    }, [
        COM.create(COM.TextNode, {
            id: 'a-very-long-id',
            classNames: ['a-very-long-class-name'],
            stretch: 1,
            content: 'CI',
            style: {
                fillStyle: '#FF0',
                textAlign: 'center',
                textBaseline: 'middle',
            },
        }),
    ])
);

document.body.appendChild(canvasRoot.renderer.canvas);
canvasRoot.updateAndRender();

const canvasInspector = new CI.Inspector({
    target: canvasRoot,
});
document.body.appendChild(canvasInspector.element);
canvasInspector.show();
