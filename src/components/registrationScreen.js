import React, {Component} from 'react';
import '../styles/registrationScreen.css'



class RegistrationScreen extends Component {
    constructor(){
        super();
        this.state = {
            emailInput: '',
            emailInputValidated: null,
            userInput: '',
            userInputValidated: null,
            passwordInput: '',
            passwordInputValidated: null,
            passwordInputConf: '',
            passwordInputConfValidated: null,
            passwordsAreSame: null,
        };

    }

    getEmail(e){
        this.setState({
            emailInput: e.target.value,
        });
    };
    getUser(e){
        this.setState({
            userInput: e.target.value,
        });
    }
    getPassword(e){
        this.setState({
            passwordInput: e.target.value,
        })
    }
    getPasswordConf(e){
        this.setState({
            passwordInputConf: e.target.value,
        })
    }

    toggleFocus(e){
        if(e.target.id === 'email'){
            this.setState({
                emailInputValidated: null,
            });
        }else if(e.target.id === 'user'){
            this.setState({
                userInputValidated: null,
            });
        }else if(e.target.id === 'password'){
            this.setState({
                passwordInputValidated: null,
            });
        }else if(e.target.id === 'password-confirm'){
            this.setState({
                passwordInputConfValidated: null,
            });
        }
        e.target.style.borderBottom = '2px solid #d8d8d8';
        e.target.style.color = '#d8d8d8';
    }
    validation(e){
       let validationElement = e.target.id;
       if( validationElement === 'email'){
         let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(emailRegExp.test(e.target.value)){
             this.setState({
                 emailInputValidated: true
             })
         }else{
             this.setState({
                 emailInputValidated: false
             });
             console.info("trouble with email");
         }
       }


       if(validationElement === 'user'){
           let userRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
           if(userRegExp.test(e.target.value)){
               this.setState({
                   userInputValidated: true
               })
           }else{
               this.setState({
                   userInputValidated: false
               });
               console.info("trouble with user name");
           }
       }

       if(validationElement === 'password'){
           let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
           if(passwordRegExp.test(e.target.value)){
               this.setState({
                   passwordInputValidated: true
               })
           }else{
               this.setState({
                   passwordInputValidated: false
               });
               console.info("trouble with password");
           }
        }
        if(this.state.passwordInput !== '' && this.state.passwordInputConf !== ''){
            if(this.state.passwordInput === this.state.passwordInputConf){
                this.setState({
                    passwordsAreSame: true,
                })
            }else{
                this.setState({
                    passwordsAreSame: false,
                });
                console.info("passwords not equal");
            }
        }
    }
    toggleRegistration(){
        if(this.state.emailInputValidated &&
            this.state.userInputValidated &&
            this.state.passwordInputValidated &&
            this.state.passwordsAreSame){
            console.info('all right')
        }

    }

    render() {
        return (
            <div className='registration-container'>
                <div className='lable'>Email</div>
                <div className='geometry'>
                <input className='custom-input' id='email'
                       onFocus={ e => this.toggleFocus(e)}
                       onChange={e => this.getEmail(e)}
                       onBlur={ e => this.validation(e)}
                       style={this.state.emailInputValidated === false
                           ? {borderBottom: '2px solid #fab1a0', color: '#fab1a0'}
                           : {borderBottom: '2px solid #d8d8d8', color: '#d8d8d8'}}
                />
                </div>
                <div className='lable'>User</div>
                <div className='geometry'>
                    <input className='custom-input' id='user'
                           onFocus={ e => this.toggleFocus(e)}
                           onChange={e => this.getUser(e)}
                           onBlur={e => this.validation(e)}
                           style={this.state.userInputValidated === false
                               ? {borderBottom: '2px solid #fab1a0', color: '#fab1a0'}
                               : {borderBottom: '2px solid #d8d8d8', color: '#d8d8d8'}}
                    />
                </div>
                <div className='lable'>Password</div>
                <div className='geometry'>
                    <input className='custom-input' id='password'
                           onFocus={ e => this.toggleFocus(e)}
                           onChange={e => this.getPassword(e)}
                           onBlur={e => this.validation(e)}
                           style={this.state.passwordInputValidated === false
                               ? {borderBottom: '2px solid #fab1a0', color: '#fab1a0'}
                               : {borderBottom: '2px solid #d8d8d8', color: '#d8d8d8'}}
                    />
                </div>
                <div className='lable'>Password Confirmation</div>
                <div className='geometry'>
                    <input className='custom-input' id='password-confirm'
                           onFocus={ e => this.toggleFocus(e)}
                           onChange={e => this.getPasswordConf(e)}
                           onBlur={e => this.validation(e)}
                           style={this.state.passwordsAreSame === false
                               ? {borderBottom: '2px solid #fab1a0', color: '#fab1a0'}
                               : {borderBottom: '2px solid #d8d8d8', color: '#d8d8d8'}}
                    />
                </div>
                <div className="button-geometry" onClick={e => this.toggleRegistration(e)}>Create Account</div>
            </div>

        );
    }
}

export default RegistrationScreen;
