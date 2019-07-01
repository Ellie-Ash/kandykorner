import React, { Component } from 'react'

export default class Locations extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        {location.address}
                        {location.name}
                    </div>
                )
            }
            </section>
        )
    }
}