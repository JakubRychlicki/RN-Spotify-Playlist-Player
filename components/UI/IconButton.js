import React from "react";
import { TouchableOpacity } from "react-native";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  LoopIcon,
  RandomIcon,
  OptionsIcon,
  ArrowDownIcon,
} from "./Icons";

export default IconButton = (props) => {
  const renderIcon = (name) => {
    switch (name) {
      case "PLAY":
        return <PlayIcon size={props.size} color={props.color} />;
      case "PLAY_OUTLINE":
        return <PlayIcon size={props.size} color={props.color} outline />;
      case "PAUSE":
        return <PauseIcon size={props.size} color={props.color} />;
      case "PAUSE_OUTLINE":
        return <PauseIcon size={props.size} color={props.color} outline />;
      case "FORWARD":
        return <ForwardIcon size={props.size} color={props.color} />;
      case "BACKWARD":
        return <BackwardIcon size={props.size} color={props.color} />;
      case "LOOP":
        return <LoopIcon size={props.size} color={props.color} />;
      case "RANDOM":
        return <RandomIcon size={props.size} color={props.color} />;
      case "OPTIONS":
        return <OptionsIcon size={props.size} color={props.color} />;
      case "ARROW_DOWN":
        return <ArrowDownIcon size={props.size} color={props.color} />;
      default:
        return;
    }
  };

  return (
    <TouchableOpacity onPress={props.onTouch} style={props.styles}>
      {renderIcon(props.name)}
    </TouchableOpacity>
  );
};
