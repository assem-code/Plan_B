function updateProgress() {
    // Get all elements with class "Progress"
    var progressElements = document.querySelectorAll(".Progress");

    // Loop through each "Progress" element
    progressElements.forEach(function(progressElement) {
        // Get the numerator and denominator elements within this "Progress" element
        var numeratorElement = progressElement.querySelector(".numerator");
        var denominatorElement = progressElement.querySelector(".denominator");

        // Parse the text content of the numerator and denominator elements to integers
        var numerator = parseInt(numeratorElement.innerText);
        var denominator = parseInt(denominatorElement.innerText);

        // Calculate the percentage
        var percentage = (numerator / denominator) * 100;

        // Get the progress bar element within this "Progress" element
        var progressBar = progressElement.querySelector(".progress-bar");

        // Set the width of the progress bar based on the calculated percentage
        progressBar.style.width = percentage + "%";
    });
}

// Call the function initially to update the progress bars
updateProgress();
