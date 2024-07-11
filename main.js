// Defining text characters for the empty and full hearts for you to use later.
// Provided function to simulate a server call
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly choose to succeed or fail
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all the hearts
  const hearts = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      // Check if the heart is already activated
      const isFullHeart = heart.classList.contains("activated-heart");

      mimicServerCall()
        .then(() => {
          if (isFullHeart) {
            // If the heart is full, change it to an empty heart
            heart.innerText = '♡';
            heart.classList.remove("activated-heart");
          } else {
            // If the heart is empty, change it to a full heart
            heart.innerText = '♥';
            heart.classList.add("activated-heart");
          }
        })
        .catch((error) => {
          // On failure, show the error modal and message
          errorMessage.innerText = error;
          errorModal.classList.remove("hidden");
          // Hide the error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});


  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
