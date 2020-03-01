// import settings from "../GameSettings/settings";
const settings = {
  challenges: [
    {
      level: 1,
      challenge:
        "Go to the grocery store and ask where you can find a product of choice, just make something up"
    },
    { level: 3, challenge: "give 3 people a compliment of choice" }
  ],
  modifiers: [
    "At least one of the persons you talk to has to be of the opposite sex"
  ]
};
const { challenges, modifiers } = settings;
const Picker = (exclude, level = 3) => {
  const availableChallenges = challenges.filter(chal => chal.level <= level);
  const PickedChallenge =
    availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
  return PickedChallenge;
};

console.log(Picker("", 3));
