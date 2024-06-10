import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export type LinkButtonProps = ButtonProps & LinkProps;

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Button
      component={Link}
      sx={{
        textDecoration: 'none',
        ':hover': { textDecoration: 'underline' },
      }}
      {...props}
    >
    </Button>
  );
}
