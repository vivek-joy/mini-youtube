import React from 'react';
import css from '../sass/pages/home.module.scss';
import CategoryCarousel from '../components/home/CategoryCarousel';
import play from '../assets/images/play.png';

export default function Home() {
  return (
    <div className={css['home-container']}>
      <h5>Channels Categories</h5>
      <CategoryCarousel />

      <div style={{ width: '100%', marginTop: 40 }}>
        <h5 style={{ marginBottom: 16 }}>Featured Videos</h5>

        <div className={css['featured-container']}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
            <div className={css['featured-item']} key={d}>
              <div style={{ position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1590785157453-2f83a4691ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
                  alt="featured background"
                />
                <div
                  className={css['featured-img-hover']}
                  style={{ position: 'absolute', zIndex: 1 }}
                >
                  <img
                    src={play}
                    style={{ width: '30px', height: '30px' }}
                    alt="link to play video"
                  />
                </div>
              </div>
              <div className={css['featured-body']}>
                <h6>Javascript basics</h6>

                <small className={css['featured-category']}>Javascript</small>
                <small className={css['featured-details']}>
                  1.8M views 11 months ago
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
