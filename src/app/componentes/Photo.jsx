import React from 'react';
import { Link } from 'react-router';

export default class Photo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                I'am the Home Page
                <br/><br/>
                <Link to="view/1">Go to Single Page</Link>
            </div>

        );
    }
}
