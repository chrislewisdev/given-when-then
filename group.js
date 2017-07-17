var Group = React.createClass(
{
    getInitialState: function()
    {
        var counter = 0;

        return { 
            rows: this.props.rows.map(function (rowContent) 
            {
                return { id: counter++, content: rowContent};
            }),
            counter: counter
        };
    },

    onAddLine: function(index)
    {
        var self = this;
        return function()
        {
            self.setState(function(previousState)
            {
                previousState.rows.splice(index + 1, 0, { id: previousState.counter, content: ''});
                return { 
                    rows: previousState.rows, 
                    focusId: previousState.counter, 
                    counter: previousState.counter + 1
                };
            });
        };
    },

    onDeleteLine: function(index)
    {
        var self = this;
        return function()
        {
            if (index > 0)
            {
                self.setState(function(previousState)
                {
                    previousState.rows.splice(index, 1);
                    return { 
                        rows: previousState.rows, 
                        focusId: previousState.rows[index - 1].id
                    };
                });
            }
        };
    },

    componentDidMount: function()
    {
        if (this.state.rows.length === 0) 
            this.setState({ rows: [{ id: 0, content: '' }], counter: 1 });
    },

    render: function()
    {
        var self = this;

        return React.createElement('div', { className: 'group ' + this.props.type },
            this.state.rows.map(function (row, index)
            {
                var label = index === 0 ? groupTypes[self.props.type] : 'and';
                return React.createElement(Row, 
                {
                    key: row.id, 
                    label: label, 
                    content: row.content, 
                    onNewLine: self.onAddLine(index),
                    onDeleteLine: self.onDeleteLine(index),
                    takeFocus: row.id === self.state.focusId || self.props.takeFocus && index === 0
                });
            })
        );
    }
});