import React, { Component } from 'react';

class Link extends Component {
    render(){
        return (
            <main>
                <section>
                    <article>
                        <h1> 의사 관련 Page</h1>
                        <nav>
                            <li><a href="/doctor/login"> 로그인 [ ! 예은 ! ] </a></li>

                            <li><a href="/doctor/addpatientview"> 환자등록 [ ! 진석 ! ] </a></li>

                            <li><a href="/doctor/signup"> 회원가입 [ ! 동영 ! ] </a></li>

                            <li><a href="/doctor/search"> 환자검색 [ ! 유빈 ! ] </a></li>

                            <li><a href="/doctor/prescription"> 처방전 [ ! 재완 ! ] </a></li>

                        </nav>
                        
                        <hr />

                        <h1> 약사 관련 Page </h1>
                            <nav>
                                <li><a href="/pharmacist/qrscan"> [!] QR스캔 및 환자정보 출력 Page [!] </a></li>
                                <li><a href="/pharmacist/medicinecompare"> [!] 약 성분 비교 Page [!] </a></li>
                                <li><a href="/pharmacist/medicineguide">[!] 복약지도 Page [!]</a></li>
                            </nav>
                        
                        <hr/>
                        
                    </article>
                </section>
            </main>
        )
    }
}

export default Link;