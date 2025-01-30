function showForm(formType) {
    const connexionForm = document.getElementById('connexion-form');
    const inscriptionForm = document.getElementById('inscription-form');
    const connexionButton = document.getElementById('connexion-button');
    const inscriptionButton = document.getElementById('inscription-button');
    if (formType === 'connexion') {
        connexionForm.style.display = 'block';
        inscriptionForm.style.display = 'none';
        connexionButton.classList.add('active');
        inscriptionButton.classList.remove('active');
    } else {
        connexionForm.style.display = 'none';
        inscriptionForm.style.display = 'block';
        connexionButton.classList.remove('active');
        inscriptionButton.classList.add('active');
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function saveRegistrationData(event) {
    event.preventDefault();
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showNotification("Les mots de passe ne correspondent pas.", "error");
        return;
    }

    const userData = {
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));
    showNotification("Inscription réussie !", "success");
    showForm('connexion');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUserData = localStorage.getItem(email);
    if (!storedUserData) {
        showNotification("Utilisateur non trouvé.", "error");
        return;
    }

    const userData = JSON.parse(storedUserData);
    if (userData.password === password) {
        sessionStorage.setItem('isAuthenticated', 'true');
        showNotification("Connexion réussie !", "success");
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        showNotification("Mot de passe incorrect.", "error");
    }
}

document.getElementById('inscription-form').addEventListener('submit', saveRegistrationData);
document.getElementById('connexion-form').addEventListener('submit', handleLogin);
