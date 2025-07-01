import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SingleCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.thewirecutter.com/wp-content/media/2024/12/BG-UNDERSEAT-LUGGAGE-PERSONAL-ITEMS-2048px-00276.jpg"
        alt="Luggage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary" }}
          className="pt-2"
        >
          Price: 655
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#00796B]  hover:bg-[#17554d] text-white rounded-lg font-semibold shadow-md transition mb-2 mr-4">
          <ShoppingCartIcon fontSize="small" />
          Add to Cart
        </button>
      </CardActions>
    </Card>
  );
}
