// Cursor Change
new kursor({
  type: 4,
  removeDefaultCursor: true,
  color: "#f4f4f4",
});

// Animations
gsap.from(".header", {
  opacity: 0,
  duration: 1.3,
  y: -30,
});

gsap.from(".showcase-text", {
  opacity: 0,
  duration: 1.4,
  y: 20,
});

gsap.from(".showcase-p", {
  opacity: 0,
  duration: 1.4,
  x: 50,
});

gsap.from(".contact-link", {
  opacity: 0,
  delay: 1.2,
  duration: 1.5,
  y: 60,
});

const compliment = [
  {
    comment: "Very happy with the work, friendly demeanor and punctuality.",
    name: "Jessica Mars",
  },
  {
    comment: "Affordable, absolutely fantastic",
    name: "John Foster",
  },
  {
    comment: "Premuim service, memorable journey",
    name: "Wesley Park",
  },
  {
    comment:
      "Excellent service. I Have patronized them in the past and I will in the future. Very responsive and helpful, much appreciated!",
    name: "Chidumeje Nelson",
  },
  {
    comment: "Prompt response, seamless procedures.",
    name: "Adeboye Adegboyega",
  },
];

let clientComment = document.querySelector("p#message");
let clientName = document.querySelector("h4#client-name");
let time = 10000;
let current = 0;

function changeComment() {
  let randomNo = Math.floor(Math.random() * 5);
  clientComment.innerHTML = compliment[randomNo].comment;
  clientName.innerHTML = compliment[randomNo].name;
  if (clientComment.textContent) {
    gsap.from(".disperse-right", {
      opacity: 0,
      duration: 1,
      x: -100,
    });
    gsap.from(".disperse-left", {
      opacity: 0,
      duration: 1,
      x: 100,
      delay: 0.3,
    });

    if (current < compliment.length - 1) {
      current++;
    } else {
      current = 0;
    }
  }
  setTimeout("changeComment()", time);
}

window.onload = changeComment;
