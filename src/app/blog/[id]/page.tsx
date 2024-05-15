import React from "react";

export default function BlogSinglePage({ params }: { params: { id: string } }) {
  return <div>BlogSinglePage by id {params.id}</div>;
}
