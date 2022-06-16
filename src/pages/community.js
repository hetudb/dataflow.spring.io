import React from 'react'

import {
  IconGithub,
  IconGitter,
  IconStackOverflow,
  IconZenHub,
} from '../components/common/icons'
import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'
import { ZenhubImage } from '../components/community'

const CommunityPage = () => {
  return (
    <Layout className='page-community'>
      <Seo title='Community' />
      <div className='container'>
        <div className='layout-basic'>
          <div className='page-title'>
            <h1>Community</h1>
            <p>
              All our projects are hosted on{' '}
              <a href='https://GitHub.com/hetudb/'>GitHub</a>
            </p>
            <p className='love'>
              We{' '}
              <span role='img' aria-label='love'>
                ❤️
              </span>{' '}
              Open Source
            </p>
          </div>

          <div className='page-colset'>
            <article>
              <h2>
                Hetu <strong>DB</strong>
              </h2>
              <p>
                HetuDB is a Real-Time OLAP database management system for Docker
                Compose and Kubernetes
              </p>
              <p className='social'>
                <a
                  href='https://github.com/hetudb/hetu'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconGithub />
                </a>
                <a
                  href='https://gitter.im/hetudb/hetu'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconGitter />
                </a>
                <a
                  href='https://stackoverflow.com/questions/tagged/hetudb'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconStackOverflow />
                </a>
              </p>
            </article>
            <article>
              <h2>
                Hetu <strong>Cloud</strong>
              </h2>
              <p>
                Hetu cloud is a multi-cloud environment that lets hetu run the
                way you like
              </p>
              <p className='social'>
                <a
                  href='https://github.com/hetudb/hetucloud'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconGithub />
                </a>
                <a
                  href='https://gitter.im/hetudb/hetucloud'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconGitter />
                </a>
                <a
                  href='https://stackoverflow.com/questions/tagged/hetucloud'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconStackOverflow />
                </a>
              </p>
            </article>
            <article>
              <h2>
                Hetu <strong>Async-Raft</strong>
              </h2>
              <p>
                An implementation of the Raft distributed consensus protocol
                using the Tokio framework.
              </p>
              <p className='social'>
                <a
                  href='https://github.com/hetudb/async-raft'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconGithub />
                </a>
                <a
                  href='https://stackoverflow.com/questions/tagged/async-raft'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <IconStackOverflow />
                </a>
              </p>
            </article>
          </div>

          <div className='more'>
            <p>
              Several <strong>community members</strong> have made
              implementations of HetuDB that deploy to other platforms.{' '}
              <strong>Thanks!</strong>
            </p>
            <p>
              Discover HetuDB for{' '}
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/hetudb'
              >
                Cloud ECS
              </a>
              ,{' '}
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/hetudb'
              >
                Red Hat OpenShift
              </a>
              ,{' '}
              <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/hetudb'
              >
                Google Kubernetes
              </a>
              .
            </p>
          </div>

          <div className='box'>
            <div className='zenhub'>
              <div className='zenhub-content'>
                <h2>
                  We use <a href='https://www.zenhub.com/'>ZenHub</a> to manage
                  our backlog.
                </h2>
                <p>
                  To view the <strong>backlog</strong> please install the{' '}
                  <a href='https://www.zenhub.com/extension'>
                    ZenHub browser plugin
                  </a>
                  . <strong>ZenHub</strong> is available for Google Chrome and
                  Mozilla Firefox as an extension.
                </p>
                <p>
                  <a
                    href='https://github.com/hetudb/hetu/#workspaces/scdf-combined--573b0ae28867c41f233bb0f7/board?repos=39469487,52819699,45694880,96455695,72460646,52798744,52803867,126892412,143091335,126892627,47708564,73841717,179378165'
                    className='button'
                  >
                    View the backlog
                  </a>
                </p>
                <div className='image'>
                  <IconZenHub />
                  <ZenhubImage alt='ZenHub' title='ZenHub' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CommunityPage
