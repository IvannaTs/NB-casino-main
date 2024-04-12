import React, { Component } from 'react';
import DataAndExtractLink from './DataAndExtractLink';

export default class PaymentMethods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMethods: [],
        };
    }

    componentDidMount() {
        fetch('https://api.adkey-seo.com/api/website/get-payments/295')
            .then(response => response.json())
            .then(data => {
                this.setState({ paymentMethods: data });
            })
            .catch(error => console.error('Error fetching payment methods:', error));
    }

    render() {
        return (
            <section className='payment-methods'>
                <div className='container'>
                    <h2 className='title'>
                        Payment Methods
                    </h2>
                    <div className='inner marginT_regular'>
                        <div className='payment-method inner-flex cap'>
                            <div className='logo'><p>Method</p></div>
                            <div className='type'><p>Type</p></div>
                            <div className='country'><p>Country</p></div>
                            <div className='commission'><p>Commission</p></div>
                            <div className='processing_time'><p>Processing time</p></div>
                            <div className='min_dep'><p>Minimum deposit</p></div>
                            <div className='btn-box'><p>Deposit</p></div>
                        </div>
                        {this.state.paymentMethods.map(method => (
                            <DataAndExtractLink
                                key={method.payment_id}
                                render={({ link, loading, error }) => (
                                    <div key={method.payment_id} className='payment-method row inner-flex'>
                                        <div className='logo'>
                                            <img src={`https://api.adkey-seo.com/storage/images/payments/${method.image}`} title={method.name} alt={method.name} loading='lazy' />
                                        </div>
                                        <div className='type'>
                                            <p>Type</p>
                                            {method.type}
                                        </div>
                                        <div className='country'>
                                            <p>Country</p>
                                            {method.country}
                                        </div>
                                        <div className='commission'>
                                            <p>Commission</p>
                                            {method.commission}
                                        </div>
                                        <div className='processing_time'>
                                            <p>Processing time</p>
                                            {method.processing_time}
                                        </div>
                                        <div className='min_dep'>
                                            <p>Minimum deposit</p>
                                            {method.min_dep}
                                        </div>
                                        <div className='btn-box'>
                                            <a href={link} className='btn btn-smaller btn-link'>Deposit</a>
                                        </div>
                                    </div>
                                )}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
