import Vue from 'vue'
import VueRouter from 'vue-router'
import ClaimDetails from '../views/ClaimDetails.vue'
import AddAssessment from "../views/AddAssessment";
import AssessmentSheet from '../views/AssessmentSheet'
import AssessmentDetails from "../views/AssessmentDetails";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: ClaimDetails,
    component: ClaimDetails,
  },
  {
    path: "/add",
    name: AddAssessment,
    component: AddAssessment,
  },
  {
    path: "/assessmentSheet",
    name: AssessmentSheet,
    component: AssessmentSheet,
  },
  {
    path: "/assessmentDetails",
    name: AssessmentDetails,
    component: AssessmentDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
