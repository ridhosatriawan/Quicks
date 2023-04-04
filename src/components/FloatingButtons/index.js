import React, { useState } from "react";
import { Flex, useDisclosure, Box } from "@chakra-ui/react";
import { CircleButton } from "..";
import { Icon } from "../../assets";

export default function FloatingButtons(props) {
  const { feature = [] } = props;
  const { isOpen, onToggle } = useDisclosure();
  const [selected, setSelected] = useState({ isSelected: false, key: null });
  const [children, setChildren] = useState(feature);

  const handleSelect = (key) => {
    const selectedChildren = children.find((child) => child.key === key);
    const notSelectedChildren = children.filter((child) => child.key !== key);
    notSelectedChildren.sort((a, b) => a.key - b.key);

    setChildren([selectedChildren, ...notSelectedChildren]);

    if (isOpen) {
      setSelected({ isSelected: false, key: null });
      setSelected({ isSelected: true, key });
    }
  };

  const handleExpand = () => {
    setChildren(feature);
    if (selected.isSelected) {
      setSelected({ isSelected: false, key: null });
      setTimeout(() => {
        onToggle();
      }, 50);
    } else {
      onToggle();
    }
  };

  return (
    <Box
      position="absolute"
      bottom={10}
      right={10}
      zIndex="docked"
      textAlign="right"
    >
      {children.map((value) => {
        if (value.key === selected.key) {
          return <div key={value.key}>{value.box}</div>;
        }
      })}
      <Flex direction="row-reverse" alignItems="center" gap="20px">
        <CircleButton.BtnLarge
          bg={selected.isSelected ? "primary.200" : "primary.100"}
          onClick={handleExpand}
          icon={<Icon.QuicksIcon color="white" width="18px" height="32px" />}
          position={selected.isSelected && "absolute"}
          zIndex={selected.isSelected ? "1" : "10"}
          right={selected.isSelected && "3"}
          transition={`all 0.3s ease-in-out`}
        />
        {children.map((child, index) => (
          <CircleButton.BtnDynamic
            key={index}
            isActive={child.key === selected.key ? true : false}
            zIndex={`${10 - (index + 1)}`}
            left={isOpen ? "0" : `${88 * (index + 1)}`}
            opacity={isOpen ? 1 : 0}
            cursor={!isOpen && "default"}
            transition={`all ${0.3 * (index + 1)}s ease-in-out`}
            icon={child.icon}
            basecolor={child.baseColor}
            onClick={() => {
              handleSelect(child.key);
            }}
          />
        ))}
      </Flex>
    </Box>
  );
}
