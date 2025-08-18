document.addEventListener('DOMContentLoaded', function() {
    // Search toggle functionality
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.getElementById('search-box');
    
    searchToggle.addEventListener('click', function() {
        searchBox.classList.toggle('hidden');
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchToggle.contains(e.target)) {
            searchBox.classList.add('hidden');
        }
    });
    
    // Notification dropdown would go here
    // Logout functionality would go here
});