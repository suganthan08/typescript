import axios from 'axios';

async function getUser() {
  const response = await axios.get('https://api.github.com/users/torvalds');
  console.log(response.data);
}

getUser();
