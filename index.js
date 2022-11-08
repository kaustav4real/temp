const displayMenu = () => {
  document.getElementById("ham-menu").classList.toggle("display-ham-menu");
  document.getElementById("brand-name").classList.toggle("animate-brand");
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((reg) => {
        console.log("Success", reg.scope);
      })
      .catch((err) => {
        console.log("Failure", err);
      });
  });
}
