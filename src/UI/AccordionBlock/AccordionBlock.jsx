import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import style from "./AccordionBlock.module.scss";

function AccordionBlock({ faq, expanded, handleChange }) {
  return (
    <Accordion
      expanded={expanded === `panel${faq.id}`}
      onChange={handleChange(`panel${faq.id}`)}
      className={style.accordion__block}
    >
      <AccordionSummary
        aria-controls={`panel${faq.id}d-content`}
        id={`panel${faq.id}d-header`}
        expandIcon={
          expanded === `panel${faq.id}` ? (
            <RemoveIcon  sx={{color: "#fff"}} />
          ) : (
            <AddIcon  sx={{color: "#fff"}} />
          )
        }
        sx={{
          '& .MuiAccordionSummary-content': {
            alignItems: 'center',
            margin: '0'
          }
        }}
      >
        <Box className={style.accordion__blockCount}>
          {faq.id < 10 ? `0${faq.id}` : faq.id}
        </Box>
        <Box className={style.accordion__blockTitle}>
          {faq.title}
        </Box>
      </AccordionSummary>
      <AccordionDetails className={style.accordion__blockContent}>
        <Typography className={style.accordion__blockText}>{faq.body}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionBlock;
