var React = require('react');
var assign = require('object-assign');


// Use like:
//
// <IconSVG src={require("svg-inline!icon.svg")} />
//
var IconSVG = React.createClass({
    render: function render() {
        var className = [(this.props.className ||  ''), 'icon-svg'].join(' ');
        var props = assign({}, this.props,
            {
                src: null,
                dangerouslySetInnerHTML: { __html: this.props.src },
                className: className
            }
        );

        return React.createElement('i', props);
    }
});

module.exports = IconSVG;
