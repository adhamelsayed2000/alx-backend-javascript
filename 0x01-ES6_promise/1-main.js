import getFullResponseFromAPI from './1-promise'; // Ensure the path is correct

getFullResponseFromAPI(true)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error occurred:', error.message);
    process.exit(1); // Exit with non-zero status code on error
  });
