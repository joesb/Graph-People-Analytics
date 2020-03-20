"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myResolverMap = exports.typeDefs = undefined;

var _neo4jGraphqlJs = require("neo4j-graphql-js");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _graphqlScalars = require("graphql-scalars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

var typeDefs = exports.typeDefs = _fs2.default.readFileSync(process.env.GRAPHQL_SCHEMA || _path2.default.join(__dirname, "schema.graphql")).toString("utf-8");

var myResolverMap = exports.myResolverMap = {
  ObjectID: _graphqlScalars.ObjectIDResolver,

  DateTime: _graphqlScalars.DateTimeResolver,

  NonPositiveInt: _graphqlScalars.NonPositiveIntResolver,
  PositiveInt: _graphqlScalars.PositiveIntResolver,
  NonNegativeInt: _graphqlScalars.NonNegativeIntResolver,
  NegativeInt: _graphqlScalars.NegativeIntResolver,
  NonPositiveFloat: _graphqlScalars.NonPositiveFloatResolver,
  PositiveFloat: _graphqlScalars.PositiveFloatResolver,
  NonNegativeFloat: _graphqlScalars.NonNegativeFloatResolver,
  NegativeFloat: _graphqlScalars.NegativeFloatResolver,
  UnsignedFloat: _graphqlScalars.UnsignedFloatResolver,
  UnsignedInt: _graphqlScalars.UnsignedIntResolver,
  BigInt: _graphqlScalars.BigIntResolver,
  Long: _graphqlScalars.LongResolver,

  EmailAddress: _graphqlScalars.EmailAddressResolver,
  URL: _graphqlScalars.URLResolver,
  PhoneNumber: _graphqlScalars.PhoneNumberResolver,
  PostalCode: _graphqlScalars.PostalCodeResolver,

  GUID: _graphqlScalars.GUIDResolver,

  HexColorCode: _graphqlScalars.HexColorCodeResolver,
  HSL: _graphqlScalars.HSLResolver,
  HSLA: _graphqlScalars.HSLAResolver,
  RGB: _graphqlScalars.RGBResolver,
  RGBA: _graphqlScalars.RGBAResolver,

  IPv4: _graphqlScalars.IPv4Resolver,
  IPv6: _graphqlScalars.IPv6Resolver,
  MAC: _graphqlScalars.MACResolver,
  Port: _graphqlScalars.PortResolver,

  ISBN: _graphqlScalars.ISBNResolver,

  USCurrency: _graphqlScalars.USCurrencyResolver,
  JSON: _graphqlScalars.JSONResolver,
  JSONObject: _graphqlScalars.JSONObjectResolver,

  Query: {
    // more stuff here
  },

  Mutation: {
    // more stuff here
  }
};