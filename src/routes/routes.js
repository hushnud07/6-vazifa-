import groupRouter from "./group.Routes.js";
import studentRouter from "./student.Routes.js";

const Routes = () => {
  return [studentRouter, groupRouter];
};

export default Routes;
