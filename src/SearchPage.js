import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneIcon from '@material-ui/icons/Tune'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon className="searchPage_filterIcon"/>
                <h1>FILTER</h1>
            </div>
            <hr />
            <ChannelRow 
                image="https://yt3.ggpht.com/a/AATXAJz2da5rohy4FDpRklcKMux_E823x3rd4RTzHxa4=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="ADGPI-INDIAN ARMY"
                verified
                subs="449K"
                noOfVideos={475}
                description="The Official You Tube Channel of The Indian Army."
            />
            <hr />
            <VideoRow 
                views="4.3K"
                subs="475K"
                description="General MM Naravane #COAS compliments all officers retiring on 31 July for their selfless service to the Nation and bids them ..."
                timestamp="4 days"
                channel="ADGPI-INDIAN ARMY"
                title="Bidding Adieu"
                image="https://i.ytimg.com/vi/3s3QDQ0gEsY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB3GezVD46iBAK91eUvEi5RqnpzQg"
            />
            <VideoRow 
                views="29K"
                subs="475K"
                description="26 July immortalised as #KargilVijayDiwas is a saga of Glorious Victory of the Nation during Kargil Conflict in May-July 1999."
                timestamp="1 week"
                channel="ADGPI-INDIAN ARMY"
                title="#KargilVijayDiwas"
                image="https://i.ytimg.com/vi/WhrRt_upQ54/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCsSkeQOf_YrOnN485BoUEu8HPgYg"
            />
            <VideoRow 
                views="47K"
                subs="475K"
                description="'ऑपरेशन विजय' कारगिल युद्ध भारत और पाकिस्तान के बीच मई- जुलाई 1999 के बीच हुआ।प..."
                timestamp="2 weeks"
                channel="ADGPI-INDIAN ARMY"
                title="'ऑपरेशन विजय'"
                image="https://i.ytimg.com/vi/ou7W4kYuzxw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFkLSZnhKkyAoVYGZpF5nKDCEr6Q"
            />
            <VideoRow 
                views="7.8K"
                subs="475K"
                description="NorthernCommand was raised on 17 June 1972 with Headquarter at #Udhampur. #AlwaysInCombat #DhruvaWarriors have ..."
                timestamp="4 weeks"
                channel="ADGPI-INDIAN ARMY"
                title="Know Your Army : Northern Command"
                image="https://i.ytimg.com/vi/S1N9Fw07XWI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC_EgT-2BgvmsLsMsrhaqXB5CApHA"
            />
        </div>
    )
}

export default SearchPage
