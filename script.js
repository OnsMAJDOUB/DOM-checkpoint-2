document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  let colorBox = document.getElementById("color-box");
  let changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add event listener to the button
    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();

})
})