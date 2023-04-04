import { Button } from "@chakra-ui/react";

/**
 * @typedef {{icon:HTMLImageElement, onClick:Function, basecolor : string, active:Boolean}} ButtonOptions
 * @typedef {{...ButtonOptions, isActive : Boolean}} ButtonDynamicOptions
 *
 */

/**
 * @param {ButtonOptions} props
 */
const BtnSmall = (props) => {
  return (
    <Button
      bg="#F2F2F2"
      _hover={{ bg: props.basecolor, color: "white" }}
      borderRadius="full"
      padding="0"
      width="60px"
      height="60px"
      color={props.basecolor}
      {...props}
    >
      {props.icon}
    </Button>
  );
};

/**
 * @param {ButtonOptions} props
 */
const BtnLarge = (props) => {
  return (
    <Button
      bg={props.basecolor}
      _hover={{ bg: props.basecolor, color: "white" }}
      borderRadius="full"
      padding="0"
      width="68px"
      height="68px"
      color={props.basecolor}
      {...props}
    >
      {props.icon}
    </Button>
  );
};

/**
 * @param {ButtonOptions} props
 */
const BtnActive = (props) => {
  return (
    <Button
      {...props}
      bg={`${props.basecolor} !important`}
      borderRadius="full"
      padding="0"
      width="68px"
      height="68px"
      color="white"
      cursor="default"
    >
      {props.icon}
    </Button>
  );
};

/**
 * @param {ButtonDynamicOptions} props
 */
const BtnDynamic = (props) => {
  if (props.isActive) {
    return <BtnActive {...props} />;
  } else {
    return <BtnSmall {...props} />;
  }
};

export { BtnLarge, BtnSmall, BtnDynamic };
