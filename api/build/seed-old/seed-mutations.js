"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = /* GraphQL */"\n  mutation {\n    u1: CreateUser(id: \"u1\", name: \"Will\") {\n      id\n      name\n    }\n    u2: CreateUser(id: \"u2\", name: \"Bob\") {\n      id\n      name\n    }\n    u3: CreateUser(id: \"u3\", name: \"Jenny\") {\n      id\n      name\n    }\n    u4: CreateUser(id: \"u4\", name: \"Angie\") {\n      id\n      name\n    }\n    b1: CreateBusiness(\n      id: \"b1\"\n      name: \"KettleHouse Brewing Co.\"\n      address: \"313 N 1st St W\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b2: CreateBusiness(\n      id: \"b2\"\n      name: \"Imagine Nation Brewing\"\n      address: \"1151 W Broadway St\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b3: CreateBusiness(\n      id: \"b3\"\n      name: \"Ninja Mike's\"\n      address: \"Food Truck - Farmers Market\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b4: CreateBusiness(\n      id: \"b4\"\n      name: \"Market on Front\"\n      address: \"201 E Front St\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b5: CreateBusiness(\n      id: \"b5\"\n      name: \"Missoula Public Library\"\n      address: \"301 E Main St\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b6: CreateBusiness(\n      id: \"b6\"\n      name: \"Zootown Brew\"\n      address: \"121 W Broadway St\"\n      city: \"Missoula\"\n      state: \"MT\"\n    ) {\n      id\n      name\n    }\n    b7: CreateBusiness(\n      id: \"b7\"\n      name: \"Hanabi\"\n      address: \"723 California Dr\"\n      city: \"Burlingame\"\n      state: \"CA\"\n    ) {\n      id\n      name\n    }\n    b8: CreateBusiness(\n      id: \"b8\"\n      name: \"Philz Coffee\"\n      address: \"113 B St\"\n      city: \"San Mateo\"\n      state: \"CA\"\n    ) {\n      id\n      name\n    }\n    b9: CreateBusiness(\n      id: \"b9\"\n      name: \"Alpha Acid Brewing Company\"\n      address: \"121 Industrial Rd #11\"\n      city: \"Belmont\"\n      state: \"CA\"\n    ) {\n      id\n      name\n    }\n    b10: CreateBusiness(\n      id: \"b10\"\n      name: \"San Mateo Public Library Central Library\"\n      address: \"55 W 3rd Ave\"\n      city: \"San Mateo\"\n      state: \"CA\"\n    ) {\n      id\n      name\n    }\n\n    c1: CreateCategory(name: \"Coffee\") {\n      name\n    }\n    c2: CreateCategory(name: \"Library\") {\n      name\n    }\n    c3: CreateCategory(name: \"Beer\") {\n      name\n    }\n    c4: CreateCategory(name: \"Restaurant\") {\n      name\n    }\n    c5: CreateCategory(name: \"Ramen\") {\n      name\n    }\n    c6: CreateCategory(name: \"Cafe\") {\n      name\n    }\n    c7: CreateCategory(name: \"Deli\") {\n      name\n    }\n    c8: CreateCategory(name: \"Breakfast\") {\n      name\n    }\n    c9: CreateCategory(name: \"Brewery\") {\n      name\n    }\n\n    a1: AddBusinessCategories(from: { id: \"b1\" }, to: { name: \"Beer\" }) {\n      from {\n        id\n      }\n    }\n    a1a: AddBusinessCategories(from: { id: \"b1\" }, to: { name: \"Brewery\" }) {\n      from {\n        id\n      }\n    }\n    a2: AddBusinessCategories(from: { id: \"b2\" }, to: { name: \"Beer\" }) {\n      from {\n        id\n      }\n    }\n    a2a: AddBusinessCategories(from: { id: \"b2\" }, to: { name: \"Brewery\" }) {\n      from {\n        id\n      }\n    }\n    a3: AddBusinessCategories(from: { id: \"b3\" }, to: { name: \"Restaurant\" }) {\n      from {\n        id\n      }\n    }\n    a4: AddBusinessCategories(from: { id: \"b3\" }, to: { name: \"Breakfast\" }) {\n      from {\n        id\n      }\n    }\n    a5: AddBusinessCategories(from: { id: \"b4\" }, to: { name: \"Coffee\" }) {\n      from {\n        id\n      }\n    }\n    a5a: AddBusinessCategories(from: { id: \"b4\" }, to: { name: \"Restaurant\" }) {\n      from {\n        id\n      }\n    }\n    a5b: AddBusinessCategories(from: { id: \"b4\" }, to: { name: \"Cafe\" }) {\n      from {\n        id\n      }\n    }\n    a5c: AddBusinessCategories(from: { id: \"b4\" }, to: { name: \"Deli\" }) {\n      from {\n        id\n      }\n    }\n    a5d: AddBusinessCategories(from: { id: \"b4\" }, to: { name: \"Breakfast\" }) {\n      from {\n        id\n      }\n    }\n    a6: AddBusinessCategories(from: { id: \"b5\" }, to: { name: \"Library\" }) {\n      from {\n        id\n      }\n    }\n    a7: AddBusinessCategories(from: { id: \"b6\" }, to: { name: \"Coffee\" }) {\n      from {\n        id\n      }\n    }\n    a8: AddBusinessCategories(from: { id: \"b7\" }, to: { name: \"Restaurant\" }) {\n      from {\n        id\n      }\n    }\n    a8a: AddBusinessCategories(from: { id: \"b7\" }, to: { name: \"Ramen\" }) {\n      from {\n        id\n      }\n    }\n    a9: AddBusinessCategories(from: { id: \"b8\" }, to: { name: \"Coffee\" }) {\n      from {\n        id\n      }\n    }\n    a9a: AddBusinessCategories(from: { id: \"b8\" }, to: { name: \"Breakfast\" }) {\n      from {\n        id\n      }\n    }\n    a10: AddBusinessCategories(from: { id: \"b9\" }, to: { name: \"Brewery\" }) {\n      from {\n        id\n      }\n    }\n    a11: AddBusinessCategories(from: { id: \"b10\" }, to: { name: \"Library\" }) {\n      from {\n        id\n      }\n    }\n\n    r1: CreateReview(id: \"r1\", stars: 4, text: \"Great IPA selection!\", date: { formatted: \"2016-01-03\"}) {\n      id\n    }\n    ar1: AddUserReviews(from: { id: \"u1\" }, to: { id: \"r1\" }) {\n      from {\n        id\n      }\n    }\n    ab1: AddReviewBusiness(from: { id: \"r1\" }, to: { id: \"b1\" }) {\n      from {\n        id\n      }\n    }\n\n    r2: CreateReview(id: \"r2\", stars: 5, text: \"\", date: { formatted: \"2016-07-14\"}) {\n      id\n    }\n    ar2: AddUserReviews(from: { id: \"u3\" }, to: { id: \"r2\" }) {\n      from {\n        id\n      }\n    }\n    ab2: AddReviewBusiness(from: { id: \"r2\" }, to: { id: \"b1\" }) {\n      from {\n        id\n      }\n    }\n\n    r3: CreateReview(id: \"r3\", stars: 3, text: \"\", date: { formatted: \"2018-09-10\"}) {\n      id\n    }\n    ar3: AddUserReviews(from: { id: \"u4\" }, to: { id: \"r3\" }) {\n      from {\n        id\n      }\n    }\n    ab3: AddReviewBusiness(from: { id: \"r3\" }, to: { id: \"b2\" }) {\n      from {\n        id\n      }\n    }\n\n    r4: CreateReview(id: \"r4\", stars: 5, text: \"\", date: { formatted: \"2017-11-13\"}) {\n      id\n    }\n    ar4: AddUserReviews(from: { id: \"u3\" }, to: { id: \"r4\" }) {\n      from {\n        id\n      }\n    }\n    ab4: AddReviewBusiness(from: { id: \"r4\" }, to: { id: \"b3\" }) {\n      from {\n        id\n      }\n    }\n\n    r5: CreateReview(\n      id: \"r5\"\n      stars: 4\n      text: \"Best breakfast sandwich at the Farmer's Market. Always get the works.\"\n      date: { formatted: \"2018-01-03\"}\n    ) {\n      id\n    }\n    ar5: AddUserReviews(from: { id: \"u1\" }, to: { id: \"r5\" }) {\n      from {\n        id\n      }\n    }\n    ab5: AddReviewBusiness(from: { id: \"r5\" }, to: { id: \"b3\" }) {\n      from {\n        id\n      }\n    }\n\n    r6: CreateReview(id: \"r6\", stars: 4, text: \"\", date: { formatted: \"2018-03-24\"}) {\n      id\n    }\n    ar6: AddUserReviews(from: { id: \"u2\" }, to: { id: \"r6\" }) {\n      from {\n        id\n      }\n    }\n    ab6: AddReviewBusiness(from: { id: \"r6\" }, to: { id: \"b4\" }) {\n      from {\n        id\n      }\n    }\n\n    r7: CreateReview(\n      id: \"r7\"\n      stars: 3\n      text: \"Not a great selection of books, but fortunately the inter-library loan system is good. Wifi is quite slow. Not many comfortable places to site and read. Looking forward to the new building across the street in 2020!\"\n      date: { formatted: \"2015-08-29\"}\n    ) {\n      id\n    }\n    ar7: AddUserReviews(from: { id: \"u1\" }, to: { id: \"r7\" }) {\n      from {\n        id\n      }\n    }\n    ab7: AddReviewBusiness(from: { id: \"r7\" }, to: { id: \"b5\" }) {\n      from {\n        id\n      }\n    }\n\n    r8: CreateReview(id: \"r8\", stars: 5, text: \"\", date: { formatted: \"2018-08-11\"}) {\n      id\n    }\n    ar8: AddUserReviews(from: { id: \"u4\" }, to: { id: \"r8\" }) {\n      from {\n        id\n      }\n    }\n    ab8: AddReviewBusiness(from: { id: \"r8\" }, to: { id: \"b6\" }) {\n      from {\n        id\n      }\n    }\n\n    r9: CreateReview(id: \"r9\", stars: 5, text: \"\", date: { formatted: \"2016-11-21\"}) {\n      id\n    }\n    ar9: AddUserReviews(from: { id: \"u3\" }, to: { id: \"r9\" }) {\n      from {\n        id\n      }\n    }\n    ab9: AddReviewBusiness(from: { id: \"r9\" }, to: { id: \"b7\" }) {\n      from {\n        id\n      }\n    }\n\n    r10: CreateReview(id: \"r10\", stars: 4, text: \"\", date: { formatted: \"2015-12-15\"}) {\n      id\n    }\n    ar10: AddUserReviews(from: { id: \"u2\" }, to: { id: \"r10\" }) {\n      from {\n        id\n      }\n    }\n    ab10: AddReviewBusiness(from: { id: \"r10\" }, to: { id: \"b2\" }) {\n      from {\n        id\n      }\n    }\n  }\n";