import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationButtons } from '@/components/NavigationButtons';

export default function TimetablesScreen() {
  return (
    <View style={styles.container}>
      <NavigationButtons />
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Timetables</Text>
        <View style={styles.timetableContainer}>
          {/* Sample timetable entries */}
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.timetableCard}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>09:00</Text>
                <Text style={styles.duration}>1h 30m</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.activityTitle}>Activity {item}</Text>
                <Text style={styles.location}>Location: Room {item}01</Text>
                <Text style={styles.description}>
                  This is a sample timetable entry. Replace with real schedule data.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  timetableContainer: {
    gap: 16,
  },
  timetableCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  timeContainer: {
    borderRightWidth: 1,
    borderRightColor: '#e9ecef',
    paddingRight: 16,
    marginRight: 16,
    justifyContent: 'center',
    minWidth: 80,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00a86b',
    marginBottom: 4,
  },
  duration: {
    fontSize: 12,
    color: '#718096',
  },
  detailsContainer: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
});