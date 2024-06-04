document.addEventListener("DOMContentLoaded", function() {
    // Array of adult content objects with name and link properties
    const adultLinks = [
      { name: "Himas 2024 Vivamax - HD", link: "https://filemoon.sx/d/dodw9igydogo" },
      { name: "Kasalo Tayo - HD", link: "https://filemoon.sx/d/pf31krq0pofw" },
      { name: "Mahal Ko Ang Mahal Mo 2024 Vivamax - HD", link: "https://filemoon.sx/d/6y8qesq40pus" },
      { name: "Sweet Release 2024 Vivamax - HD", link: "https://filemoon.sx/d/ph3h96v52rq3" },
      { name: "Linya 2024 Vivamax - HD", link: "https://filemoon.sx/d/vtxywutha3b6" },
      { name: "Serbidoras 2024 Vivamax - HD", link: "https://filemoon.sx/d/zd06x1kvshrl" },
      { name: "Kulong 2024 Vivamax - HD", link: "https://filemoon.sx/d/gn2nswojjx2z" },
      { name: "Balinsasayaw 2024 Vivamax - HD", link: "https://filemoon.sx/d/yfqxniwguu27" },
      { name: "Late Bloomer 2024 Vivamax - HD", link: "https://filemoon.sx/d/5wo4z9pklq6k" },
      { name: "Lady Guard 2024 Vivamax - HD", link: "https://filemoon.sx/d/0xqd3ek7tp8g" },
      { name: "Dirty Ice Cream 2024 Vivamax - HD", link: "https://filemoon.sx/d/hucroq5c8hke" },
      { name: "Red Flag 2024 Vivamax - HD", link: "https://filemoon.sx/d/vah0fk2fazgd" },
      { name: "Sweet Release 2024 Vivamax - HD", link: "https://filemoon.sx/d/k7widr1fykez" },
      { name: "Stag 2024 Vivamax - HD", link: "https://filemoon.sx/d/dbofj8gmwhop" },
      { name: "Tl 2024 Vivamax - HD", link: "https://filemoon.sx/d/4qidmg2ybce7" },
      { name: "Wanted Girlfriend 2024 Vivamax - HD", link: "https://filemoon.sx/d/8hizu2pigkix" },
      { name: "Kalikot Vivamax 2024 - HD", link: "https://filemoon.sx/d/k3fvq9xikpoj" },
      { name: "Kapalit 2024 Vivamax - HD", link: "https://filemoon.sx/d/i4ogurdsw8vm" },
      { name: "Kasalo Vivamax 2024 - HD", link: "https://filemoon.sx/d/rx78pipid99f" },
      { name: "Mapanukso 2024 Vivamax - HD", link: "https://filemoon.sx/d/4b2fb4cchjig" },
      { name: "Cheaters 2024 Vivamax - HD", link: "https://filemoon.sx/d/1davblqcwzw8" },
      { name: "Rita 2024 Vivamax - HD", link: "https://filemoon.sx/d/sekvugrd68pg" },
      { name: "5 in 1 Vivamax - HD", link: "https://filemoon.sx/d/9f2ghb5ftgoe" },
      { name: "Japino Vivamax - HD", link: "https://filemoon.sx/d/7bpnpakl1q03" },
      { name: "AFAM Vivamax - HD", link: "https://filemoon.sx/d/kbqcoffqym82" },,
      { name: "Ahasss Vivamax - HD", link: "https://filemoon.sx/d/2rksf42n073o" },
      { name: "Bedspacer Vivamax - HD", link: "https://filemoon.sx/d/aesepk62f61n" },
      { name: "Bisyo! Adik Ka Ba Vivamax - HD", link: "https://filemoon.sx/d/d11o9ii45qvx" },
      { name: "BJJ - Woman on Top Vivamax - HD", link: "https://filemoon.sx/d/ka1hmiqbsgds" },
      { name: "Bugaw Vivamax - HD", link: "https://filemoon.sx/d/i09td18frnhu" },
      { name: "Bula Vivamax - HD", link: "https://filemoon.sx/d/apukje5gpisp" },
      { name: "Dilig Vivamax 2024 - HD", link: "https://filemoon.sx/d/5myc7jy5tdqb" },
      { name: "Role Play Vivamax - HD", link: "https://filemoon.sx/d/dapswr2r2t3y" },
      { name: "Eks Vivamax 2024 - HD", link: "https://filemoon.sx/d/lhbh5tuep6jg" },
      { name: "Fall Guy Vivamax 2023 - HD", link: "https://filemoon.sx/d/ez6z6fy5zn1b" },
      { name: "Foursome Vivamax - HD", link: "https://filemoon.sx/d/o1zhzvh6z4xa" },
      { name: "Ganti-Ganti Vivamax - HD", link: "https://filemoon.sx/d/645ypnvjhzwz" },
      { name: "Haliparot Vivamax 1080p - HD", link: "https://filemoon.sx/d/bxnxv0ryqhhn" },
      { name: "Haslers Vivamax - HD", link: "https://filemoon.sx/d/247ge2pkpbcx" },
      { name: "Hibang Vivamax - HD", link: "https://filemoon.sx/d/vfl3uf6eqiek" },
      { name: "Higop Vivamax - HD", link: "https://filemoon.sx/d/vga3f087qprq" },
      { name: "Hilom Vivamax - HD", link: "https://filemoon.sx/d/5pznsjl076sy" },
      { name: "Home Service Vivamax - HD", link: "https://filemoon.sx/d/o1wpsqsphaks" },
      { name: "Hosto Vivamax - HD", link: "https://filemoon.sx/d/zckzi6imzngp" },
      { name: "Hugot Vivamax- HD", link: "https://filemoon.sx/d/xlr6c9kulv46" },
      { name: "Kabayo Vivamax 2023 - HD", link: "https://filemoon.sx/d/78fj31nbjr62" },,
      { name: "Kabit Vivamax 2024 - HD", link: "https://filemoon.sx/d/chjlxwycmm5v" },
      { name: "Kahalili Vivamax - HD", link: "https://filemoon.sx/d/tanuom7qlx3q" },
      { name: "Kamadora Vivamax - HD", link: "https://filemoon.sx/d/puvxrva6tgou" },
      { name: "Karinyo Brutal Vivamax - HD", link: "https://filemoon.sx/d/5zd8pdc9ylpk" },
      { name: "Katas Vivamax 2024 - HD", link: "https://filemoon.sx/d/svj4a22968yp" },
      { name: "Kinsenas Katapusan Vivamax - HD", link: "https://filemoon.sx/d/bgewom00pabc" },
      { name: "Lagaslas Vivamax - HD", link: "https://filemoon.sx/d/rhffj2nv3ypy" },
      { name: "Lawa Vivamax - HD", link: "https://filemoon.sx/d/dwv195z95jlu" },
      { name: "Ligaw na Bulaklak Vivamax - HD", link: "https://filemoon.sx/d/9hezea7nokhk" },
      { name: "Manyak Vivamax - HD", link: "https://filemoon.sx/d/baafdrbfdfdv" },
      { name: "Mapanukso Vivamax 2024 - HD", link: "https://filemoon.sx/d/4b2fb4cchjig" },
      { name: "Nightbird Vivamax 2023 - HD", link: "https://filemoon.sx/d/0sv46rorsj6d" },
      { name: "Palipat-lipat  Papalit-palit Vivamax - HD", link: "https://filemoon.sx/d/n2745sqf9zl2" },
      { name: "Panibugho Vivamax - HD", link: "https://filemoon.sx/d/28z3qibqcjmb" },
      { name: "Pantasya ni Tami Vivamax - HD", link: "https://filemoon.sx/d/rq242wcxeqog" },
      { name: "Patikim-tikim Vivamax - HD", link: "https://filemoon.sx/d/2oabkkr2ouou" },
      { name: "Paupahan Vivamax - HD", link: "https://filemoon.sx/d/snunhv35lbrw" },
      { name: "Punit na Langit Vivamax - HD", link: "https://filemoon.sx/d/audwqv4kjkyc" },
      { name: "Relyebo Vivamax - HD", link: "https://filemoon.sx/d/effskymawaiw" },
      { name: "Room Service Vivamax - HD", link: "https://filemoon.sx/d/0nr9ee67uyeg" },
      { name: "Salakab Vivamax - HD", link: "https://filemoon.sx/d/qmofspzvlroi" },
      { name: "Salamat Daks Vivamax - HD", link: "https://filemoon.sx/d/w1ogqz8hs37s" },
      { name: "Salawahan Vivamax 2024 - HD", link: "https://filemoon.sx/d/d4i64316i6fb" },
      { name: "Salisihan Vivamax 2024 - HD", link: "https://filemoon.sx/d/cq8xlj8haxhl" },
      { name: "Salitan Vivamax - HD", link: "https://filemoon.sx/d/d0eckrlzfjed" },
      { name: "Sandwich Vivamax - HD", link: "https://filemoon.sx/d/ka39cqazo2p0" },
      { name: "Sex Games Vivamax 2023 - HD", link: "https://filemoon.sx/d/xm0khj1nskyj" },
      { name: "Sila Ay Akin Vivamax - HD", link: "https://filemoon.sx/d/o30tc5zgxdtp" },
      { name: "Sugapa Vivamax - HD", link: "https://filemoon.sx/d/oe0wvrnusrel" },
      { name: "Suki Vivamax - HD", link: "https://filemoon.sx/d/0z0ppvk283yy" },
      { name: "Tayuan Vivamax - HD", link: "https://filemoon.sx/d/rsnlyg22istg" },
      { name: "Tubero Vivamax - HD", link: "https://filemoon.sx/d/nwc93be0au2n" },
      { name: "Tuhog Vivamax 2023 - HD", link: "https://filemoon.sx/d/uppui6n22gg7" },
      { name: "Sugar Baby Vivamax - HD", link: "https://filemoon.sx/d/i8b9mr9vio28" },
      { name: "Star Dancer Vivamax - HD", link: "https://filemoon.sx/d/qcdc2xuvkvui" },
      { name: "Deleter Vivamax - HD", link: "https://filemoon.sx/d/9yfrp02yzdzo" },
      { name: "Upuan Vivamax - HD", link: "https://filemoon.sx/d/1nujb7zwe6lc" },
      { name: "Sapul Vivamax - HD", link: "https://filemoon.sx/d/pd2pqjixh96i" },
      { name: "Two Of Us Vivamax - HD", link: "https://filemoon.sx/d/m5aoexk1brs3" },
      { name: "Balik Taya Vivamax - HD", link: "https://filemoon.sx/d/n3qhom4pwa7e" },
      { name: "Kabayo Vivamax - HD", link: "https://filemoon.sx/d/fxsbsoiezvpv" },
      { name: "Domme Vivamax - HD", link: "https://filemoon.sx/d/wcdqhoeaod6z" },
      { name: "La Querida Vivamax - HD", link: "https://filemoon.sx/d/dhctn0i0nrik" },
      { name: "Boso Dos Vivamax - HD", link: "https://filemoon.sx/d/lmkhm4uwkc66" },
      { name: "Adonis x Vivamax - HD", link: "https://filemoon.sx/d/kginm5689rj2" },
      { name: "Alapaap Vivamax - HD", link: "https://filemoon.sx/d/1sjuwv104zmo" },
      { name: "An Affair to Forget Vivamax - HD", link: "https://filemoon.sx/d/ug5e4nqz6re6" },
      { name: "Ang Babaeng Nawawala sa Sarili Vivamax - HD", link: "https://filemoon.sx/d/0pka093a9brd" },
      { name: "Bata pa si Sabel Vivamax - HD", link: "https://filemoon.sx/d/gnte4a2qu6tg" },
      { name: "Biyak  Vivamax - HD", link: "https://filemoon.sx/d/muvelmeey2k6" },
      { name: "Hugas  Vivamax - HD", link: "https://filemoon.sx/d/geg0y03kpavi" },
      { name: "Breathe Again 2022  Vivamax - HD", link: "https://filemoon.sx/d/cgmjr5vafgi2" },
      { name: "Do You Think I Am Sexy 2022  Vivamax - HD", link: "https://filemoon.sx/d/77xdwgqaxt2f" },
      { name: "Girl Friday 2022  Vivamax - HD", link: "https://filemoon.sx/d/po8wpkvdd5yd" },
      { name: "Doblado  Vivamax - HD", link: "https://filemoon.sx/d/3pfjdj14du5l" },
      { name: "Bugso 2022  Vivamax - HD", link: "https://filemoon.sx/d/bcwm7aq19oxr" },
      { name: "Expensive Candy 2022  Vivamax - HD", link: "https://filemoon.sx/d/soswfp74q0cc" },
      { name: "Boy Bastos Vivamax - HD", link: "https://filemoon.sx/d/86hk7762e3q3" },
      { name: "Ikaw Lang Ang Mahal  Vivamax - HD", link: "https://filemoon.sx/d/3pfjdj14du5l" },
      { name: "Island of Desire  Vivamax - HD", link: "https://filemoon.sx/d/6x8pl0d5wt1z" },
      { name: "Kara Krus  Vivamax - HD", link: "https://filemoon.sx/d/9q8bl1t78who" },
      { name: "Kitty K7 Vivamax - HD", link: "https://filemoon.sx/d/6nxpmxmgwooj" },
      { name: "Lampas Langit Vivamax - HD", link: "https://filemoon.sx/d/fzjy7uq1giht" },
      { name: "Laruan 2022 Vivamax - HD", link: "https://filemoon.sx/d/799a8avottzc" },
      { name: "Mahjong Nights 2022 Vivamax - HD", link: "https://filemoon.sx/d/mq161ikelyfs" },
      { name: "Memories of a Love Story 2022 - HD", link: "https://filemoon.sx/d/wagofhmgv5ix" },
      { name: "Moonlight Butterfly 2022  Vivamax - HD", link: "https://filemoon.sx/d/mf0q3qg701y5" },
      { name: "Pabuya 2022 Vivamax - HD", link: "https://filemoon.sx/d/duge4mz4kgko" },
      { name: "Pamasahe 2022 Vivamax - HD", link: "https://filemoon.sx/d/4g1rqy82xvq2" },
      { name: "Pathirsty 2022  Vivamax - HD", link: "https://filemoon.sx/d/94kbkmxkqxei" },
      { name: "Pula Ang Kulay Ng Gabi 2022  Vivamax - HD", link: "https://filemoon.sx/d/azstr878y0ge" },
      { name: "Purificacion 2022 - HD", link: "https://filemoon.sx/d/spspdsiruejf" },
      { name: "Pusoy 2022  Vivamax - HD", link: "https://filemoon.sx/d/3vik1k8bbiij" },
      { name: "Putahe  Vivamax - HD", link: "https://filemoon.sx/d/eexdz1d7tf6r" },
      { name: "Shoot Shoot Vivamax - HD", link: "https://filemoon.sx/d/iynp6xfo14zz" },
      { name: "Selinas Gold Vivamax - HD", link: "https://filemoon.sx/d/lktmoee2khxg" },
      { name: "Showroom Vivamax - HD", link: "https://filemoon.sx/d/32p2zdsury6q" },
      { name: "Siklo 2022 Vivamax - HD", link: "https://filemoon.sx/d/cf7alwlozgwy" },
      { name: "Sisid 2022 Vivamax - HD", link: "https://filemoon.sx/d/ujjokhou8cql" },
      { name: "Sitio Diablo 2022 Vivamax - HD", link: "https://filemoon.sx/d/qhllthmy231a" },
      { name: "Tahan 2022 Vivamax - HD", link: "https://filemoon.sx/d/wig2uqx42bar" },
      { name: "The Escort Wife 2022 Vivamax - HD", link: "https://filemoon.sx/d/y68o7jnyjvz1" },
      { name: "The Influencer Vivamax - HD", link: "https://filemoon.sx/d/fijxjwoz6krn" },
      { name: "The Last Five Years 2022 Vivamax - HD", link: "https://filemoon.sx/d/om73ct6roxod" },
      { name: "The Wife Vivamax - HD", link: "https://filemoon.sx/d/er3htaiqf0rm" },
      { name: "Us X Her 2022 Vivamax - HD", link: "https://filemoon.sx/d/ytt90mv2s15y" },
      { name: "X-deal 2 Vivamax - HD", link: "https://filemoon.sx/d/uqbu0my051m9" },
      { name: "Virgin Forest Vivamax - HD", link: "https://filemoon.sx/d/lhqp7f5iq34y" },
      { name: "Reroute 2022 Vivamax - HD", link: "https://filemoon.sx/d/z3b7h05b6b6s" },
      { name: "Seksi- Pantasya at Pelikula - HD", link: "https://filemoon.sx/d/dzqqfi5mmxoi" },
{ name: "Sex In Philippine Cinema 1 - HD", link: "https://filemoon.sx/d/nq7gbzjp3br7" },
      { name: "Sex In Philippine Cinema 2 - HD", link: "https://filemoon.sx/d/zkw4hho40jlf" },
      { name: "Sex In Philippine Cinema 3 - HD", link: "https://filemoon.sx/d/nc8x40kua47x" },

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
