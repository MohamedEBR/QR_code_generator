# QR Code Generator

This Node.js application allows you to generate QR codes from URLs and save them as image files. It uses the `qrcode` and `qr-image` libraries for QR code generation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it [here](https://nodejs.org/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
# Navigate to the project directory:

cd qr-code-generator

# Install dependencies:

npm install

# Usage

Run the application:
node app.js

You will be prompted to type in a URL. After entering the URL, the application will generate a QR code image and save it as qrimage.png in the current directory.
The application will display a message indicating that the QR code has been generated.

# Input Validation

The application now includes input validation to ensure that a valid URL is provided. If an invalid URL is entered, you will see an error message, and you will be prompted to enter a valid URL.

# Additional Options
You can modify the error correction level for the QR code by changing the value in the QRcode.toString(url, { errorCorrectionLevel: 'H' }) function call in app.js.
To save the URL string in a text file (e.g., URL.txt), uncomment the following code in app.js:

// fs.writeFile('./URL.txt', url, (err) => {
//     if(err) throw err;
// })
This will save the URL string in a file named URL.txt.

# License
This project is not licensed. You are free to use, modify, and distribute it as you see fit. Please note that without a license, others may not have clear rights to use your project. Consider adding an open-source license to protect your work.

# Acknowledgments
The qrcode and qr-image libraries are used for QR code generation.


# Author
Mohamed Ebraheem

# Contact
Email: ebraheemohamed26@gmail.com
Contact
