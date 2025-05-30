const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddlewar");
const upload = require("../middleware/uplaod");

const {
  createProduct,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts,
  getProduct,
  getAllProducts,
  getPaginatedProducts,
  filterProducts,
  searchByProductName,
  getTodayStats
} = require("../controllers/productController");

router.post("/", upload.array("images", 4), createProduct);

router.patch(
  "/:productId",
  authMiddleware(),
  upload.array("images", 4),
  updateProduct
);

router.delete("/many", authMiddleware(), deleteMultipleProducts);
router.get('/filter', authMiddleware(), filterProducts);
router.get('/search', authMiddleware(), searchByProductName);

router.get("/paginated", authMiddleware(), getPaginatedProducts);
router.delete("/:productId", authMiddleware(), deleteProduct);

router.get("/:productId", authMiddleware(), getProduct);

router.get("/", authMiddleware(), getAllProducts);
router.get('/stats/today', getTodayStats);

module.exports = router;
