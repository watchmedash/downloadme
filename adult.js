document.addEventListener("DOMContentLoaded", function() {
    // Array of adult content objects with name and link properties
    const adultLinks = [
      { name: "Sex In Philippine Cinema 1 - HD", link: "https://filemoon.sx/d/nq7gbzjp3br7" },
        // Add more adult content objects as needed...
    ];

    const adultListContainer = document.getElementById("adultList");
    const loadMoreBtn4 = document.getElementById("loadMoreBtn4");
    const searchInput = document.getElementById("searchInput");

    let adultDisplayed = 0;

    function displayAdult(startIndex, endIndex) {
      let displayedCount = 0;

      for (let i = startIndex; i < endIndex && i < adultLinks.length; i++) {
          if (adultLinks[i] && adultLinks[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
              const link = document.createElement("p");
              link.innerHTML = `<a href="${adultLinks[i].link}"><i class="fa fa-download"></i> ${adultLinks[i].name}</a>`;
              adultListContainer.appendChild(link);
              displayedCount++;

              if (displayedCount % 12 === 0 && i !== endIndex - 1) {
              insertAdBanner();
          }
          }
      }

      adultDisplayed += displayedCount;

      // Check if any movies were displayed
      if (displayedCount === 0 && adultDisplayed === 0) {
          const noResultsMsg = document.createElement("p");
          noResultsMsg.textContent = "No items found.";
          adultListContainer.appendChild(noResultsMsg);
      }
      }

      function insertAdBanner() {
      const adContainer = document.createElement("div");
      adContainer.style.width = "100%"; // Set the width of the ad container
      adContainer.style.textAlign = "center"; // Center the ad banner
      adultListContainer.appendChild(adContainer);

      const adScript = document.createElement("script");
      adScript.type = "text/javascript";
      adScript.innerHTML = `
          var atOptions = {
              'key': '562360130da748b77364948cbf50e10b',
              'format': 'iframe',
              'height': 90,
              'width': 728,
              'params': {}
          };
      `;
      adContainer.appendChild(adScript);

      const adScriptSrc = document.createElement("script");
      adScriptSrc.type = "text/javascript";
      adScriptSrc.src = "//perilastronaut.com/b9a8423ba82179e793ae4a5b1096f541/invoke.js";
      adContainer.appendChild(adScriptSrc);
      }


      function loadMoreAdult() {
      const remainingAdult = adultLinks.length - adultDisplayed;
      const batchSize = Math.min(15, remainingAdult);
      if (batchSize > 0) {
          displayAdult(adultDisplayed, adultDisplayed + batchSize);
      }
      if (remainingAdult <= 0) {
          loadMoreBtn4.style.display = "none"; // Hide the button when no more movies are left
      }
      }

      // Initially display the first batch of movies
      loadMoreAdult();

      // Event listener for the "Load More" button
      loadMoreBtn4.addEventListener("click", loadMoreAdult);

      // Event listener for the search input
      searchInput.addEventListener("input", function() {
      adultDisplayed = 0; // Reset the counter when searching
      adultListContainer.innerHTML = ""; // Clear the movie list container
      displayAdult(0, adultLinks.length); // Re-display all movies based on search input
      });


      });
