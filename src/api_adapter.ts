import axios from 'axios';
import { get_cache } from './cache';

const protocol = "https";
const endpoint = "www.dictionaryapi.com";
const url = "/api/v3/references/spanish/json";

function build_url(term) {
  const api_key = process.env.API_KEY;
  return `${protocol}://${endpoint}${url}/${term}?key=${api_key}`
}

async function get_api_adapter() {
  let cache_file = process.env.CACHE_FILE;
  if (cache_file == null) {
    cache_file = ".flash_gen_cache";
  }

  const cache = await get_cache(cache_file);

  function get_term(term) {
    return cache.get(term).catch(async () => {
      const url = build_url(term);
      console.log("Sending request for term", term);
      const resp = await axios.get(url);
      const { data } = resp;
      cache.add(term, data);
      return data;
    });
  }

  function remove_term_from_cache(term) {
    cache.remove(term);
  }

  return { get_term, remove_term_from_cache };
}

export { get_api_adapter };
