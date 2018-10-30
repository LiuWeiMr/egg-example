
module.exports = app => {

    console.log("starting");
    app.beforeStart(async () => {
        console.log("started");


    // 也可以通过以下方式来调用 Service
    // const ctx = app.createAnonymousContext();
    // app.cities = await ctx.service.cities.load();
});
};