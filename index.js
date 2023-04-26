// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// My preferred approach
function palindrome(str) {

  // Discrete steps so 
  // - if there is an error it can be checked

  // Desciptive of what the regex is doing
  let reOnlyChars = /[^A-Za-z0-9]/g;

  // Massage the string for matching
  let lowercase = str.toLowerCase();

  // cleanse the string with regex
  let cleanText = lowercase.replace(reOnlyChars, '')
  // console.log('Clean Text = ' + cleanText);

  /* Common pattern/functions for JS DSA challenge 
   * - in prod would be better as function 
   *
   * split - splits a string into an array of substrings
   * reverse - reverses array elements
   * join - returns an array as a string. Default is comma
   */
  let reversed = cleanText.split('').reverse().join('');
  //console.log(reversed)

  // return boolean of match
  return cleanText === reversed;
}
console.log(palindrome("A man, a plan, a canal. Panama"));