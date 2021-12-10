import { Link } from "react-router-dom";
import { AppRoute } from 'const.js';

const MockPage = () => (
  <>
  <h1>Страница находится в разработке</h1>
  <Link to={AppRoute.Main}>Вернуться на главную</Link>
  </>
);

export default MockPage;
