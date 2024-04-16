document.addEventListener("DOMContentLoaded", function() {
    // Array of show objects with name and link properties
    const showLinks = [
        { name: "Show 1", link: "link-to-Show1" },
        { name: "Show 2", link: "link-to-Show2" },
        { name: "Show 3", link: "link-to-Show3" },
        // Add more show objects as needed...
    ];

    const showListContainer = document.getElementById("showList");
    const loadMoreBtn2 = document.getElementById("loadMoreBtn2");

    let showsDisplayed = 0;

    function displayShows(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            if (showLinks[i]) {
                const link = document.createElement("p");
                link.innerHTML = `<a href="${showLinks[i].link}">${showLinks[i].name}</a>`;
                showListContainer.appendChild(link);
                showsDisplayed++;
            }
        }
    }

    function loadMoreShows() {
        const remainingShows = showLinks.length - showsDisplayed;
        const batchSize = Math.min(15, remainingShows);
        if (batchSize > 0) {
            displayShows(showsDisplayed, showsDisplayed + batchSize);
        }
        if (remainingShows <= 0) {
            loadMoreBtn2.style.display = "none"; // Hide the button when no more shows are left
        }
    }

    // Initially display the first batch of shows
    loadMoreShows();

    // Event listener for the "Load More" button
    loadMoreBtn2.addEventListener("click", loadMoreShows);
});
