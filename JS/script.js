// by Nellose [https://github.com/Nellose]
let requestCount = {};
const maxRequests = 5;
const blockDuration = 120000;

function generateCaptcha() {
  let captcha = Math.random().toString(36).substring(7);
  document.getElementById('captcha').innerText = captcha;
  return captcha;
}

function checkCaptcha() {
  let enteredCaptcha = document.getElementById('captchaInput').value.trim();
  let generatedCaptcha = document.getElementById('captcha').innerText;

  if (enteredCaptcha === generatedCaptcha) {
    getIPAddress((ip) => {
      if (!requestCount[ip]) {
        requestCount[ip] = 1;
      } else {
        requestCount[ip]++;
        if (requestCount[ip] > maxRequests) {
          blockIP(ip);
          return;
        }
		
		window.location.href = "main.html";
      }
    });
  } else {
    generateCaptcha();
  }
}

function blockIP(ip) {
  // by Nellose [https://github.com/Nellose]
  alert('Too many requests from your IP. Please try again later.');
  setTimeout(() => {
    requestCount[ip] = 0;
  }, blockDuration);
}

// by Nellose [https://github.com/Nellose]
window.onload = function () {
  generateCaptcha();
};

// by Nellose [https://github.com/Nellose]
document.getElementById('captchaInput').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    checkCaptcha();
  }
});

// by Nellose [https://github.com/Nellose]
function getIPAddress(callback) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      callback(ip);
    })
    .catch(error => console.error('Error fetching IP address:', error));
}
