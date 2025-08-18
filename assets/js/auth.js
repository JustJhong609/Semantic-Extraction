document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Basic validation
        if (!email || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        document.getElementById('login-btn-text').classList.add('hidden');
        document.getElementById('login-btn-spinner').classList.remove('hidden');
        document.getElementById('login-btn').disabled = true;
        
        // Here you would typically make an API call to authenticate
        console.log('Login attempt with:', email, password);
        
        // Simulate API call
        setTimeout(() => {
            // Hide loading state
            document.getElementById('login-btn-text').classList.remove('hidden');
            document.getElementById('login-btn-spinner').classList.add('hidden');
            document.getElementById('login-btn').disabled = false;
            
            // Show success message
            showNotification('Login successful! Redirecting...', 'success');
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
        }, 1500);
    });
    
      document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
        
        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (password.length < 8) {
            showNotification('Password must be at least 8 characters', 'error');
            return;
        }
        
        if (!/\d/.test(password)) {
            showNotification('Password must contain at least one number', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }
        
        // Show loading state
        document.getElementById('signup-btn-text').classList.add('hidden');
        document.getElementById('signup-btn-spinner').classList.remove('hidden');
        document.getElementById('signup-btn').disabled = true;
        
        // Here you would typically make an API call to register
        console.log('Signup attempt with:', name, email, password);
        
        // Simulate API call
        setTimeout(() => {
            // Hide loading state
            document.getElementById('signup-btn-text').classList.remove('hidden');
            document.getElementById('signup-btn-spinner').classList.add('hidden');
            document.getElementById('signup-btn').disabled = false;
            
            // Show success message
            showNotification('Account created successfully! Redirecting to login...', 'success');
            
            // Clear form fields
            document.getElementById('signup-name').value = '';
            document.getElementById('signup-email').value = '';
            document.getElementById('signup-password').value = '';
            document.getElementById('signup-confirm-password').value = '';
            
            // Switch to login tab after delay
            setTimeout(() => {
                document.getElementById('login-tab').click();
            }, 2000);
        }, 1500);
    });
});