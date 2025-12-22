const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
    { name: 'Access-Control-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Access-Control-Systems-scaled.jpg' },
    { name: 'CCTV-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/CCTV-Systems-scaled.jpg' },
    { name: 'Data-Centers.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Data-Centers.jpg' },
    { name: 'Emergency-Lighting-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Emergency-Lighting-Systems.jpg' },
    { name: 'Fire-Alarm-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Fire-Alarm-Systems.jpg' },
    { name: 'Fire-Resistant-Doors.png', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Fire-Resistant-Doors.png' },
    { name: 'Fire-Suppression-for-Transformers.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Fire-Suppression-for-Transformers.jpg' },
    { name: 'Firefighting-Systems.png', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Firefighting-Systems.png' },
    { name: 'IPTV-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/IPTV-Systems.jpg' },
    { name: 'Lighting-Control-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Lighting-Control-Systems.jpg' },
    { name: 'Master-Clock-Hours-System.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Master-Clock-Hours-System.jpg' },
    { name: 'Network-Internet-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Network-Internet-Systems.jpg' },
    { name: 'Nurse-Call-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Nurse-Call-Systems.jpg' },
    { name: 'Parking-Management-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Parking-Management-Systems-scaled.jpg' },
    { name: 'Raised-Floor-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Raised-Floor-Systems.jpg' },
    { name: 'Smart-Home-Automation.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Smart-Home-Automation.jpg' },
    { name: 'Structured-Cabling-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Structured-Cabling-Systems.jpg' },
    { name: 'Voice-Alarm-Systems.png', url: 'https://choice-agency.com/wp-content/uploads/2025/12/Voice-Alarm-Systems.png' },
    { name: 'VOIP-Systems.jpg', url: 'https://choice-agency.com/wp-content/uploads/2025/12/VOIP-Systems.jpg' }
];

const targetDir = path.join(__dirname, '../public/images/solutions');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Ignore SSL errors
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

console.log(`Downloading ${images.length} images to ${targetDir}...`);

images.forEach(img => {
    const file = fs.createWriteStream(path.join(targetDir, img.name));
    https.get(img.url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${img.name}`);
        });
    }).on('error', err => {
        fs.unlink(path.join(targetDir, img.name), () => { }); // Delete the file async. (But we don't check for this)
        console.error(`Error downloading ${img.name}: ${err.message}`);
    });
});
