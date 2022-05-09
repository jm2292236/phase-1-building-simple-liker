// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
idModal = document.querySelector("#modal");

const hearts = document.querySelectorAll(".like-glyph");
for (heart of hearts) 
    heart.addEventListener("click", (e) => {
        mimicServerCall()
            .then(() => {
                const h = e.target;
                h.innerText === EMPTY_HEART ? h.innerText = FULL_HEART : h.innerText = EMPTY_HEART;
                h.classList.toggle("activated-heart");
            })
            .catch(error => {
                idModal.innerText = error;
                idModal.classList.toggle("hidden");
                setTimeout(() => {
                    idModal.innerText = "";
                    idModal.classList.toggle("hidden");
                  }, 3000);
            })
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
