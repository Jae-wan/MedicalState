import React, { Component } from 'react';
import * as queryParser from 'query-string';

class Link extends Component {
    render(){
        const query = queryParser.parse(window.location.search);
        console.log(query);
        return (
            <main>
                <section>
                    <article>                    
                        <h1> 의사 관련 Page</h1>
                        <nav>
                            <li><a href="/doctor/login"> 로그인 [ ! 재완 ! ] </a></li>

                            <li><a href="/doctor/addpatientview"> 환자등록 [ ! 진석 ! ] </a></li>

                            <li><a href="/doctor/signup"> 회원가입 [ ! 동영 ! ] </a></li>

                            <li><a href="/doctor/search"> 환자검색 [ ! 유빈 ! ] </a></li>

                            <li><a href="/doctor/prescription"> 처방전 [ ! 재완 ! ] </a></li>

                        </nav>
                        
                        <hr />

                        <h1> 약사 관련 Page </h1>
                            <nav>
<<<<<<< HEAD
                                <li><a href="/pharmacist/qrscan"> [!] QR스캔 및 환자정보 출력 Page [!] * 재완 유빈 * </a></li>
                                <li><a href="/pharmacist/medicinecompare"> [!] 약 성분 비교 Page [!] * 재완 준휘 * </a></li>
                                <li><a href="/pharmacist/medicineguide">[!] 복약지도 Page [!] *진석 동영 준휘*</a></li>
=======
                                <li><a href="/pharmacist/qrscan"> [!] QR스캔 및 환자정보 출력 Page [!] </a></li>
                                <li><a href="/pharmacist/medicinecompare"> [!] 약 성분 비교 Page [!] </a></li>
                                <li><a href="/pharmacist/medicineguide">[!] 복약지도 Page [!]</a></li>
                                <li><a href="/pharmacist/information"> [!] 환자정보 Page [!]</a></li>
>>>>>>> 2e94860980b9fcfb9ba4acaf9adaa482b01692d1
                            </nav>
                        
                        <hr/>

                        <h1> 환자 관련 Page </h1>
                            <nav>

                            </nav>

                        <hr />

                        <h1> Test Pages </h1>
                            <nav>
                                <li><a href="/test/qrreader"> [!] QR Reader Test Page [!] </a></li>
                                <li><a href="/test/comparetest"> [!] Compare Test Page [!] </a></li>
                            </nav>
                        
                    </article>
                </section>
            </main>
        )
    }
}

export default Link;