import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { HeroStyles, PageStyles } from "@monowind/styles-library";

export default function TabOneScreen() {
  return (
    <View className={PageStyles.container}>
      <View className={HeroStyles.container}>
        <Text>Monowind</Text>
      </View>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}
