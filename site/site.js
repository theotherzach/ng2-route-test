;(function () {
  "use strict"
  var Router = angular.router.Router,
    RootRouter = angular.router.RootRouter,
    Pipeline = angular.router.Pipeline,
    RouterOutlet = angular.router.RouterOutlet,
    RouteConfig = angular.router.RouteConfig,
    Location = angular.router.Location,
    bind = angular.bind

  window.SiteComponent = SiteComponent
  function SiteComponent(router, location) {
    // window.rconfig = router({path: '/home', component: Home})
    console.log('SiteComponent', arguments)
    router.config({path: '/home', component: Home, as: 'home'})
    this.message = "I'm the parent";
    console.trace(router, location)
    window.siteComponent = this
  }


  SiteComponent.parameters = [[Router], [Location]]

  SiteComponent.annotations = [
    new angular.ComponentAnnotation({
      selector: "site",
      injectables: [Router]
    }),
    new angular.ViewAnnotation({
      templateUrl: 'site/site.html',
      directives: [
        HeaderComponent,
        FooterComponent,
        angular.router.RouterLink,
        RouterOutlet]
    })
  ];

  document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(SiteComponent, [
      angular.router.routerInjectables
    ]);
  });
}())
