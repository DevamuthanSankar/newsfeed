import axios from "axios";

import filterNews from "../hooks/NewsFilter";

// Remove null after fixing redux
const getNews = async (dispatch, setNews, news) => {
    if(news == null){
        console.log('not preset in storage');
        axios.get(
            'https://api.newscatcherapi.com/v2/search?q=Top&page_size=40', {
                headers: {
                    'x-api-key': 'v5s5a5Qf7yi-zMtuhneJOBNY5cjdJLQU84ShKCYtx1A'
                }
            }
        ).then( res => {
            if(res != null){
                dispatch(setNews(filterNews(res.data.articles)))
            }
        })
    } else {
        console.log('preset in storage');
    }
    
}

export default getNews