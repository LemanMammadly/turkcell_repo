import React from "react";
import Card from "../../components/Card/Index";
import { Grid } from "@chakra-ui/react";


const Products = () => {
  return <div>
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <Card/>
    </Grid>
  </div>;
};

export default Products;
