import { Provider } from "react-redux";
import { store } from "./store";
import { useFonts } from "expo-font";

import AuthScreen from "./screens/AuthScreen";

export default function App() {
  const [loaded] = useFonts({
    SFProTextRegular: require("./assets/fonts/SFProText-Regular.ttf"),
    SFProTextSemiBold: require("./assets/fonts/SFProText-Semibold.ttf"),
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}
