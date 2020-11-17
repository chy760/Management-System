// import React 사용
import React from 'react';

// class Customer 생성
class Customer extends React.Component {
    // class 내에 화면에 그리는 내용 정의
    render() {
        return(
            // App 전달 받은 데이터를 props을 사용하여 보여준다. 
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div> 
        )       
    }
}

// export Customer 클래스 사용
export default Customer;