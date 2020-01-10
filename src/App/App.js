// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import './App.scss';
// import dogsData from '../helpers/data/dogsData';
// import employeesData from '../helpers/data/employeesData';
// import DogPen from '../components/DogPen/DogPen';
// import StaffRoom from '../components/StaffRoom/StaffRoom';

// class App extends React.Component {
//   state = {
//     doggos: [],
//     minions: [],
//   }

//   componentDidMount() {
//     const doggos = dogsData.getAllDogs();
//     const minions = employeesData.getAllEmployees();
//     this.setState({ doggos, minions });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="app-container">
//           <DogPen className="parent-component DogPen" doggos={this.state.doggos}/>
//           <StaffRoom className="parent-component StaffRoom" minions={this.state.minions}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
