import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator, Pressable, Linking } from 'react-native';
import { NavigationButtons } from '@/components/NavigationButtons';
import LoadingAnimation from '../../components/LoadingAnimation'; // Adjust the path

interface Event {
  _id: string;
  id: number;
  title: string;
  url: string;
  date: string;
  type: string;
  image: string | null;
  content: string;
}

interface ApiResponse {
  content: Event[];
  pagination?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
  };
}

export default function EventsScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = useCallback(async () => {
    if (!hasMore) return;
    // setLoading(true); // Already set to true initially
    setError(null);

    try {
      const response = await fetch(`https://a577af69b4c2939e9a53fe7706f0b5e0.serveo.net/api/v1/contents/events?page=${page}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse = await response.json();

      if (data && data.content) {
        setEvents((prevEvents) => [...prevEvents, ...data.content]);
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
    fetchEvents();
  }, [fetchEvents]);

  const renderItem = ({ item }: { item: Event }) => (
    <Pressable
          key={item._id}
          onPress={() => Linking.openURL(item.url)}
          style={styles.eventCard}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      ) : null}
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.content}</Text>
      <Text style={styles.eventDate}>{item.date}</Text>
    </Pressable>
  );

  // const renderFooter = () => {
  //   if (loading) {
  //     return <ActivityIndicator size="large" color="#1a91ff" />;
  //   }
  //   if (error) {
  //     return <Text style={{ color: 'red', textAlign: 'center', paddingVertical: 10 }}>Error loading events: {error}</Text>;
  //   }
  //   if (!hasMore && events.length > 0) {
  //     return <Text style={{ color: '#777', textAlign: 'center', paddingVertical: 10 }}>No more events to load.</Text>;
  //   }
  //   return null;
  // };

  // const handleLoadMore = () => {
  //   fetchEvents();
  // };

  // return (
  //   <View style={styles.container}>
  //     <NavigationButtons />
  //     <FlatList
  //       data={events}
  //       keyExtractor={(item) => item._id} // Use a unique identifier
  //       renderItem={renderItem}
  //       ListFooterComponent={renderFooter}
  //       onEndReached={handleLoadMore}
  //       onEndReachedThreshold={0.5} // Trigger load more when 50% of the list is visible
  //     />
  //   </View>
  // );

  const renderFooter = () => {
    if (loading && events.length > 0) { // Show loader at the bottom while fetching more
      return <ActivityIndicator size="large" color="#1a91ff" />;
    }
    if (error) {
      return <Text style={{ color: 'red', textAlign: 'center', paddingVertical: 10 }}>Error loading events: {error}</Text>;
    }
    if (!hasMore && events.length > 0) {
      return <Text style={{ color: '#777', textAlign: 'center', paddingVertical: 10 }}>No more events to load.</Text>;
    }
    return null;
  };

  const handleLoadMore = () => {
    fetchEvents();
  };

  return (
    <View style={styles.container}>
      <NavigationButtons />
      {loading && events.length === 0 ? ( // Show loading animation if loading and no events yet
        <LoadingAnimation isLoading={loading} />
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
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
  eventsContainer: {
    gap: 16,
  },
  eventCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 16, // Add margin between cards in FlatList
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1a91ff',
  },
  eventDescription: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 12,
    lineHeight: 20,
  },
  eventDate: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '500',
  },
});