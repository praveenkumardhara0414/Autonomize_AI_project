import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Product from './Components/ProductItem';
import Login from './Components/Products';
import Header from './Components/Home'
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
