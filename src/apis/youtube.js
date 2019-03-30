import axios from 'axios';

const KEY = 'AIzaSyDZI2wRM0ZrE2U7odcvbd6ud6LpCb3UvwU';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
});
