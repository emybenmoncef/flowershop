const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.addbouquet);
router.get("/:id", itemController.getById)
router.put("/:id", itemController.updatebouquet);
router.delete("/:id",itemController.popbouquet);
module.exports = router;
