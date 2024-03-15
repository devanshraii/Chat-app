import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import { SocketContextProvider } from "./features/socket/socket.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </BrowserRouter>
  </Provider>
);
