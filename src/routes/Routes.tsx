import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { ContactPage } from '../views/Contact/ContactPage';
import { ErrorPage } from '../views/Error/ErrorPage';
import { EventsPage } from '../views/Events/EventsPage';
import { HomePage } from '../views/Home/HomePage';

export const Routes: FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
