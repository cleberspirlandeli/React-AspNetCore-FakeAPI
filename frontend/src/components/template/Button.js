// import React, { Component } from 'react'

// export default class Button extends Component {
// constructor(props) {
//     super(props);
//     this.state = { width: 0, height: 0 };
//     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//   }

//   componentDidMount() {
//     this.updateWindowDimensions();
//     window.addEventListener('resize', this.updateWindowDimensions);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateWindowDimensions);
//   }

//   updateWindowDimensions() {
//     this.setState({ width: window.innerWidth, height: window.innerHeight });
//   }

// }


import React from 'react'

export default props => (
    <button 
        type="button" 
        style={{ marginRight: '7px' }} 
        className={props.classBtn ? 'btn btn-labeled ' + props.classBtn : 'btn btn-labeled'}
        onClick={props.onClick}
        >
        <span className="btn-label"><i className={props.classIcon ? props.classIcon : 'fas fa-spinner'}></i></span>
        {props.nomeBtn ? props.nomeBtn : ''}
    </button>
)