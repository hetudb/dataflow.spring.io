import React from 'react'
import { Link } from 'gatsby'

import { IconGithub } from '../components/common/icons'
import { Image } from '../components/home'
import { Latest } from '../components/news'
import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const IndexPage = () => (
  <Layout className='home-page'>
    <Seo />

    <div className='band'>
      <div className='container'>
        <div className='band-content'>
          <div className='image'>
            <Image />
          </div>
          <div className='text'>
            <p className='description'>
              HetuDB is a <strong>Real-Time</strong> and{' '}
              <strong>Serverless</strong> OLAP database management system for{' '}
              <a
                href='https://www.docker.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Docker Compose
              </a>{' '}
              and{' '}
              <a
                href='https://kubernetes.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Kubernetes
              </a>
            </p>
            <ul className='links'>
              <li>
                Simple <strong>Multi-Modal APIs</strong> for
                Rust/Python/Java/R/SQL
              </li>
              <li>
                Feature-rich <strong>transactions, persistence</strong> for
                storage engine
              </li>
              <li>
                <strong>
                  extensive SQL Plus & Vectorized engine in SIMD & Parallel
                  query processing
                </strong>{' '}
                for query engine
              </li>
              <li>
                Combined with <strong>cloud object storage</strong> to provide
                extreme elasticity
              </li>
              <li>
                <strong>Open Source</strong>, Apache Licensed
              </li>
            </ul>
            <p>
              <Link className='button' to='/getting-started/'>
                Getting Started
              </Link>{' '}
              <a
                className='button light icon'
                href='https://github.com/hetudb/hetu'
                target='_blank'
                rel='noreferrer noopener'
              >
                <IconGithub />
                View on Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='layout-basic'>
        <div className='colset'>
          <div className='col col-1'>
            <a href='/docs/concepts/'>
              <h2>Flexible</h2>
              <p>
                Using a cloud-native architecture, support for multi-module
                developer APIs provides great flexibility.
                <br />
                Write dataframe in multiple programming languages. <br />
                Support MySQL protocol, can connect with the powerful MySQL
                ecosystem
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
          <div className='col col-2'>
            <a href='/docs/concepts/tooling/'>
              <h2>Fast</h2>
              <p>
                Support vectorized engine in SIMD. <br />
                Parallel query processing on multi DAG engine, optimized for
                analytics. <br />
                High-performance RowwiseRowBlock and RowwiseColumnarBlock format
                store: lstore and cstore.
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
          <div className='col col-3'>
            <a href='/getting-started/'>
              <h2>Feature-rich</h2>
              <p>
                Rich sql plus support for streaming and batch processing.
                <br />
                Transactions, persistence for object store or local.
                <br />
                <br />
                External table direct Parquet & CSV & Json querying.
              </p>
              <p>
                <span>Read more</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='home-news'>
      <div className='container'>
        <h1>Announcements</h1>
        <div className='news-list'>
          <Latest />
        </div>
        <p className='readmore'>
          <a href='/news/' className='button'>
            Read more
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
