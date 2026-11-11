import { createGlobalStyle } from 'styled-components';

// export const GlobalStyles = createGlobalStyle``;
export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.colors.primary};
}
`;
