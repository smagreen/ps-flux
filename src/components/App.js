import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import AuthorsPage from "./AuthorsPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import ManageAuthorPage from "./ManageAuthorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <main role="main">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course/" component={ManageCoursePage} />
          <Route path="/authors/" component={AuthorsPage} />
          <Route path="/author/:id" component={ManageAuthorPage} />
          <Route path="/author/" component={ManageAuthorPage} />
          <Redirect from="about/page" to="about" />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
