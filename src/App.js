import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./components/user/User";
import NewUser from "./pages/newUserPage/NewUser";
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product";


function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route  exact path = "/users">
          <UserList/>
        </Route>
        <Route  path = "/user/:userId">
          <User/>
        </Route>
        <Route  path = "/newUser">
          <NewUser/>
        </Route>
        <Route  path = "/products">
          <ProductList/>
        </Route>
        <Route  path = "/product/:productId">
          <Product/>
        </Route>
        <Route  path = "/newProduct">
          <NewUser/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
