import { Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";

export default function AnimatedViewY(props) {
  const translation = useRef(new Animated.Value(props.from)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: props.to,
      duration: 400,
      easing: Easing.bezier(0.28, 0, 0.63, 1),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            {
              translateY: translation,
            },
          ],
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
}
