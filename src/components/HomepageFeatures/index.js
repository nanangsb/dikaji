import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah Digunakan',
    Svg: require('@site/static/img/undraw_mobile_ux.svg').default,
    description: (
      <>
        Dikaji didesain dengan tampilan dan navigasi yang sedemikian rupa supaya mudah digunakan.
      </>
    ),
  },
  {
    title: 'Sumber Otentik',
    Svg: require('@site/static/img/undraw_online_organizer.svg').default,
    description: (
      <>
       Dikaji bersumber dari website yang telah dipilih dan dipilah, sehingga bisa menyajikan pedoman pembelajaran yang sesuai Al Qur'an dan Sunnah.
      </>
    ),
  },
  {
    title: 'Struktur ',
    Svg: require('@site/static/img/undraw_content_structure_re_ebkv.svg').default,
    description: (
      <>
        Dalam mempercepat proses pembelajaran dokumentasi pedoman ini dibuat dengan struktur yang rapi, memilah sesuai kategori yang seharusnya.
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
        <Heading as="h3">{title}</Heading>
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
