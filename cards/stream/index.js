const { CardFactory, MessageFactory } = require('botbuilder');
const { propEq, find, pipe, map } = require('ramda');
const moment = require('moment');
const agenda = require('./agenda');

const StreamCard = (prop = 'title', value = 'Все потоки') => MessageFactory.carousel(
  pipe(find(propEq(prop, value)), stream => map(item => {
    return CardFactory.adaptiveCard(
      {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
          {
            "type": "TextBlock",
            "text": item.title,
            "weight": "bolder",
            "size": "medium"
          },
          {
            "type": "ColumnSet",
            "columns": [
              {
                "type": "Column",
                "width": "stretch",
                "items": [
                  {
                    "type": "TextBlock",
                    "text": item.language,
                    "wrap": true
                  },
                  {
                    "type": "TextBlock",
                    "spacing": "none",
                    "text": item.color,
                    "isSubtle": true,
                    "wrap": true,
                    "size": "small"
                  }
                ]
              },
              {
                "type": "Column",
                "width": "auto",
                "items": [
                  {
                    "type": "TextBlock",
                    "spacing": "none",
                    "text": moment(item.date).format('MMMM Do YYYY, HH:mm'),
                    "isSubtle": true,
                    "wrap": true,
                    "size": "small"
                  },
                  {
                    "type": "TextBlock",
                    "spacing": "none",
                    "text": item.duration_min && `${item.duration_min}мин`,
                    "isSubtle": true,
                    "size": "small"
                  }
                ]
              }
            ]
          },
          {
            "type": "ColumnSet",
            "columns": [
              {
                "type": "Column",
                "width": "auto",
                "items": map(speaker => {
                  return {
                    "type": "ColumnSet",
                    "columns": [
                      {
                        "type": "Column",
                        "width": "auto",
                        "items": [
                          {
                            "type": "Image",
                            "url": speaker.avatar,
                            "size": "small",
                            "style": "person"
                          }
                        ]
                      },
                      {
                        "type": "Column",
                        "width": "stretch",
                        "items": [
                          {
                            "type": "TextBlock",
                            "text": speaker.name,
                            "weight": "bolder",
                            "wrap": true
                          },
                          {
                            "type": "TextBlock",
                            "spacing": "none",
                            "text": item.company_and_title,
                            "isSubtle": true,
                            "wrap": true,
                            "size": "small"
                          }
                        ]
                      }
                    ]
                  }
                })(item.speakers || [])
              }
            ]
          }
        ]
      });
  })(stream.items))(agenda)
);

exports.StreamCard = StreamCard;
