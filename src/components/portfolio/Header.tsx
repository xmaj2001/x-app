import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export const Header: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center py-4">
      <TouchableOpacity>
        <Feather name="menu" size={26} color="#F97316" />
      </TouchableOpacity>
      <TouchableOpacity className="w-10 h-10 bg-orange-500 rounded-full justify-center items-center shadow-sm">
        <Feather name="bell" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
