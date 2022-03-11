echo **************** cleaning gradlew ******************
cd android && ./gradlew clean
cd ..

watchman watch-del-all
sudo rm -rf /tmp/metro-*


echo **************** deleting node_modules ******************
sudo rm -rf node_modules yarn.lock package-lock.json

echo **************** downloading node_modules ******************
yarn install

echo **************** cache clean ******************
npm cache clean -f

echo **************** react-native link ******************
npx react-native link

echo **************** react-native run-android ******************
npx react-native run-android

echo **************** run server ******************
yarn start --reset-cache