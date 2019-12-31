//약 성분 비교

import React, {Component} from 'react';
import Link from '../common/Link';
import styled from 'styled-components';
import NewMedicineCompareProps from '../common/NewMedicineCompareProps';
import OverMedicineCompareProps from '../common/OverMedicineCompareProps';
import OverItemMedicine from '../common/OverItemMedicine';

class MedicineCompare extends Component {
    constructor(props){
        super(props)
            this.state={
            MainMedicine: [
                {
                    name: "코푸 : ",
                    eff: "콧물",
                    MedicineNum: 1,
                },
                {
                    name: "타이레놀 : ",
                    eff: "두통",
                    MedicineNum: 2,
                },
                {
                    name: "장약 : ",
                    eff: "설사",
                    MedicineNum: 3,
                },
                {
                    name: "테스토스테론 : ",
                    eff: "호르몬",
                    MedicineNum: 4,
                },
                {
                    name: "★ : ", 
                    eff: "Test",
                    MedicineNum: 5,
                },
            ],

            OverMedicine: [
                {
                    name: "코푸 : ",
                    eff: "콧물",
                    MedicineNum: 1,
                },
                {
                    name: "타이레놀 : ",
                    eff: "두통",
                    MedicineNum: 2,
                },
                {
                    name: "장약 : ",
                    eff: "설사",
                    MedicineNum: 3,
                },
                {
                    name: "테스토스테론 : ",
                    eff: "호르몬",
                    MedicineNum: 4,
                },
                {
                    name: "☎ : ",
                    eff: "■ Test ■",
                    MedicineNum: 6,
                },
            ], 
            MainItems: [],
            OverItems: [],

            };
        }

    render(){
        const {

            MainItems,
            OverItems,
            MainMedicine,
            OverMedicine,
                            } = this.state;

        let Blue = {
            color: 'blue',
        }

        let Red = {
            color: 'red',
        }

        for (let i = 0 ; i<this.state.MainMedicine.length ; i++) {
            for (let j = 0 ; j<this.state.OverMedicine.length ; j ++) {
                if (this.state.MainMedicine[i].MedicineNum == this.state.OverMedicine[j].MedicineNum) {
                    OverItems.push(this.state.MainMedicine[j]);
                }
            }
        }

        return(
            <main className = "MedicineCompare">
                <Link />
                <article>
                    
                    <section>
                        <p> 신규 처방 약</p>
                    {this.state.MainMedicine.map(item => <NewMedicineCompareProps
                        name={item.name} 
                        eff={item.eff}
                        />)}
                    </section>

                <hr/>

                    <section>
                        <p> 기존 처방 약 </p>
                        {this.state.OverMedicine.map(item => <OverMedicineCompareProps
                        name={item.name} 
                        eff={item.eff}
                        />)}
                    </section>

                    <section>
                        <p> 중복 처방 약</p>
                        {this.state.OverItems.map(item => <OverItemMedicine
                            name={item.name}
                            eff={item.eff}
                            MedicineNum={item.MedicineNum}
                            />)}
                    </section>

                </article>


                </main>
            );
        };
    }

export default MedicineCompare;

