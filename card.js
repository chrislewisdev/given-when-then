var Card = React.createClass(
{
    getInitialState: function()
    {
        return { passing: false };
    },

    onCheckOff: function(event)
    {
        this.setState(function (previousState)
        {
            return { passing: !previousState.passing };
        });
    },

    render: function()
    {
        return React.createElement('div', null, 
            React.createElement('div', { className: 'card-wrapper ' + (this.state.passing === true ? 'passing' : '') },
                React.createElement('div', { className: 'gwt-card' },
                    React.createElement('div', { className: 'remove-card' },
                        React.createElement('i', { className: 'button fa fa-times-circle fa-2x', onClick: this.props.onDeleteCard })
                    ),
                    React.createElement(Group, { type: 'given', rows: this.props.given, takeFocus: this.props.takeFocus }),
                    React.createElement(Group, { type: 'when', rows: this.props.when  }),
                    React.createElement(Group, { type: 'then', rows: this.props.then  }),
                    React.createElement('div', { className: 'check-off' },
                        React.createElement('i', { className: 'button fa fa-2x ' + (this.state.passing === true ? 'fa-check-square-o' : 'fa-square-o'), onClick: this.onCheckOff })
                    )
                )
            ),
            React.createElement('div', { className: 'add-card' },
                React.createElement('i', { className: 'button fa fa-plus-circle fa-lg', onClick: this.props.onAddCard })
            )    
        );
    }
});