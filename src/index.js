import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// import VideoDetailLong from "./components/pages/VideoDetailLong";
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./components/pages/Home"));
const Detail = lazy(() => import("./components/pages/Detail"));
const Video = lazy(() => import("./components/pages/Video"));
const Epaper = lazy(() => import("./components/pages/Epaper"));
const Subscription = lazy(() => import("./components/pages/Subscription"));
const MyProfile = lazy(() => import("./components/pages/MyProfile"));
const MyPlan = lazy(() => import("./components/pages/MyPlan"));
const Login = lazy(() => import("./components/pages/Login"));
const LoginOtp = lazy(() => import("./components/pages/LoginOtp"));
const SelectState = lazy(() => import("./components/pages/SelectState"));
const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));
const Category = lazy(() => import("./components/pages/Category"));
const Search = lazy(() => import("./components/pages/Search_news"));
const Videodetail = lazy(() => import("./components/pages/Videodetail"));
const VideoDetailLong = lazy(() => import("./components/pages/VideoDetailLong"));
const View = lazy(() => import("./components/pages/View"));
const Detailview = lazy(() => import("./components/pages/Detailview"));
const Terms = lazy(() => import("./components/pages/Terms"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Advertize= lazy(() => import("./components/pages/Advertize"));
const Cookie = lazy(() => import("./components/pages/Cookie"));
const Privacy = lazy(() => import("./components/pages/Privacy"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/Newsdetail/index/:newsslug" element={<Detail />} />
          <Route index path="/Video/index" element={<Video />} />
          <Route index path="/e-paper" element={<Epaper />} />
          <Route index path="/subscription" element={<Subscription />} />
          <Route index path="/myprofile" element={<MyProfile />} />
          <Route index path="/myplan" element={<MyPlan />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/otp" element={<LoginOtp />} />
          <Route index path="/select-state" element={<SelectState />} />
          <Route index path="/Category/index/:slug" element={<Category />} />
          <Route index path="/search/:slug" element={<Search />} />
          <Route index path="/video/:id" element={<Videodetail />} />
          <Route index path="/videolong/:id" element={<VideoDetailLong />} />
          <Route index path="/view" element={<View />} />
          <Route index path="/view/:id" element={<Detailview />} />

          <Route index path="/terms-and-conditions" element={<Terms />} />
          <Route index path="/contact-us" element={<Contact />} />
          <Route index path="/advertise-with-us" element={<Advertize />} />
          <Route index path="/cookie-policy" element={<Cookie />} />
          <Route index path="/privacy-policy" element={<Privacy />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
