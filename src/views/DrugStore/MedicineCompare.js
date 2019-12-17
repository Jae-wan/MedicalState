//약 성분 비교

import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';

const MedicineCompared1 = styled.section`

`;

class MedicineCompare extends Component {
    constructor(props){
        super(props)
        this.state={
            Test1: '타이레놀',
            Test1Ing: '머리아플때',
            Test2: '장약',
            Test2Ing: '배아플때',

            Medicine1: '타이레놀',
            Medicine1Ing: '머리아플때',
            Medicine2: '으앙',
            Medicine2Ing: '배아플때',
            
            New1: '코푸',
            New1Ing: '콧물가래',

            ColorOn: false,
        }
    }
    
    render(){
        return(
            <main className="MedicineCompare">
                <Link />
                <h1>약 성분비교 페이지</h1>
                <hr/>

                <article>
                    <section>
                        
                        <h3> 기존 처방 된 약 정보</h3>
                        <ol><mark>{this.state.Test1}</mark></ol>
                        <ul> 성분 및 효과 : {this.state.Test1Ing}</ul>

                        <ol><mark>{this.state.Test2}</mark></ol>
                        <ul> 성분 및 효과 : {this.state.Test2Ing} </ul>

                    </section>

                    <section>

                        <h3> 신규 처방된 약 정보</h3>
                        <ol><mark>{this.state.Medicine1}</mark></ol>
                        <ul> 성분 및 효과 : {this.state.Medicine1Ing} </ul>

                        <ol><mark>{this.state.Medicine2}</mark></ol>
                        <ul> 성분 및 효과 : {this.state.Medicine2Ing} </ul>

                        <ol><mark>{this.state.New1}</mark></ol>
                        <ul> 성분 및 효과 : {this.state.New1Ing} </ul>

                    </section>
                </article>
                
            </main>
        );
    };
}

export default MedicineCompare;