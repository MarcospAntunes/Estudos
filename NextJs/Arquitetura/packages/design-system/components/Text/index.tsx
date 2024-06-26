import styled from "styled-components";
import React from "react";

const StyledText = styled.span`
  font-family: sans;
`;

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
}

export function Text({ children, tag, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
}
