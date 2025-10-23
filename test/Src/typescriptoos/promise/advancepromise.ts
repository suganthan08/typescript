import axios from 'axios';

axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log("✅ User Data:", response.data);
  })
  .catch(error => {
    console.log("❌ Error:", error);
  });
