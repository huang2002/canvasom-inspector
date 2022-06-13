import { createClass } from 'super-x';

export const COMMON = createClass({
    margin: '0',
    padding: '0',
    lineHeight: '1.5em',
});

export const INSPECTOR_CONTAINER = createClass({
    position: 'fixed',
    right: '10px',
    top: '10px',
    flexDirection: 'column',
    width: '250px',
    height: '400px',
    backgroundColor: '#FFF',
    border: 'solid 1px #000',
    boxShadow: '#666 0 0 10px',
    color: '#000',
    overflow: 'hidden',
    zIndex: '999',
});

export const INSPECTOR_SECTION = createClass({
    padding: '1em',
    borderTop: 'solid 1px #CCC',
}, {
    ':first-child': {
        borderTop: 'none',
    },
});

export const INSPECTOR_TITLE = createClass({
    fontSize: '1.2em',
});

export const INSPECTOR_ACTION = createClass({
    display: 'block',
    textDecoration: 'underline',
    color: '#00F',
    whiteSpace: 'nowrap',
});

export const NODE_DISPLAY_TAG = createClass({
    color: '#C00',
});

export const NODE_DISPLAY_ID = createClass({
    color: '#06F',
});

export const NODE_DISPLAY_CLASS = createClass({
    color: '#090',
});

export const INSPECTOR_NODE_CHILDREN = createClass({
    listStyle: 'none',
    overflow: 'auto',
}, {
    ':empty::after': {
        content: '"(empty)"',
    },
});

export const INSPECTOR_NODE_CHILD = createClass({
    listStyle: 'none',
    cursor: 'pointer',
}, {
    ':hover': {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    ':focus': {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    ':active': {
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});
