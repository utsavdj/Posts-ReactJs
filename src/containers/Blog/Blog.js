import React, {Component} from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    state = {
        auth: true
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="active" activeStyle={{
                                textDecoration: "underline"
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                            {/*<li><Link to={{*/}
                            {/*pathname: this.props.match.url+'/new-post',*/}
                            {/*hash: '#submit',*/}
                            {/*search: "?quick-submit=true"*/}
                            {/*}}>New Post</Link></li>*/}
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>*/}
                <Switch>
                    {this.state.auth?<Route path="/new-post" component={AsyncNewPost}/>:null}
                    <Route path="/posts" component={Posts}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                    <Route render={() => <h1>Not Found</h1>}/>
                    {/*<Route path="/" component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;