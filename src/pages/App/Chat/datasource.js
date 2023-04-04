const listConversation = [
  {
    id: 1,
    groupName: "109220-Naturalization",
    time: "January 1, 2021 19:10",
    participant: 3,
    newMessage: false,
    lastChat: {
      username: "Cameron Philips",
      message: "Please check this out!",
    },
  },
  {
    id: 2,
    groupName: "109220-Naturalization",
    time: "January 1, 2021 19:10",
    newMessage: true,
    participant: 3,
    lastChat: {
      username: "Cameron Philips",
      message: "Please check this out!",
    },
  },
  {
    id: 3,
    groupName:
      "109220-Naturalization 109220-Naturalization 109220-Naturalization 109220-Naturalization ",
    time: "January 1, 2021 19:10",
    newMessage: false,
    participant: 3,
    lastChat: {
      username: "Cameron Philips",
      message: "Please check this out!",
    },
  },
];

const chatMessages = [
  {
    id: 1,
    newMessage: false,
    connecting: false,
    data: [
      {
        id: 1,
        chat: [
          {
            id: 1,
            colorId: "se1",
            sender: "You",
            text: "Hey everyone!",
            timestamp: "12:03",
          },
          {
            id: 2,
            sender: "Mary",
            colorId: "se2",
            text: "Hi John and Sarah!",
            timestamp: "12:03",
          },
          {
            id: 3,
            sender: "Sarah",
            colorId: "se3",
            text: "Hello!",
            timestamp: "12:03",
          },
          {
            id: 4,
            colorId: "se1",
            sender: "You",
            text: "How are you both doing?",
            timestamp: "12:03",
          },
          {
            id: 5,
            sender: "Mary",
            colorId: "se2",
            text: "I'm good, thanks. How about you two?",
            timestamp: "12:03",
          },
          {
            id: 6,
            sender: "Sarah",
            colorId: "se3",
            text: "I'm doing well too, thanks for asking!",
            timestamp: "12:03",
          },
          {
            id: 7,
            colorId: "se1",
            sender: "You",
            text: "That's great to hear!",
            timestamp: "12:03",
          },
          {
            id: 8,
            sender: "Mary",
            colorId: "se2",
            text: "What have you guys been up to lately?",
            timestamp: "12:03",
          },
          {
            id: 9,
            sender: "Sarah",
            colorId: "se3",
            text: "I've been working on a new project at work. It's been keeping me busy!",
            timestamp: "12:03",
          },
          {
            id: 10,
            colorId: "se1",
            sender: "You",
            text: "I've been spending a lot of time outdoors. The weather has been great!",
            timestamp: "12:03",
          },
          {
            id: 11,
            sender: "Mary",
            colorId: "se2",
            text: "That sounds nice! I've been catching up on some reading in my free time.",
            timestamp: "12:03",
          },
        ],
        timestamp: "June 09,2021",
      },
      {
        id: 2,
        chat: [
          {
            id: 1,
            colorId: "se1",
            sender: "You",
            text: "Hey everyone!",
            timestamp: "12:03",
          },
          {
            id: 2,
            sender: "Mary",
            colorId: "se2",
            text: "Hi John and Sarah!",
            timestamp: "12:03",
          },
          {
            id: 3,
            sender: "Sarah",
            colorId: "se3",
            text: "Hello!",
            timestamp: "12:03",
          },
          {
            id: 4,
            colorId: "se1",
            sender: "You",
            text: "How are you both doing?",
            timestamp: "12:03",
          },
          {
            id: 5,
            sender: "Mary",
            colorId: "se2",
            text: "I'm good, thanks. How about you two?",
            timestamp: "12:03",
          },
          {
            id: 6,
            sender: "Sarah",
            colorId: "se3",
            text: "I'm doing well too, thanks for asking!",
            timestamp: "12:03",
          },
          {
            id: 7,
            colorId: "se1",
            sender: "You",
            text: "That's great to hear!",
            timestamp: "12:03",
          },
          {
            id: 8,
            sender: "Mary",
            colorId: "se2",
            text: "What have you guys been up to lately?",
            timestamp: "12:03",
          },
          {
            id: 9,
            sender: "Sarah",
            colorId: "se3",
            text: "I've been working on a new project at work. It's been keeping me busy!",
            timestamp: "12:03",
          },
          {
            id: 10,
            colorId: "se1",
            sender: "You",
            text: "I've been spending a lot of time outdoors. The weather has been great!",
            timestamp: "12:03",
          },
          {
            id: 11,
            sender: "Mary",
            colorId: "se2",
            text: "That sounds nice! I've been catching up on some reading in my free time.",
            timestamp: "12:03",
          },
        ],
        timestamp: "Today June 09,2021",
      },
    ],
  },
  {
    id: 2,
    newMessage: true,
    connecting: false,
    data: [
      {
        id: 1,
        timestamp: "June 09,2021",
        chat: [
          {
            id: 1,
            colorId: "se1",
            sender: "You",
            text: "Hey everyone!",
            timestamp: "12:03",
          },
          {
            id: 2,
            sender: "Mary",
            colorId: "se2",
            text: "Hi John and Sarah!",
            timestamp: "12:03",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    newMessage: false,
    connecting: true,
    data: [
      {
        id: 1,
        timestamp: "June 09,2021",
        chat: [
          {
            id: 1,
            colorId: "se1",
            sender: "You",
            text: "Hey everyone!",
            timestamp: "12:03",
          },
          {
            id: 2,
            sender: "Mary",
            colorId: "se2",
            text: "Hi John and Ryan!",
            timestamp: "12:03",
          },
          {
            id: 3,
            sender: "Ryan",
            colorId: "se3",
            text: "Hi John and Mary!",
            timestamp: "12:03",
          },
        ],
      },
    ],
  },
];

export { listConversation, chatMessages };
