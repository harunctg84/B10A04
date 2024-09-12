
function sendNotification(email) {
  if (!email.includes('@')) {
    return "Invalid Email";
  }
  let divide = email.split('@');
  let userName = divide[0];
  let domainName = divide[1];
  return userName + ' sent you an email from ' + domainName;
    

}

console.log(sendNotification('sadia8icloud.com'))
