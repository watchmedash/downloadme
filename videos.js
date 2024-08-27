document.addEventListener("DOMContentLoaded", function() {
    // Array of video objects with name and link properties
    const videoLinks = [
        { name: "Dash-TV.apk (10 MB)", link: "https://www.mediafire.com/file/o4w5p75zp2bzrau/Dash-TV.apk/file" },
        // Add more video objects as needed...
    ];

    const videoListContainer = document.getElementById("videoList");
    const loadMoreBtn3 = document.getElementById("loadMoreBtn3");

    let videosDisplayed = 0;

    function displayVideos(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            if (videoLinks[i]) {
                const link = document.createElement("p");
                link.innerHTML = `<a href="${videoLinks[i].link}">${videoLinks[i].name}</a>`;
                videoListContainer.appendChild(link);
                videosDisplayed++;
            }
        }
    }

    function loadMoreVideos() {
        const remainingVideos = videoLinks.length - videosDisplayed;
        const batchSize = Math.min(15, remainingVideos);
        if (batchSize > 0) {
            displayVideos(videosDisplayed, videosDisplayed + batchSize);
        }
        if (remainingVideos <= 0) {
            loadMoreBtn3.style.display = "none"; // Hide the button when no more videos are left
        }
    }

    // Initially display the first batch of videos
    loadMoreVideos();

    // Event listener for the "Load More" button
    loadMoreBtn3.addEventListener("click", loadMoreVideos);
});
