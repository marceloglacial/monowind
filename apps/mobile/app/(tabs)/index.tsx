import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { ButtonStyles, HeroStyles, PageStyles } from "@monowind/styles-library";

export default function TabOneScreen() {
  return (
    <View className={PageStyles.container}>
      <View className={ButtonStyles.primary}>
        <Text className={HeroStyles.title}>Monowind</Text>
      </View>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
