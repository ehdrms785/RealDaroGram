"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Recomment",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "ChatRoom",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/ehdrms785-ea1361/prismagram/dev`
});
exports.prisma = new exports.Prisma();
