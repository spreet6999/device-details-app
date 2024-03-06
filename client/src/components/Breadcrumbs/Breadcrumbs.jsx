import {
  Breadcrumbs as MaterialBreadcrumbs,
  Typography,
} from "@material-tailwind/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { splitUrlToBreadcrumbData } from "./utils";

function LinkRouter(props) {
  return <RouterLink {...props} />;
}

function Breadcrumbs() {
  const location = useLocation();

  let data = splitUrlToBreadcrumbData(location.pathname);
  return Boolean(data.length) ? (
    <MaterialBreadcrumbs fullWidth>
      {data.map((obj, index) => {
        const last = index === data.length - 1;

        return last ? (
          <Typography className="text-xs opacity-60 disabled" key={obj.path}>
            {obj.label}
          </Typography>
        ) : (
          <LinkRouter
            className="opacity-60"
            underline={!obj.disableNavigation ? "hover" : "none"}
            to={!obj.disableNavigation ? obj.path : null}
            key={obj.path}
          >
            {obj.label}
          </LinkRouter>
        );
      })}
    </MaterialBreadcrumbs>
  ) : null;
}

export default Breadcrumbs;
