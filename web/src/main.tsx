import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { Provider } from "react-redux"

import "./index.css"
import App from "@/App.tsx"
import { store, persistor } from "@/store"
import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
)
