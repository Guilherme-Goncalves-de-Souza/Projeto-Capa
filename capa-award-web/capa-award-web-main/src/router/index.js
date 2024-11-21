import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Landpage from 'screens/Landpage' 
import NotFound from 'screens/NotFound' 

import Login from 'screens/Authentication/Login' 
import Register from 'screens/Authentication/Register' 
import Forgot from 'screens/Authentication/Forgot' 
import CreatePassword from 'screens/Authentication/CreatePassword' 

import DashboardHome from 'screens/Dashboard/Home' 
import DashboardMe from 'screens/Dashboard/Me' 
import News from "screens/News";
import Blog from "screens/Blog";
import About from "screens/About";
import AboutUniversities from "screens/About/Universities";
import AboutNetwork from "screens/About/Network";
import AboutDevelopment from "screens/About/Development";
import BlogDetails from "screens/Blog/BlogDetails";
import NewsDetails from "screens/News/NewsDetails";
import DashboardEdict from "screens/Dashboard/Edict";
import DashboardEdictForm from "screens/Dashboard/EdictForm";
import DashboardEdictList from "screens/Dashboard/EdictList";
import DashboardEdictShow from "screens/Dashboard/EdictShow";
import DashboardEdictWritten from "screens/Dashboard/EdictWritten";
import DashboardEdictWrittenForm from "screens/Dashboard/EdictWrittenForm";
import DashboardEdictAcessor from "screens/Dashboard/EdictAcessor";
import DashboardEdictAcessorForm from "screens/Dashboard/EdictAcessorForm";
import DashboardEdictAcessorCalendar from "screens/Dashboard/EdictAcessorCalendar";
import DashboardHomeChart from "screens/Dashboard/HomeChart";
import DashboardEdictListAdvisor from "screens/Dashboard/EdictListAdvisor";
import DashboardAdvisorShow from "screens/Dashboard/AdvisorShow";
import DashboardAdvisorShowDetails from "screens/Dashboard/AdvisorShowDetails";
import DashboardAdvisorSchedule from "screens/Dashboard/AdvisorSchedule";
import DashboardAdvisorScheduleForm from "screens/Dashboard/AdvisorSheduleForm";
import DashboardAdvisorBlog from "screens/Dashboard/AdvisorBlog";
import DashboardAdvisorBlogForm from "screens/Dashboard/AdvisorBlogForm";
import DashboardAdvisorListConfig from "screens/Dashboard/AdvisorListConfig";
import DashboardEdictCreate from "screens/Dashboard/EdictCreate";
import DashboardEdictWrittenFormEdit from "screens/Dashboard/EdictWrittenFormEdit";
import DashboardInstitutionList from "screens/Dashboard/InstitutionList";
import DashboardArticleEditForm from "screens/Dashboard/ArticleEditForm";

import DashboardListArea from "screens/Dashboard/ListArea";
import DashboardListUser from "screens/Dashboard/ListUser";
import DashboardListAdvisor from "screens/Dashboard/ListAdvisor";
import DashboardListGroups from "screens/Dashboard/ListGroups";
import DashboardAdminNewsForm from "screens/Dashboard/AdminNewsForm";
import DashboardAdminNews from "screens/Dashboard/AdminNews";


