# Angler's Arsenal Mobile App

React Native mobile application for the Angler's Arsenal fishing gear management system.

## Development Setup

1. **Install dependencies**:
   ```bash
   cd mobile
   npm install
   ```

2. **Install Expo CLI globally**:
   ```bash
   npm install -g @expo/cli
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

4. **Run on device/simulator**:
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - For web preview: `npm run web`

## Building for Production

### Android (Google Play Store)

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure EAS project**:
   ```bash
   eas build:configure
   ```

4. **Build APK for testing**:
   ```bash
   eas build --platform android --profile preview
   ```

5. **Build AAB for Google Play**:
   ```bash
   eas build --platform android --profile production
   ```

## Publishing to Google Play Store

### Prerequisites
1. **Google Play Console Account** ($25 one-time fee)
2. **Google Play Service Account** for automated uploads
3. **App signing certificate**

### Steps to Publish

1. **Create app listing in Google Play Console**:
   - Go to [Google Play Console](https://play.google.com/console)
   - Create new app
   - Fill in app details, screenshots, descriptions

2. **Generate signed AAB**:
   ```bash
   eas build --platform android --profile production
   ```

3. **Upload to Google Play Console**:
   - Manual upload through console, or
   - Automated upload with EAS Submit:
   ```bash
   eas submit --platform android
   ```

4. **Configure release**:
   - Set up internal testing first
   - Progress to production when ready
   - Add release notes

### Required Assets
- **App Icon**: 1024x1024 PNG
- **Feature Graphic**: 1024x500 PNG
- **Screenshots**: Various device sizes
- **Privacy Policy**: Required for Play Store

### App Store Optimization
- **Title**: "Angler's Arsenal - Fishing Gear Manager"
- **Short Description**: "Organize tackle boxes, track fishing equipment"
- **Keywords**: fishing, tackle, gear, inventory, angler, equipment
- **Category**: Sports & Recreation

## Environment Configuration

Add these to your environment or EAS secrets:

```
API_BASE_URL=https://your-backend-url.com
```

## Troubleshooting

- **Build fails**: Check `eas build --platform android --profile development` first
- **Metro bundler issues**: Clear cache with `npx expo start --clear`
- **Missing dependencies**: Run `npx expo install --fix`

## Features Included

- ✅ Navigation between main sections
- ✅ Responsive design for mobile
- ✅ Material Design UI components
- ✅ Background images and theming
- ✅ Ready for Google Play Store submission
- 🔄 API integration (connects to existing backend)
- 🔄 Data synchronization
- 🔄 Offline support (future enhancement)

## Next Steps for Full Implementation

1. **Connect to Backend API**: Update API calls to use your existing Express server
2. **Add Authentication**: Integrate with your existing auth system
3. **Implement CRUD Operations**: Add forms and data management
4. **Add Camera Support**: For photographing fishing gear
5. **Offline Support**: Cache data for use without internet
6. **Push Notifications**: Remind users about low stock items