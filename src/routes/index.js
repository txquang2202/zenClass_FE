import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUpPage from "../components/SignUp/SignUp";
import SignInPage from "../components/SignIn/SignIn";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ResponsiveDrawer from "../Pages/ProfilePage/ProfilePage";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import DetailLayout from "../layouts/DetailLayout/DetailLayout";
import ClassPage from "../Pages/ClassPage/ClassPage";
import CoursePage from "../Pages/CoursePage/CoursePage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import PeoplePage from "../Pages/PeoplePage/PeoplePage";
import HomeWorkPage from "../Pages/HomeWorkPage/HomeWorkPage";
import ServerErrorPage from "../Pages/ServerErrorPage/ServerErrorPage";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import GradeStructurePage from "../Pages/GradeStructurePage/GradeStructurePage";
import GradeBoardPage from "../Pages/GradeBoardPage/GradeBoardPage";
import SendMailSuccessPage from "../Pages/SendMailSuccessPage/SendMailSuccessPage";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import UserLayout from "../layouts/UserLayout/UserLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import ManageUser from "../Pages/Manage/ManageUser";
import ManageClass from "../Pages/Manage/ManageClass";
import ManageCourse from "../Pages/Manage/ManageCourse";
import NotiPage from "../Pages/NotiPage/NotiPage";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const routes = [
  {
    path: "/signin",
    page: SignInPage,
    layout: null,
    isProtected: false,
  },
  {
    path: "/signup",
    page: SignUpPage,
    layout: null,
    isProtected: false,
  },
  {
    path: "/forgot-password",
    page: ForgotPassword,
    layout: null,
    isProtected: false,
  },
  {
    path: "/send-mail-success",
    page: SendMailSuccessPage,
    layout: null,
    isProtected: false,
  },
  {
    path: "/reset-password/:id",
    page: ResetPassword,
    layout: null,
    isProtected: false,
  },
  {
    path: "/profile/reset-password/:id",
    page: ResetPassword,
    layout: UserLayout,
    isProtected: false,
  },

  {
    path: "/home/:id",
    page: HomePage,
    layout: HomeLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/:id",
    page: ClassPage,
    layout: HomeLayout,
    isProtected: true,
  },
  {
    path: "/home/courses/:id",
    page: CoursePage,
    layout: HomeLayout,
    isProtected: true,
  },
  {
    path: "/home/notifications/:id",
    page: NotiPage,
    layout: DefaultLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/detail/:id",
    page: DetailPage,
    layout: DetailLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/detail/people/:id",
    page: PeoplePage,
    layout: DetailLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/detail/grade-structure/:id",
    page: GradeStructurePage,
    layout: DetailLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/detail/grade-board/:id",
    page: GradeBoardPage,
    layout: DetailLayout,
    isProtected: true,
  },
  {
    path: "/home/classes/detail/homework/:id",
    page: HomeWorkPage,
    layout: DetailLayout,
    isProtected: true,
  },
  {
    path: "/home/",
    page: HomePage,
    layout: HomeLayout,
    isProtected: true,
  },
  {
    path: "/profile/:id",
    page: ResponsiveDrawer,
    layout: UserLayout,
    isProtected: true,
  },
  {
    path: "/manageusers",
    page: ManageUser,
    layout: AdminLayout,
    isProtected: true,
    roleRequired: 3,
  },
  {
    path: "/manageclass",
    page: ManageClass,
    layout: AdminLayout,
    isProtected: true,
    roleRequired: 3,
  },
  {
    path: "/managecourse",
    page: ManageCourse,
    layout: AdminLayout,
    isProtected: true,
    roleRequired: 3,
  },
  {
    path: "/",
    page: LandingPage,
    isProtected: false,
  },
  {
    path: "*",
    page: NotFoundPage,
    layout: null,
    isProtected: false,
  },
  {
    path: "500",
    page: ServerErrorPage,
    layout: null,
    isProtected: false,
  },
];

export default routes;
