window.addEventListener("DOMContentLoaded", () => {
  const hours = document.getElementsByClassName("hours")[0];
  const minutes = document.getElementsByClassName("Minutes")[0];
  const seconds = document.getElementsByClassName("Seconds")[0];
  const AMPM = document.getElementsByClassName("AMPM")[0];
  const wrapper = document.getElementsByClassName("wrapper")[0];
  const displayDay = document.getElementsByClassName("displayDay")[0];
  const fullscreen = document.getElementById("fullscreenicon");

  const daysOfWeek = ["","Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" , "Saturday" , "Sunday"]

  setInterval(() => {
    const data = new Date();

    hours.textContent = data.getHours() % 12 || 12;
    minutes.textContent = String(data.getMinutes()).padStart("2", 0);
    seconds.textContent = String(data.getSeconds()).padStart("2", 0);

    AMPM.textContent = data.getHours() < 12 ? "AM" : "PM";

    displayDay.textContent = daysOfWeek[data.getDay()];

    console.log(data.getDay());
    
    
  }, 1000);

  fullscreen.addEventListener("click", () => {
    wrapper.requestFullscreen();
  });
});
