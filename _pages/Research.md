---
layout: single
title: "Research"
permalink: /research/
author_profile: true
show_date: false
read_time: false
comments: false
share: false
related: false

---
This section of my portfolio contains my research projects, ranging from random modeling of situations to more academic work. Each project reflects my curiosity in exploring practical and thought-provoking topics through research.

---
<h2 style="margin-bottom: 5px;">
  <a href="https://drive.google.com/file/d/1KiochZ-RqdEu8X_LWzlDm4PUDua_BN14/view"
     style="text-decoration: none; color: inherit;">
    Using an On-Device VLM-Based Edge Computing System for Real-Time Disaster Detection - Brennan Park
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
<div style="flex: 1;">
I developed an on-device edge computing system for real-time disaster detection using Vision-Language Models (VLMs) as an alternative to conventional CNN-based approaches. By comparing ImageNet-pretrained CNNs, fine-tuned CNNs, and the zero-shot VLM Gemma3-4B on the AIDER disaster dataset, I evaluated the feasibility of VLM-based edge inference on a Raspberry Pi 5 under five different seed conditions. <b>(04/2025 - 01/2026)</b>
</div>
<img src="../assets/images/vlmbased.webp" width="300">
</div>

<h2 style="margin-bottom: 5px;">
  <a href="https://ajosr.org/wp-content/uploads/journal/published_paper/volume-4/issue-4/ajsr2026_HHqKq4RY.pdf"
     style="text-decoration: none; color: inherit;">
    Numerical Features from Candlestick Chart Structures for ETF Return Prediction: A Comparison with OHLC Prices and Technical Indicators - Brennan Park
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
<div style="flex: 1;">
This paper studies how explicitly encoding relative price relationships can improve how financial data is represented for machine-learning models. By developing eight numerical features that translate candlestick chart structures into quantitative inputs for predicting short-term ETF returns, I compared their performance with raw OHLC prices and traditional technical indicators across eight major U.S. ETFs. The candlestick-based representations generally achieved lower prediction errors and higher directional accuracy, suggesting that transforming existing price data into relative and normalized features may provide models with a more effective input representation. The paper was later published and accepted by the American Journal of Student Research. <b>(12/2025 - 08/2026)</b>

DOI: 10.70251/HYJR2348.44903920
</div>
<img src="../assets/images/vlmbased.webp" width="300">
</div>

<h2 style="margin-bottom: 5px;">
  <a href="https://drive.google.com/file/d/1KiochZ-RqdEu8X_LWzlDm4PUDua_BN14/view"
     style="text-decoration: none; color: inherit;">
    HiMCM 2025 Report - Brennan Park, Connor Seoung, Jion Choi, Jun Yi
  </a>
</h2>
<div style="display: flex; align-items: flex-start; gap: 20px;">
<div style="flex: 1;">
We developed a mathematical model to optimize emergency evacuation sweep strategies in multi-use buildings during hazards. Using deterministic path planning and stochastic simulations inspired by Close Quarters Battle methods, we analyzed how factors like room size, occupancy, and building layout affect sweep efficiency. <b>(11/2025)</b>
</div>
<img src="../assets/images/fire.webp" width="300">
</div>

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
