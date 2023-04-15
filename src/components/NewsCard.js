import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from '../css/Card.module.scss'

const NewsCard = ({ article: { description, url, publishedAt, source, title, urlToImage }, index}) => {

  
  return (
    <Card className={styles.card}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={styles.media} image={urlToImage} />

        <div className={styles.details}>
          <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
        </div>

        <Typography className={styles.title} gutterBottom variant='h5'>{title}</Typography>

        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
        </CardContent>

      </CardActionArea>

      <CardActions className={styles.cardActions}>

        <Button size='small' color='primary'>Learn More</Button>
        <Typography variant='h5' color='textSecondary'>{index + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard