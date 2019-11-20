import React from 'react';
import Card from '../../components/card/Card';
import Status from '../../components/status/Status';
import Rating from '../../components/rating/Rating';

export default function Second() {
  return (
    <div className="page">
      <div className="row">
        <Card title="Все жалобы">
          <>
            <div className="First__content">
              <p className="text--large text--white">759</p>
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
        <Card title="Министерства">
          <>
            <div className="First__content">
              <p className="text--large text--white">153</p>
              <p className="text--medium">
                <span className="text--success">69</span> /{' '}
                <span className="text--danger">114</span>
              </p>
            </div>
            <div>
              Худшее министерство :{' '}
              <span className="text--white">
                МВД РК ( <Rating rating="2.1" ratingSize="small" ratingColor="danger" /> )
              </span>
            </div>
          </>
        </Card>
        <Card title="Акиматы">
          <>
            <div className="First__content">
              <p className="text--large text--white">248</p>
              <p className="text--medium">
                <span className="text--success">52</span> /{' '}
                <span className="text--danger">196</span>
              </p>
            </div>
            <div>
              Худший акимат :{' '}
              <span className="text--white">
                г Семей ( <Rating rating="1.8" ratingSize="small" ratingColor="danger" /> )
              </span>
            </div>
          </>
        </Card>
        <Card title="Организации">
          <>
            <div className="First__content">
              <p className="text--large text--white">358</p>
              <p className="text--medium">
                <span className="text--success">127</span> /{' '}
                <span className="text--danger">231</span>
              </p>
            </div>
            <div>
              Худшая орг. :{' '}
              <span className="text--white">
                ЦОН Наурызбай. р-н, г. Алматы ({' '}
                <Rating rating="2.5" ratingSize="small" ratingColor="danger" /> )
              </span>
            </div>
          </>
        </Card>
      </div>
    </div>
  );
}
