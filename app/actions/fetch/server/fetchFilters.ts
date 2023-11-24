import { Query } from "@/typings";

const fetchFilters = async (
  query: Query,
) => {
  try {
    console.log(query.query);
    const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_READ_API_KEY}`,
      },
      body: JSON.stringify({
        query: query.query,
        variables: {
          first: query.first,
          after: query.after
        },
      }),
      next: { revalidate: 3600 }, // 1 hour
    });

    const { data } = await response.json();
    if (data === null) {
      throw new Error("Data is null");
    }

    return data.pages;
    //return data.jobs;
  } catch (error) {
    console.error(`Failed to fetch filters by search params: ${error}`);
    return [];
  }
};

const fetchFilterCount = async (query: string) => {
  try {
    const response = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_READ_API_KEY}`,
      },

      body: JSON.stringify({
        query: query,
      }),
      next: { revalidate: 3600 }, // 1 hour

    });

    const { data } = await response.json();

    // Check if data is null
    if (data === null) {
      throw new Error("Data is null");
    }
    return data.filtersConnection.aggregate.count;
  } catch (error) {
    console.error(`Failed to fetch filters count: ${error}`);
    return [];
  }
};

export { fetchFilters, fetchFilterCount };
