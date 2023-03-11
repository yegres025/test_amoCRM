import React from 'react';
import './MainSpaceRight.css';

function MainSpaceRight() {
  return (
    <div className='main_space_right_wrapper'>
      <div className='main_space_right_consult'>
        <span>Вместе c </span>
        <span>
          БЕСПЛАТНОЙ <br /> КОНСУЛЬТАЦИЕЙ
        </span>
        <span> мы дарим</span>
      </div>

      <div className='main_space_right_info'>
        <div className='main_space_right_info_left'>
          <span className='main_space_right_strong_text'>
            ВИДЖЕТЫ <br />
          </span>
          <span className='main_space_right_light_text'>
            30 готовых
            <br />
            решений
            <br />
          </span>
          <span className='main_space_right_strong_text'>
            SKYPE АУДИТ
            <br />
          </span>
          <span className='main_space_right_light_text'>
            отдела продаж
            <br />и CRM системы
          </span>
        </div>

        <div className='main_space_right_info_right'>
          <span className='main_space_right_strong_text'>
            DASHBOARD
            <br />
          </span>
          <span className='main_space_right_light_text'>
            c показателями
            <br />
            вашего бизнеса
          </span>
          <span className='main_space_right_strong_text'>
            35 ДНЕЙ <br />
          </span>
          <span className='main_space_right_light_text'>
            использования
            <br />
            CRM
          </span>
        </div>
      </div>

      <div className='main_space_hidden_info'>
        <div>
          
          <div className='main_space_hidden_container'>
            <span className='main_space_hidden_line'/>
            <span className='main_space_hidden_text'>Skype аудит</span>
            <span className='main_space_hidden_line'/>
            <span className='main_space_hidden_text'>30 виджетов</span>
          </div>
          <div className='main_space_hidden_container'>
            <span className='main_space_hidden_line'/>
            <span className='main_space_hidden_text'>Dashboard</span>
            <span className='main_space_hidden_line'/>
            <span className='main_space_hidden_text'>Месяц amoCRM</span>
          </div>
        </div>
      </div>

      <button>Получить консультацию</button>
    </div>
  );
}

export { MainSpaceRight };
