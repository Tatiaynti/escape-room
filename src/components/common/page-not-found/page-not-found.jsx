import { Fragment } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <Fragment>
  <h1>
              404.
    <br />
    <small>Page not found</small>
  </h1>
  <Link to="/">Вернуться на главную страницу</Link>
</Fragment>
);

export default PageNotFound;
