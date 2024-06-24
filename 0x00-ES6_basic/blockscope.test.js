import taskBlock from './1-block-scoped'; // Adjust the path if necessary

test("say just message", () => {
  expect(taskBlock(true)).toEqual([true, false]);
});