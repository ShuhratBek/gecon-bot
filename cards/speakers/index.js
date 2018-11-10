const { CardFactory, MessageFactory } = require('botbuilder');
const { speakers } = require('./speakers');

const SpeakersCard = MessageFactory.carousel(
  speakers.map(item => {
    return CardFactory.thumbnailCard(
      item.name,
      [item.avatar],
      null,
      {subtitle: item.company_and_title})
  })
);

exports.SpeakersCard = SpeakersCard;
