import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  media: {
    height: 170,
  },
}));

export const Products = (props) => {
  const items = props.ItemData;

  const [selected, setItems] = useState([]);

  const addToCart = (item) => {
    var List = item;
    List.added = true;

    setItems([...selected, List]);
  };

  if (!selected.length) {
    items.map((item) => {
      item.added = false;
      return "success";
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/cart",
          state: selected,
        }}
      >
        <Button
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            marginBottom: "40px",
          }}
          variant="contained"
          color="primary"
        >
          <i className="fa fa-shopping-cart fa-lg"></i>View Cart
        </Button>
      </Link>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {items.map((elem) => (
          <Grid item xs={12} sm={6} md={4} key={elem.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={elem.image}
                  title="Products"
                />
                <CardContent>
                  <h4>{elem.name}</h4>
                  <Typography variant="body2" className="p">
                    Price : ₹ {elem.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {!elem.added ? (
                  <Button
                    onClick={() => addToCart(elem)}
                    style={{ textAlign: "center" }}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    ADD TO CART
                  </Button>
                ) : (
                  <Button
                    style={{ textAlign: "center" }}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    ADD TO CART
                  </Button>
                )}
                {elem.added ? (
                  <p style={{ margin: "30px" }}>
                    <i className="fa fa-check" style={{ color: "green" }}></i>
                    Added
                  </p>
                ) : (
                  ""
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