export default function AppRouter() {
    return (
      <Router>  
        <div>
          <Switch>
            <Route path="/" exact> <Landpage /> </Route> 
            <Route path="/news" exact> <News /> </Route> 
            <Route path="/news/:id" exact> <NewsDetails /> </Route> 
            <Route path="/blog" exact> <Blog /> </Route> 
            <Route path="/blog/:id" exact> <BlogDetails /> </Route> 
            
            <Route path="/advisor/blog" exact> <DashboardAdvisorBlog /> </Route> 
            <Route path="/advisor/blog/:id" exact> <DashboardAdvisorBlogForm /> </Route> 
            
            <Route path="/about" exact> <About /> </Route> 
            <Route path="/about/universities" exact> <AboutUniversities /> </Route> 
            <Route path="/about/network" exact> <AboutNetwork /> </Route> 
            <Route path="/about/development" exact> <AboutDevelopment /> </Route> 
            
            <Route path="/login" exact> <Login /> </Route> 
            <Route path="/register" exact> <Register /> </Route> 
            <Route path="/forgot" exact> <Forgot /> </Route> 
            <Route path="/reset-password" exact> <CreatePassword /> </Route> 
            
            <Route path="/dashboard" exact> <DashboardHome /> </Route> 
            <Route path="/activities" exact> <DashboardHome /> </Route> 
            <Route path="/activities/:id" exact> <DashboardEdict /> </Route> 
            <Route path="/activities/create/article/:edict_id" exact> <DashboardEdictForm /> </Route> 
            <Route path="/activities/list/article" exact> <DashboardEdictList /> </Route> 
            <Route path="/activities/list/article/:id/edit" exact> <DashboardArticleEditForm /> </Route> 
            <Route path="/activities/list/edicts" exact> <DashboardEdictListAdvisor /> </Route> 
            <Route path="/activities/create/edicts" exact> <DashboardEdictCreate /> </Route> 
            <Route path="/activities/create/edicts/:id" exact> <DashboardEdictCreate /> </Route> 
            <Route path="/activities/list/article/:id" exact> <DashboardEdictList /> </Route> 
            <Route path="/activities/show/article/:id" exact> <DashboardEdictShow /> </Route> 
            <Route path="/activities/center/write" exact> <DashboardEdictWritten /> </Route> 
            <Route path="/activities/center/write/:id" exact> <DashboardEdictWrittenForm /> </Route> 
            <Route path="/activities/center/write/:id/edit" exact> <DashboardEdictWrittenFormEdit /> </Route> 
            <Route path="/activities/list/acessor" exact> <DashboardEdictAcessor /> </Route> 
            <Route path="/activities/create/acessor" exact> <DashboardEdictAcessorForm /> </Route> 
            <Route path="/activities/create/acessor/:id" exact> <DashboardEdictAcessorForm /> </Route> 
            <Route path="/activities/show/advisor" exact> <DashboardAdvisorShow /> </Route>
            <Route path="/activities/show/advisor/:id" exact> <DashboardAdvisorShow /> </Route>
            <Route path="/activities/config/acessor" exact> <DashboardAdvisorListConfig /> </Route>

            <Route path="/activities/show/advisor/details/:id" exact> <DashboardAdvisorShowDetails /> </Route> 
            <Route path="/activities/config/advisor" exact> <DashboardAdvisorSchedule /> </Route> 
            <Route path="/activities/config/advisor/:id" exact> <DashboardAdvisorScheduleForm /> </Route> 
            <Route path="/activities/calendar/acessor" exact> <DashboardEdictAcessorCalendar /> </Route> 
            <Route path="/advisor/blog/:id" exact> <DashboardAdvisorBlogForm /> </Route> 

            <Route path="/institution/list" exact> <DashboardInstitutionList /> </Route> 
            <Route path="/area/list" exact> <DashboardListArea /> </Route> 
            <Route path="/user/list" exact> <DashboardListUser /> </Route> 
            <Route path="/advisor/list" exact> <DashboardListAdvisor /> </Route> 
            <Route path="/groups/list" exact> <DashboardListGroups /> </Route> 
            
            <Route path="/admin/news" exact> <DashboardAdminNews /> </Route> 
            <Route path="/admin/news/:id" exact> <DashboardAdminNewsForm /> </Route> 
            <Route path="/admin/news/:id/create" exact> <DashboardAdminNewsForm /> </Route> 

            <Route path="/dashboard/admin" exact> <DashboardHomeChart /> </Route> 
            <Route path="/dashboard/me" exact> <DashboardMe /> </Route> 
            
            <Route path="*" exact> <NotFound /> </Route>
          </Switch>
        </div>
      </Router>
    );
}