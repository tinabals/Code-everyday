let apiUrl = 'https://jsonplaceholder.typicode.com/comments';
function getData(response) {
  let data = response.data;
  console.log(data);
  console.log(data[0].email);
}

axios.get(apiUrl).then(getData);
