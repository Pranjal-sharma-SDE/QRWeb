
# QR Code Scanner App with OTP Login

Welcome to our QR Code Scanner app built with React Native and Expo! This app allows users to log in using Firebase OTP authentication and scan QR codes to open websites within the app using a WebView.

## Features

- **OTP Login:** Utilizes Firebase for secure OTP-based login.
- **QR Code Scanner:** Users can scan QR codes to extract website links.
- **WebView Integration:** The scanned website link opens within the app using WebView.
- **Expo Framework:** Developed using Expo for a smoother development and deployment process.

## Screenshots and Videos

<table>
  <tr>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659848/Q1_cnt6gd.jpg" width="200" alt="Login Page"></td>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659848/Q2_ap6eig.jpg" width="200" alt="Captcha"></td>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659847/Q3_daipcp.jpg" width="200" alt="OTP Verification"></td>
  </tr>
  <tr>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659849/Q6_g3oezh.jpg" width="200" alt="Home Page 1"></td>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659849/Q4_dwkwij.jpg" width="200" alt="Home Page 2"></td>
    <td><img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1708659849/Q5_lqjcbk.jpg" width="200" alt="Web Page"></td>
  </tr>
</table>

### Video
[Watch Video](https://res.cloudinary.com/dqhyudo4x/video/upload/v1708660074/Qr_Mobile_katzdw.mp4)

## Installation

Before running the app, make sure you have Node.js, Expo CLI, and Firebase set up on your machine.

```bash
# Clone the repository
git clone https://github.com/yourusername/qr-code-scanner-app.git

# Navigate to the project directory
cd qr-code-scanner-app

# Install dependencies
npm install

# Run the app
expo start
```

## Configuration

1. Set up Firebase project and obtain the necessary configuration.
2. Update Firebase configuration in `src/firebaseConfig.js`.
3. Make sure to have Expo installed globally: `npm install -g expo-cli`.
4. Run the app using `expo start`.

## Usage

1. Launch the app on your device or emulator.
2. Log in with your phone number to receive OTP.
3. Scan a QR code using the app.
4. The scanned website link will open within the app using WebView.

## Dependencies

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! If you have any questions or need assistance, feel free to open an issue.
```

