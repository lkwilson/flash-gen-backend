import { load_env } from './util';
import { get_api_adapter } from './api_adapter';

load_env();

get_api_adapter().then(async api_adapter => {
  const apple = await api_adapter.get_term("tener que");
  console.log(JSON.stringify(apple, null, 2));
}).catch(err => {
  console.error(err);
})
