const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../Solutions pictures');
const targetDir = path.join(__dirname, '../public/images/solutions');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(file => {
        // Skip if not an image (simple check)
        if (!file.match(/\.(jpg|jpeg|png|gif|webp)$/i)) return;

        const sourcePath = path.join(sourceDir, file);

        // Replace spaces and special chars with hyphens, lowercase ext
        let newName = file.replace(/\s+/g, '-').replace(/&/g, 'and');
        const targetPath = path.join(targetDir, newName);

        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) {
                console.error(`Error moving ${file}:`, err);
            } else {
                console.log(`Moved: ${file} -> ${newName}`);
            }
        });
    });
});
