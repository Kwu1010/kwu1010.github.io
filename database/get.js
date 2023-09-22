/**
 * Token valid time should be reduced to an hour or minutes.
 * Reimplement .js code with the following psuedocode:
 * Generate a new token and store in variable
 * Fetch data from DB using token
 * Whenever functions are run through button updates, reference token through variable
 */

const anonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWFzX2RldmljZV9pZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsImJhYXNfZG9tYWluX2lkIjoiNjRkOTRmNTdkMjA4OTFmZWZkMjE3YTIzIiwiZXhwIjoxNjk0MDU4Njk5LCJpYXQiOjE2OTQwNTY4OTksImlzcyI6IjY0Zjk0MWMzMmFhNDEzMDY2OWVlMGY5ZCIsInN0aXRjaF9kZXZJZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCIsInN0aXRjaF9kb21haW5JZCI6IjY0ZDk0ZjU3ZDIwODkxZmVmZDIxN2EyMyIsInN1YiI6IjY0Zjk0MWMzMmFhNDEzMDY2OWVlMGY5YiIsInR5cCI6ImFjY2VzcyJ9.1Wik_cDcgZUJOeD6fFIySTnXox4uLQ7BQQ5QFOcFT18';
const apiUrl = 'https://us-east-1.aws.realm.mongodb.com/app/data-rvbdm/endpoint/data/v1/action/find';

const requestData = {
  dataSource: 'Cluster0',
  database: 'Tasks',
  collection: 'Tasklist'
};

const config = {
  headers: {
    'Authorization': "Bearer " + anonToken,
    'Content-Type': 'application/ejson',
    'Accept': 'application/json'
  }
};

axios.post(apiUrl, requestData, config)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });