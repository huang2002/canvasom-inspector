import { CanvasNode } from 'canvasom';
import { createElement as h, ReactiveValue } from 'super-x';
import * as CLASS from './class';

export const InspectorSection = (
    childNodes: unknown[],
) => (
    h('section', {
        class: [CLASS.COMMON, CLASS.INSPECTOR_SECTION],
    },
        childNodes,
    )
);

export const InspectorTitle = (text: string) => (
    h('p', {
        class: [CLASS.COMMON, CLASS.INSPECTOR_TITLE],
    }, [
        text,
    ])
);

export const InspectorAction = (
    text: string,
    title: string,
    callback: () => void,
) => (
    h('a', {
        class: [CLASS.COMMON, CLASS.INSPECTOR_ACTION],
        href: 'javascript:;',
        title,
        listeners: {
            click: callback,
        },
    }, [
        text,
    ])
);

export const NodeDisplay = (
    node: CanvasNode<any>,
    noWrap = false,
) => {

    const id = node.id ? ('#' + node.id) : '';
    const classNames = node.classNames.length
        ? ('.' + node.classNames.join('.'))
        : '';
    const title = node.tag + id + classNames;

    return h('p', {
        class: [CLASS.COMMON],
        title,
        style: {
            overflow: noWrap ? 'hidden' : 'visible',
            whiteSpace: noWrap ? 'nowrap' : 'normal',
            textOverflow: noWrap ? 'ellipsis' : 'clip',
        },
    }, [
        h('span', { // tag
            class: [CLASS.NODE_DISPLAY_TAG],
        }, [
            node.tag,
        ]),
        h('span', { // id
            class: [CLASS.NODE_DISPLAY_ID],
        }, [
            id,
        ]),
        h('span', { // class
            class: [CLASS.NODE_DISPLAY_CLASS],
        }, [
            classNames,
        ]),
    ]);

};

export const InspectorElement = (
    $target: ReactiveValue<CanvasNode<any>>,
    $visibility: ReactiveValue<boolean>,
) => (
    h('div', { // container
        class: [CLASS.COMMON, CLASS.INSPECTOR_CONTAINER],
        style: {
            display: $visibility.map(
                visible => visible ? 'block' : 'none'
            ),
        },
    }, [

        InspectorSection([
            InspectorTitle('Actions:'),
            InspectorAction(
                'Log current node',
                'Show current node in console.',
                () => {
                    console.log($target.current);
                }
            ),
            InspectorAction(
                'Inspect parent node',
                'Inspect parent node.',
                () => {
                    const { parentNode } = $target.current;
                    if (parentNode) {
                        $target.setSync(parentNode);
                    } else {
                        alert('No parent node available!');
                    }
                }
            ),
            InspectorAction(
                'Hide inspector panel',
                'Hide inspector panel.',
                () => {
                    $visibility.setSync(false);
                }
            ),
        ]),

        InspectorSection([
            InspectorTitle('Current Node:'),
            $target.map(NodeDisplay),
        ]),

        $target.map(target => (
            InspectorSection([
                InspectorTitle('Child Node(s):'),
                h('ol', {
                    class: [CLASS.COMMON, CLASS.INSPECTOR_NODE_CHILDREN],
                },
                    target.childNodes.map(childNode => (
                        h('li', {
                            class: [CLASS.COMMON, CLASS.INSPECTOR_NODE_CHILD],
                            listeners: {
                                click() {
                                    $target.setSync(childNode);
                                },
                            },
                        }, [
                            NodeDisplay(childNode, true),
                        ])
                    ))
                ),
            ])
        )),

    ])
);
