import { Image } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { MotiView } from "moti";
import { useState } from "react";
import { View } from "react-native";
interface AnimatedSplashOverlayProps {
  onFinish?: () => void;
}

export function AnimatedSplashOverlay({
  onFinish,
}: AnimatedSplashOverlayProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <View
      onLayout={() => {
        SplashScreen.hideAsync().finally(() => {
          setTimeout(() => {
            setVisible(false);
            onFinish?.(); // ← Notifica quando termina
          }, 1200);
        });
      }}
      className="flex-1 items-center justify-center bg-white"
    >
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "timing", duration: 1000 }}
      >
        <Image
          style={{ width: 128, height: 128 }}
          source={require("@/assets/images/expo-logo.png")}
        />
      </MotiView>
    </View>
  );
}

export function AnimatedIcon() {
  return (
    <View className="items-center justify-center w-32 h-32">
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 10 }}
      >
        <Image
          style={{ width: 76, height: 71 }}
          source={require("@/assets/images/expo-logo.png")}
        />
      </MotiView>
    </View>
  );
}
