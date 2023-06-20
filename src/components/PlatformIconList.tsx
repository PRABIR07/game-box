import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon} from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap : {[key: string]: IconType} = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "macos": FaApple,
        "linux": FaLinux,
        "android": FaAndroid,
        "nintendo": SiNintendo,
        "web": BsGlobe,
        "ios": MdPhoneIphone,

    }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
       <Icon as={iconMap[platform.slug]}/>
      ))}
   </HStack>
  );
};

export default PlatformIconList;
