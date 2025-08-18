document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const pageTitle = document.getElementById('page-title');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab to activate
            const tabId = this.getAttribute('data-tab');
            const tabToActivate = document.getElementById(tabId);
            
            // Update active tab styling
            tabLinks.forEach(tab => {
                tab.classList.remove('text-indigo-600', 'bg-indigo-50');
                tab.classList.add('text-gray-700', 'hover:bg-gray-100');
            });
            
            this.classList.add('text-indigo-600', 'bg-indigo-50');
            this.classList.remove('text-gray-700', 'hover:bg-gray-100');
            
            // Hide all tabs and show the selected one
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            tabToActivate.classList.add('active');
            
            // Update page title
            pageTitle.textContent = this.textContent.trim();
        });
    });
    
    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
    });
});