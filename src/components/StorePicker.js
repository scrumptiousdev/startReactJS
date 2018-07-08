import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

export class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = e => {
        e.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}