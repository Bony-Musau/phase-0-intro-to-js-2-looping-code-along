// Code your solutions in this file
function generateThankYouMessages(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}for the wonderful suprise gift`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
}
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const messages = generateThankYouMessages(namesArray);
console.log(messages);

function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  countDown(10);