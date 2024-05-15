import React from "react";

export default function MarketplaceSinglePage({
  params,
}: {
  params: { id: string };
}) {
  return <div>Marketplace Single Page by id {params.id}</div>;
}
