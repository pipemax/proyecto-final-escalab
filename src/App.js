import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* Secciones */ 
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import NotFound from './sections/NotFound';

/* Componentes */
import TopMovies from './components/TopMovies/TopMovies';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Favorites from './components/Favorites/Favorites';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

const App = () => {

  /*
    Se configura ruta inicial del proyecto y un arreglo de rutas para poder pasar,
    en caso de ser necesario, subrutas a los otros componentes
  */
  const main = "/";
  const routes = [
    {
        path: "/movies",
        component: Movies,
        text: "Movies"
    },
    {
        path: "/series",
        component: Series,
        text: "Series"
    },
    {
        path: "/favorites",
        component: Favorites,
        text: "Favorites"
    }
  ];

  return (
    <BrowserRouter>
      <Row>
        <Column xs={12} sm={12} md={12}>
          <Header mainPage= { main } routes= {routes}/>  
          <Container style={{marginTop: "20px"}}>
            <Switch>
              <Route key={main} exact path= { main } component= {TopMovies} />
              {
                routes.map((route) => <Route key={route.path} path= {route.path} component= {route.component} />)
              }
              <Route key="not-found" component= {NotFound} />
            </Switch>
          </Container>
          <Footer />
        </Column>
      </Row>
    </BrowserRouter>
  );
}

export default App;
