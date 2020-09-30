import React, { useState } from 'react';
import * as S from './styles';

import Qr from 'qrcode.react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';


function QrCode() {
  const [mac, setMac] = useState();
  
  async function SaveMac(){
      await localStorage.setItem('@todo/macaddress', mac)
  }

  return (
    <S.Container>
        <Header  />
        <S.Content>
            <h1>CAPTURE O QRCODE PELO APP</h1>
            
            <p>Suas atividades serão sincronizadas com a do seu celular</p>
            <S.QrCodeArea>
                <Qr value='getmacaddress' size={250} />
            </S.QrCodeArea>
            <S.ValidationCode>
                <span>Digite a númeração que apareceu no celular</span>
                <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
            </S.ValidationCode>
        </S.Content>
        <Footer />
    </S.Container>

        
    );
}

export default QrCode;