const express = require("express");

const checkAuth = require("../middleware/check-auth");
var postController = require("../controllers/post");

const router = express.Router();
const getImageFileMiddleWare= require("../middleware/getImageFile");

router.post(
  "",
  checkAuth,
  getImageFileMiddleWare,
  postController.createPost
);

router.put(
  "/:id",
  checkAuth,
  getImageFileMiddleWare,
  postController.UpdatePost
);

router.get("", postController.getAllPost);

router.get("/:id",postController.getPost);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
