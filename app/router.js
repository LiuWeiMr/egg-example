'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/user-mysql/:id', controller.user.info);
    router.post('/user-mysql', controller.user.create);
    router.put('/user-mysql/:id', controller.user.update);
    router.del('/user-mysql/:id', controller.user.delete);
    router.get('/computer-redis/:cLogo', controller.computer.info);
    router.post('/computer-redis', controller.computer.create);
    router.put('/computer-redis', controller.computer.create);
    router.del('/computer-redis/:cLogo', controller.computer.delete);
    router.get('/commodity-memcached/:cid', controller.commodity.info);
    router.post('/commodity-memcached', controller.commodity.create);
    router.put('/commodity-memcached', controller.commodity.create);
    router.del('/commodity-memcached/:cid', controller.commodity.delete);
    router.get('/student-mongo/:id', controller.student.info);
    router.post('/student-mongo', controller.student.create);
    router.put('/student-mongo/:id', controller.student.update);
    router.del('/student-mongo/:id', controller.student.delete);
    router.get('/message-kafka', controller.message.find);
    router.get('/ninja/api/conduct/rpc/common/lefit-workflow/com.lefit.issue.api.front.NpsReportApi/exportExcel', controller.student.info);
};
