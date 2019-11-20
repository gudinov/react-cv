import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'components/RightSlider/About/About';
import Works from 'components/RightSlider/Works/Work';
import Education from 'components/RightSlider/Education/Education';
import Contact from 'components/RightSlider/Contact/Contact';

import './style.scss';
import { Scrollbars } from 'react-custom-scrollbars';

// TODO: refactoring scrollbar
const RightSliderScrollbar = ({ children }) => (
  <article className="right-slider__shadow-content">
    <Scrollbars className="right-slider__scroll" hideTracksWhenNotNeeded>
      {children}
    </Scrollbars>
  </article>
);

const RightSlider = () => (
  <main className="right-slider" role="main">
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <RightSliderScrollbar>
            <About {...props} />
          </RightSliderScrollbar>
        )}
      />
      <Route
        exact
        path="/about"
        render={(props) => (
          <RightSliderScrollbar>
            <About {...props} />
          </RightSliderScrollbar>
        )}
      />
      <Route
        exact
        path="/works"
        render={(props) => (
          <RightSliderScrollbar>
            <Works {...props} />
          </RightSliderScrollbar>
        )}
      />
      <Route
        exact
        path="/education"
        render={(props) => (
          <RightSliderScrollbar>
            <Education {...props} />
          </RightSliderScrollbar>
        )}
      />
      <Route
        exact
        path="/contact"
        render={(props) => (
          <RightSliderScrollbar>
            <Contact {...props} />
          </RightSliderScrollbar>
        )}
      />
    </Switch>
  </main>
);


export default RightSlider;
