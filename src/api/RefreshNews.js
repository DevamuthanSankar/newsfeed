import axios from "axios";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import filterNews from "../hooks/NewsFilter";
import { setRefresh } from '../stores/refreshStore';

const refreshNews = async ( dispatch, setNews ) => {
    axios.get(
        'https://api.newscatcherapi.com/v2/search?q=Top&page_size=40', {
            headers: {
                'x-api-key': 'v5s5a5Qf7yi-zMtuhneJOBNY5cjdJLQU84ShKCYtx1A'
            }
        }
    ).then( res => {
        if ( res != null ) {
            console.log( 'news refreshed' );
            dispatch( setNews( filterNews( res.data.articles ) ) );
            // setData('newsData', filterNews(res.data.articles))
            Toast.show( {
                type: 'info',
                text1: 'News refreshed!'
            } )
            dispatch( setRefresh( false ) );
        }
    } )
}

export default refreshNews