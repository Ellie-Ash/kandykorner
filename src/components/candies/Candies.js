import React, { Component } from 'react'

export default class Candies extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        {candy.name}
                    </div>
                )
            }
            </section>
        )
    }
}