import React, { Component } from 'react';
import Link from '../common/Link';
import styled from 'styled-components';

const InfoBox = styled.section`
    border: 5px solid black;
    padding: 5% 2% 15% 2%;
    margin: 5%;
    width: 40%
    
`;

const InfoDate = styled.section`
    position: relative;
    top: 21px;
    text-align: right;
`;

class Information extends Component {

    constructor(props){
        super(props)
        this.state = {
            patient: '이유빈   |   ',
            age: '20   |   ',
            sex: '남자   |   ',
            MainMedicine: [
                {
                    name: "코푸",
                    eff: "콧물",
                },
                {
                    name: "타이레놀",
                    eff: "두통",
                }
            ],
            OverMedicine: [
                {
                    name: "코푸",
                    eff: "콧물",
                },
                {
                    name: "타이레놀",
                    eff: "두통",
                }
            ],
        };
    }

    render() {
        return (
            <main className="Information">
                <article>
                        <Link />
                <hr />
                <InfoBox>
                    <InfoDate> <tag> 2019/12/27 </tag></InfoDate>
                        <section>
                            이름 : {this.state.patient}
                            나이 : {this.state.age}
                            성별 : {this.state.sex}
                        </section>
                <hr/>
                        <p><mark>기존처방약</mark></p>
                        <p> 
                            {this.state.MainMedicine[0].name} 
                            ( {this.state.MainMedicine[0].eff} ) 
                        </p>
                        <p> 
                            {this.state.MainMedicine[1].name} 
                            ( {this.state.MainMedicine[1].eff} ) 
                        </p>
                <hr/>
                        <p><mark>신규처방약</mark></p>
                        <p> {this.state.OverMedicine[0].name} ( {this.state.OverMedicine[0].eff} ) </p>
                        <p> {this.state.OverMedicine[1].name} ( {this.state.OverMedicine[1].eff} ) </p>
                        <tag>* 약 개수는 의사의 처방전으로부터 props로 불러올 거임. *</tag>
                        </InfoBox>
                </article>
            </main>
        );
    }
}

export default Information;