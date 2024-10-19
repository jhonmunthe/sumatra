// script.js

// Fungsi untuk memunculkan menu utama dan menyembunyikan form login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulasi pengecekan username dan password
    if (username === '123' && password === '123') {
        // Sembunyikan form login
        document.getElementById('login-container').style.display = 'none';

        // Tampilkan konten utama
        document.querySelector('header').style.display = 'block';
        document.querySelector('.hero').style.display = 'flex';
        document.getElementById('about').style.display = 'block';
        document.querySelector('footer').style.display = 'block';

        return false; // Untuk mencegah form submit ke server
    } else {
        alert('Username atau password salah');
        return false; // Mencegah form tetap disubmit jika salah
    }
}
