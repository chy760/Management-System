import React, { Component } from 'react';
import './App.css';
// import Customer 사용
import Customer from './components/Customer';

// 변수생성 - 해당 데이터 보낼 변수
const customer = {
  'name': '고길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component {
  render() {
    return (
      // Customer Component props 속성부여, 데이터 전달 -> Customer
      <Customer
        name={customer.name}        
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}
  

export default App;
