# canvasom-inspector

> A simple inspector for `canvasom`.

## Introduction

This lib provides a simple interface to inspect your canvas object model
powered by [`canvasom`](https://github.com/huang2002/canvasom):

```javascript
const { Inspector } = CI; // UMD global

// create an inspector
const canvasInspector = new Inspector({
    target: CANVAS_NODE_TO_INSPECT,
});

// append the element to the document
document.body.appendChild(canvasInspector.element);

canvasInspector.show();

canvasInspector.update(ANOTHER_NODE); // change target
```

## Links

- [Changelog](./CHANGELOG)
- [License (MIT)](./LICENSE)
