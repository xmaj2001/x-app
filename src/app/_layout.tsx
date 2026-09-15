import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import { useEffect, useState } from "react";
import { Alert, StatusBar, useColorScheme } from "react-native";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [splashDone, setSplashDone] = useState(false);
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();

  useEffect(() => {
    if (isUpdatePending) {
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  // Só verifica updates DEPOIS de splash terminar
  useEffect(() => {
    if (splashDone) {
      checkForUpdates();
    }
  }, [splashDone]);

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert(
          "Atualização Disponível",
          "Uma nova versão está disponível. Deseja atualizar?",
          [
            { text: "Cancelar", onPress: () => {} },
            {
              text: "Atualizar",
              onPress: async () => {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
              },
            },
          ],
        );
      }
    } catch (error) {
      console.error("Erro ao verificar updates:", error);
    }
  };
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor={"#F97316"} />
      <AnimatedSplashOverlay onFinish={() => setSplashDone(true)} />
      {splashDone && <AppTabs />}
    </ThemeProvider>
  );
}
