import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Wilhelm Mozes (Surabaya)</p>
                <p><Link to={`/category`}>Category</Link></p>
            </div>
        )
    }
}
