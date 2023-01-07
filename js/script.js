

// Copyright (c) 2022 Darcy Murphy All rights reserved
//
// Created by: Darcy Murphy
// Created on: Nov 2022
// This file contains the JS functions for index.html


"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04/sw.js", {
    scope: "/ICS2O-Unit5-04/",
  })
}

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML =
    "Your age: " + valueFromSlider
}

function myButtonClicked() {
  const day = document.getElementById("day").value
  const age = document.getElementById("slider-value").value

  if ((day == "tuesday" || day == "thursday") || (age > "12" || age < "25")) {
    document.getElementById("price").innerHTML =
      "You're eligible for student pricing."
  } else {
    document.getElementById("price").innerHTML =
      "You're not eligible for student pricing."
  }
}