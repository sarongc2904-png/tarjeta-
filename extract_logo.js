const fs = require('fs');

const filePath = 'C:/Users/saro_/Desktop/tarjeta_sagitario_codigo_completo.html';

try {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/src="(data:image\/jpeg;base64,[^"]+)"/);
  
  if (match) {
    const base64Data = match[1];
    console.log("Successfully found base64 logo data!");
    console.log(`Length: ${base64Data.length} characters`);
    
    fs.writeFileSync('logo_base64.txt', base64Data, 'utf8');
    console.log("Saved logo to logo_base64.txt");
  } else {
    console.log("Could not find base64 logo data in the file!");
  }
} catch (err) {
  console.error("Error reading file:", err.message);
}
