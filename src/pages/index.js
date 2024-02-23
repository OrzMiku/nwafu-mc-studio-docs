import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const heroConfig = {
  heroButtonList: [
    {
      title: "指南 💡",
      link: "/docs/guide",
    },
    {
      title: "博客 📚",
      link: "/blog",
      
    },
    {
      title: "皮肤站 🧥",
      link: "https://skin.nwafu.com.cn",
    }
  ]
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)} style={{
      background: heroConfig.background,
      color: heroConfig.color
    }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          { heroConfig.heroButtonList.map((item)=>
            <Link
              className={`button button--lg button--${item.type == null ? 'secondary' : item.type} margin-left--md margin-bottom--md`}
              to={item.link}>
              {item.title}
            </Link>
          ) }
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
