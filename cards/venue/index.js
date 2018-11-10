const { CardFactory } = require('botbuilder');
const VenueCard = CardFactory.heroCard(
  'Место проведения',
  `246050  ул.Ланге, д.17, г.Гомель\n
Республика Беларусь\n
Телефон: +375 232 70 32 67`,
  CardFactory.images(['https://static-maps.yandex.ru/1.x/?lang=en-US&ll=31.014605,52.427873&z=17&l=map&size=450,450&pt=31.014605,52.427873,pm2rdl']),
  CardFactory.actions([
    {
      type: 'openUrl',
      title: 'Открыть на карте',
      value: 'https://yandex.by/maps/-/CBBoU8tnXA'
    }
  ])
);

exports.VenueCard = VenueCard;
