var Card = React.createClass(
{
    onAddCard: function()
    {
        this.props.onAddCard(this.props.index + 1);
    },

    render: function()
    {
        return React.createElement('div', null, 
            React.createElement('div', { className: 'card-wrapper ' + this.props.index },
                React.createElement('div', { className: 'gwt-card' },
                    React.createElement(Group, { type: 'given', rows: this.props.given, takeFocus: this.props.takeFocus }),
                    React.createElement(Group, { type: 'when', rows: this.props.when  }),
                    React.createElement(Group, { type: 'then', rows: this.props.then  }),
                    React.createElement('div', { className: 'check-off' },
                        React.createElement('i', { className: 'fa fa-square-o fa-2x' })
                    )
                )
            ),
            React.createElement('div', { className: 'add-card' },
                React.createElement('i', { className: 'fa fa-plus-circle fa-lg', onClick: this.onAddCard })
            )    
        );
    }
});