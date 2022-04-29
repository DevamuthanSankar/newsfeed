const filterNews = (newsData) => {
    let news = newsData.filter( (data) => {
        if(data.title != null && data.excerpt != null && data.summary != null && data.media != null && data.author != null && data.published_date_precision != null){
            return true
        }
        return false
    })
    return news
}

export default filterNews