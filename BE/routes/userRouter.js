const router = require("express").Router();

const User = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");
const uploader = require("../middlewares/uploader");

router.get("/", authenticate, User.myDetails);
router.patch(
  "/update",
  authenticate,
  uploader.single("image"),
  User.updateMyDetails
);
router.patch("/change-password", authenticate, User.changeMyPassword);

router.get("/my-courses", authenticate, User.getMyCourses);
router.get("/my-courses/:courseId", authenticate, User.openCourse);

module.exports = router;
