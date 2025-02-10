document.addEventListener("DOMContentLoaded", function () {
    navigate("home");
  });
  
  function navigate(page) {
    let content = document.getElementById("content");
  
    fetch(`pages/${page}.html`)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(error => {
        content.innerHTML = "<h2>Page introuvable</h2>";
      });
  }
// Gérer la soumission du formulaire
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Récupérer les valeurs des champs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('Nom d\'utilisateur:', username);
  console.log('Mot de passe:', password);

  // Si les identifiants sont corrects, fermer la modale
  // Bootstrap fermera automatiquement la modale si tu utilises le bouton de fermeture
  const modal = new bootstrap.Modal(document.getElementById('loginModal'));
  modal.hide(); // Ferme la modale manuellement si nécessaire

  // Afficher un message ou rediriger l'utilisateur
  alert('Connexion réussie !');
});

// ID entrante pour le Back ?
fetch('/login', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      username: username,
      password: password
  })
})
.then(response => response.json())
.then(data => {
  if (data.success) {
      alert("Connexion réussie !");
      const modal = new bootstrap.Modal(document.getElementById('loginModal'));
      modal.hide();
  } else {
      alert("Identifiants incorrects !");
  }
})
.catch(error => {
  console.error("Erreur : ", error);
  alert("Une erreur est survenue.");
});
