import React, { Component } from 'react';
import Link from './common/Link';

class DoctorPrescription extends Component {
  constructor(props){
    super(props)
    this.state = {
      patient: '',
      sex: '',
      age: '',
      medicine: '',
      medicineNumber: 0,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handlePlus = () => {
    this.setState({
      medicineNumber: this.state.medicineNumber + 1
    })
  };

  handleMinus = () => {
    this.setState({
      medicineNumber: this.state.medicineNumber - 1
    })
  };

  handleMinusError = () => {
    this.setState({
      medicineNumber: this.state.medicineNumber + 1
    })
    alert('약의 개수는 0 이상이어야 합니다.')
  }

  render() {
    const { medicineNumber } = this.state;

    if (medicineNumber < 0) {
      this.handleMinusError;
    }

    return (
        <main className = "DoctorPrescription">
          <Link />
          <hr/>
          <form>
            <input
              placeholder="환자 이름"
              value={this.state.patient}
              onChange={this.handleChange}
              name='patient'
            />
          </form>
          <form>
            <input
              placeholder="성별"
              value={this.state.sex}
              onChange={this.handleChange}
              name='sex'
            />
          </form>
          <form>
            <input
              placeholder="나이"
              value={this.state.age}
              onChange={this.handleChange}
              name='age'
            />
          </form>
          <br />
          <form>
            <input
              placeholder="약 이름"
              value={this.state.medicine}
              onChange={this.handleChange}
              name='medicine'
            />
          </form>

          <hr/>
          <tag> 환자이름 : "{this.state.patient}" | 성별 : {this.state.sex} | 나이 : {this.state.age} </tag> <br/>
          <tag> 처방할 약</tag> <br/>
          <tag> {this.state.medicine} : {this.state.medicineNumber} </tag>
          <button onClick={this.handlePlus}> 증가 </button>
          <button onClick={this.handleMinus}> 감소 </button>
        </main>
        );
  };
}

export default DoctorPrescription;