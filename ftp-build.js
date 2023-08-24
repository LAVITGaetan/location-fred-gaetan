const { exec } = require("child_process");

// Commande de build Angular (remplacez "your-app" par le nom de votre application)
const angularBuildCommand = "ng build location --base-href";

// Exécution de la commande
exec(angularBuildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de l'exécution de la commande : ${error}`);
    return;
  }
  
  console.log(`Sortie standard : ${stdout}`);
  console.error(`Sortie d'erreur : ${stderr}`);
});