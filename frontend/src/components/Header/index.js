import React, { useState, useEffect} from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import sino from '../../assets/sino.png';

import api from '../../services/api';

function Header({clickNotification}) {

  const [lateCount, setLateCount] = useState();
  
  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify()
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
        {
           lateCount &&
          <>
          <span className="dividir" />
        <button onClick={clickNotification} id="notification">
          <img src={sino} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
        </>
        }
      </S.RightSide>
    </S.Container>
  );
}

export default Header;