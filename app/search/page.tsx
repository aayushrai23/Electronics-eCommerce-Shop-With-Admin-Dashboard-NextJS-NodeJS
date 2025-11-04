import { ProductItem, SectionTitle } from "@/components";
import apiClient from "@/lib/api";
import React from "react";
import { sanitize } from "@/lib/sanitize";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const query = searchParams?.search || "";
  let products: any[] = [];

  try {
    const data = await apiClient.get(`/api/search?query=${query}`);

    if (!data.ok) {
      console.error("Failed to fetch search results:", data.statusText);
    } else {
      const result = await data.json();
      products = Array.isArray(result) ? result : [];
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
  }

  return (
    <div>
      <SectionTitle title="Search Page" path="Home | Search" />
      <div className="max-w-screen-2xl mx-auto">
        {query && (
          <h3 className="text-4xl text-center py-10 max-sm:text-3xl">
            Showing results for {sanitize(query)}
          </h3>
        )}
        <div className="grid grid-cols-4 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
          {products.length > 0 ? (
            products.map((product: any) => (
              <ProductItem key={product.id} product={product} color="black" />
            ))
          ) : (
            <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
              No products found for specified query
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
