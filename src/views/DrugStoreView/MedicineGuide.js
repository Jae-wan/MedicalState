//복약지도

import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';

const Input = styled.input`

vertical-align:text-top; width:200px; height:270px; 
`;

class MedicineGuide extends Component{

    constructor(props){
        super(props)
        this.state={
            MedicineName : ['타이레놀','이가탄','게보린'],
            MedicineComment : ['항생제','소염진통제','진정제'],
            MedicineNotice : '',
        }
    }  
    handleChange = (e) => {

        this.setState({
    
          [e.target.name]: e.target.value
    
        })
    
      }

    render(){
        let MedicineNum = this.state.MedicineName.length;
        return(
            
            <div>
              <p>약품:&nbsp;&nbsp;{ this.state.MedicineName[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>종류:&nbsp;&nbsp;{this.state.MedicineComment[1]}     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
               <Input placeholder="복약안내, 주의사항"
                onChange={this.handleChange}
                name="MedicineNotice">
              </Input>
              
             <p>복약안내,주의사항:&nbsp;&nbsp; {this.state.MedicineNotice}</p>
            </div>
        )
    }
}

export default MedicineGuide;