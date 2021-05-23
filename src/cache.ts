import * as fs from 'fs-extra';

async function get_cache(cache_file) {
  const cache_data = await fs.readJson(cache_file).catch(err => {
    if (err.code === "ENOENT") {
      return {};
    } else {
      throw err;
    }
  });

  function save_cache() {
    fs.writeJson(cache_file, cache_data);
  }

  function add(key, value) {
    cache_data[key] = value;
    save_cache();
  }

  function remove(key) {
    delete cache_data[key];
    save_cache();
  }

  function get(key) {
    return new Promise((resolve, reject) => {
      if (key in cache_data) {
        resolve(cache_data[key]);
      } else {
        reject();
      }
    });
  }

  return {
    add, get, remove
  }
}

export { get_cache };
