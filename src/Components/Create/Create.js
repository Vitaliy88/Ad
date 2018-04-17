import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import EditForm from '../EditForm/EditForm';
import HomeLink from '../HomeLink/HomeLink';

class Create extends Component {
    
    state = {
                title: '',
                description: '',
                id: ''
            };
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
    getMaxAdsId = (ads) => {
        const re = /\d+/;
        let maxAdsId = 0;
        ads.forEach(function (ad) {
            let id = ad.id.match(re)[0];
            id > maxAdsId ? (maxAdsId = id) : null;
        });
        return maxAdsId;
    }
    
    handleSubmit = (e) => {
        const title = this.state.title;
        const description = this.state.description;
        
        if (title !== '' && description !== '') {
            let ads = JSON.parse(localStorage.getItem('ads')) || [];
            let maxAdsId = parseInt(this.getMaxAdsId(ads), 10);
            let newId = maxAdsId + 1;
            
            ads.push({
                id: 'ad' + newId,
                author: this.props.userName,
                created_at: new Date().toLocaleString(),
                title: title,
                description: description
            });
            
            localStorage.setItem('ads', JSON.stringify(ads));
            
            this.setState({
                id: 'ad' + newId
            });
        } else {
            alert('Enter username and password');
        }
        e.preventDefault();
    }
    
    render() {
        return (
            this.state.id ? <Redirect to={this.state.id}/> :
                (<div>
                    <EditForm onSubmit={this.handleSubmit}
                              onInput={this.handleInput}
                              title={this.state.title}
                              description={this.state.description}
                              btnValue="Create"/>
                    <HomeLink/>
                </div>)
        )
    }
}

export default Create;