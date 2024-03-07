export function filterDataBasedOnSearch(data = [], searchTerm = "") {
  return data.filter((item) =>
    Object.entries(item).some(([_, value]) => {
      if (typeof value === "string") {
        return value?.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (typeof value === "number") {
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      if (
        typeof value === "object" &&
        Object.prototype.toString.call(value) === "[object Object]"
      ) {
        return Object.entries(value).some(([_, value]) => {
          return value
            ?.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
      }
      return value?.toLowerCase().includes(searchTerm.toLowerCase());
    })
  );
}
