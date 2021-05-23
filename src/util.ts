function is_dev() {
  return process.env.NODE_ENV !== "production";
}

export {
  is_dev,
};
