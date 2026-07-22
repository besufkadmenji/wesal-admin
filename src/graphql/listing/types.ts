import type { ListingQuery, ListingsQuery } from "@/gql/graphql";

export type ListingListItem = ListingsQuery["listings"]["items"][number];

export type ListingsResult = ListingsQuery["listings"];

export type ListingDetails = NonNullable<ListingQuery["listing"]>;
