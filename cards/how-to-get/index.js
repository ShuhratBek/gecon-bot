const { CardFactory } = require('botbuilder');
const HowToGetCard = CardFactory.heroCard(
  'Как Добраться:',
  `С ЖД  и автовокзала: троллейбус № 15, 16, 1 до остановки Площадь Ленина, затем пройти по ходу движения транспорта по ул. Советской , на втором перекрестке повернуть направо к ОКЦ
Такси:
Автомиг +375296340540
Альфа +375293205155
Бегемот 184
Метеор +375296538813`,
  CardFactory.images(['https://d3373sevsv1jc.cloudfront.net/uploads/production/event_page_part/1168/4102d0be-f614-9fa5-18de-5ed1e92b5a94/7000946DB2F94E5CA9F9E4B8D8E70F2A.jpg']),
  CardFactory.actions([
    {
      type: 'openUrl',
      title: 'Открыть на карте',
      value: 'https://yandex.by/maps/-/CBBoU8tnXA'
    }
  ])
);

exports.HowToGetCard = HowToGetCard;
