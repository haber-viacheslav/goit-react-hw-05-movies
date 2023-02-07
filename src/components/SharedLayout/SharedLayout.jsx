import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MainNav, StyledLink } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <MainNav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </MainNav>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
