import React, {Component} from 'react';
import Ad from '../Ad/Ad';
import Pagination from '../Pagination/Pagination';

class Home extends Component {
    
    state = {
        range: this.getRangeFromStorage() || [0, 5]
    };
    
    handlePaginationClick = (r) => {
        this.setState({
            range: r,
        });
        this.saveRangeToStorage(r);
    }
    
    saveRangeToStorage = (range) => {
        localStorage.setItem('range', JSON.stringify(range));
    }
    
    getRangeFromStorage () {
        return JSON.parse(localStorage.getItem('range'));
    }
    
    render() {
        const ads = JSON.parse(localStorage.getItem('ads')) || [];
        const adsComponents = ads.map(ad => <Ad key={ad.id + Math.random() }
                                                id={ad.id}
                                                withLink={true}
                                                title={ad.title}
                                                description={ad.description}
                                                author={ad.author}
                                                created_at={ad.created_at}/>);
        const adsOutput = adsComponents.slice(...this.state.range);
        return (
            <div>
                {ads.length ? <div>{adsOutput}</div> : <h3>No ads yet</h3>}
                <Pagination length={ads.length}
                            onClick={this.handlePaginationClick}/>
            </div>
        )
    }
}

export default Home;