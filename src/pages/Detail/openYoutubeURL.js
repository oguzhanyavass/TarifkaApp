import { Alert, Linking } from "react-native";

const openYoutubeURL = async (url, safe) => {
  if (!safe) {
    await Linking.openURL(url);
    return;
  }

  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};

export default openYoutubeURL;
