import { Stack } from "expo-router";
import { Platform } from "react-native";

export function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="ejemplos/modal/modalexpo"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "modal" : "transparentModal",
          animation: "slide_from_bottom",
          animationDuration: Platform.OS !== "ios" ? 100 : undefined,
          contentStyle:
            Platform.OS !== "ios"
              ? { marginTop: 30, backgroundColor: "white" }
              : null,
        }}
      />
    </Stack>
  );
}
