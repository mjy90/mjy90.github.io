import React from "react";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionProps = {
  items: {
    title: string;
    content: string | string[] | JSX.Element;
  }[];
};

export default function Accordion({ items }: AccordionProps) {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <div>
      {items.map((item, index) => (
        <MuiAccordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
          <MuiAccordionSummary
            id={`panel${index}-header`}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
          >
            <Typography variant='h6'>
              {item.title}
            </Typography>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            { item.content instanceof Element ? (
              item.content
            ) : (
              (Array.isArray(item.content) ? item.content : [item.content]).map((line, index) => (
                <Typography key={index} pb={1}>
                  {line}
                </Typography>
              ))
            )}
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
