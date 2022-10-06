require("dotenv").config();

const express = require("express");

const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server running on port:${port}`));
