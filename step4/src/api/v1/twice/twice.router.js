/**
 * Created by sam on 2017. 7. 16..
 */
const express = require('express');
const router = express.Router();

const twiceCtrl = require('./twice.controller');

// Twice 목록 가져오기
router.get('/', twiceCtrl.index);

// Twice 멤버 데이터 가져오기
router.get('/:memberName', twiceCtrl.show);

// Twice 멤버 추가
router.post('/', twiceCtrl.create);

router.delete('/:id', twiceCtrl.destroy);

module.exports = router;