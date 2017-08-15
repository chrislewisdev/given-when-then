var groupTypes = 
{
    given: 'Given',
    when: 'When',
    then: 'Then'
};

var Row = React.createClass(
{
    onKeyDown: function(event)
    {
        if (event.key === 'Enter')
        {
            event.preventDefault();
            this.props.onNewLine();
        }
        else if (event.key === 'Backspace' && event.target.innerText === '')
        {
            event.preventDefault();
            this.props.onDeleteLine();
        }
    },

    onBlur: function(event)
    {
        this.props.onLineChange(event.target.innerText);
    },

    takeFocusIfDesired: function()
    {
        if (this.props.takeFocus)
        {
            window.getSelection().selectAllChildren(this.input);
            window.getSelection().collapseToEnd();
        } 
    },

    componentDidMount: function()
    {
        this.takeFocusIfDesired();
    },

    componentDidUpdate: function()
    {
        this.takeFocusIfDesired(); 
    },

    render: function()
    {
        var self = this;

        return React.createElement('div', { className: 'row' },
            React.createElement('label', null, this.props.label),
            React.createElement('span', 
            { 
                contentEditable: true,
                onKeyDown: self.onKeyDown, 
                suppressContentEditableWarning: true,
                ref: function (element) { self.input = element; },
                onBlur: self.onBlur
            }, this.props.content)
        );
    }
});