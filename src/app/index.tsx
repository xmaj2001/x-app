import { BannerCard } from "@/components/portfolio/BannerCard";
import { Header } from "@/components/portfolio/Header";
import { SocialAccountCard } from "@/components/portfolio/SocialAccountCard";
import { StatCards } from "@/components/portfolio/StatCards";
import { VisitorCountriesCard } from "@/components/portfolio/VisitorCountriesCard";
import { mockSocialAccounts, mockVisitorCountries } from "@/mock/portifolio";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <Header />

        {/* Top Breadcrumb / Category Row */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-xs font-semibold tracking-wider uppercase">
            <Text className="text-gray-800">CMS, </Text>
            <Text className="text-orange-500">PORTIFOLIO</Text>
          </Text>
          <TouchableOpacity>
            <Feather name="external-link" size={16} color="#EA580C" />
          </TouchableOpacity>
        </View>

        {/* Hero Banner Card */}
        <BannerCard url="devfolio.io/lucassilva" />

        {/* Action Stats Row */}
        <StatCards />

        {/* Visitor Countries Section */}
        <VisitorCountriesCard countries={mockVisitorCountries} />

        {/* Connected Social Accounts Header */}
        <View className="flex-row justify-between items-center mt-2 mb-3">
          <Text className="font-bold text-gray-900 text-base">
            Redes Conectadas
          </Text>
          <TouchableOpacity>
            <Text className="text-orange-500 font-medium text-xs">
              + Conectar nova
            </Text>
          </TouchableOpacity>
        </View>

        {/* Connected Social Accounts White Card */}
        <View className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-3">
          {mockSocialAccounts.map((account) => (
            <SocialAccountCard key={account.id} item={account} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
