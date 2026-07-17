---
layout: single
title: "Review"
permalink: /review/
author_profile: true
show_date: false
read_time: false
comments: false
share: false
related: false
---
ltr. 

---

## Books:
- **Literary Fiction**
  - *White Nights* - F. Dostoevsky

      The most emotional and profound novella I think I will ever read in my lifetime. I know that some people do not like White Nights, as it doesn't "represent" Dostoevsky, but I disagree. The first line of White Nights: "It was a wonderful night, such a night as is only possible when we are young, dear reader," perfectly, in my opinion, encapsulates the magic of certain experiences tied to youth. The whole novella is a beautiful, magical voyage that cannot be expressed in mere words. The story’s profoundly complex and vividly described scenes leave the reader wanting to visit Saint Petersburg. Overall, a novella I would definitely recommend to anyone. 
  
- **Science Fiction**
 
- **Historical Fiction**
  
- **Dystopian Fiction**
 
- **Classics**
  
- **Philosophy**
  
- **Mystery / Thriller**
  
- **Nonfiction**
  
- **Science / Technology**
  
- **Biography / Memoir**
  
- **Psychology / Human Behavior**
  
- **Poetry**
  
---

## Textbooks:
- **Precalculus**
  - *Precalculus: Mathematics for Calculus* - J. Stewart, L. Redlin, S. Watson

      Although I do not remember too much about this textbook, I remember it to be very comprehensive with a lot of practice application-based problems. From the rational theorem to De Moivre's theorem, the textbook also does a good job in introducing more advanced concepts like complex planes and parts of linear algebra. 
    
- **Linear Algebra**
  - *Linear Algebra: A Modern Introduction* - D. Poole

      A well-written introduction to linear algebra. Unlike many textbooks, such as those by Strang or Lay, Poole introduces the concept of vectors first instead of systems of linear equations, which is especially helpful for someone with no prior experience in linear algebra. Another thing I like about this textbook is that it is filled with what the textbook calls “explorations and vignettes,” which are essentially applications of concepts to real-life scenarios.

  - *Linear Algebra for Everyone* - G. Strang

---

<div id="project-popup" style="
position: fixed;
bottom: 20px;
right: 20px;
background: #222;
color: white;
padding: 20px;
border-radius: 16px;
width: 280px;
z-index: 999999;
display: flex;
flex-direction: column;
justify-content: center;
">

<button onclick="this.parentElement.style.display='none'" style="
position: absolute;
top: 10px;
right: 14px;
background: none;
border: none;
color: white;
font-size: 28px;
cursor: pointer;
">
×
</button>

<p style="
margin: 0;
text-align: center;
line-height: 1.5;
font-size: 18px;
padding-top: 12px;
">
Click each project title to view its poster, paper, or related materials.
</p>

</div>



<button id="duckButton" style="
position: fixed;
top: 120px;
right: 20px;
background: red;
color: black;
border: 3px solid #007BFF;
border-radius: 10px;
padding: 8px 14px;
font-size: 14px;
font-weight: bold;
cursor: pointer;
z-index: 999999;
">
Turn duck on!
</button>

<script>
const duckButton = document.getElementById("duckButton");

let ducksActive = false;
let duckIntervals = [];

duckButton.addEventListener("click", function () {

  ducksActive = !ducksActive;

  if (ducksActive) {

    duckButton.innerText = "Turn duck off!";
    duckButton.style.background = "limegreen";

    createLoopingDuck("40px", "50px", "left");
    createLoopingDuck("300px", "35px", "right");
    createLoopingDuck("550px", "70px", "left");

  } else {

    duckButton.innerText = "Turn duck on!";
    duckButton.style.background = "red";

    duckIntervals.forEach(interval => clearInterval(interval));
    duckIntervals = [];

    document.querySelectorAll(".duck").forEach(d => d.remove());
  }
});

function createLoopingDuck(height, size, direction) {

  function spawnDuck() {

    const duck = document.createElement("div");

    duck.className = "duck";
    duck.innerText = "🦆";

    duck.style.position = "fixed";
    duck.style.fontSize = size;
    duck.style.zIndex = "999998";
    duck.style.pointerEvents = "none";
    duck.style.transition = "transform 12s linear";

    if (direction === "left") {

      duck.style.left = "-100px";
      duck.style.top = height;

      document.body.appendChild(duck);

      setTimeout(() => {
        duck.style.transform = "translateX(120vw)";
      }, 50);

    } else {

      duck.style.right = "-100px";
      duck.style.top = height;
      duck.style.transform = "scaleX(-1)";

      document.body.appendChild(duck);

      setTimeout(() => {
        duck.style.transform = "translateX(-120vw) scaleX(-1)";
      }, 50);
    }

    setTimeout(() => {
      duck.remove();
    }, 12000);
  }

  spawnDuck();

  const interval = setInterval(spawnDuck, 4000);
  duckIntervals.push(interval);
}
</script>
