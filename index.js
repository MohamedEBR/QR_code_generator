/*
    Name:        QR Code Generator
    Purpose:     generate QR codes from URLs and save them as image files

    Author:      Mr Kowalczewski
    Created:     22-Sep-2023
    Updated:     NA-Sep-2023
*/
//---------------------------------------------------------------------------

// Import required libraries
import * as readline from 'readline';     // For reading input from the user
import * as fs from 'fs';                 // For file system operations
import * as QRcode from 'qrcode';         // For generating QR codes from URLs
import * as qr from 'qr-image';           // For creating a QR code image
import { stdin as input, stdout as output } from 'process'; // For standard input and output

// Create a readline interface for user input and output
const rl = readline.createInterface({ input, output });

function isValidURL(url) {
    // Regular expression for a simple URL validation
    const urlPattern = /^(https?:\/\/)?([\w\d]+\.)+\w{2,}(\/.*)?$/i;
    return urlPattern.test(url);
}

function getUserInput() {
    rl.question('Type in a URL: ', (url) => {
        if (!isValidURL(url)) {
            console.error('Invalid URL format. Please enter a valid URL starting with http:// or https://.');
            getUserInput(); // Recursively call the function until a valid URL is provided
        } else {
            generateQRCode(url);
        }
    });
}

function generateQRCode(url) {
            let qrUrl = qr.image(url);
            qrUrl.pipe(fs.createWriteStream('qrimage.png'));
            console.log('QR code is generated!');
            rl.close();
}

getUserInput(); // Start the input process