import React from 'react';
import Card from '../../components/card/Card';

import './First.scss';
import Status from '../../components/status/Status';
import Rating from '../../components/rating/Rating';
import FirstChart from './FirstChart';
import Message from '../../components/message/Message';

export default function First() {
  return (
    <>
      <div className="page">
        <div className="row">
          <Card title="Количество жалоб" link="/" tabs={['Сегодня', 'Вчера', '7 дней', '30 дней']}>
            <>
              <div className="First__content">
                <p className="text--large text--white">231</p>
                <p className="text--medium">
                  <span className="text--success">198</span> /{' '}
                  <span className="text--danger">33</span>
                </p>
              </div>
              <div className="row">
                <Status text="Обработанные" type="success" />
                <Status text="Не обработанные" type="danger" />
              </div>
            </>
          </Card>
          <Card title="Общий рейтинг" link="/">
            <>
              <div className="First__content">
                <p className="text--large text--warning">3.1</p>
                <p className="text--medium">от 3.9</p>
              </div>
              <p>
                Причина : <span className="text--warning">ЦОН Наурызбайский р-н, г. Алматы</span>
              </p>
            </>
          </Card>
          <Card title="Лучший город" link="/">
            <>
              <div className="First__content">
                <p className="text--large text--white">4.35</p>
                <p className="text--medium">г Алматы</p>
              </div>
              <div>
                Лучшая организация :{' '}
                <span className="text--warning">
                  Поликлиника №3 ( <Rating rating="4.6" ratingSize="small" /> )
                </span>
              </div>
            </>
          </Card>
          <Card title="Рейтинг Министерств" link="/" tabs={['Худшие', 'Лучшие']}>
            <>
              <div className="First__content First__ratings">
                <Rating rating="0.3" title="МИД РК" ratingSize="large" ratingColor="danger" />
                <Rating rating="0.4" title="МВД РК" />
                <Rating rating="1.2" title="МО РК" />
                <Rating rating="1.5" title="МИОР РК" />
                <Rating rating="2.1" title="МСХ РК" />
              </div>
              <p>
                Средний рейтинг : <span className="text--warning">3.75</span>
              </p>
            </>
          </Card>
        </div>
        <div className="row">
          <div className="column">
            <Card title="Настроение граждан" link="/">
              <>
                <div className="First__content">
                  <p className="text--large text--white">
                    51<span className="text--medium">%</span>
                  </p>
                  <p className="text--medium">от 48.5%</p>
                </div>
                <p>
                  Счастливый регион : <span className="text--warning">Алматинская обл.</span>
                </p>
              </>
            </Card>
            <Card title="Активность граждан" link="/" tabs={['Женщин', 'Мужчин']}>
              <>
                <div className="First__content">
                  <p className="text--large text--white">
                    77<span className="text--medium">%</span>
                  </p>
                  <p className="text--medium">4 184 граждан</p>
                </div>
                <p>
                  Общее количество : <span className="text--warning">5 437</span>
                </p>
              </>
            </Card>
            <Card title="Прогноз" type="small">
              <p>
                <span className="text--warning">12.4% </span>Вероятность проявления недовольства
              </p>
            </Card>
          </div>
          <FirstChart />
          <div className="column">
            <Card title="Рейтинг Акиматов" link="/" tabs={['Худшие', 'Лучшие']}>
              <>
                <div className="First__content First__ratings">
                  <Rating
                    rating="4.7"
                    title="Нур-султан"
                    ratingSize="large"
                    ratingColor="success"
                  />
                  <Rating rating="4.5" title="Алматы" />
                  <Rating rating="4.0" title="Шымкент" />
                  <Rating rating="3.9" title="Туркестан" />
                  <Rating rating="3.8" title="Актобе" />
                </div>
                <p>
                  Средний рейтинг : <span className="text--warning">4.0</span>
                </p>
              </>
            </Card>
            <Card title="Рейтинг организаций" link="/" tabs={['Худшие', 'Лучшие']}>
              <>
                <div className="First__content First__ratings">
                  <Rating rating="4.2" title="ЦОН-ы" ratingSize="large" ratingColor="success" />
                  <Rating rating="3.9" title="ЦЗН-ы" />
                  <Rating rating="3.5" title="Налогов." />
                  <Rating rating="3.4" title="Школы" />
                  <Rating rating="3.0" title="Суды" />
                </div>
                <p>
                  Средний рейтинг : <span className="text--warning">3.82</span>
                </p>
              </>
            </Card>
            <Card title="События" type="small">
              <div>
                10:00{' '}
                <span className="text--white">
                  ЦЗН г. Алматы <span className="text--success">обработал</span> жалобу ({' '}
                  <Rating rating="4.2" ratingSize="small" /> )
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Message
        text="Прошу разобраться! 30 сентября поехала в цон медеуского района хотела подать документы на единовременную адресную помощь, но менеджер ответил гру… "
        title="ЦОН Сарыаркинского района г. Нур-Султан"
      />
    </>
  );
}
