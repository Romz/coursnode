'use strict';

module.exports = function(Test) {

  Test.observe("before save", async (ctx) => {
    ctx.instance.accountId = ctx.options.accessToken.userId;
    //ctx.instance.updated = new Date();
  });

  Test.observe("loaded", async (ctx) => {
    ctx.data.coucou = "test";
    //next();
  });
};
