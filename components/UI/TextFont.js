import { Text } from "react-native";

export const TextSFProR = (props) => {
  return (
    <Text style={[props.style, { fontFamily: "SFProTextRegular" }]} {...props}>
      {props.children}
    </Text>
  );
};

export const TextSFProB = (props) => {
  return (
    <Text style={[props.style, { fontFamily: "SFProTextSemiBold" }]} {...props}>
      {props.children}
    </Text>
  );
};

export const TextNunito = (props) => {
  return (
    <Text style={[props.style, { fontFamily: "Nunito" }]} {...props}>
      {props.children}
    </Text>
  );
};
