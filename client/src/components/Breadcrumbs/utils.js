const pathToLabelMapping = {
  appliances: "",
};

export const splitUrlToBreadcrumbData = (url) => {
  // console.log(decodeURI(url));
  let routes = decodeURI(url)
    .replace(/^\//g, "")
    .replace(/\/$/g, "")
    .split("/");
  //   console.log("Routes", routes);

  let data = routes
    .map((name, index) =>
      Boolean(name.length)
        ? {
            name,
            label: pathToLabelMapping[name] ?? name,
            path: routes
              .slice(0, index + 1)
              .reduce((finalPath, route) => finalPath + route + "/", "/"),
            disableNavigation: index === routes.length - 1 ? true : false,
          }
        : null
    )
    .filter((item) => item);
  return data;
};
