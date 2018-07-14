import React from 'react';
import PropTypes from 'prop-types';
import { AddFishForm } from './AddFishForm';
import { EditFishForm } from './EditFishForm';

export class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        key={key} 
                        index={key} 
                        fish={this.props.fishes[key]} 
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish} />
                )}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}