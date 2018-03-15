import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import './styles.less';


export default class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <div className="register-intro">
          <p className="register-title align_center">
            Create your school
          </p>
          <div className="register-description">
            <p>Description Product</p>
            <p>Description Product</p>
            <p>Description Product</p>
          </div>
        </div>
        <div className="register-form">
          <div className="register-step">
            <div className="step ">
              <p>Your school <i className="fa fa-check"></i></p>  
            </div>
            <div className="step active">
              <p>Infomation</p>    
            </div>
            <div className="step">
              <p>Authentication</p>    
            </div>
            <div className="step">
              <p>Verify</p>    
            </div>
            <div className="step">
              <p>Complete</p>    
            </div>
          </div>
          <div className="register-step-block">
            <div className="block-your-school">
              <Input placeholder="School Name" />
              <span> 
                <Input placeholder="URL" className="register-url-input" />
                <span>.edu.co</span>
              </span>
              <Button bstyle="success" text={<span>Continue  <i className="fa fa-arrow-right"></i></span>} />
            </div>  
          </div>
        </div>
      </div>
    );
  }
}
