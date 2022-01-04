import styled from "@emotion/styled";

// .container {
//     height: 100%;
//     display: flex;
//     justify-content: center;
// }

export const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
`;

// .loader {
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 300;
// }

export const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

// .movies {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(400px, 1fr));
//     grid-gap: 100px;
//     padding: 50px;
//     width: 80%;
//     padding-top: 70px;
// }

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
`;

// @media screen and (max-width: 1090px) {
//     .movies {
//         grid-template-columns: 1fr;
//         width: 100%;
//     }
// }