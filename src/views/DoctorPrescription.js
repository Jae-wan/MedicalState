import React, { Component } from 'react';
import Link from './common/Link';
import styled from 'styled-components';

const PopUp = styled.section`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  min-height: 200vmax;
  position: absolute;
  left: 0px;
  top: 0px;
  display: ${p => p.displayOption};
`;

const PopUpInput = styled.section`
  background-color: #fff;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: left;
  & label {
    width: 2000px;
    display: inline-block;
    text-align:left;
  }
`;


class DoctorPrescription extends Component {
  constructor(props){
    super(props)
    this.state = {
      patient: '',
      sex: '',
      age: '',
      medicine: '',
      medicineNumber: 0,
      isOpen: false,
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
    if (this.state.medicineNumber-1 < 0 ) {
      alert('약의 개수는 0 이상이어야 합니다.')
    }
    else {
      this.setState({
        medicineNumber: this.state.medicineNumber - 1
      })
    }
  };

  togglePopUp = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    
    let displayOption = 'none';
    
    if (isOpen) {
      displayOption = 'block';
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
            /> : {this.state.medicineNumber}
          </form>

          <button onClick={this.handlePlus}> 증가 </button>
          <button onClick={this.handleMinus}> 감소 </button>

          <button onClick={this.togglePopUp}> 처방전 확인하기</button>

          <article>
            <PopUp displayOption={displayOption}>
              <PopUpInput>
                <section>
                  <label> 환자 이름 : "{this.state.patient}"</label>
                  <label> 성별 : "{this.state.sex}" </label>
                  <label> 나이 : "{this.state.age}" </label>
                  </section>
                  <hr />
                 <section>
                  <label> 처방할 약 : "{this.state.medicine}" : {this.state.medicineNumber} 개</label>
                  <br />
                  <button onClick={this.togglePopUp}> 끄기 </button>
                </section>
                </PopUpInput>
            </PopUp>
          </article>
        </main>
        );
  };
}

export default DoctorPrescription;