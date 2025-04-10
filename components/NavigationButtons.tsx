import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Search } from 'lucide-react-native';

export function NavigationButtons() {
  const router = useRouter();
  const pathname = usePathname();

  const isPublicity = pathname === '/publicity';
  const isEvents = pathname === '/events';
  const isTimetables = pathname === '/timetables';
  const isRecommendations = pathname === '/recommendations';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search color="#666" size={20} />
          <Text style={styles.searchText}>Search...</Text>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <Pressable
          style={[styles.tab, isPublicity && styles.activeTab]}
          onPress={() => router.push('/publicity')}>
          <Text style={[styles.tabText, isPublicity && styles.activeTabText]}>
            PUBLICITY
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, isEvents && styles.activeTab]}
          onPress={() => router.push('/events')}>
          <Text style={[styles.tabText, isEvents && styles.activeTabText]}>
            EVENTS
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, isTimetables && styles.activeTab]}
          onPress={() => router.push('/timetables')}>
          <Text style={[styles.tabText, isTimetables && styles.activeTabText]}>
            TABLES
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, isRecommendations && styles.activeTab]}
          onPress={() => router.push('/recommendations')}>
          <Text style={[styles.tabText, isRecommendations && styles.activeTabText]}>
          Recommende
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  searchText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#40CFA3',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#40CFA3',
  },
});