import romanToInt from "./romanToInt/index.js";
import containsDuplicate from "./containsDuplicate/index.js";
// containsDuplicate();

const url = "https://leetcode-api.p.rapidapi.com/user/bharathkalyans/contests";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eada9264acmshcbce996170ba5cdp1b8c36jsne85a57c090d8",
    "X-RapidAPI-Host": "leetcode-api.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
