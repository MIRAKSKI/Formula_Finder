var Big_res = new Object();
fetch('Data-set.json') // Replace with the actual path to your JSON file
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // 'data' now contains the JavaScript object loaded from the JSON file
    Big_res = data;
    // You can now work with the 'data' object
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
