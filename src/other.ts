function run() {
  async function get_message() {
    return "Hello";
  }

  async function abc() {
    return await get_message();
  }

  abc().then(msg => {
    console.log("Message:", msg, "World!");
  });
}

export { run };
