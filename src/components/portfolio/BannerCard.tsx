import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BannerCardProps {
  url: string;
  status: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ url, status }) => {
  return (
    <View className="bg-orange-500 rounded-2xl p-6 mb-5 relative overflow-hidden">
      <Text className="text-gray-900 font-semibold text-center text-sm tracking-wider uppercase">
        CMS
      </Text>
      <Text className="text-white font-extrabold text-3xl text-center my-1 tracking-tight">
        PORTIFOLIO
      </Text>

      <View className="flex-row items-center justify-center mt-1 mb-2">
        <Text className="text-gray-900 text-xs font-medium">STATUS </Text>
        <Text className="text-white text-xs font-bold">{status}</Text>
      </View>

      <TouchableOpacity className="flex-row items-center justify-center space-x-1">
        <Text className="text-gray-900 text-xs font-medium">{url}</Text>
        <Feather name="copy" size={14} color="#1F2937" />
      </TouchableOpacity>

      <TouchableOpacity className="absolute bottom-4 right-4">
        <Feather name="external-link" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
