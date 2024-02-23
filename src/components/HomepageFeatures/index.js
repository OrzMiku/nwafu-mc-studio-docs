import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '服务器',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        目前处于游戏开荒期，农专特色农作物系统玩法。
        <br/>
        西农复原工程规划中，欢迎各位志同道合的建筑师们贡献自己的力量！
      </>
    ),
  },
  {
    title: '皮肤站',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        䙶大皮肤站提供 Minecraft 角色皮肤的上传以及托管服务。你可以为你的游戏角色设置皮肤与披风，并让其他玩家在游戏中看到。
      </>
    ),
  },
  {
    title: '指南',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我们提供了一些教程，如MC的游玩教程，Markdown语法教程。你也可以投稿自己的教程，欢迎共享文档！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className='padding-bottom--sm card'>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
