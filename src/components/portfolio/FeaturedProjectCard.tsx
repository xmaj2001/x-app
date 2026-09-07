import { Project } from "@/mock/portifolio";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const FeaturedProjectCard: React.FC<{ project: Project }> = ({
  project,
}) => {
  return (
    <View className="bg-white rounded-xl p-4 mb-3 border border-gray-100 shadow-sm">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center space-x-2">
          <Feather name="grid" size={16} color="#9CA3AF" />
          <Text className="font-bold text-gray-900 text-base">
            {project.title}
          </Text>
        </View>
        <View className="bg-orange-50 px-2 py-0.5 rounded">
          <Text className="text-orange-500 text-xs font-medium">
            {project.badge}
          </Text>
        </View>
      </View>

      <View className="flex-row flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag, idx) => (
          <View key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md">
            <Text className="text-slate-600 text-xs font-medium">{tag}</Text>
          </View>
        ))}
      </View>

      <View className="flex-row justify-between items-center pt-2 border-t border-gray-50">
        <View className="flex-row items-center space-x-3">
          <View className="flex-row items-center space-x-1">
            <Feather name="star" size={14} color="#F59E0B" />
            <Text className="text-gray-500 text-xs">{project.stars} stars</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Feather name="eye" size={14} color="#6B7280" />
            <Text className="text-gray-500 text-xs">{project.views} views</Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-3">
          <TouchableOpacity>
            <Feather name="sliders" size={16} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="eye-off" size={16} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
