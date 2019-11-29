import React, { Component } from 'react';

class Link extends Component {
    render(){
        return (
            <main>
                <section>
                    <article>
                        <nav>
                            <li><a href="/doctor/login"> 로그인 [ ! 예은 ! ] </a></li>

                            <li><a href="/doctor/addpatientview"> 환자등록 [ ! 진석 ! ] </a></li>

                            <li><a href="/doctor/signup"> 회원가입 [ ! 동영 ! ] </a></li>

                            <li><a href="/doctor/search"> 환자검색 [ ! 유빈 ! ] </a></li>

                            <li><a href="/doctor/prescription"> 처방전 [ ! 재완 ! ] </a></li>

                        </nav>
                    </article>
                </section>
            </main>
        )
    }
}

export default Link;