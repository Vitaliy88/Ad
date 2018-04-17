import React, {Component} from 'react';

import PaginationLink from '../PaginationLink/PaginationLink';

class Pagination extends Component {
    render() {
        const adsAmount = this.props.length;
        const adsOnPage = 5;
        const links = [];
        const defRangeFrom = 0;
        const defRangeTo = adsOnPage;
        let pagesAmount = 0;
        
        if (adsAmount % adsOnPage === 0) {
            pagesAmount = adsAmount / adsOnPage;
        } else {
            pagesAmount = (adsAmount - (adsAmount % adsOnPage)) / adsOnPage + 1;
        }
        
        for (let i = 0; i < pagesAmount; i++) {
            const range = [defRangeFrom + (i * adsOnPage), defRangeTo + (i * adsOnPage)];
            
            links.push(<PaginationLink value={i + 1}
                                       range={range}
                                       key={i}
                                       onClick={this.props.onClick}/>)
        }
        return (
            <nav >
                <ul style={{border:"border: 2px solid black"}}>
                    {links}
                </ul>
            </nav>
        )
    }
}

export default Pagination;