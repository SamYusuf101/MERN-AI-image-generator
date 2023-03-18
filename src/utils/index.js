import { surpriseMeprompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMeprompts.length);
  const randomPrompt = surpriseMeprompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
