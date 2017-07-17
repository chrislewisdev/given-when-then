var App = React.createClass(
{
    getInitialState: function()
    {
        var counter = 0;

        return { 
            cards: this.props.cards.map(function (card)
            {
                return { id: counter++, given: card.given, when: card.when, then: card.then };
            }), 
            counter: counter
        };
    },

    onAddCard: function(index)
    {
        var self = this;
        return function()
        {
            self.setState(function(previousState)
            {
                previousState.cards.splice(index + 1, 0, { id: previousState.counter, given: [], when: [], then: [] });
                return { cards: previousState.cards, counter: previousState.counter + 1, focusId: previousState.counter };
            });
        };
    },

    onDeleteCard: function(index)
    {
        var self = this;
        return function()
        {
            self.setState(function(previousState)
            {
                if (previousState.cards.length > 1) previousState.cards.splice(index, 1);
                return { cards: previousState.cards };
            });
        };
    },

    onWindowKeyPress: function(event)
    {
        if (event.code === 'KeyM' && event.ctrlKey)
        {
            event.preventDefault();
            this.onAddCard(this.state.cards.length)();  
        }
    },

    componentDidMount: function()
    {
        document.addEventListener("keypress", this.onWindowKeyPress);
    },

    render: function()
    {
        var self = this;

        var cards = this.state.cards.map(function (card, index)
        {
            return React.createElement(Card, 
            {
                key: card.id,
                given: card.given,
                when: card.when, 
                then: card.then,
                onAddCard: self.onAddCard(index),
                onDeleteCard: self.onDeleteCard(index),
                takeFocus: card.id === self.state.focusId
            });
        });

        return React.createElement('div', { className: 'body' }, cards);
    }
});