import React, { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, BarChart2, ArrowUp, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Token {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
}

interface NewsItem {
  id: string
  title: string
  url: string
}

const Home: React.FC = () => {
  const [topTokens, setTopTokens] = useState<Token[]>([])
  const [trendingTokens, setTrendingTokens] = useState<Token[]>([])
  const [latestNews, setLatestNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // Fetch data from API here
    // For now, we'll use placeholder data
    const placeholderTokens: Token[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5, marketCap: 1000000000000 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: 1.8, marketCap: 350000000000 },
      { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 2, change24h: -0.5, marketCap: 70000000000 },
      { id: 'solana', name: 'Solana', symbol: 'SOL', price: 150, change24h: 5.2, marketCap: 45000000000 },
      { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 30, change24h: 3.7, marketCap: 30000000000 },
    ]
    setTopTokens(placeholderTokens)
    setTrendingTokens([...placeholderTokens].sort(() => Math.random() - 0.5))

    const placeholderNews: NewsItem[] = [
      { id: '1', title: 'Bitcoin Reaches New All-Time High', url: '#' },
      { id: '2', title: 'Ethereum 2.0 Upgrade Set for Next Month', url: '#' },
      { id: '3', title: 'New DeFi Protocol Gains Traction', url: '#' },
    ]
    setLatestNews(placeholderNews)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to DisplayTokens</h1>
      <p className="text-xl text-center mb-8 text-gray-300">Your AI-powered crypto companion: Revolutionizing token analysis with real-time insights and predictive intelligence</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Top Cryptocurrencies</h2>
          <ul className="space-y-4">
            {topTokens.slice(0, 5).map((token) => (
              <li key={token.id} className="flex justify-between items-center">
                <Link to={`/tokens/${token.id}`} className="flex items-center">
                  <img
                    src={`https://cryptologos.cc/logos/${token.id}-${token.symbol.toLowerCase()}-logo.png`}
                    alt={token.name}
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  <span>{token.name}</span>
                </Link>
                <div className="text-right">
                  <div>${token.price.toLocaleString()}</div>
                  <div className={token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {token.change24h >= 0 ? <ArrowUp className="inline w-4 h-4 mr-1" /> : <ArrowDown className="inline w-4 h-4 mr-1" />}
                    {Math.abs(token.change24h)}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Trending Tokens</h2>
          <ul className="space-y-4">
            {trendingTokens.slice(0, 5).map((token) => (
              <li key={token.id} className="flex justify-between items-center">
                <Link to={`/tokens/${token.id}`} className="flex items-center">
                  <img
                    src={`https://cryptologos.cc/logos/${token.id}-${token.symbol.toLowerCase()}-logo.png`}
                    alt={token.name}
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                  <span>{token.name}</span>
                </Link>
                <div className="text-right">
                  <div>${token.price.toLocaleString()}</div>
                  <div className={token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {token.change24h >= 0 ? <ArrowUp className="inline w-4 h-4 mr-1" /> : <ArrowDown className="inline w-4 h-4 mr-1" />}
                    {Math.abs(token.change24h)}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Latest AI-Curated News</h2>
          <ul className="space-y-4">
            {latestNews.map((item) => (
              <li key={item.id}>
                <a href={item.url} className="text-blue-400 hover:text-blue-300">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Blockchain Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {['Ethereum', 'Binance Smart Chain', 'Solana', 'PulseChain', 'Base'].map((blockchain) => (
            <div key={blockchain} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{blockchain}</h3>
              {/* Placeholder for chart */}
              <div className="bg-gray-700 h-40 rounded-md flex items-center justify-center">
                Chart Placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home