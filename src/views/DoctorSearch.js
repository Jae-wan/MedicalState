import React, { Component } from 'react';
import Link from './common/Link';
import styled from 'styled-components';

const Search = styled.section`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  min-height: 200vmax;
  position: absolute;
  left: 0px;
  top: 0px;
  display: ${p => p.displayOption};
`;

const Searchinfo = styled.section`
  background-color: #fff;
  width: 300px;
  height: 235px;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
  & label {
    width: 100px;
    display: inline-block;
    text-align:left;
  }
`;

class DoctorSearch extends Component {
  state = { 
    name: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
    })
  }

  toggleinfo = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  search = () => {
    if(this.state.name == "이유빈"){
      const { isOpen } = this.state;
      this.setState({
      isOpen: !isOpen,
    });
    }
    else{
      alert("환자 정보가 존재하지 않습니다.")
    }
  };
  render() {
    const { isOpen } = this.state;
    let displayOption = 'none';
    if (isOpen) {
      displayOption = 'block';
    }
    return (
      <main>
        <h1>환자 검색</h1>
        <hr/>
        <Link />
        <hr/>
        <form onSubmit={this.handleSubmit}>
          환자 검색 : <input placeholder="환자이름을 입력하세요" value={this.state.name}
          onChange={this.handleChange}
          name="name"
          />
          <button onClick={this.search}>조회</button>
        </form>
        <Search displayOption={displayOption}>
        <Searchinfo>
            <br/>
            <section>
              이름 : 이유빈
            </section>
              <br/>
            <section>
              나이 : 20
            </section>
              <br/>
            <section>
              성별 : 남
            </section>
              <br/>
            <section>
              전화번호 : 01012345678
            </section>
            <br/>
            <section>
              <button onClick={this.toggleinfo}>나가기</button>
            </section>
          </Searchinfo>
        </Search>
        <br/><br/>
        '이유빈' 입력하면 환자 정보 나옴.<br/>
        그 외에는 정보가 없다는 알림창.<br/>
        아직 한명밖에 없는데 추가할 예정.
      </main>
    );
  };
}

export default DoctorSearch;