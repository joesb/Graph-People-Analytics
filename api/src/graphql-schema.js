import { neo4jgraphql } from "neo4j-graphql-js";
import fs from "fs";
import path from "path";
import {
    DateTimeResolver,
    EmailAddressResolver,
    NegativeFloatResolver,
    NegativeIntResolver,
    NonNegativeFloatResolver,
    NonNegativeIntResolver,
    NonPositiveFloatResolver,
    NonPositiveIntResolver,
    PhoneNumberResolver,
    PositiveFloatResolver,
    PositiveIntResolver,
    PostalCodeResolver,
    UnsignedFloatResolver,
    UnsignedIntResolver,
    URLResolver,
    BigIntResolver,
    LongResolver,
    GUIDResolver,
    HexColorCodeResolver,
    HSLResolver,
    HSLAResolver,
    IPv4Resolver,
    IPv6Resolver,
    ISBNResolver,
    MACResolver,
    PortResolver,
    RGBResolver,
    RGBAResolver,
    USCurrencyResolver,
    JSONResolver,
    JSONObjectResolver,
    ObjectIDResolver,
} from 'graphql-scalars';

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

export const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
  )
  .toString("utf-8");

export const myResolverMap = {
    ObjectID: ObjectIDResolver,

    DateTime: DateTimeResolver,

    NonPositiveInt: NonPositiveIntResolver,
    PositiveInt: PositiveIntResolver,
    NonNegativeInt: NonNegativeIntResolver,
    NegativeInt: NegativeIntResolver,
    NonPositiveFloat: NonPositiveFloatResolver,
    PositiveFloat: PositiveFloatResolver,
    NonNegativeFloat: NonNegativeFloatResolver,
    NegativeFloat: NegativeFloatResolver,
    UnsignedFloat: UnsignedFloatResolver,
    UnsignedInt: UnsignedIntResolver,
    BigInt: BigIntResolver,
    Long: LongResolver,

    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    PhoneNumber: PhoneNumberResolver,
    PostalCode: PostalCodeResolver,

    GUID: GUIDResolver,

    HexColorCode: HexColorCodeResolver,
    HSL: HSLResolver,
    HSLA: HSLAResolver,
    RGB: RGBResolver,
    RGBA: RGBAResolver,

    IPv4: IPv4Resolver,
    IPv6: IPv6Resolver,
    MAC: MACResolver,
    Port: PortResolver,

    ISBN: ISBNResolver,

    USCurrency: USCurrencyResolver,
    JSON: JSONResolver,
    JSONObject: JSONObjectResolver,

    Query: {
      // more stuff here
    },

    Mutation: {
      // more stuff here
    },
};