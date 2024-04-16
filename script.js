document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButtons = document.querySelectorAll('.load-more');
    loadMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            loadMore(tabName);
        });
    });

    // Open default tab on load
    document.getElementsByClassName('tablinks')[0].click();
});

function loadMore(tabName) {
    const tabContent = document.getElementById(tabName);
    const hiddenItems = tabContent.querySelectorAll('.hidden');
    hiddenItems.forEach((item, index) => {
        if (index < 15) {
            item.classList.remove('hidden');
        }
    });
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
