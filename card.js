var Card = React.createClass(
{
    render: function()
    {
        return React.createElement('div', null, 
            React.createElement('div', { className: 'card-wrapper' },
                React.createElement('div', { className: 'gwt-card' },
                    React.createElement('div', { className: 'remove-card' },
                        React.createElement('i', { className: 'button fa fa-times-circle fa-2x' })
                    ),
                    React.createElement(Group, { type: 'given', rows: this.props.given, takeFocus: this.props.takeFocus }),
                    React.createElement(Group, { type: 'when', rows: this.props.when  }),
                    React.createElement(Group, { type: 'then', rows: this.props.then  }),
                    React.createElement('div', { className: 'check-off' },
                        React.createElement('i', { className: 'button fa fa-square-o fa-2x' })
                    )
                )
            ),
            React.createElement('div', { className: 'add-card' },
                React.createElement('i', { className: 'button fa fa-plus-circle fa-lg', onClick: this.props.onAddCard })
            )    
        );
    }
});