import React from 'react'
import NewsCard from './NewsCard'
import Grid from '@mui/material/Grid'
import styles from '../css/NewsCards.module.scss'
import { Typography } from '@mui/material'


const NewsCards = ({ articles }) => {

  const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

  const saved = [1, 2, 3, 4, 5, 6, 7]
  console.log(articles)

  if (!articles.length) {
    return (

      <Grid className={styles.container} container alignItems='stretch' spacing={3}>
        {infoCards.map((infoCard) => {
          return (

            <Grid item xs={12} sm={6} md={4} lg={3} className={styles.infoCard}>

              <div className={styles.card} style={{ backgroundColor: infoCard.color }}>

                <Typography variant="h5" component="h5">{infoCard.title}</Typography>

                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
              
            </Grid>
          )
 
        })}
      </Grid>

    )

  }


  return (
    <Grid className={styles.container} container alignItems='stretch' spacing={3}>
      {articles.map((article, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <NewsCard article={article} index={index}></NewsCard>
          </Grid>
        )

      })}
    </Grid>

    // <div>
    //   {saved.map(() => {
    //     <NewsCard />
    //   })}
    // </div>


  )

}

export default NewsCards