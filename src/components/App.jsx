import { Routes, Route} from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Products } from "pages/Products";
import { NotFound } from "pages/NotFound";
import { ProductDetails } from "pages/ProductDetails";
import { StyledLink, Container, Header } from "./App.styled"; 



export const App = () => {
  return (
    <Container>
      <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />}  /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};




