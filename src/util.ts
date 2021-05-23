import { config as dotenv_config } from 'dotenv';

function load_env() {
  const results = dotenv_config();
  if (results.error) {
    throw results.error;
  }
}

function is_dev() {
  return process.env.NODE_ENV !== "production";
}

export {
  is_dev,
  load_env,
};
