import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { NavigationButtons } from '@/components/NavigationButtons';
import LoadingAnimation from '../../components/LoadingAnimation'; // Adjust the path

interface PublicityItem {
  id: string;
  title: string;
  content: string;
  image: string;
  progress: number;
}

interface ApiResponse {
  content: PublicityItem[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

export default function PublicityScreen() {
  const [publicitys, setPublicityItems] = useState<PublicityItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchPublicitys = useCallback(async () => {
    if (!hasMore) return;
    // setLoading(true); // Already set to true initially
    setError(null);

    try {
      const response = await fetch(`https://a577af69b4c2939e9a53fe7706f0b5e0.serveo.net/api/v1/contents/pubs?page=${page}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();

      if (data && data.content) {
        setPublicityItems((prevPublicitys) => [...prevPublicitys, ...data.content]);
        if (data.pagination && data.pagination.current_page >= data.pagination.last_page) {
          setHasMore(false);
        } else {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        setHasMore(false);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred');
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  }, [page, hasMore]);

  useEffect(() => {
    fetchPublicitys();
  }, [fetchPublicitys]);


  const renderItem = ({ item }: { item: PublicityItem }) => (
    <Pressable key={item._id} style={styles.card}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        ) : null}
        <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.content}</Text>
        {/* <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
          </View>
          <Text style={styles.progressText}>{item.progress}%</Text>
        </View> */}
      </View>
    </Pressable>
  );

  const renderFooter = () => (
    loading ? <ActivityIndicator size="large" color="#40CFA3" /> : null
  );

  const handleLoadMore = () => {
    fetchPublicitys();
  };

  return (
    <View style={styles.container}>
      <NavigationButtons />
      {loading && publicitys.length === 0 ? ( // Show loading animation if loading and no Publicitys yet
        <LoadingAnimation isLoading={loading} />
      ) : (
        <FlatList
          data={publicitys}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.scrollContent}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#40CFA3',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    lineHeight: 24,
  },
});