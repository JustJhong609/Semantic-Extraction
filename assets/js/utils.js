// Toggle password visibility
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

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
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
});