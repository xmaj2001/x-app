import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const StatCards: React.FC = () => {
  return (
    <View className="flex-row justify-around items-center mb-6 px-1">
      {/* Stat 1: Dowload CV */}
      <TouchableOpacity className="items-center">
        <View className="w-14 h-14 bg-orange-500 rounded-2xl justify-center items-center mb-2 shadow-sm">
          <Feather name="download" size={22} color="#1F2937" />
        </View>
        <Text className="text-orange-500 font-extrabold text-xl mb-0.5">
          14
        </Text>
        <Text className="text-gray-500 text-xs font-medium">Dowload CV</Text>
      </TouchableOpacity>

      {/* Stat 2: Uptime */}
      <TouchableOpacity className="items-center">
        <View className="w-14 h-14 bg-orange-500 rounded-2xl justify-center items-center mb-2 shadow-sm">
          <Feather name="send" size={22} color="#1F2937" />
        </View>
        <Text className="text-orange-500 font-extrabold text-xl mb-0.5">
          5K
        </Text>
        <Text className="text-gray-500 text-xs font-medium">Uptime</Text>
      </TouchableOpacity>

      {/* Stat 3: Vistas /mês */}
      <TouchableOpacity className="items-center">
        <View className="w-14 h-14 bg-orange-500 rounded-2xl justify-center items-center mb-2 shadow-sm">
          <Feather name="clock" size={22} color="#1F2937" />
        </View>
        <Text className="text-orange-500 font-extrabold text-xl mb-0.5">
          1.8k
        </Text>
        <Text className="text-gray-500 text-xs font-medium">Vistas /mês</Text>
      </TouchableOpacity>
    </View>
  );
};
