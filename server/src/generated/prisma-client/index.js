"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Difficulty",
    embedded: false
  },
  {
    name: "Host",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Audio",
    embedded: false
  },
  {
    name: "SelfGuidedTour",
    embedded: false
  },
  {
    name: "Faq",
    embedded: false
  },
  {
    name: "ContactInfo",
    embedded: false
  },
  {
    name: "ContactUs",
    embedded: false
  },
  {
    name: "Info",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-lunarpainter-332/server/dev`
});
exports.prisma = new exports.Prisma();
