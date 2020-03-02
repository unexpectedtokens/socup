export default {
  levels: [
    { level: 1, xpNeededForNextLevel: 100 },
    { level: 2, xpNeededForNextLevel: 125 },
    { level: 3, xpNeededForNextLevel: 150 },
    { level: 4, xpNeededForNextLevel: 175 },
    { level: 5, xpNeededForNextLevel: 200 },
    { level: 6, xpNeededForNextLevel: 225 },
    { level: 7, xpNeededForNextLevel: 250 },
    { level: 8, xpNeededForNextLevel: 275 },
    { level: 9, xpNeededForNextLevel: 300 },
    { level: 10, xpNeededForNextLevel: 300 }
  ],
  trophies: [
    {
      title: "Getting started",
      goal: "Reach level 2",
      reached: "newState.user.level.level >= 2"
    },
    {
      title: "Interaction is fun!",
      goal: "Reach level 10",
      reached: "newState.user.level.level >= 10"
    },
    {
      title: "You madman!",
      goal: "Complete 500 challenges",
      reached: "newState.user.ChallengesComplete >= 500"
    }
  ],
  challenges: [
    {
      level: 1,
      challenge:
        "Go to the grocery store and ask where you can find a product of choice, just make something up"
    },
    { level: 1, challenge: "Ask someone what time it is" },
    { level: 1, challenge: "give 3 people a compliment of choice" }
  ],
  modifiers: [
    "At least one of the persons you talk to has to be of the opposite sex",
    "They have to be different",
    "lorem ipsym",
    "loras quroe",
    "loras quroa",
    "loras quroi",
    "loraquroe",
    "lor quroe",
    "lorassarol quroe"
  ]
};
