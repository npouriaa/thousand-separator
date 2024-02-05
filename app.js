separatedNumbers = document.querySelectorAll(".separated-number");

separatedNumbers.forEach((num) => {
  num.innerHTML = num.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
