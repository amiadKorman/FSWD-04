import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registeration(props) {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const handleToggle = () => {
      setIsSignIn(!isSignIn);
      setShowModal(true);
    }

    function signUp(e) {
      e.preventDefault();
      const username = document.getElementById("signUp_Username").value;
      const email = document.getElementById("signUp_Email").value;
      const password = document.getElementById("signUp_Password").value;
      const confirmPassword = document.getElementById("signUp_confirmPassword").value;
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
    
      // Get the existing players array from local storage or create a new one
      const existingPlayers = JSON.parse(localStorage.getItem('players')) || [];
    
      // Check if a player with the same email already exists
      const existingPlayer = existingPlayers.find(player => player.username === username);
      if (existingPlayer) {
        alert('User with this username already exists. Please sign in or use a different username.');
        return;
      }
    
      // Create a new player object
      const newPlayer = { password: password, email: email, username: username, AllScores: [] };
      // Add the new player to the array
      existingPlayers.push(newPlayer);
      // Save the updated players array back to local storage
      localStorage.setItem('players', JSON.stringify(existingPlayers));
      // Update the state or perform any other necessary actions
      props.addPlayerToTheGame(newPlayer);
      setShowModal(false);
    }
    
    function signIn(e) {
      e.preventDefault();
      const username = document.getElementById("signIn_Username").value;
      const password = document.getElementById("signIn_Password").value;
      const existingPlayers = JSON.parse(localStorage.getItem('players')) || [];
      const foundPlayer = existingPlayers.find(player => player.username === username);
      if (foundPlayer) {
        if (foundPlayer.password === password) {
          props.addPlayerToTheGame(foundPlayer);
          setShowModal(false);
        } else {
          alert('Incorrect password. Please try again.');
        }
      } else {
        alert('User not found. Please sign up.');
      }
    }
    
    return (
      <div className="container">
        <Button variant="btn btn-warning" style={{ color: "#F551D7", border: "2px solid rgb(255, 0, 187)", width: "75%", height: "85px", fontSize: "1.5em" }} onClick={handleToggle} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#F551D7'}>
          Add Player
        </Button>
        <Modal className='modal-lg' show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="authModalLabel">
              <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} onClick={handleToggle}>
                {isSignIn ? 'SIGN UP' : 'SIGN IN'}
              </Button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section className={isSignIn?"vh-70" :"vh-100"}style={{ backgroundColor: '#eee' } }>
              <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: '25px' }}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                              {isSignIn ? 'Sign In' : 'Sign up'}
                            </p>
                            <form className="mx-1 mx-md-4">
                              {!isSignIn ? (
                                <div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="text" id="signUp_username" className="form-control" />
                                      <label className="form-label" htmlFor="signUp_username">
                                        Username
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0"> 
                                      <input type="text" id="signIn_Username" className="form-control" />
                                        <label className="form-label" htmlFor="signIn_Username">
                                          Username
                                        </label>
                                    </div>
                                  </div>
                                </div>
                                )
                              }
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                {!isSignIn ? (
                                  <div className="form-outline flex-fill mb-0"> 
                                    <input type="email" id="signUp_Email" className="form-control" />
                                    <label className="form-label" htmlFor="signUp_Email">
                                      Email
                                    </label>
                                  </div>
                                ) : null}
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                {!isSignIn ? (
                                  <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="signUp_Password" className="form-control" />
                                    <label className="form-label" htmlFor="signUp_Password">
                                      Password
                                    </label>
                                  </div>) : (
                                    <div className="form-outline flex-fill mb-0">
                                      <input type="password" id="signIn_Password" className="form-control" />
                                      <label className="form-label" htmlFor="signIn_Password">
                                        Password
                                      </label>
                                    </div>
                                  )
                                }
                              </div>
                              {!isSignIn ? (
                                  <>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                      <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="signUp_confirmPassword" className="form-control" />
                                        <label className="form-label" htmlFor="signUp_confirmPassword">
                                          Repeat Password
                                        </label>
                                      </div>
                                    </div>
                                  </>
                              ) : null}
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                {isSignIn ? (
                                    <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} type="submit" onClick={signIn} className="btn btn-primary btn-lg">
                                      Sign in
                                    </Button>
                                  ) : (
                                    <Button variant="btn btn-warning" style={{ color: "white", border: "none" }} type="submit" onClick={signUp} className="btn btn-primary btn-lg">
                                      Register
                                    </Button>
                                )}
                              </div>
                            </form>
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid"
                              alt="sign in sign up"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Modal.Body>
        </Modal>
      </div>
    )
};

export default Registeration;
