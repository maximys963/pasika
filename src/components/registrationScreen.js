import React, {Component} from 'react';
import '../styles/registrationScreen.css'



class RegistrationScreen extends Component {
    constructor(){
        super();
        this.state = {
            emailInput: '',
            emailInputValidated: null,
        };
        this.getEmail = this.getEmail.bind(this);
        this.validation = this.validation.bind(this);
    }


    getEmail(e){
        console.log(e.target.value);
        this.setState({
            emailInput: e.target.value,
        });
    }

    validation(e){
        console.log(e.target.className);
       let validationElement = e.target.id;
       if( validationElement === 'email'){
           console.log("it works");
         let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(emailRegExp.test(e.target.value)){
             this.setState({
                 emailInputValidated: true
             })
         }else{
             this.setState({
                 emailInputValidated: true
             });
             e.target.style.borderBottom = '2px solid #fab1a0';
             e.target.style.color = '#fab1a0';
         }
       }
       if(validationElement === 'custom-input'){

       }


    }

    render() {
        return (
            <div className='registration-container'>
                <div className='lable'>Email</div>
                <div className='geometry'>
                <input className='custom-input' id='email' onChange={e => this.getEmail(e)} onBlur={ e => this.validation(e)}/>
                </div>
                <div className='lable'>User</div>
                <div className='geometry'>
                    <input className='custom-input' onChange={e => this.getEmail(e)} onBlur={e => this.validation(e)}/>
                </div>
                <div className='lable'>Password</div>
                <div className='geometry'>
                    <input className='custom-input' onChange={e => this.getEmail(e)} onBlur={e => this.validation(e)}/>
                </div>
                <div className='lable'>Password Confirmation</div>
                <div className='geometry'>
                    <input className='custom-input' onChange={e => this.getEmail(e)} onBlur={e => this.validation(e)}/>
                </div>
                <div className="button-geometry">Create Account</div>
            </div>

        );
    }
}

export default RegistrationScreen;
