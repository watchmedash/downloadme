document.addEventListener("DOMContentLoaded", function() {
    // Array of show objects with name and link properties
    const showLinks = [
      { name: "Tracker Season 1 Episode 13", link: "https://filemoon.sx/d/em4wjczoy658" },
      { name: "Tracker Season 1 Episode 12", link: "https://filemoon.sx/d/5po7p3ywp1bs" },
      { name: "Tracker Season 1 Episode 11", link: "https://filemoon.sx/d/4be3u21qgpck" },
      { name: "Tracker Season 1 Episode 9", link: "https://filemoon.sx/d/gai6ewt06idb" },
      { name: "Tracker Season 1 Episode 10", link: "https://filemoon.sx/d/0t56nivw6m2g" },
      { name: "Shogun Season 1 Episode 10", link: "https://filemoon.sx/d/1dpk627ukdb3" },
      { name: "Knuckles Season 1 Episode 1", link: "https://filemoon.sx/d/m84ct5vamiie" },
      { name: "Knuckles Season 1 Episode 2", link: "https://filemoon.sx/d/varxnz0hlkfx" },
      { name: "Knuckles Season 1 Episode 3", link: "https://filemoon.sx/d/rqhamx2ja1dl" },
      { name: "Knuckles Season 1 Episode 4", link: "https://filemoon.sx/d/vckoduiu445m" },
      { name: "Knuckles Season 1 Episode 5", link: "https://filemoon.sx/d/sgkeqlezu89s" },
      { name: "Knuckles Season 1 Episode 6", link: "https://filemoon.sx/d/cphw8w1t6sok" },
        { name: "Shogun Season 1 Episode 9", link: "https://filemoon.sx/d/4odkgma4p7r9" },
        { name: "Fallout Season 1 Episode 1", link: "https://filemoon.sx/d/zhm69kdtf6q7" },
        { name: "Fallout Season 1 Episode 2", link: "https://filemoon.sx/d/twcats6o9sz3" },
        { name: "Fallout Season 1 Episode 3", link: "https://filemoon.sx/d/6buvp405kdrp" },
        { name: "Fallout Season 1 Episode 4", link: "https://filemoon.sx/d/cqgiuopz4s6g" },
        { name: "Fallout Season 1 Episode 5", link: "https://filemoon.sx/d/c8ajkj2cyquv" },
        { name: "Fallout Season 1 Episode 6", link: "https://filemoon.sx/d/trx52w4w3s19" },
        { name: "Fallout Season 1 Episode 7", link: "https://filemoon.sx/d/fhtnmyme279h" },
        { name: "Fallout Season 1 Episode 8", link: "https://filemoon.sx/d/n6wtcnli3ahf" },
        { name: "Shogun Season 1 Episode 1", link: "https://filemoon.sx/d/u04a35n4crv7" },
        { name: "Shogun Season 1 Episode 2", link: "https://filemoon.sx/d/2snczl3negmq" },
        { name: "Shogun Season 1 Episode 3", link: "https://filemoon.sx/d/l0x1kvtc9zxd" },
        { name: "Shogun Season 1 Episode 4", link: "https://filemoon.sx/d/2vnymibxzscm" },
        { name: "Shogun Season 1 Episode 5", link: "https://filemoon.sx/d/krbusd4p9vod" },
        { name: "Shogun Season 1 Episode 6", link: "https://filemoon.sx/d/f2jux31f793k" },
        { name: "Shogun Season 1 Episode 7", link: "https://filemoon.sx/d/ixnqq7ylo5q2" },
        { name: "Shogun Season 1 Episode 8", link: "https://filemoon.sx/d/15iiosqsoglt" },
        { name: "The Walking Dead: The Ones Who Live Episode 1", link: "https://filemoon.sx/d/xoiv1m8d7qzn" },
        { name: "The Walking Dead: The Ones Who Live Episode 2", link: "https://filemoon.sx/d/smpwifgmv2gl" },
        { name: "The Walking Dead: The Ones Who Live Episode 3", link: "https://filemoon.sx/d/mjrfafgwwecy" },
        { name: "The Walking Dead: The Ones Who Live Episode 4", link: "https://filemoon.sx/d/l2bslcywgm84" },
        { name: "The Walking Dead: The Ones Who Live Episode 5", link: "https://filemoon.sx/d/o6wnbly9ea4i" },
        { name: "The Walking Dead: The Ones Who Live Episode 6", link: "https://filemoon.sx/d/xd3qzlia8azt" },
        { name: "Avatar: The Last Airbender Season 1 Episode 1", link: "https://filemoon.sx/d/knuvxjnufst8" },
        { name: "Avatar: The Last Airbender Season 1 Episode 2", link: "https://filemoon.sx/d/2g4i5tt4i5ub" },
        { name: "Avatar: The Last Airbender Season 1 Episode 3", link: "https://filemoon.sx/d/0ktvpokkmtji" },
        { name: "Avatar: The Last Airbender Season 1 Episode 4", link: "https://filemoon.sx/d/fm62fp46lmwx" },
        { name: "Avatar: The Last Airbender Season 1 Episode 5", link: "https://filemoon.sx/d/1kx8hyj8li6o" },
        { name: "Avatar: The Last Airbender Season 1 Episode 6", link: "https://filemoon.sx/d/zxdp4kxoru3j" },
        { name: "Avatar: The Last Airbender Season 1 Episode 7", link: "https://filemoon.sx/d/mz734eoko08l" },
        { name: "Avatar: The Last Airbender Season 1 Episode 8", link: "https://filemoon.sx/d/qzyr59rrnl61" },
        { name: "Halo Season 2 Episode 1", link: "https://filemoon.sx/d/5t2a27gi8j2v" },
        { name: "Halo Season 2 Episode 2", link: "https://filemoon.sx/d/2m7h6upwlp5f" },
        { name: "Halo Season 2 Episode 3", link: "https://filemoon.sx/d/9c1f01n3fruh" },
        { name: "Halo Season 2 Episode 4", link: "https://filemoon.sx/d/v2g6nuzv6m27" },
        { name: "Halo Season 2 Episode 5", link: "https://filemoon.sx/d/3uuo2kjf9m82" },
        { name: "Halo Season 2 Episode 6", link: "https://filemoon.sx/d/mahgso1qx3y1" },
        { name: "Halo Season 2 Episode 7", link: "https://filemoon.sx/d/i0trud813mj9" },
        { name: "Halo Season 2 Episode 8", link: "https://filemoon.sx/d/hg77gd5aa37k" },
        { name: "Tracker Season 1 Episode 1", link: "https://filemoon.sx/d/jozsoiz12jxn" },
        { name: "Tracker Season 1 Episode 2", link: "https://filemoon.sx/d/guqgbcn6mhw7" },
        { name: "Tracker Season 1 Episode 3", link: "https://filemoon.sx/d/ga3kau4hsx8r" },
        { name: "Tracker Season 1 Episode 4", link: "https://filemoon.sx/d/w12kov4ry7om" },
        { name: "Tracker Season 1 Episode 5", link: "https://filemoon.sx/d/yrnsdapm65m1" },
        { name: "Tracker Season 1 Episode 6", link: "https://filemoon.sx/d/gavwogf2chwm" },
        { name: "Tracker Season 1 Episode 7", link: "https://filemoon.sx/d/0wjroxj9yrqp" },
        { name: "Tracker Season 1 Episode 8", link: "https://filemoon.sx/d/8zoo4vqatwhg" },
        { name: "Parasyte: The Grey Season 1 Episode 1", link: "https://filemoon.sx/d/etta8ml281eu" },
        { name: "Parasyte: The Grey Season 1 Episode 2", link: "https://filemoon.sx/d/4nbtzc48fqv2" },
        { name: "Parasyte: The Grey Season 1 Episode 3", link: "https://filemoon.sx/d/9iv456gtyj7b" },
        { name: "Parasyte: The Grey Season 1 Episode 4", link: "https://filemoon.sx/d/t9fgm9gk0xsm" },
        { name: "Parasyte: The Grey Season 1 Episode 5", link: "https://filemoon.sx/d/gnd376qd28ao" },
        { name: "Parasyte: The Grey Season 1 Episode 6", link: "https://filemoon.sx/d/jdgy3ereopr9" },
        { name: "Masters of the Air Season 1 Episode 1", link: "https://filemoon.sx/d/hto3dqutjoh6" },
        { name: "Masters of the Air Season 1 Episode 2", link: "https://filemoon.sx/d/4vzohk15hrt4" },
        { name: "Masters of the Air Season 1 Episode 3", link: "https://filemoon.sx/d/9e210chm2shd" },
        { name: "Masters of the Air Season 1 Episode 4", link: "https://filemoon.sx/d/ldo3fwbeiz5m" },
        { name: "Masters of the Air Season 1 Episode 5", link: "https://filemoon.sx/d/jj79eex1bmmb" },
        { name: "Masters of the Air Season 1 Episode 6", link: "https://filemoon.sx/d/gxfbcgb741rs" },
        { name: "Masters of the Air Season 1 Episode 7", link: "https://filemoon.sx/d/026l54umnpci" },
        { name: "Masters of the Air Season 1 Episode 8", link: "https://filemoon.sx/d/jk0dusc5lbno" },
        { name: "Masters of the Air Season 1 Episode 9", link: "https://filemoon.sx/d/hny96n3nms6e" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 1", link: "https://filemoon.sx/d/iicspxoh3hvg" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 2", link: "https://filemoon.sx/d/w9yo00ptu3cl" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 3", link: "https://filemoon.sx/d/mgytnaehwx0m" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 4", link: "https://filemoon.sx/d/3nblqr31tegg" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 5", link: "https://filemoon.sx/d/gjp91skn3kta" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 6", link: "https://filemoon.sx/d/pndg5uxnii1d" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 7", link: "https://filemoon.sx/d/r4qj6ojobb6t" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 8", link: "https://filemoon.sx/d/8s9fb779vr0s" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 9", link: "https://filemoon.sx/d/pezr9q3fjvvu" },
        { name: "Monarch: Legacy of Monsters Season 1 Episode 10", link: "https://filemoon.sx/d/zwzjbpf40e45" },
        { name: "Solo Leveling Season 1 Episode 1", link: "https://filemoon.sx/d/oxntmu8g0aes" },
        { name: "Solo Leveling Season 1 Episode 2", link: "https://filemoon.sx/d/d7nd5b8m7c03" },
        { name: "Solo Leveling Season 1 Episode 3", link: "https://filemoon.sx/d/93byjncpoa5p" },
        { name: "Solo Leveling Season 1 Episode 4", link: "https://filemoon.sx/d/x2odl4eq91mh" },
        { name: "Solo Leveling Season 1 Episode 5", link: "https://filemoon.sx/d/4oco99kr4rxj" },
        { name: "Solo Leveling Season 1 Episode 6", link: "https://filemoon.sx/d/23ueo6qv3l4o" },
        { name: "Solo Leveling Season 1 Episode 7", link: "https://filemoon.sx/d/wkngp3slv4cx" },
        { name: "Solo Leveling Season 1 Episode 8", link: "https://filemoon.sx/d/9lu3f90dwwia" },
        { name: "Solo Leveling Season 1 Episode 9", link: "https://filemoon.sx/d/d3kdxpyte64w" },
        { name: "Solo Leveling Season 1 Episode 10", link: "https://filemoon.sx/d/htb239t1z7zy" },
        { name: "Solo Leveling Season 1 Episode 11", link: "https://filemoon.sx/d/psywad34peaq" },
        { name: "Solo Leveling Season 1 Episode 12", link: "https://filemoon.sx/d/083he7y3ucuf" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 1", link: "https://filemoon.sx/d/5b3q10mqinb1" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 2", link: "https://filemoon.sx/d/m8ta2zr8l882" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 3", link: "https://filemoon.sx/d/tlkvqndtpxd0" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 4", link: "https://filemoon.sx/d/7ok5son27uyb" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 5", link: "https://filemoon.sx/d/1pt77jcmzxle" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 6", link: "https://filemoon.sx/d/5cmkw9fksbz3" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 7", link: "https://filemoon.sx/d/hrl2uwmjpgpa" },
        { name: "Mr. &amp; Mrs. Smith Season 1 Episode 8", link: "https://filemoon.sx/d/8oz5ylt7h35l" },
        { name: "Reacher Season 2 Episode 1", link: "https://filemoon.sx/d/psrwo9l4fpk9" },
        { name: "Reacher Season 2 Episode 2", link: "https://filemoon.sx/d/80cjsbv6rdlz" },
        { name: "Reacher Season 2 Episode 3", link: "https://filemoon.sx/d/7a2z0vsltl86" },
        { name: "Reacher Season 2 Episode 4", link: "https://filemoon.sx/d/q1anqeoj47b6" },
        { name: "Reacher Season 2 Episode 5", link: "https://filemoon.sx/d/r62f8dk1dx3p" },
        { name: "Reacher Season 2 Episode 6", link: "https://filemoon.sx/d/icawn0f97k2z" },
        { name: "Reacher Season 2 Episode 7", link: "https://filemoon.sx/d/zdi0vg1y0w6i" },
        { name: "Reacher Season 2 Episode 8", link: "https://filemoon.sx/d/1smybb65wsko" },
        { name: "Yu Yu Hakusho Season 1 Episode 1", link: "https://filemoon.sx/d/emdeieg2fadv" },
        { name: "Yu Yu Hakusho Season 1 Episode 2", link: "https://filemoon.sx/d/1yegry495ho2" },
        { name: "Yu Yu Hakusho Season 1 Episode 3", link: "https://filemoon.sx/d/p4ql84wf8dio" },
        { name: "Yu Yu Hakusho Season 1 Episode 4", link: "https://filemoon.sx/d/utsi5jhycpne" },
        { name: "Yu Yu Hakusho Season 1 Episode 5", link: "https://filemoon.sx/d/61btit3w3hal" },
        { name: "Ted Season 1 Episode 1", link: "https://filemoon.sx/d/7p1evb5d19yb" },
        { name: "Ted Season 1 Episode 2", link: "https://filemoon.sx/d/4dtfx2k6y8ka" },
        { name: "Ted Season 1 Episode 3", link: "https://filemoon.sx/d/pdq4k2f2j4os" },
        { name: "Ted Season 1 Episode 4", link: "https://filemoon.sx/d/y1i5f74w4e2z" },
        { name: "Ted Season 1 Episode 5", link: "https://filemoon.sx/d/csr08mqp5655" },
        { name: "Ted Season 1 Episode 6", link: "https://filemoon.sx/d/gsjq60401q6k" },
        { name: "Ted Season 1 Episode 7", link: "https://filemoon.sx/d/iptrzmqy4ssd" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 1", link: "https://filemoon.sx/d/vu3ttohgtjvg" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 2", link: "https://filemoon.sx/d/i4j17pwxeari" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 3", link: "https://filemoon.sx/d/rrj4a5hybd54" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 4", link: "https://filemoon.sx/d/tc1n6kzfw0do" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 5", link: "https://filemoon.sx/d/n8ywdr4nwer9" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 6", link: "https://filemoon.sx/d/x8da39gubcvu" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 7", link: "https://filemoon.sx/d/g55lghbcepaw" },
        { name: "Percy Jackson and the Olympians Season 1 Episode 8", link: "https://filemoon.sx/d/wfi7bgs14qr8" },
        { name: "Echo Season 1 Episode 1", link: "https://filemoon.sx/d/7wqn68jyayi0" },
        { name: "Echo Season 1 Episode 2", link: "https://filemoon.sx/d/lltnj4fc51sz" },
        { name: "Echo Season 1 Episode 3", link: "https://filemoon.sx/d/y2cwvlitslh5" },
        { name: "Echo Season 1 Episode 4", link: "https://filemoon.sx/d/a5e3s3ks7x79" },
        { name: "Echo Season 1 Episode 5", link: "https://filemoon.sx/d/wwwn2ny5tfag" },
        { name: "Halo Season 1 Episode 1", link: "https://filemoon.sx/d/y2fiwbxwm7p4" },
        { name: "Halo Season 1 Episode 2", link: "https://filemoon.sx/d/0eyictb88b27" },
        { name: "Halo Season 1 Episode 3", link: "https://filemoon.sx/d/zgtg8oi7nxtj" },
        { name: "Halo Season 1 Episode 4", link: "https://filemoon.sx/d/5mugroi6sf2o" },
        { name: "Halo Season 1 Episode 5", link: "https://filemoon.sx/d/phyj7f9eu4kk" },
        { name: "Halo Season 1 Episode 6", link: "https://filemoon.sx/d/7jboves5kz7d" },
        { name: "Halo Season 1 Episode 7", link: "https://filemoon.sx/d/nmb2lvnjyw10" },
        { name: "Halo Season 1 Episode 8", link: "https://filemoon.sx/d/kpyf0j3e8z2e" },
        { name: "Halo Season 1 Episode 9", link: "https://filemoon.sx/d/58ikqfkhnx5v" },
        { name: "Reacher Season 1 Episode 1", link: "https://filemoon.sx/d/8dca7pmogz5r" },
        { name: "Reacher Season 1 Episode 2", link: "https://filemoon.sx/d/762gw7ygteuk" },
        { name: "Reacher Season 1 Episode 3", link: "https://filemoon.sx/d/tyvb16fi1b8u" },
        { name: "Reacher Season 1 Episode 4", link: "https://filemoon.sx/d/f8bnlczdookd" },
        { name: "Reacher Season 1 Episode 5", link: "https://filemoon.sx/d/t6umr4njuxpr" },
        { name: "Reacher Season 1 Episode 6", link: "https://filemoon.sx/d/ua76akty6d9b" },
        { name: "Reacher Season 1 Episode 7", link: "https://filemoon.sx/d/iaalxe1p8j7s" },
        { name: "Reacher Season 1 Episode 8", link: "https://filemoon.sx/d/9u4ypq82or8a" },
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

              if (displayedCount % 12 === 0 && i !== endIndex - 1) {
              insertAdBanner();
          }
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

      function insertAdBanner() {
      const adContainer = document.createElement("div");
      adContainer.style.width = "100%"; // Set the width of the ad container
      adContainer.style.textAlign = "center"; // Center the ad banner
      showListContainer.appendChild(adContainer);

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
