// Utility functions used across the application

// Notification system
function showNotification(message, type = 'success', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-exclamation-triangle'} mr-2"></i>
        ${message}
        <span class="notification-close ml-4" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </span>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after duration
    if (duration > 0) {
        setTimeout(() => {
            notification.remove();
        }, duration);
    }
    
    return notification;
}

// Password visibility toggler
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// Tab switching functionality for auth forms
function setupAuthTabs() {
    // Toggle between login and signup forms
    document.getElementById('login-tab').addEventListener('click', function() {
        document.getElementById('login-tab').classList.add('text-indigo-600', 'border-indigo-600');
        document.getElementById('login-tab').classList.remove('text-gray-500');
        document.getElementById('signup-tab').classList.add('text-gray-500');
        document.getElementById('signup-tab').classList.remove('text-indigo-600', 'border-indigo-600');
        document.getElementById('login-form').classList.add('active');
        document.getElementById('signup-form').classList.remove('active');
    });
    
    document.getElementById('signup-tab').addEventListener('click', function() {
        document.getElementById('signup-tab').classList.add('text-indigo-600', 'border-indigo-600');
        document.getElementById('signup-tab').classList.remove('text-gray-500');
        document.getElementById('login-tab').classList.add('text-gray-500');
        document.getElementById('login-tab').classList.remove('text-indigo-600', 'border-indigo-600');
        document.getElementById('signup-form').classList.add('active');
        document.getElementById('login-form').classList.remove('active');
    });
    
    document.getElementById('show-signup').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('signup-tab').click();
    });
    
    document.getElementById('show-login').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('login-tab').click();
    });
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only setup auth tabs if we're on a page with auth forms
    if (document.getElementById('login-tab')) {
        setupAuthTabs();
    }
    
    // Other utility initializations can go here
});