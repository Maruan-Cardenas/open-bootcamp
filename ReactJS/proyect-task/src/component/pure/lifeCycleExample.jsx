/**
 * Ejemplo de componenete de tipo clase que dispone de los métods de ciclo de vida
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('Construcctor: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Siva a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Sirve para controlar si el componente debe o no actualizarse
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmmount: justo antes de desmontar el componente')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

// lifeCycleExample.propTypes = {

// };

export default LifeCycleExample;