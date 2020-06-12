import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";

const MAX_HEIGHT = Dimensions.get("window").height * 0.4;
const MIN_HEIGHT = Dimensions.get("window").height * 0.2;
export default class ScrollImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(0),
    };
  }
  componentDidMount() {}

  render() {
    const { height } = this.state;
    const heightAminated = height.interpolate({
      inputRange: [0, MAX_HEIGHT - MIN_HEIGHT],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
    });

    return (
      <View>
        <Animated.Image
          style={{
            width: Dimensions.get("window").width,
            height: heightAminated,
            //   transform: [
            //     {
            //       translateY: this.state.height.interpolate({
            //         inputRange: [0, MAX_HEIGHT - MIN_HEIGHT],
            //         outputRange: [MAX_HEIGHT, MIN_HEIGHT],
            //       }),
            //     },
            //   ],
          }}
          source={{
            uri:
              "https://unku.store/wp-content/uploads/2019/01/basket-beautiful-beauty-opti.jpg",
          }}
        />
        <ScrollView
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: height } } }],
            { useNativeDriver: false },
            { listener: (event) => console.log(event) } // Optional async listener
          )}
        >
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>
              This man’s name is Jay. He was part of a video series by Momondo,
              a travel company that had a competition. To join this competition
              people took a DNA test. It showed their genetic ancestry. It
              showed where each person’s family had come from for many, many
              generations. Jay thought the test would show that he is 100
              percent English - from Great Britain. But he was wrong! The test
              showed that Jay is 55 percent Irish. He is only 30 percent
              English. It also showed he is five percent German and even a bit
              Turkish. Jay responded to the results:
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginVertical: 20,
    width: Dimensions.get("window").width * 0.95,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
  },
  safe: {
    alignSelf: "center",
    marginBottom: 5,
  },
  touch: {
    backgroundColor: "green",
    paddingVertical: 20,
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 6,
    justifyContent: "center",
  },
  textSafe: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
