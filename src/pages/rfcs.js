import React from 'react'

import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const RfcsPage = () => (
  <Layout className='page-rfcs'>
    <Seo title='RFCS' />
    <div className='container'>
      <div className='layout-sidebars layout-2-sidebars'>
        <div className='sidebar'>
          <div className='box'>
            <div className='box-title'>Learning</div>
            <ul>
              <li>
                <a href='/docs/rfcs/concept'>RFCS Concepts</a>
              </li>
              <li>
                <a href='/docs/rfcs/cloudsrv/'>Hetu Cloud Service</a>
              </li>
              <li>
                <a href='/docs/rfcs/query/'>Hetu Query</a>
              </li>
              <li>
                <a href='/docs/rfcs/storage/'>Hetu Storage</a>
              </li>
              <li>
                <a href='/docs/rfcs/cli/'>Hetu Client</a>
              </li>
              {/* <li>
                <a href='/'>Pre-built Stream and Batch microservices.</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className='main'>
          <div className='main-content'>
            <h1>Hetu RFCS</h1>
            <p>
              The "RFC" (request for comments) process is intended to provide a
              consistent and controlled path for changes to{' '}
              <strong>HetuDB</strong> (such as new features) so that all
              stakeholders can be confident about the direction of the project.
            </p>
            <p>
              Many changes, including bug fixes and documentation improvements
              can be implemented and reviewed via the normal{' '}
              <strong>Github</strong> pull request workflow.
            </p>
            <p>
              Some changes though are "substantial", and we ask that these be
              put through a bit of a design process and produce a consensus
              among the <strong>HetuDB</strong> community and the sub-teams.
            </p>

            <ul className='block-links'>
              <li>
                <a href='/docs/installation/local/' className='local'>
                  Installation
                  <strong>Local machine</strong>
                </a>
              </li>
              <li>
                <a
                  href='/docs/installation/cloudfoundry/'
                  className='cloudfoundry'
                >
                  Installation
                  <strong>Cloud Foundry</strong>
                </a>
              </li>
              <li>
                <a href='/docs/installation/kubernetes/' className='kubernetes'>
                  Installation
                  <strong>Kubernetes</strong>
                </a>
              </li>
            </ul>
            <h2>Developer Guides</h2>
            <p>
              After installing <strong>Data Flow</strong> you will want to get
              started deploying prebuilt microservices that Data Flow
              orchestrates. Below are the guides on how to get started with both
              Stream and Batch processing.
            </p>
            <ul className='block-links'>
              <li>
                <a
                  href='/docs/stream-developer-guides/getting-started/stream/'
                  className='stream-processing'
                >
                  <strong>Stream</strong>
                  Processing
                </a>
              </li>
              <li>
                <a
                  href='/docs/batch-developer-guides/getting-started/task/'
                  className='batch-processing'
                >
                  <strong>Batch</strong> Processing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default RfcsPage
