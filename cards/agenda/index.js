const { CardFactory, ActionTypes } = require('botbuilder');
const AgendaCard = CardFactory.thumbnailCard(
  'Потоки',
  null,
  CardFactory.actions([
    {
      type: ActionTypes.ImBack,
      title: 'Все потоки (dark-gray)',
      value: 'все потоки'
    },
    {
      type: ActionTypes.ImBack,
      title: 'COMMUNICATE (raspberry)',
      value: 'communicate'
    },
    {
      type: ActionTypes.ImBack,
      title: 'CONDUCT (blue)',
      value: 'conduct'
    },
    {
      type: ActionTypes.ImBack,
      title: 'CONTRIBUTE (orange)',
      value: 'contribute'
    }
  ])
);

exports.AgendaCard = AgendaCard;
