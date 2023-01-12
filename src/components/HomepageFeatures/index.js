import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Twig & Blade Support',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Choose between the powerful Twig and Blade templating engines.
      </>
    ),
  },
  {
    title: 'GraphQL Integration',
    Svg: require('@site/static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
        Power your headless site with ExpressionEngine through our built-in
        GraphQL integration.
      </>
    ),
  },
  {
    title: 'The Power of Laravel',
    Svg: require('@site/static/img/undraw_laravel_and_vue_-59-tp.svg').default,
    description: (
      <>
        Access all of your ExpressionEngine content from within a Laravel Application
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
