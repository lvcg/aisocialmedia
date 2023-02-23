// 

import { surpriseMePrompts } from '../constants';

export function getRandomPrompt() {
  const randonIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randonIndex];

  if(randomPrompt === prompt) return getRandomPrompt(prompt)


    return randomPrompt;
}

export async function downloadImage(_id, photo){

}