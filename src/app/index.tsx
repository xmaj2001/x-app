import { BannerCard } from "@/components/portfolio/BannerCard";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { Header } from "@/components/portfolio/Header";
import { HeroPreviewCard } from "@/components/portfolio/HeroPreviewCard";
import { SocialAccountCard } from "@/components/portfolio/SocialAccountCard";
import { mockProjects, mockSocialAccounts } from "@/mock/portifolio";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <Header />

        <BannerCard status="ATIVO" url="devfolio.io/lucassilva" />

        <HeroPreviewCard />

        {/* Seção Projetos em Destaque */}
        <View className="flex-row justify-between items-center mb-3">
          <View className="flex-row items-center space-x-2">
            <Text className="font-bold text-gray-900 text-sm">
              Projetos em Destaque
            </Text>
            <View className="bg-gray-800 px-2 py-0.5 rounded-md">
              <Text className="text-white text-[11px] font-semibold">
                {mockProjects.length} ativos
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text className="text-orange-500 font-semibold text-xs">
              + Adicionar Destaque
            </Text>
          </TouchableOpacity>
        </View>

        {mockProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}

        {/* Seção Redes Conectadas */}
        <View className="flex-row justify-between items-center mt-4 mb-3">
          <Text className="font-bold text-gray-900 text-sm">
            Redes Conectadas
          </Text>
          <TouchableOpacity>
            <Text className="text-orange-500 font-semibold text-xs">
              + Conectar nova
            </Text>
          </TouchableOpacity>
        </View>

        {mockSocialAccounts.map((account) => (
          <SocialAccountCard key={account.id} item={account} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
