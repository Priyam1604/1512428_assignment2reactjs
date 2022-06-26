import React, {PureComponent} from 'react';
import DetailPost from "./DetailPost";
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';

class ListsL extends PureComponent {

    constructor() {
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {this.setState(
                {posts: data}
            )
                console.log(data)
            }
            )
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                {this.state.posts.map(post=> {
                    return (<li className="list-group-item" key={post.id}>
                        <Link to ={'/postdetail/'}
                        state={{title:post.title,
                        body:post.body
                        }}>


                            {post.title}

                        </Link>
                    </li>)
                })}
                    </ul>
            </div>
        );
    }
}

ListsL.propTypes = {};

export default ListsL;