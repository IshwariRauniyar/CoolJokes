
import Layout from "../layout/Basic";

const Home = () => {
  return (
    <Layout>
      <h1>Find Cool Jokes!!!</h1>
    </Layout>
  );
};

export default Home;

// import * as React from 'react'
// import Layout from "../layout/Basic";

// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: palevioletred;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   render() {
//     return (
//       <Input
//         ref={this.inputRef}
//         placeholder="Hover to focus!"
//         onMouseEnter={() => {
//           this.inputRef.current.focus()
//         }}
//       />
//     );
//   }
// }

// render(
//   <Form />
// );