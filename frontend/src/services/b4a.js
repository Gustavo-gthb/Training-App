import Parse from "parse/dist/parse.min.js";

const PARSE_HOST_URL = "https://parseapi.back4app.com"
const PARSE_APPLICATION_ID = "5W9YbtanJGx1t1qrIiJ58B4Aiz5o8xUUmuBZFe0i"
const PARSE_JAVASCRIPT_KEY = "JUmYhRpaxU0xzubJoejdxgYyAK49St7OoJMzsWtS"

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export { Parse as AppParse };
