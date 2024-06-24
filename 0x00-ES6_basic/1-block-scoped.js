export default function taskBlock(trueOrFalse) {
  let task = false; // Use let for block-scoping
  let task2 = true; // Use let for block-scoping

  if (trueOrFalse) {
    task = true;   // Assign new values directly without redeclaration
    task2 = false; // Assign new values directly without redeclaration
  }

  return [task, task2];
}