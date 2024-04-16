document.addEventListener("DOMContentLoaded", function() {
    // Array of adult content objects with name and link properties
    const adultLinks = [
        { name: "Adult Content 1", link: "link-to-Adult1" },
        { name: "Adult Content 2", link: "link-to-Adult2" },
        { name: "Adult Content 3", link: "link-to-Adult3" },
        // Add more adult content objects as needed...
    ];

    const adultListContainer = document.getElementById("adultList");
    const loadMoreBtn = document.getElementById("loadMoreBtn4"); // Note the unique ID for the button

    let AdultDisplayed = 0;

    function displayAdult(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            if (adultLinks[i]) {
                const link = document.createElement("p");
                link.innerHTML = `<a href="${adultLinks[i].link}">${adultLinks[i].name}</a>`;
                adultListContainer.appendChild(link);
                AdultDisplayed++;
            }
        }
    }

    function loadMoreAdult() {
        const remainingAdult = adultLinks.length - AdultDisplayed;
        const batchSize = Math.min(15, remainingAdult);
        if (batchSize > 0) {
            displayAdult(AdultDisplayed, AdultDisplayed + batchSize);
        }
        if (remainingAdult <= 0) {
            loadMoreBtn.style.display = "none"; // Hide the button when no more adult content is left
        }
    }

    // Initially display the first batch of adult content
    loadMoreAdult();

    // Event listener for the "Load More" button
    loadMoreBtn.addEventListener("click", loadMoreAdult);
});
