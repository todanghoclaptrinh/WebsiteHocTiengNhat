import { RouteObject, Navigate } from 'react-router-dom';
import AdminLayout from '../components/layout/admin/AdminLayout';
import PrivateRoute from './PrivateRoute';

// Import Pages
import Overview from '../pages/admin/Dashboard/Overview';
// import AutoGenerator from '../pages/admin/ExamManagement/AutoGenerator';
// import ConfigExam from '../pages/admin/ExamManagement/ConfigExam';
// import ExamList from '../pages/admin/ExamManagement/ExamList';
// import LessonEditor from '../pages/admin/LessonManagement/LessonEditor';
// import LessonList from '../pages/admin/LessonManagement/LessonList';
// import TopicSection from '../pages/admin/LessonManagement/TopicSection';
// import QuestionIndex from '../pages/admin/QuestionBank/Index';
// import QuestionForm from '../pages/admin/QuestionBank/QuestionForm';
// import QuestionList from '../pages/admin/QuestionBank/QuestionList';
// import ReviewComments from '../pages/admin/QuestionBank/ReviewComments';
// import AIConfig from '../pages/admin/Settings/AIConfig';
// import LogAnalytics from '../pages/admin/Settings/LogAnalytics';
// import LearnerDetail from '../pages/admin/UserManagement/LearnerDetail';
// import LearnerList from '../pages/admin/UserManagement/LearnerList';

export const adminRoutes: RouteObject = {
  path: '/admin',
  element: <PrivateRoute role="admin"></PrivateRoute>,
  children: [
     {
      element: <AdminLayout />,
      children:
      [
    { index: true, element: <Navigate to="dashboard" replace /> },
    { path: 'dashboard', element: <Overview /> },
    // Exam
    // { path: 'exams/auto-generator', element: <AutoGenerator /> },
    // { path: 'exams/config', element: <ConfigExam /> },
    // { path: 'exams/list', element: <ExamList /> },
    // // Lesson
    // { path: 'lessons/editor', element: <LessonEditor /> },
    // { path: 'lessons/list', element: <LessonList /> },
    // { path: 'lessons/topics', element: <TopicSection /> },
    // // Question Bank
    // { path: 'questions', element: <QuestionIndex /> },
    // { path: 'questions/form', element: <QuestionForm /> },
    // { path: 'questions/list', element: <QuestionList /> },
    // { path: 'questions/reviews', element: <ReviewComments /> },
    // // Settings
    // { path: 'settings/ai', element: <AIConfig /> },
    // { path: 'settings/logs', element: <LogAnalytics /> },
    // // Users
    // { path: 'users', element: <LearnerList /> },
    // { path: 'users/:id', element: <LearnerDetail /> },
  ],
}
  ],
};