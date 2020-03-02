import settings from "../GameSettings/settings";

const { challenges, modifiers } = settings;
export const ChallengePicker = (exclude, level = 1) => {
  const availableChallenges = challenges.filter(
    chal => chal.level <= level && chal !== exclude
  );
  const PickedChallenge =
    availableChallenges[Math.floor(Math.random() * availableChallenges.length)];

  return PickedChallenge;
};

export const ModifierPicker = (level = 1) => {
  const SelectedModifiers = [];
  let counter = level;

  for (let i = 0; i < counter; i++) {
    if (SelectedModifiers.length === 4 || SelectedModifiers.length === level) {
      break;
    }
    const picked = Math.floor(Math.random() * modifiers.length);
    if (!SelectedModifiers.includes(modifiers[picked])) {
      SelectedModifiers.push(modifiers[picked]);
    } else {
      counter++;
    }
    if (SelectedModifiers.length > 4) {
      break;
    }
  }
  return SelectedModifiers;
};
