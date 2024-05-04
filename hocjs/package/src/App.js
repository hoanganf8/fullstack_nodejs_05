import moment from "moment"; //Import từ node_modules
import "./assets/style.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import img01 from "./assets/img/jsx-01.png";
import config from "./config.json";
const { SERVER_API, WEB_TITLE } = config;
export const App = () => {
  return `
    ${Header()}
    <h2>Học lập trình không khó</h2>
    <div><img src="${img01}" style="width: 200px"/></div>
    <p>Server API: ${SERVER_API}</p>
    <p>Web Title: ${WEB_TITLE}</p>
    <h3>${moment().format()}</h3>
    ${Footer()}
  `;
};
