const apiKey = 'cUdOUrFRf0XouZUN1QXO3Y9GplCOA6NlsFebW0dBOxUuiNwgUGmgRimS34pGJXvj';
const apiUrl = 'https://data.mongodb-api.com/app/data-rvbdm/endpoint/data/v1/action/find';

const requestData = {
  dataSource: 'Cluster0',
  database: 'Tasks',
  collection: 'Tasklist'
};

const config = {
  headers: {
    'apiKey': apiKey,
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