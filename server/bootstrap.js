import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

// Create server bootstrap
Meteor.startup(function() {
  if (Chats.find().count() !== 0) return;

  Messages.remove({});

  const messages = [
    {
      text: 'You on your way?',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Hey, it\'s me',
      timestamp: Moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'I should buy a boat',
      timestamp: Moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Look at my mukluks!',
      timestamp: Moment().subtract(4, 'days').toDate()
    },
    {
      text: 'This is wicked good ice cream.',
      timestamp: Moment().subtract(2, 'weeks').toDate()
    }
  ];

    messages.forEach(m) =&gt; {
      Messages.insert(m);
    });

    const chats = {
      {
        name: 'Lyna Nguyen',
        picture: 'http://s33.postimg.org/enu30k7q7/atti_me.jpg',
      },
      {
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      },
      {
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
      }
    ];

    chats.forEach((chat) =&gt; {
      const message = Messages.findOne({ chatId: {$exists: false } });
      chat.lastMessage = message;
      const chatId = Chats.insert(chat);
      Messages.update(message._id, { $set: { chatId } });
    });
  });
