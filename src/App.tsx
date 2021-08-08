import React, { useState, useEffect } from 'react';
import './App.css';
import { Landing } from './components/landing/landing';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home';
import { Signin } from './components/signin/signin';

import GuardedRoute from './components/guardedRoute';
import { DoPost } from './components/do-post/do-post';
import { FindNeedy } from './components/find-needy/find-needy';
import { DetailedPost } from './components/detailed-post/detailed-post';
import { FollowPost } from './components/help/follow-post';
import { Contribution } from './components/contribution-page/contribution';
import { hbox } from './components/hbox/hbox';
import { Thankyou } from './components/thankyou/thankyou';

import { fromEvent } from 'rxjs';
import { toggleSpinner } from './common/api';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App () {
  const [width, setWidth] = useState(window.innerWidth);
  const [toShowLoader, setToShowLoader] = useState(false);
  useEffect(() => {
    fromEvent(window, 'resize').subscribe((_) => {
      setWidth(window.innerWidth);
    });
    toggleSpinner.subscribe((value) => {
      setToShowLoader(value);
    });
  }, []);
  function isDesktop () {
    return width > 768; // smallest desktop width is above 768 pixels
  }
  function getElements () {
    if (isDesktop()) {
      return (
        <div className='alert alert-primary m-5'>
          <h1>Please switch to mobile or decrease width of window</h1>
        </div>
      );
    } else {
      return (
        <>
          <ToastContainer />
          <div
            style={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              backdropFilter: toShowLoader ? 'blur(14px)' : undefined,
              background: 'transparent',
              pointerEvents: 'none',
              transition: '0.3s',
              zIndex: 10
            }}>
            <Loader
              type='Rings'
              color='#7d7c7c94'
              height={200}
              width={200}
              visible={toShowLoader}
            />
          </div>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/home' />
              </Route>
              <Route path='/landing' component={Landing} />
              <GuardedRoute path='/home' component={Home} />
              <Route path='/signin' component={Signin} />
              <Route path='/find-needy' component={FindNeedy} />
              <Route path='/do-post' component={DoPost} />
              <Route path='/detailed-post' component={DetailedPost} />
              <Route path='/follow-post' component={FollowPost} />
              <Route path='/contribution' component={Contribution} />
              <Route path='/hbox' component={hbox} />
              <Route path='/thankyou' component={Thankyou} />
            </Switch>
          </Router>
        </>
      );
    }
  }
  return getElements();
}

export default App;
