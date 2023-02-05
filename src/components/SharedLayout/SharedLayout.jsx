import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MainNav, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <MainNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </MainNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
