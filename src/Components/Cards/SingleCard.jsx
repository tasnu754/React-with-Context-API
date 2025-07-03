import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import CartsContext from "../Context/CartsContext";
import Swal from "sweetalert2";

export default function SingleCard({ card }) {
  const { carts, fetchData } = useContext(CartsContext);

  const handleAddCart = async (addCart, e) => {
    e.stopPropagation();
    e.preventDefault();

    const itemExist = carts.find((cart) => cart.id == addCart.id);
    if (itemExist) {
      try {
        await fetch(
          `https://react-with-context-api-1.onrender.com/cart/${addCart.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: itemExist.quantity + 1,
            }),
          }
        );
        Swal.fire({
          title: "Item Added",
          text: "Check the Carts page!",
          icon: "success",
        });
      } catch (error) {
        console.error("Failed to update cart item:", error);
      }
    } else {
      const newItem = { ...addCart, quantity: 1 };

      try {
        await fetch("https://react-with-context-api-1.onrender.com/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
        Swal.fire({
          title: "Item Added",
          text: "Check the Carts page!",
          icon: "success",
        });
      } catch (error) {
        console.error("Failed to add item to cart:", error);
      }
    }
    fetchData();
  };
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
          <Typography variant="body1" className="pt-2 text-[#00796B]">
            Price: {card?.price}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-end">
          <button
            onClick={(e) => handleAddCart(card, e)}
            className="flex items-center gap-2 px-4 py-2 bg-[#00796B]  hover:bg-[#17554d] text-white rounded-lg font-semibold shadow-md transition mb-2 mr-4"
          >
            <ShoppingCartIcon fontSize="small" />
            Add to Cart
          </button>
        </CardActions>
      </Card>
    </Link>
  );
}
