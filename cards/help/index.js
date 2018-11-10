const { CardFactory, ActionTypes } = require('botbuilder');
const HelpCard = CardFactory.thumbnailCard(
  'Привет Я GeCon Bot',
  CardFactory.images(['https://d3373sevsv1jc.cloudfront.net/uploads/production/event_page_part/1106/56EE144A6EC74FED8D699BE684BE1BEE.png']),
  CardFactory.actions([
    {
      type: ActionTypes.ImBack,
      title: 'Агенда',
      value: 'agenda'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Спикеры',
      value: 'speakers'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Место проведения',
      value: 'location'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Как добраться',
      value: 'how to get'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Помощь',
      value: 'help'
    },
    {
      type: ActionTypes.ImBack,
      title: 'Об о мне',
      value: 'about'
    }
  ]),
  {subtitle: 'Чем вам помочь?'}
);

exports.HelpCard = HelpCard;
