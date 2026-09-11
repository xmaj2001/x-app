import { SocialAccount } from "@/mock/portifolio";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export const SocialAccountCard: React.FC<{ item: SocialAccount }> = ({
  item,
}) => {
  const [isEnabled, setIsEnabled] = useState(item.enabled);

  return (
    <View className="flex-row items-center justify-between py-2">
      <View className="flex-row items-center space-x-3">
        <View className="w-11 h-11 bg-blue-50 rounded-xl justify-center items-center">
          <Feather name={item.iconName as any} size={20} color="#1F2937" />
        </View>
        <View>
          <Text className="font-bold text-gray-900 text-sm">{item.name}</Text>
          <Text className="text-gray-400 text-xs font-mono">{item.handle}</Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-3">
        <TouchableOpacity>
          <Feather name="external-link" size={16} color="#9CA3AF" />
        </TouchableOpacity>
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
          trackColor={{ false: "#374151", true: "#F97316" }}
          thumbColor="#FFFFFF"
        />
      </View>
    </View>
  );
};
