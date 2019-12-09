import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/public-lunarpainter-332/server/dev',
});

export default client;
