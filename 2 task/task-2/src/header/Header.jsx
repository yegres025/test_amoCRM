import React from 'react';
import './Header.css';
import { Bubbles } from './bubles/Bubles';

function Header() {
  return (
    <nav className='header_wrapper'>
      <div className='header_logo'>
        <button style={{ backgroundImage: `url(../icon/logo_welbex.svg)` }}></button>
        <div>
          крупный интегратор CRM <br /> в России и ещё 8 странах
        </div>
      </div>

      <div className='header_left_right_wrapper'>
        <div className='header_left'>
          <button>Услуги</button>
          <button>Виджеты</button>
          <button>Интеграции</button>
          <button>Кейсы</button>
          <button>Сертификаты</button>
        </div>

        <div className='header_right'>
          <button>+7 555 555-55-55</button>
          <button style={{ backgroundImage: `url(../icon/telegram.svg)`, height:'14px' }} />
          <button style={{ backgroundImage: `url(../icon/phone.svg)` }} />
          <button style={{ backgroundImage: `url(../icon/whatsapp.svg)` }} />
        </div>
      </div>
      <Bubbles />
    </nav>
  );
}

export { Header };
