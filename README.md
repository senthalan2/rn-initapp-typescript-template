# rn-initapp-typescript-template
React Native Project using Typescript. This Template includes SplashScreen Setup, Custom Statusbar Setup, Custom Header, Custom TextBox , Custom Font Family Setup, Redux Setup, Axios Call Setup, Reanimated for Animations, SVG Setup, Stack navigations, Tab and Custom Drawer Navigations Setup. 

## In-Built Packages

#### 1.  [react-native-splash-screen](https://www.npmjs.com/package/react-native-splash-screen)
#### 2.  [react-native-svg](https://www.npmjs.com/package/react-native-svg)
#### 3.  [react-native-svg-transformer](https://www.npmjs.com/package/react-native-svg-transformer)
#### 4.  [react-redux](https://www.npmjs.com/package/react-redux)
#### 5.  [redux](https://www.npmjs.com/package/redux)
#### 6.  [axios](https://axios-http.com/)
#### 7.  [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
#### 8.  [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)
#### 9.  [@react-navigation/native](https://reactnavigation.org/)
#### 10.  [react-native-screens](https://www.npmjs.com/package/react-native-screens)
#### 11. [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
#### 12. [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)
#### 13. [@react-navigation/drawer](https://reactnavigation.org/docs/drawer-based-navigation/)
#### 14. [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)

## Installation

### From NPM
    npx react-native init ProjectName --template rn-initapp-typescript-template

### From Github
    npx react-native init ProjectName --template https://github.com/senthalan2/rn-initapp-typescript-template.git

## Steps after Project Initialization
  ### 1. Set SplashScreen Image
  #### Android
  
  1. Go to ```android/app/src/main/res/drawable```, put splash image (.png) in this directory and named it as ```launch_screen``` ( Refer below Image ).
  
  ![Screenshot Android 1](https://user-images.githubusercontent.com/43330632/160225100-59d14ece-71cc-4467-9ad9-c62bd4db3c19.png)

  2. Change code in ```android/app/src/main/res/layout/launch_screen.xml``` file.

  ![Screenshot Android 2](https://user-images.githubusercontent.com/43330632/160225192-fc635d99-94b6-417c-9d33-fae9ac83d27a.png) 
    
  #### IOS
  
  1. Open XCode, Under your Project, Select ```Images``` and Select ```splash_image```. Create three different sizes of your image (@1x, @2x, @3x) and           add the images by dragging them into the slots for 1x, 2x, 3x ( shown in below image ).
    
  ![Screenshot 1](https://user-images.githubusercontent.com/43330632/160120112-fff17229-bc32-44c3-889b-3fe061e39a03.png)
 
  2. To change Background Color, Select ```LaunchScreen``` Select ```View``` under ```View``` and choose background Color ( shown in below image).

  ![Screenshot 2](https://user-images.githubusercontent.com/43330632/160225900-4c93c7f1-a96b-499c-893b-315569d6c25c.png)
  
  ### 2. Set Custom Fonts
  
  Drop the custom font family files (.ttf) into the ```assets/fonts``` directory under your project root directory ( shown in below image ).
  
  ![Screenshot 3](https://user-images.githubusercontent.com/43330632/160229318-4697da28-a5ea-471b-83ad-c3896e4e4353.png)

  After the above step, run the below command to link the assets with android and ios.
  
    npx react-native link
  
  Custom Fonts Setup Completed. Run your project.
  
  #### Usage of Custom Font Families
  
  Add the Font family name in ```Src/Utilities/GlobalFonts.js``` ( Refer below image ).
  
  ![Screenshot 4](https://user-images.githubusercontent.com/43330632/160229381-1d352fa7-25b2-4d7d-9f90-e1bac30c238c.png)

  Import and Use the fonts wherever you want. ( Refer below image ).
  
  ![Screenshot 5](https://user-images.githubusercontent.com/43330632/160229441-d9b652b8-b11d-4ae3-a4f8-00df03101fe2.png)

