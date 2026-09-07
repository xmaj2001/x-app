import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const HeroPreviewCard = () => {
  return (
    <View className="border border-orange-400 bg-white rounded-2xl p-4 mb-6 shadow-sm">
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center space-x-2">
          <Feather name="credit-card" size={18} color="#EA580C" />
          <Text className="font-bold text-gray-800 text-sm">
            Preview do Hero
          </Text>
        </View>
        <View className="bg-orange-100 px-2.5 py-1 rounded-full">
          <Text className="text-orange-600 text-xs font-medium">
            Sincronizado
          </Text>
        </View>
      </View>

      <View className="bg-slate-50 p-3.5 rounded-xl mb-3 flex-row items-center space-x-3">
        <View className="relative">
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public/30" }}
            className="w-14 h-14 rounded-full"
          />
          <View className="w-3.5 h-3.5 bg-orange-500 rounded-full absolute bottom-0 right-0 border-2 border-white" />
        </View>

        <View className="flex-1">
          <Text className="font-bold text-gray-900 text-base">Lucas Silva</Text>
          <View className="bg-orange-100 px-2 py-0.5 rounded-full self-start my-1">
            <Text className="text-orange-600 text-[10px] font-semibold">
              • Disponível para projetos
            </Text>
          </View>
          <Text className="text-gray-500 text-xs font-medium">
            Senior Full Stack Engineer...
          </Text>
          <View className="flex-row items-center space-x-1 mt-0.5">
            <Feather name="map-pin" size={12} color="#6B7280" />
            <Text className="text-gray-500 text-[11px]">São Paulo, Brasil</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity className="bg-orange-500 rounded-xl py-3 flex-row justify-center items-center space-x-2">
        <Feather name="edit-3" size={16} color="#FFFFFF" />
        <Text className="text-white font-semibold text-sm">
          Editar seção Hero
        </Text>
      </TouchableOpacity>
    </View>
  );
};
