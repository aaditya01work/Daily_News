import { useEffect, useState } from 'react'

const HEADLINES_API = 'http://localhost:5000/api/news/headlines-no-auth'

type NullishString = null | string

interface Source {
    id: NullishString
    name: string
}

interface News {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: NullishString
}

function App() {
    const [data, setData] = useState<Array<News>>([])

    useEffect(() => {
        async function fetchNewsArticles() {
            const res = await fetch(HEADLINES_API)
            let recievedData = await res.json()

            setData(recievedData)
        }

        fetchNewsArticles()
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Top Headlines</h1>
            {data.map((news, i) => (
                <div style={{ margin: '40px 0', padding: '0 20px' }} key={i}>
                    {news.title}
                </div>
            ))}
        </div>
    )
}

export default App
