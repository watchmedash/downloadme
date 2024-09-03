document.addEventListener("DOMContentLoaded", function() {
    // Array of show objects with name and link properties
    const showLinks = [
        { name: "The Death of Slim Shady (Coup de Grâce).rar (159 MB)", link: "https://www.mediafire.com/file/d4r5dvmb147wx91/The_Death_of_Slim_Shady_%2528Coup_de_Gr%25C3%25A2ce%2529.rar/file" },
        // Add more show objects as needed...
    ];

    const showListContainer = document.getElementById("showList");
    const loadMoreBtn2 = document.getElementById("loadMoreBtn2");
    const searchInput = document.getElementById("searchInput");

    let showsDisplayed = 0;

    function displayShows(startIndex, endIndex) {
      let displayedCount = 0;

      for (let i = startIndex; i < endIndex && i < showLinks.length; i++) {
          if (showLinks[i] && showLinks[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
              const link = document.createElement("p");
              link.innerHTML = `<a href="${showLinks[i].link}"><i class="fa fa-download"></i> ${showLinks[i].name}</a>`;
              showListContainer.appendChild(link);
              displayedCount++;
          }
      }

      showsDisplayed += displayedCount;

      // Check if any movies were displayed
      if (displayedCount === 0 && showsDisplayed === 0) {
          const noResultsMsg = document.createElement("p");
          noResultsMsg.textContent = "No items found.";
          showListContainer.appendChild(noResultsMsg);
      }
      }

      function loadMoreShows() {
      const remainingShows = showLinks.length - showsDisplayed;
      const batchSize = Math.min(15, remainingShows);
      if (batchSize > 0) {
          displayShows(showsDisplayed, showsDisplayed + batchSize);
      }
      if (remainingShows <= 0) {
          loadMoreBtn2.style.display = "none"; // Hide the button when no more movies are left
      }
      }

      // Initially display the first batch of movies
      loadMoreShows();

      // Event listener for the "Load More" button
      loadMoreBtn2.addEventListener("click", loadMoreShows);

      // Event listener for the search input
      searchInput.addEventListener("input", function() {
      showsDisplayed = 0; // Reset the counter when searching
      showListContainer.innerHTML = ""; // Clear the movie list container
      displayShows(0, showLinks.length); // Re-display all movies based on search input
      });


      });
