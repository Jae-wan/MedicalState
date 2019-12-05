import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone_num: '',
      id: '',
      pw: '',
      pw_check: '',
      message:'',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  check_data=()=>{
    let test_email="abc123@gmail.com"
    let test_phone_num="01012341234"
    let test_id="gildong123"

    const {name,email,phone_num,id,pw,pw_check}=this.state;
    
    if(email==test_email)
    {
      this.setState({
        message:"이미 등록된 이메일입니다."
      });
    }

    else if(phone_num==test_phone_num)
    {
      this.setState({
        message:"이미 등록된 전화번호입니다."
      });
    }

    else if(id==test_id)
    {
      this.setState({
        message:"이미 등록된 아이디입니다."
      });
    }
    
    else if(pw!=pw_check && pw_check!='')
    {
      this.setState({
        message:"비밀번호를 다르게 입력하셨습니다."
      });
    }

    else if(name==''|| email=='' || phone_num=='' || id=='' || pw=='' || pw_check=='')
    {
      this.setState({
        message:"정보를 다 입력해 주세요."
      });
    }

    else
    {
      this.setState({
        message:"회원가입 되었습니다.."
      });
    }
  };
  
  render (){
    return(
      <body>
        <center>
      
          <header>
            <h1>회원가입</h1>
            <hr></hr>
          </header>
      
        </center>
    
        <section>
    
          <article>
            <form name="signup">
              이름 :
              <input name="name" value={this.state.name} onChange={this.handleChange}></input><br></br>
              이메일 :
              <input name="email" value={this.state.email} onChange={this.handleChange}></input><br></br>
              전화번호 :
              <input name="phone_num" value={this.state.phone_num} onChange={this.handleChange}></input><br></br>
              아아디 : 
              <input name="id" value={this.state.id} onChange={this.handleChange}></input><br></br>
              비밀번호 :
              <input name="pw" value={this.state.pw} onChange={this.handleChange}></input><br></br>
              비밀번호 재입력 :
              <input name="pw_check" value={this.state.pw_check} onChange={this.handleChange}></input><br></br>
            </form>
            <div>{this.state.message}</div>
          </article>
  
        </section> 
    
        <footer>
            <input type="button" value="회원가입 완료" onClick={this.check_data}></input>
        </footer>  
      </body>
    );
  };
};

export default SignupForm;