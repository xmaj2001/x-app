import { VisitorCountry } from "@/mock/portifolio";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface VisitorCountriesCardProps {
  countries: VisitorCountry[];
}

export const VisitorCountriesCard: React.FC<VisitorCountriesCardProps> = ({
  countries,
}) => {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="font-bold text-gray-900 text-base">
          Países dos Visitantes
        </Text>
        <TouchableOpacity>
          <Text className="text-orange-500 font-medium text-xs">Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-4">
        {countries.map((item) => (
          <View
            key={item.id}
            className="flex-row justify-between items-center py-1.5"
          >
            <View className="flex-row items-center space-x-3">
              {/* Country Code badge */}
              <View className="w-10 h-8 border border-dashed border-gray-400 rounded-md justify-center items-center bg-gray-50/50">
                <Text className="text-gray-700 text-xs font-mono font-semibold tracking-wider">
                  {item.code}
                </Text>
              </View>
              <View>
                <Text className="font-bold text-gray-900 text-sm">
                  {item.country}
                </Text>
                <Text className="text-gray-400 text-xs">{item.cities}</Text>
              </View>
            </View>

            <View className="items-end">
              <Text className="font-bold text-gray-900 text-sm">
                {item.count}
              </Text>
              <Text className="text-gray-400 text-xs">{item.percentage}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
