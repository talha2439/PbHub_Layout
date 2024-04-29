function themeChange() {
  let btn = document.getElementById("checkbox");

  if (btn.checked) {
    changeColor();
  } else {
    changeColor();
  }
}

function changeColor() {
  let pElemet = document.getElementsByTagName("p");
  var root = document.documentElement;
  var primaryColor = getComputedStyle(root).getPropertyValue("--basic-purple");

  if (primaryColor === "#181757") {
    for (const elements of pElemet) {
      if (elements.classList.contains("text-white")) {
        elements.classList.toggle("text-white", "text-dark");
      }
    }
    root.style.setProperty("--basic-purple", "#fff");
  } else {
    for (const elements of pElemet) {
      if (elements.classList.contains("text-dark")) {
        elements.classList.toggle("text-dark", "text-white");
      }
    }
    root.style.setProperty("--basic-purple", "#181757");
  }
}

let counter = document.getElementById("counter");
let timers = document.getElementsByClassName("timer");
let timeVal = [750, 23, 200, 28];
let countdownCalled = false;
if (counter) {
  window.addEventListener("scroll", () => {
    if (!countdownCalled && eval(window.scrollY + 450) >= counter.offsetTop) {
      countdownCalled = true;
      for (let i = 0; i < timers.length; i++) {
        countDown(timers[i], timeVal[i]);
      }
    }
  });
}
function countDown(elements, values) {
  let j = 0;
  let interval = setInterval(() => {
    if (j > values) {
      clearInterval(interval);
    } else {
      elements.innerHTML = j;
      j++;
    }
  }, 20);
}

if (document.getElementById("carouselExample")) {
  document.addEventListener("DOMContentLoaded", function () {
    var carouselItems = document.querySelectorAll(".carousel .carousel-item");
    carouselItems.forEach(function (item) {
      var minPerSlide = 3;
      var next = item.nextElementSibling;

      item.appendChild(next.firstElementChild.cloneNode(true));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.nextElementSibling;
        if (!next) {
          next = item.parentElement.firstElementChild;
        }
        item.appendChild(next.firstElementChild.cloneNode(true));
      }
    });
  });
}
