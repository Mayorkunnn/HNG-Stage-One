/** @format */

const day = document.getElementById("day");
const time = document.getElementById("time");
const profilePic = document.getElementById("profilepic");

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const utcTime = Date.now() + "";

day.textContent = `Current Day: ${days[date.getDay()]}`;
time.textContent = `Current UTC Time: ${utcTime}`;
