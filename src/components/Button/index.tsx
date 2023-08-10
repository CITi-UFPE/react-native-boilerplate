import React from "react";
import { ButtonStyled } from "./style";

interface ButtonProps {
  backgroundColor: string;
  size: "small" | "medium" | "large";
  label: string;
  onClick: () => void;
}

const Button: React.ElementType = ({
  size = "medium",
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => (
  <ButtonStyled size={size} style={{ backgroundColor }} onPress={onClick}>
    {label}
  </ButtonStyled>
);

export default Button;
