const { CardFactory, ActionTypes } = require('botbuilder');
const MenuCard = CardFactory.thumbnailCard(
  null,
  null,
  CardFactory.actions([
    {
      type: ActionTypes.ImBack,
      title: 'Агенда',
      value: 'агенда'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Спикеры',
      value: 'спикеры'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Место проведения',
      value: 'место проведения'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Как добраться',
      value: 'как добраться'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Помощь',
      value: 'помощь'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Об о мне',
      value: 'об о мне'
    }
  ])
);

exports.MenuCard = MenuCard;
