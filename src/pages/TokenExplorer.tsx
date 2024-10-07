import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpDown, ExternalLink } from 'lucide-react'

interface Token {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume: number
}

const TokenExplorer: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [sortColumn, setSortColumn] = useState<keyof Token>('marketCap')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  useEffect(() => {
    // Fetch token data from an API here
    // For now, we'll use placeholder data
    const placeholderTokens: Token[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 50000, change24h: 2.5, marketCap: 1000000000000, volume: 50000000000 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3000, change24h: 1.8, marketCap: 350000000000, volume: 25000000000 },
      { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 2, change24h: -0.5, marketCap: 70000000000, volume: 5000000000 },
      { id: 'solana', name: 'Solana', symbol: 'SOL', price: 150, change24h: 5.2, marketCap: 45000000000, volume: 3000000000 },
      { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 30, change24h: 3.7, marketCap: 30000000000, volume: 2000000000 },
    ]
    setTokens(placeholderTokens)
  }, [])

  const handleSort = (column: keyof Token) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('desc')
    }
  }

  const sortedTokens = [...tokens].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Token Explorer</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="text-left">
              <th className="p-4">Name</th>
              {['price', 'change24h', 'marketCap', 'volume'].map((column) => (
                <th
                  key={column}
                  className="p-4 cursor-pointer"
                  onClick={() => handleSort(column as keyof Token)}
                >
                  <div className="flex items-center">
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                    <ArrowUpDown className="ml-1 w-4 h-4" />
                  </div>
                </th>
              ))}
              <th className="p-4">Links</th>
            </tr>
          </thead>
          <tbody>
            {sortedTokens.map((token) => (
              <tr key={token.id} className="border-t border-gray-700 hover:bg-gray-700">
                <td className="p-4">
                  <Link to={`/tokens/${token.id}`} className="flex items-center">
                    <img
                      src={`https://cryptologos.cc/logos/${token.id}-${token.symbol.toLowerCase()}-logo.png`}
                      alt={token.name}
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{token.name}</div>
                      <div className="text-sm text-gray-400">{token.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="p-4">${token.price.toLocaleString()}</td>
                <td className={`p-4 ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {token.change24h.toFixed(2)}%
                </td>
                <td className="p-4">${token.marketCap.toLocaleString()}</td>
                <td className="p-4">${token.volume.toLocaleString()}</td>
                <td className="p-4">
                  <a
                    href={`https://www.coingecko.com/en/coins/${token.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TokenExplorer