import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
const imageURL =
  "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
function NewCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url || imageURL} target="_blank">
        <CardMedia className={classes.media} image={urlToImage} />
        <div className={classes.details}>
          <Typography color="textSecondary" component="h2" variant="body2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography color="textSecondary" component="h2" variant="body2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom varaint="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography color="textSecondary" component="p" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewCard;
