import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

// Import your Lottie animation JSON file
import animationData from '../assets/load-svg.json'; // Adjust the path as needed

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    if (isLoading) {
      animation.current?.play();
    } else {
      animation.current?.reset();
    }
  }, [isLoading]);

  if (!isLoading) {
    return null; // Don't render if not loading
  }

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={styles.animation}
        source={animationData}
        loop
        autoPlay={true} // You can control playback with the ref and isLoading prop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fff', // Optional: Add a semi-transparent background overlay
  },
  animation: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
  },
});

export default LoadingAnimation;