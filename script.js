// script.js


function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === '111' && password === '111') {
        
        document.getElementById('login-container').style.display = 'none';

        
        document.querySelector('header').style.display = 'block';
        document.querySelector('.hero').style.display = 'flex';
        document.getElementById('about').style.display = 'block';
        document.querySelector('footer').style.display = 'block';

        return false; 
    } else {
        alert('Username atau password salah');
        return false; 
    }
}
