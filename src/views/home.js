import React from 'react'

import { Helmet } from 'react-helmet'

import Featurecard from '../components/featurecard'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>practice_project_1</title>
        <meta property="og:title" content="practice_project_1" />
      </Helmet>
      <header className="home-header">
        <div className="home-navbartextcontainer">
          <span className="home-text Headline3">Parking Lots AI</span>
          <span className="home-text1">Dashboard</span>
          <span className="home-text2">Metrics</span>
        </div>
        <div className="home-container1">
          <div className="home-container2">
            <div className="home-container3">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-container4">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </div>
            <div className="home-container5">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M1024 483.429c0 44.571-25.143 82.857-62.286 101.714 4.571 17.714 6.857 36 6.857 54.857 0 180.571-204 326.857-455.429 326.857-250.857 0-454.857-146.286-454.857-326.857 0-18.286 2.286-36.571 6.286-53.714-38.286-18.857-64.571-57.714-64.571-102.857 0-62.857 50.857-113.714 113.714-113.714 32.571 0 61.714 13.714 82.857 36 77.143-53.714 180-88.571 294.286-92.571l66.286-297.714c2.286-10.286 13.143-17.143 23.429-14.857l210.857 46.286c13.714-27.429 42.857-46.857 76-46.857 47.429 0 85.714 38.286 85.714 85.143 0 47.429-38.286 85.714-85.714 85.714-46.857 0-85.143-38.286-85.143-85.143l-190.857-42.286-59.429 269.714c114.857 3.429 218.857 37.714 296.571 91.429 20.571-21.714 49.714-34.857 81.714-34.857 62.857 0 113.714 50.857 113.714 113.714zM238.857 597.143c0 47.429 38.286 85.714 85.143 85.714 47.429 0 85.714-38.286 85.714-85.714 0-46.857-38.286-85.143-85.714-85.143-46.857 0-85.143 38.286-85.143 85.143zM701.714 800c8.571-8.571 8.571-21.143 0-29.714-8-8-21.143-8-29.143 0-34.286 34.857-108 46.857-160.571 46.857s-126.286-12-160.571-46.857c-8-8-21.143-8-29.143 0-8.571 8-8.571 21.143 0 29.714 54.286 54.286 158.857 58.286 189.714 58.286s135.429-4 189.714-58.286zM700 682.857c46.857 0 85.143-38.286 85.143-85.714 0-46.857-38.286-85.143-85.143-85.143-47.429 0-85.714 38.286-85.714 85.143 0 47.429 38.286 85.714 85.714 85.714z"></path>
              </svg>
            </div>
          </div>
          <svg viewBox="0 0 1024 1024" className="home-icon06">
            <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
          </svg>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container6">
          <div className="home-container7">
            <h1 className="home-text3 Headline1">The Parking Lot Data Hub</h1>
            <span className="home-text4 Content">
              We make sense of parking lot data. Tell us what you&apos;re
              interested in, we crunch the numbers, and you can export to Excel.
            </span>
          </div>
          <button type="button" className="home-button button1 button">
            Get Data
          </button>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxwYXJraW5nJTIwbG90fGVufDB8fHx8MTY5Mzg0ODExN3ww&amp;ixlib=rb-4.0.3&amp;w=1200"
          className="home-image"
        />
        <svg viewBox="0 0 1024 1024" className="home-icon08">
          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon10">
          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon12">
          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z"></path>
        </svg>
      </div>
      <div className="home-belowhero">
        <h1 className="home-text5 Headline2">Complex data made simple.</h1>
        <div className="home-container8">
          <Featurecard
            text="We use machine learning to deliver insights."
            rootClassName="featurecard-root-class-name"
          ></Featurecard>
          <Featurecard
            text="We visualize complex data."
            heading="Beautiful Visualizations"
            rootClassName="featurecard-root-class-name2"
          ></Featurecard>
          <Featurecard
            text="Input what you are interested in."
            heading="Customization"
            rootClassName="featurecard-root-class-name1"
          ></Featurecard>
          <Featurecard
            text="Analyze and download your data to excel."
            heading="Export to Excel"
            rootClassName="featurecard-root-class-name3"
          ></Featurecard>
        </div>
      </div>
    </div>
  )
}

export default Home
