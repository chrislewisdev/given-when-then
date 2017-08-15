var Group = React.createClass(
{
    getInitialState: function()
    {
        return { 
            rows: this.props.rows.map(function (rowContent) 
            {
                return { content: rowContent};
            }),
            focusId: null
        };
    },

    componentWillReceiveProps: function(newProps)
    {
        var rows = JSON.parse(JSON.stringify(newProps.rows));

        if (rows.length === 0) 
            rows = [''];

        this.setState({
            rows: rows.map(function (rowContent) 
            {
                return { content: rowContent};
            })
        });
    },

    onAddLine: function(index)
    {
        var self = this;
        return function()
        {
            var rows = self.state.rows.map(function (row) { return row.content; });

            rows.splice(index + 1, 0, '');

            self.props.onGroupUpdate(rows);

            self.setState({ focusId: index + 1 });
        };
    },

    onDeleteLine: function(index)
    {
        var self = this;
        return function()
        {
            if (index > 0)
            {
                var rows = self.state.rows.map(function (row) { return row.content; });

                rows.splice(index, 1);

                self.props.onGroupUpdate(rows);

                self.setState({ focusId: index - 1 });
            }
        };
    },

    onLineChange: function(index)
    {
        var self = this;
        return function(value)
        {
            var rows = self.state.rows.map(function (row) { return row.content; });

            rows[index] = value;

            self.props.onGroupUpdate(rows);
        };
    },

    componentDidMount: function()
    {
        if (this.state.rows.length === 0) 
            this.setState({ rows: [{ content: '' }] });
    },

    componentDidUpdate: function()
    {
        if (this.state.focusId !== null) this.setState({ focusId: null });
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
                    key: index, 
                    label: label, 
                    content: row.content, 
                    onNewLine: self.onAddLine(index),
                    onDeleteLine: self.onDeleteLine(index),
                    onLineChange: self.onLineChange(index),
                    takeFocus: index === self.state.focusId || self.props.takeFocus && index === 0
                });
            })
        );
    }
});