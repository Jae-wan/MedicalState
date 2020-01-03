//QR스캔 및 환자정보 보여주기

import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import QRCode from 'qrcode.react';
// qrcode.react -> QR코드 생성하는 패키지, 사용법: <QRCode value={"주소"} />

class QRReader extends Component {
  
    // 이미지 스캔 결과물 (data는 주소)
    handleScan = data => {
      console.log(data);
    }

    // 에러 처리 함수 (관상용)
    handleError = err => {
      console.error(err)
    }

    // 이미지 로드 버튼
    openImageDialog = () => {
      this.refs.reader.openImageDialog();
    }

  render() {
    return (
      <div>
	    <button onClick={this.openImageDialog}> Insert QRCode </button>

        <QrReader
          onError={this.handleError}
          onScan={this.handleScan}
		  legacyMode={true}
		  ref="reader"
          style={{ width: '0%' }} 
        />

        <QRCode value={"http://naver.com/"} />
      </div>
    )
  }
}
export default QRReader;