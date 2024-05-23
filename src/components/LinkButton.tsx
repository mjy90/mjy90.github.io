import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";

export type LinkButtonProps = ButtonProps & {
  to: string;
};

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Button component={Link} {...props}>
      {props.children}
    </Button>
  );
}
