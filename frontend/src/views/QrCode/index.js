import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Qr from 'qrcode.react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';


function QrCode() {

  
  return (
    <S.Container>
        <Header  />
        <S.Content>
            <h1>CAPTURE O QRCODE PELO APP</h1>
            
            <p>Suas atividades serão sincronizadas com a do seu celular</p>
            <S.QrCodeArea>
                <Qr value='getmacaddress' size={350} />
            </S.QrCodeArea>
            <S.ValidationCode>
                <span>Digite a númeração que apareceu no celular</span>
                <input type="text"/>
                <button type="button">SINCRONIZAR</button>
            </S.ValidationCode>
        </S.Content>
        <Footer />
    </S.Container>

        
    );
}

export default QrCode;