import React from 'react';
import PropTypes from 'prop-types';

export class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    };

    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }

        this.props.addFish(fish);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input ref={this.nameRef} type="text" name="name" placeholder="Name" />
                <input ref={this.priceRef} type="text" name="price" placeholder="Price" />
                <select ref={this.statusRef} name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={this.descRef} name="desc" placeholder="Desc"></textarea>
                <input ref={this.imageRef} type="text" name="image" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}