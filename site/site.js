function SiteComponent(router) {
  console.log(router)
  this.message = "I'm the parent";
}
SiteComponent.parameters = [[angular.router.RouteConfig]]
SiteComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: "site",
    injectables: [angular.router.RouteConfig]
  }),
  new angular.ViewAnnotation({
    templateUrl: 'site/site.html',
    directives: [HeaderComponent, FooterComponent]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(SiteComponent);
});
