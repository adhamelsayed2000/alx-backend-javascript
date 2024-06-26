import getFullResponseFromAPI from './1-promise';

async function test() {
  try {
    const response1 = await getFullResponseFromAPI(true);
    console.log(response1); // يجب أن تطبع { status: 200, body: 'Success' }

    const response2 = await getFullResponseFromAPI(false);
    // لن يصل هذا السطر إلى هنا بسبب الرفض الذي يحدث بسبب success = false
    console.log(response2);
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
}

test();
