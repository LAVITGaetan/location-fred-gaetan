const fs = require("fs");
const ftp = require("basic-ftp");

async function copyFilesToFTP(sourceDir, targetDir) {
  const client = new ftp.Client();

  try {
    await client.access({
      host: "ftp.cluster031.hosting.ovh.net",
      user: "dtenteq",
      password: "Saphir974Saphir974",
      secure: false
    });

    const files = await fs.promises.readdir(sourceDir);

    for (const file of files) {
      if(file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.html')) {
        const sourcePath = `${sourceDir}/${file}`;
        const targetPath = `${targetDir}/${file}`;
  
        try {
          await client.uploadFrom(sourcePath, targetPath);
          console.log(`${file} uploaded successfully.`);
        } catch (error) {
          console.error(`Error uploading ${file} to FTP:`, error);
        }
      }
    }
  } catch (error) {
    console.error("Error accessing FTP server:", error);
  } finally {
    client.close();
  }
}

const sourcePath = "dist/location";
const targetPath = "./www/newversion";

copyFilesToFTP(sourcePath, targetPath);
