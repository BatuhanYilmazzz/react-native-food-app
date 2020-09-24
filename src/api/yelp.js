import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2EvBX1rfDQrsnYbLSyfPzSLM7_fJKgqJ9wUcEehIYyVY9Es8n1_AE5QIfFG7GMkHzR0euiTDCNi8AubPYITNNRel7FlCUlSbAA0rfOoF93oiFXo8B0jAwu0RwUdrX3Yx',
  },
});
