const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
   type Product {
    dessert: String
    calories: Int
    fat: Int
    carbs: Int
    protien: Int
  }
type Query {
    products: [Product]
  }
`;

const products = [
    {
      dessert: 'Oreo',
      calories: 437,
      fat: 18,
      carbs: 63,
      protien: 4,
    },
    {
      dessert: 'Nougat',
      calories: 360,
      fat: 19,
      carbs: 9,
      protien: 37,
    },
  ];

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        products: () => products,
    },
  };
  

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
