import axios from "axios";

export default axios.create({
  baseURL:
    "http://pokemonbackend-env.eba-wjxdfx2u.us-east-1.elasticbeanstalk.com/",
});
