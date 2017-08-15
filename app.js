var App = React.createClass(
{
    getInitialState: function()
    {
        return { 
            cards: this.props.cards.map(function (card)
            {
                return { given: card.given, when: card.when, then: card.then };
            })
        };
    },

    onAddCard: function(index)
    {
        var self = this;
        return function()
        {
            self.setState(function(previousState)
            {
                previousState.cards.splice(index + 1, 0, { given: [], when: [], then: [] });

                localStorage.setItem('cards', JSON.stringify(previousState.cards));

                return { cards: previousState.cards, focusId: index + 1 };
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

                localStorage.setItem('cards', JSON.stringify(previousState.cards));

                return { cards: previousState.cards };
            });
        };
    },

    onCardUpdate: function(index)
    {
        var self = this;
        return function(groups)
        {
            self.setState(function(previousState)
            {
                previousState.cards[index] = { given: groups.given, when: groups.when, then: groups.then };

                localStorage.setItem('cards', JSON.stringify(previousState.cards));

                return { cards: previousState.cards, focusId: -1 };
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
                key: index,
                given: card.given,
                when: card.when, 
                then: card.then,
                onAddCard: self.onAddCard(index),
                onDeleteCard: self.onDeleteCard(index),
                onCardUpdate: self.onCardUpdate(index),
                takeFocus: index === self.state.focusId
            });
        });

        return React.createElement('div', { className: 'body' }, cards);
    }
});