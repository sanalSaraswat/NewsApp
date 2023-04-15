// import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect, useState } from 'react';
import NewsCards from './components/NewsCards';

// const alanKey = 'a59dc887d7c79d73303129b5627f97332e956eca572e1d8b807a3e2338fdd0dc/stage'
const NEWS_API_KEY = 'c1ca4b7182f6485dbc829073f479ef38';
const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;
const NEWS_BY_TERM_API = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`


function App() {

  const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   alanBtn({
  //     key: alanKey,
  //     onCommand: ({ command, term }) => {
  //       if (command === 'latestNews') {
  //         // axios.get(NEWS_API)
  //         //   .then((response) => {
  //         //     // const saved = response.data.sources
  //         //     // console.log('hello', saved)
  //         //     // saved.map((article) => {
  //         //     //   console.log(article)
  //         //     //   return setArticles([...articles, saved])
  //         //     // })
  //         //     // console.log(articles)
  //         //     setArticles(response.data.sources)
  //         //   })

  //         fetch(NEWS_API, {
  //           method: 'GET'
  //         })
  //           .then(response => response.json())
  //           .then((data) => {
  //             const news = data.articles
  //             // news.map((article, i) => {
  //             //   if(i <= 10) {
  //             //     setArticles([...articles, article])
  //             //   }
  //             // })

  //             setArticles(news)

  //           })

  //       }

  //       else if (command === 'newsByTerm') {

  //         if(term === 'Apple') {
  //           console.log('Apple')
  //         }

  //         // fetch(NEWS_API, {
  //         //   method: 'GET'
  //         // })
  //         //   .then(response => response.json())
  //         //   .then((data) => {
  //         //     const news = data.articles
  //         //     // news.map((article, i) => {
  //         //     //   if(i <= 10) {
  //         //     //     setArticles([...articles, article])
  //         //     //   }
  //         //     // })

  //         //     setArticles(news)

  //         //   })

  //       }
  //     }
  //   })
  // }, [articles])



  return (
    <div>
      <h1>Alan AI</h1>
      <NewsCards articles={articles}></NewsCards>
    </div>
  );
}

export default App;
