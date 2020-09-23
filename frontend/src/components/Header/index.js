import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import sino from '../../assets/sino.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#inicio">INÍCIO</a>
        <span className="dividir" />
        <a href="#novaTarefa">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="#sincronizar">SINCRONIZAR CELULAR</a>
        <span className="dividir" />
        <a href="#notificacao" id="notification">
          <img src={sino} alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;