import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import EditForm from '../EditForm/EditForm';
import HomeLink from '../HomeLink/HomeLink';

class Edit extends Component {
  
    id = this.props.match.match.params.ad;
    ad = this.getAd(this.id);
    state = {
                title: this.ad.title,
                description: this.ad.description,
                edited: false
            };
    
    
    handelInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit = (e) => {
        const title = this.state.title;
        const description = this.state.description;
        
        if (title !== '' && description !== '') {
            let ads = JSON.parse(localStorage.getItem('ads'));
            this.ad.title = title;
            this.ad.description = description;
            this.ad.created_at = new Date().toLocaleString();
            ads.forEach((e, i) => (e.id === this.id ? ads.splice(i, 1, this.ad) : null));
            localStorage.setItem('ads', JSON.stringify(ads));
            this.setState({edited: true});
        } else {
            alert('Enter username and password');
        }
        e.preventDefault();
    }
    
    getAd(id) {
        return JSON.parse(localStorage.getItem('ads')).filter(e => e.id === id)[0] || {};
    }
    
    render() {
        return (
            <div>{this.state.edited ? <Redirect to={'/' + this.id}/> : null}
                {this.ad.id ? <EditForm title={this.state.title}
                                        description={this.state.description}
                                        onInput={this.handelInput}
                                        onSubmit={this.handleSubmit}
                                        btnValue="Save"/> :
                    <h2>There is no such ad</h2>}
                <HomeLink/>
            </div>
        )
    }
}

export default Edit;