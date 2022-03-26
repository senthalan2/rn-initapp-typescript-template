# rn-initapp-typescript-template
React Native Project using Typescript. This Template includes SplashScreen, Custom Statusbar, Custom Header, Custom Font Family, Redux, Axios, Reanimated for Animations, SVG Setup, Stack navigations, Tab and Custom Drawer Navigations Setup.


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
  
  ![Screenshot 3](https://user-images.githubusercontent.com/43330632/160223350-21284c7a-adfb-4411-9f85-da93c7833693.png)
  
  After the above step, run the below command to link the assets with android and ios.
  
    npx react-native link
  
  Custom Fonts Setup Completed. Run your project.
  
  #### Usage of Custom Font Families
  
  Add the Font family name in ```Src/Utilities/GlobalFonts.js``` ( Refer below image ).
  
  ![Screenshot 4](https://user-images.githubusercontent.com/43330632/160224862-a9bb483c-e956-4387-b0cd-c25ab8f58a0a.png)

  Import and Use the fonts wherever you want. ( Refer below image ).
  
  ![Screenshot 5](https://user-images.githubusercontent.com/43330632/160224962-3ac80311-acf7-4917-a752-56faf3776a4e.png)
