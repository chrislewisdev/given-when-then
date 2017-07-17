var groupTypes = 
{
    given: 'Given',
    when: 'When',
    then: 'Then'
};

var Row = React.createClass(
{
    getInitialState: function()
    {
        return { content : this.props.content };
    },

    onKeyDown: function(event)
    {
        if (event.key === 'Enter')
        {
            event.preventDefault();
            this.props.onEnter(this.props.index + 1);
        }
        else if (event.key === 'Backspace' && event.target.innerText === '')
        {
            this.props.onDeleteLine(this.props.index);
        }
    },

    componentDidMount: function()
    {
        if (this.props.takeFocus)
        {
            window.getSelection().selectAllChildren(this.input);
            window.getSelection().collapseToEnd();
        } 
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
                ref: function (element) { self.input = element; }
            }, this.state.content)
        );
    }
});