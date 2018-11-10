const { CardFactory } = require('botbuilder');
const AboutCard = CardFactory.thumbnailCard(
  'Этот Бот для GECon 2018',
  'Shukhratbek Mamadaliev\nEmail: shuhratbek.26@gmail.com',
  CardFactory.images(['https://scontent-frt3-2.cdninstagram.com/vp/af82662884718c858d77b3ef482d9acd/5C3DB7B4/t51.2885-19/s320x320/37957856_2181406405448412_1014001362943344640_n.jpg']),
  null,
  {subtitle: 'Автор этого БОТа'}
);

exports.AboutCard = AboutCard;
