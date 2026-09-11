import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BannerCardProps {
  url: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ url }) => {
  return (
    <View className="bg-orange-500 rounded-2xl p-6 mb-6">
      <Text className="text-white font-semibold text-center text-sm tracking-wider uppercase mb-1">
        WEB APP
      </Text>
      <Text className="text-white font-extrabold text-3xl text-center mb-3 tracking-tight">
        PORTIFOLIO
      </Text>

      <TouchableOpacity className="flex-row items-center justify-center space-x-2 self-center">
        <Text className="text-white text-xs font-mono">{url}</Text>
        <Feather name="copy" size={14} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
