import React, { Component } from 'react'

export default class CandyTypes extends Component {
    render() {
        return (
            <section className="types">
            {
                this.props.candyTypes.map(type =>
                    <div key={type.id}>
                        {type.type}
                    </div>
                )
            }
            </section>
        )
    }
}