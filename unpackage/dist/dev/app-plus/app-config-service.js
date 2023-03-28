
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"爱佳装","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"知佳装","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.7.3","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#32B0B5","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","list":[{"text":"首页","pagePath":"pages/index/index"},{"text":"VR","pagePath":"pages/VR/VR"},{"text":"消息","pagePath":"pages/news/news"},{"text":"我的","pagePath":"pages/main/main"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"titleNView":false,"navigationBar":{"titleText":"首页","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/VR/VR","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"titleNView":false,"navigationBar":{"titleText":"VR","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/news/news","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"titleNView":false,"navigationBar":{"titleText":"消息","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/main/main","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"titleNView":false,"navigationBar":{"titleText":"我的","type":"default","style":"custom"},"isNVue":false}},{"path":"pages/subpages/login/testLogin","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"测试登录","type":"default"},"isNVue":false}},{"path":"pages/subpages/login/login","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"登录","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  