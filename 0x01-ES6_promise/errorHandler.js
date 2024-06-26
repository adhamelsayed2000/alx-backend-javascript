export function handlePromiseError(error) {
  console.error('Error occurred:', error.message);
  process.exit(1);
}
