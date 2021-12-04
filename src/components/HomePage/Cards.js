import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from "@mui/material";

const ContactCard = ({ contacts }) => {
  return (
    <Card sx={{ display: "flex", paddingTop: "70px", paddingLeft: "20%" }}>
      {contacts.map((contact) => (
        <CardActionArea key={contact.id}>
          <CardMedia
            image={contact.url}
            height="140"
            component="img"
            alt="Oluwaseun"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {contact.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardActionArea>
      ))}
    </Card>
  );
};

export default ContactCard;
