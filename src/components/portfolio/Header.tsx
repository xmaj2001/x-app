import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex-row justify-between items-center py-4 px-1">
      <TouchableOpacity>
        <Feather name="menu" size={24} color="#1F2937" />
      </TouchableOpacity>
      <View className="w-9 h-9 rounded-full bg-gray-800" />
    </View>
  );
};
