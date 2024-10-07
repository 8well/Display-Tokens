import React from 'react'
import { Cpu, TrendingUp, Users } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About DisplayTokens</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300">
          At DisplayTokens, we're on a mission to revolutionize the way people interact with and understand the cryptocurrency market. By leveraging cutting-edge AI technology, we provide accurate, timely, and insightful information to both newcomers and seasoned crypto enthusiasts.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Power of AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Cpu className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-300">Our AI algorithms process vast amounts of data to provide you with the most accurate and up-to-date information.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trend Prediction</h3>
            <p className="text-gray-300">By analyzing historical data and current market conditions, our AI helps predict potential market trends.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Insights</h3>
            <p className="text-gray-300">Our AI monitors and analyzes community sentiment to provide valuable insights into market dynamics.</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Founder</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <img 
            src="/founder-image.jpg" 
            alt="Ahmad Younis" 
            className="w-64 h-64 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Ahmad Younis</h3>
            <p className="text-gray-300 mb-4">
              Ahmad Younis, the visionary founder of DisplayTokens, has been at the forefront of the cryptocurrency revolution since 2009. With over a decade of experience in the crypto space, Ahmad has witnessed the industry's explosive growth and transformative potential firsthand.
            </p>
            <p className="text-gray-300">
              Driven by a passion for democratizing financial information and empowering investors, Ahmad founded DisplayTokens to bridge the gap between complex crypto data and actionable insights. His mission is to provide both newcomers and seasoned traders with the tools they need to navigate the dynamic world of digital assets confidently.
            </p>
            <p className="text-gray-300 mt-4">
              Under Ahmad's leadership, DisplayTokens leverages cutting-edge AI technology to deliver real-time analysis, predictive trends, and comprehensive market insights. His vision is to create a platform that not only informs but also educates, enabling users to make well-informed decisions in the fast-paced crypto market.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About