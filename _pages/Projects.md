---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
show_date: false
read_time: false
comments: false
share: false
related: false
---
This page is dedicated to the personal projects I have done over the years. These projects reflect my interests in engineering, robotics, and figures. From independent experiments to collaborative work, each project represents a step in my growth as a student and creator.

---

<h2 style="margin-bottom: 5px;">AgriVision</h2>

<h2 style="margin-bottom: 5px;">
  <a href="https://drive.google.com/file/d/1Lhq-FwRly7wlgx8qRTpLkb22dewvhWSQ/view"
     style="text-decoration: none; color: inherit;">
    Water Rocket
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
  <div style="flex: 1;">
    Originally assigned as a physics SBE lab that required only the construction and launch of a water bottle rocket. I expanded the project into an interactive, Python-based flight-optimization tool. The program allows users to adjust water fill percentage, launch pressure, and rocket mass, then simulates the rocket's flight. It also compares ideal and realistic drag-based flight models. Overall, this was a really fun project to do, as it allowed me to play around with applied physics and coding. <b>(05/2025 - 06/2025)</b>
  </div>
  <video width="300" autoplay loop muted playsinline>
    <source src="../assets/gif/RocketGif.mp4" type="video/mp4">
  </video>
</div>

<h2 style="margin-bottom: 5px;">
  <a href="https://drive.google.com/file/d/1SYp8Jrdz3xWtcf4ardse8WKeJ6jwZSGA/view"
     style="text-decoration: none; color: inherit;">
    Mathematical Proofs
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
  <div style="flex: 1;">
    A book/compilation of some of my favorite proofs and proofs that I find to be essential. I started this project back in my freshman year of highschool and I continue to add to it whenever I learn something interesting or new. The book was created in Overleaf with LaTeX. <b>(11/2024 - 11/2026)</b>
</div>
<img src="../assets/images/Mathematical_Proofs.webp" width="300">
</div>

<h2 style="margin-bottom: 5px;">
  <a href="https://drive.google.com/file/d/1Lhq-FwRly7wlgx8qRTpLkb22dewvhWSQ/view"
     style="text-decoration: none; color: inherit;">
    Pacing Assistant System for Visually Impaired Swimmers
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
<div style="flex: 1;">
I designed a model of a pacing assistant system for visually impaired swimmers that enables independent lane navigation and consistent stroke rhythm without relying on traditional tapper assistance. The device integrates real-time distance sensing with timed feedback to an app, providing coaches with immediate data. The invention is currently in the patent application process. <b>(04/2025 - 06/2025)</b>
</div>
<img src="../assets/images/swimdevice.webp" width="300">
</div>

<h2 style="margin-bottom: 5px;">
  <a href="https://www.roboshare.kr/"
     style="text-decoration: none; color: inherit;">
    Roboshare
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
<div style="flex: 1;">
I am a co-founder and the head of Marketing & Branding of Roboshare. RoboShare is a student-led non-profit initiative that unites aspiring roboticists across Korea to collaborate on VEX robotics and broader engineering projects. By creating an accessible space for knowledge exchange, design feedback, and peer mentorship, the platform empowers students to accelerate innovation. <b>(06/2025 - present)</b>
</div>
<img src="../assets/images/roboshare.webp" width="300">
</div>

---

<h2 style="margin-bottom: 5px;">Quantum Dots Lab (ESAP)</h2>

<h2 style="margin-bottom: 5px;">Microfluidics Lab (ESAP)</h2>

<h2 style="margin-bottom: 5px;">Microletters Lab (ESAP)</h2>







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
