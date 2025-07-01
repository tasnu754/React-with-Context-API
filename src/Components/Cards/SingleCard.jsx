import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SingleCard({ card }) {
  return (
    <Link to={`product/${card.id}`}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="200"
          image={card?.image}
          alt="Luggage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {card?.shortDescription}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary" }}
            className="pt-2"
          >
            Price: {card?.price}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#00796B]  hover:bg-[#17554d] text-white rounded-lg font-semibold shadow-md transition mb-2 mr-4">
            <ShoppingCartIcon fontSize="small" />
            Add to Cart
          </button>
        </CardActions>
      </Card>
    </Link>
  );
}
