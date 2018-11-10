// Import required Bot Builder
const { ActivityTypes, CardFactory, MessageFactory } = require('botbuilder');
const { WelcomeCard } = require('./cards/welcome');
const { AboutCard } = require('./cards/about');
const { StreamCard } = require('./cards/stream');
const { AgendaCard } = require('./cards/agenda');
const { HelpCard } = require('./cards/help');
const { HowToGetCard } = require('./cards/how-to-get');
const { VenueCard } = require('./cards/venue');
const { SpeakersCard } = require('./cards/speakers');
const { MenuCard } = require('./cards/menu');

class GeConBot {

  async onTurn(turnContext) {
    switch (turnContext.activity.type) {
      case ActivityTypes.Message:
        const utterance = (turnContext.activity.text || '').trim().toLowerCase();
        await this.sendCardResponse(turnContext, utterance);

        // await this.sendSuggestedActions(turnContext);
        break;
      case ActivityTypes.ConversationUpdate:
        // Welcome user.
        await this.welcomeUser(turnContext);
        break;
      default:
        break;
    }
  }

  async sendCardResponse(turnContext, dialogTurnResult) {
        switch (dialogTurnResult) {
        case 'об о мне':
        case 'about':
        case '/about':
            await turnContext.sendActivity({ attachments: [AboutCard] });
            break;
        case 'помощь':
        case 'help':
        case '/help':
            await turnContext.sendActivity({ attachments: [HelpCard] });
            break;
        case 'агенда':
        case 'agenda':
        case '/agenda':
            await turnContext.sendActivity({ attachments: [AgendaCard]});
            break;
        case 'все потоки':
        case 'communicate':
        case 'conduct':
        case 'contribute':
            await turnContext.sendActivity(StreamCard('title', dialogTurnResult));
            break;
          case 'спикеры':
          case 'speakers':
          case '/speakers':
            await turnContext.sendActivity(SpeakersCard);
            break;
        case 'место проведения':
        case 'location':
        case '/location':
            await turnContext.sendActivity({ attachments: [VenueCard] });
            break;
        case 'как добраться':
        case 'how to get':
        case '/howtoget':
          await turnContext.sendActivity({ attachments: [HowToGetCard] });
          break;
        default:
            await turnContext.sendActivity('Не найдено соответствующего меню');
            await turnContext.sendActivity({ attachments: [HelpCard] });
        }
    }


  async sendSuggestedActions(turnContext) {
    const reply = MessageFactory.suggestedActions(['Агенда', 'Спикеры', 'Место проведения', 'Помощь', 'Об о мне']);
    await turnContext.sendActivity(reply);
  }

  async welcomeUser(turnContext) {
    // Do we have any new members added to the conversation?
    if (turnContext.activity.membersAdded.length !== 0) {
      // Iterate over all new members added to the conversation
      for (var idx in turnContext.activity.membersAdded) {
        // Greet anyone that was not the target (recipient) of this message
        // 'bot' is the recipient for events from the channel,
        // turnContext.activity.membersAdded === turnContext.activity.recipient.Id indicates the
        // bot was added to the conversation.
        if (turnContext.activity.membersAdded[idx].id !== turnContext.activity.recipient.id) {
          // Send welcome card.
          await turnContext.sendActivity(MessageFactory.attachment(CardFactory.adaptiveCard(WelcomeCard)));
          await turnContext.sendActivity({ attachments: [MenuCard] });
        }
      }
    }
  }
}

module.exports.GeConBot = GeConBot;
