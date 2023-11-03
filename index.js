document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('input[type="email"]');
    const messageElement = document.getElementById("message");
    let winningIndex;
  
    const tryAgainButton = document.getElementById('try-again');
    tryAgainButton.style.display = 'none';
    tryAgainButton.addEventListener('click', handleTryAgainClick);
  
    emailInput.addEventListener('input', function () {
      const num = parseInt(emailInput.value);
      if (!isNaN(num)) {
        removeAllButtons();
        winningIndex = Math.floor(Math.random() * num);
        for (let i = 0; i < num; i++) {
          let button = document.createElement('button');
          button.textContent = i + 1;
          button.addEventListener('click', handleButtonClick);
          document.body.appendChild(button);
        }
      }
    });
  
    function removeAllButtons() {
      const buttons = document.querySelectorAll('button:not(#try-again)');
      buttons.forEach(function (button) {
        button.remove();
      });
    }
  
    function handleButtonClick(event) {
      const buttons = document.querySelectorAll('button:not(#try-again)');
      const clickedButtonIndex = Array.from(buttons).indexOf(event.target);
  
      if (clickedButtonIndex === winningIndex) {
        messageElement.textContent = 'Winner!';
      } else {
        messageElement.textContent = 'Loser!';
      }
      colorAllButtons();
      tryAgainButton.style.display = 'block';
    }
  
    function handleTryAgainClick() {
      const buttons = document.querySelectorAll('button:not(#try-again)');
      buttons.forEach(button => {
        button.remove();
      });
  
      messageElement.textContent = '';
      tryAgainButton.style.display = 'none';
      winningIndex = Math.floor(Math.random() * buttons.length);
      emailInput.value = '';
    }
  
    function colorAllButtons() {
      const buttons = document.querySelectorAll('button:not(#try-again)');
      buttons.forEach(function (button, index) {
        if (index === winningIndex) {
          button.style.backgroundColor = 'green';
        } else {
          button.style.backgroundColor = 'red';
        }
        button.disabled = true;
      });
    }
  });
