import React from 'react';
import './BottomSpace.css';

function BottomSpace() {
  return (
    <div className='bottom_space_wrapper'>
      <div className='bottom_space_container'>
        <span>
          O компании
          <br />
        </span>
        <button>Партнёрская программа</button>
        <button>Вакансии</button>
      </div>
      <div className='bottom_space_container'>
        <span>
          Меню
          <br />
        </span>
        <button>Расчёт стоимости</button>
        <button>Услуги</button>
        <button>Виджеты</button>
        <button>Интеграции</button>
        <button>Наши клиенты</button>
      </div>
      <div className='bottom_space_container'>
        <button>Кейсы</button>
        <button>Благодарственные письма</button>
        <button>Благодарственность клиентов</button>
        <button>Сертификаты</button>
        <button>Блог на Youtube</button>
        <button>Вопрос / Ответ</button>
      </div>
      <div className='bottom_space_container'>
        <span>
          Контакты
          <br />
        </span>
        <button>+7 555 555-55-55</button>
        <div className='bottom_space_btn'>
          <button
            style={{ backgroundImage: `url(../icon/telegram.svg)` }}
          ></button>
          <button
            style={{ backgroundImage: `url(../icon/phone.svg)` }}
          ></button>
          <button
            style={{ backgroundImage: `url(../icon/whatsapp.svg)` }}
          ></button>
        </div>
        <div>Москва, Путевой проезд 3c1, к 902</div>
      </div>
    </div>
  );
}

export { BottomSpace };
